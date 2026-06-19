"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function SilkMeshCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let width = container.clientWidth
    let height = container.clientHeight

    // 1. Scene Setup
    const scene = new THREE.Scene()

    // 2. Camera Setup (Positioned slightly high, looking down over the ribbons)
    const camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 100)
    camera.position.set(0, 2.8, 9.5)
    camera.lookAt(0, -0.75, 0) // Look slightly lower since ribbons moved down
    cameraRef.current = camera

    // 3. WebGL Renderer Setup (Alpha: true, antialiasing, screen blending)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // 4. Geometries
    // 4.1 Ultra-smooth geometry for the solid translucent silk surface
    const surfaceGeometry = new THREE.PlaneGeometry(28, 1.0, 140, 12)
    // 4.2 Lower resolution geometry for the points overlay (reduces dot density)
    const pointsGeometry = new THREE.PlaneGeometry(28, 1.0, 60, 4)

    // 5. Shared Ribbon Shaders
    const ribbonVertexShader = `
      uniform float uTime;
      uniform float uPhase;
      uniform float uWaveSpeed;
      uniform float uWaveAmp;

      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      varying float vPositionX;

      // Vertical elevation equation: curves upward at the sides, dips down in the center
      float getElevation(vec2 p) {
        float x = p.x;
        float y = p.y;
        float time = uTime * uWaveSpeed + uPhase;

        // Curved lift: dips low in the center (x=0) and rises high at the sides (x=±14)
        float lift = pow(abs(x) * 0.14, 2.2) * 1.3;

        // Wave deformations
        float w1 = sin(x * 0.28 + time) * cos(y * 1.5 + time * 0.6) * 0.65;
        float w2 = sin(x * 0.65 - time * 1.1) * 0.18;

        // Flatten center: keeps the center (|x| < 2.5) completely flat
        float ampScale = smoothstep(2.5, 9.0, abs(x));

        return (w1 + w2) * uWaveAmp * ampScale + lift * ampScale;
      }

      // Depth deformation equation: adds twisting curves along the Z-axis
      float getDepth(vec2 p) {
        float x = p.x;
        float time = uTime * uWaveSpeed + uPhase;
        return sin(x * 0.35 + time * 0.7) * 0.9;
      }

      // Displaced 3D point generator
      vec3 getDisplacedPosition(vec3 p) {
        float elevation = getElevation(p.xy);
        float depth = getDepth(p.xy);
        return vec3(p.x, p.y + elevation, p.z + depth);
      }

      void main() {
        vUv = uv;
        vPositionX = position.x;

        vec3 displacedPos = getDisplacedPosition(position);

        // Calculate accurate normals using finite differences
        float delta = 0.02;
        vec3 displacedPosX = getDisplacedPosition(position + vec3(delta, 0.0, 0.0));
        vec3 displacedPosY = getDisplacedPosition(position + vec3(0.0, delta, 0.0));

        vec3 tangent = displacedPosX - displacedPos;
        vec3 bitangent = displacedPosY - displacedPos;
        vec3 calculatedNormal = normalize(cross(tangent, bitangent));

        vNormal = normalize(normalMatrix * calculatedNormal);

        vec4 modelPosition = modelMatrix * vec4(displacedPos, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vViewPosition = -viewPosition.xyz;

        gl_Position = projectionMatrix * viewPosition;

        // Handle points sizing if compiled as a points cloud
        #ifdef IS_POINTS
          gl_PointSize = (1.5 / -viewPosition.z) * 8.0;
          gl_PointSize = clamp(gl_PointSize, 0.6, 2.0); // Smaller dots
        #endif
      }
    `

    // Ribbon Surface Fragment Shader (Translucent surface + brilliant Fresnel edge illumination)
    const ribbonSurfaceFragmentShader = `
      uniform vec3 uColor;
      uniform float uOpacity;

      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      varying float vPositionX;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);

        // Fresnel effect: intense sheen on grazing angles to look like silk fabric
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.5);

        // Bright edge glow term
        vec3 edgeGlow = vec3(1.0, 1.0, 1.1) * pow(fresnel, 2.2) * 1.6;

        // Base color mixed with white
        vec3 baseColor = mix(uColor, vec3(1.0, 1.0, 1.0), fresnel * 0.4);
        vec3 finalColor = baseColor + edgeGlow;

        // Fades near the center to keep content readability (wider fade gap)
        float fadeX = smoothstep(2.5, 9.0, abs(vPositionX));

        // Fade boundaries (top and bottom edges of the ribbon)
        float fadeY = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.75, vUv.y);

        // Increased opacity base to emphasize the translucent surface over dots
        float alpha = uOpacity * (fresnel * 1.25 + 0.15) * fadeX * fadeY;

        gl_FragColor = vec4(finalColor, alpha);
      }
    `

    // Ribbon Points Fragment Shader (Renders very subtle, low opacity dots)
    const ribbonPointsFragmentShader = `
      uniform float uOpacity;
      varying vec2 vUv;
      varying float vPositionX;

      void main() {
        // Circle layout
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float circle = smoothstep(0.5, 0.15, dist);

        // Fades near the center and ribbon edges
        float fadeX = smoothstep(2.5, 9.0, abs(vPositionX));
        float fadeY = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.75, vUv.y);

        // Very low opacity to keep points secondary
        float alpha = uOpacity * circle * fadeX * fadeY;

        gl_FragColor = vec4(0.95, 0.96, 1.0, alpha);
      }
    `

    // 6. Create Ribbon Layers (Solid Surface + Dotted Points Overlay for each config)
    // Shifted yOffsets 15-20% lower (by ~0.5 units) and stretched zOffsets for increased depth separation
    const ribbonConfigs = [
      {
        phase: 0.0,
        speed: 0.15,
        amp: 0.8,
        yOffset: -2.8,        // Was -2.3
        zOffset: -1.0,        // Mid-background
        rotY: -0.04,
        opacity: 0.20,        // Brighter surface visibility
        pointsOpacity: 0.12   // Faded points visibility
      },
      {
        phase: 1.6,
        speed: 0.12,
        amp: 0.6,
        yOffset: -3.1,        // Was -2.6
        zOffset: -3.2,        // Deep background
        rotY: 0.02,
        opacity: 0.14,
        pointsOpacity: 0.08
      },
      {
        phase: 3.2,
        speed: 0.18,
        amp: 0.55,
        yOffset: -2.5,        // Was -2.0
        zOffset: 1.2,         // Foreground
        rotY: -0.02,
        opacity: 0.16,
        pointsOpacity: 0.10
      },
      {
        phase: 4.8,
        speed: 0.10,
        amp: 0.7,
        yOffset: -3.4,        // Was -2.8
        zOffset: -5.0,        // Extreme background
        rotY: 0.05,
        opacity: 0.12,
        pointsOpacity: 0.06
      },
      {
        phase: 2.2,
        speed: 0.20,
        amp: 0.45,
        yOffset: -2.2,        // Was -1.8
        zOffset: 3.5,         // Extreme foreground
        rotY: -0.06,
        opacity: 0.10,
        pointsOpacity: 0.05
      }
    ]

    const group = new THREE.Group()
    const ribbonMeshes: { mesh: THREE.Mesh; material: THREE.ShaderMaterial }[] = []
    const ribbonPoints: { points: THREE.Points; material: THREE.ShaderMaterial }[] = []

    ribbonConfigs.forEach((config) => {
      // 6.1 Solid Surface Mesh (Using high-res geometry)
      const surfaceMat = new THREE.ShaderMaterial({
        vertexShader: ribbonVertexShader,
        fragmentShader: ribbonSurfaceFragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: new THREE.Color("#d0d4e5") },
          uOpacity: { value: config.opacity },
          uPhase: { value: config.phase },
          uWaveSpeed: { value: config.speed },
          uWaveAmp: { value: config.amp }
        },
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide
      })

      const surfaceMesh = new THREE.Mesh(surfaceGeometry, surfaceMat)
      surfaceMesh.rotation.x = -Math.PI * 0.45
      surfaceMesh.rotation.y = config.rotY
      surfaceMesh.position.set(0, config.yOffset, config.zOffset)
      group.add(surfaceMesh)
      ribbonMeshes.push({ mesh: surfaceMesh, material: surfaceMat })

      // 6.2 Points Grid Mesh (Using low-res geometry to reduce point density)
      const pointsMat = new THREE.ShaderMaterial({
        vertexShader: `#define IS_POINTS\n` + ribbonVertexShader,
        fragmentShader: ribbonPointsFragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uOpacity: { value: config.pointsOpacity },
          uPhase: { value: config.phase },
          uWaveSpeed: { value: config.speed },
          uWaveAmp: { value: config.amp }
        },
        transparent: true,
        depthWrite: false
      })

      const pointsMesh = new THREE.Points(pointsGeometry, pointsMat)
      pointsMesh.rotation.x = -Math.PI * 0.45
      pointsMesh.rotation.y = config.rotY
      pointsMesh.position.set(0, config.yOffset, config.zOffset)
      group.add(pointsMesh)
      ribbonPoints.push({ points: pointsMesh, material: pointsMat })
    })

    // 7. Background Floating Particle System Setup
    const particleCount = 180
    const particlePositions = new Float32Array(particleCount * 3)
    const particleRandoms = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 32
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 12 - 1.0
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2.0

      particleRandoms[i * 3] = Math.random()
      particleRandoms[i * 3 + 1] = Math.random() * 0.16 + 0.04
      particleRandoms[i * 3 + 2] = Math.random() * 0.6 + 0.4
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3))
    particleGeometry.setAttribute("aRandom", new THREE.BufferAttribute(particleRandoms, 3))

    const particleVertexShader = `
      uniform float uTime;
      attribute vec3 aRandom;
      varying float vAlpha;

      void main() {
        vec3 pos = position;

        float speed = aRandom.y;
        pos.y += uTime * speed;
        pos.x += sin(uTime * 0.12 + aRandom.x * 6.28) * 0.25;

        pos.y = mod(pos.y + 7.0, 12.0) - 7.0;

        vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        gl_Position = projectionMatrix * viewPosition;

        float boundaryFade = smoothstep(-7.0, -5.2, pos.y) * smoothstep(5.0, 3.2, pos.y);
        float sideFade = smoothstep(-16.0, -11.0, pos.x) * smoothstep(16.0, 11.0, pos.x);

        vAlpha = boundaryFade * sideFade * aRandom.z;

        gl_PointSize = (2.2 * aRandom.z / -viewPosition.z) * 11.0;
        gl_PointSize = clamp(gl_PointSize, 0.8, 3.5);
      }
    `

    const particleFragmentShader = `
      uniform float uOpacity;
      varying float vAlpha;

      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float circle = smoothstep(0.5, 0.15, dist);

        gl_FragColor = vec4(0.95, 0.96, 1.0, circle * vAlpha * uOpacity);
      }
    `

    const particleMat = new THREE.ShaderMaterial({
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 0.32 }
      },
      transparent: true,
      depthWrite: false
    })

    const particleSystem = new THREE.Points(particleGeometry, particleMat)
    group.add(particleSystem)

    scene.add(group)

    // 8. Clock & Animation Loop
    const clock = new THREE.Clock()
    let animationId: number

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Sync uniforms
      ribbonMeshes.forEach(({ material }) => {
        material.uniforms.uTime.value = elapsedTime
      })
      ribbonPoints.forEach(({ material }) => {
        material.uniforms.uTime.value = elapsedTime
      })
      particleMat.uniforms.uTime.value = elapsedTime

      // Very slow background sways of the entire ribbons group
      group.rotation.z = Math.sin(elapsedTime * 0.03) * 0.02

      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // 9. Window Resize Handler
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return
      width = container.clientWidth
      height = container.clientHeight

      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()

      rendererRef.current.setSize(width, height)
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener("resize", handleResize)

    // 10. Unmount & Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }

      surfaceGeometry.dispose()
      pointsGeometry.dispose()
      particleGeometry.dispose()

      ribbonMeshes.forEach(({ material }) => material.dispose())
      ribbonPoints.forEach(({ material }) => material.dispose())
      particleMat.dispose()
      
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full z-20 overflow-hidden pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
