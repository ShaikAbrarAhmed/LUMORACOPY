"use client"

import React, { useEffect, useRef } from "react"
import * as THREE from "three"

const VERTEX_SHADER = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;

  // Extremely slow, calm multi-frequency wave displacement (silver silk ripples)
  float getDisplacement(vec2 pos, float time) {
    float d = 0.0;
    // Slow large wave folds (half of original speed)
    d += sin(pos.x * 0.12 + time * 0.04) * cos(pos.y * 0.10 + time * 0.03) * 1.5;
    // Medium flows
    d += sin(pos.y * 0.28 - time * 0.06 + pos.x * 0.08) * 0.55;
    // Fine details
    d += cos((pos.x + pos.y) * 0.5 - time * 0.09) * 0.22;
    return d;
  }

  void main() {
    vUv = uv;
    vec3 pos = position;
    pos.z = getDisplacement(pos.xy, uTime);
    vPosition = pos;

    // Recompute surface normal analytically for correct lighting
    float eps = 0.02;
    float hL = getDisplacement(pos.xy - vec2(eps, 0.0), uTime);
    float hR = getDisplacement(pos.xy + vec2(eps, 0.0), uTime);
    float hD = getDisplacement(pos.xy - vec2(0.0, eps), uTime);
    float hU = getDisplacement(pos.xy + vec2(0.0, eps), uTime);
    
    vec3 tangent = normalize(vec3(2.0 * eps, 0.0, hR - hL));
    vec3 bitangent = normalize(vec3(0.0, 2.0 * eps, hU - hD));
    vNormal = normalize(cross(tangent, bitangent));

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const FRAGMENT_SHADER = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform float uTime;
  uniform vec3 uBaseColor;
  uniform vec3 uHighlightColor;

  void main() {
    vec3 normal = normalize(vNormal);
    
    // Light source coming from top-right
    vec3 lightDir = normalize(vec3(0.3, 0.7, 1.3));
    float diffuse = max(dot(normal, lightDir), 0.0);
    
    // Specular highlight (Blinn-Phong) for silky finish
    vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfDir), 0.0), 36.0);
    
    // Fresnel reflection for glowing wave rims
    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
    
    // Height factor mapping
    float heightFactor = clamp((vPosition.z + 2.0) / 4.0, 0.0, 1.0);
    
    // Blend base and highlight colors softly (toned down highlight weight)
    vec3 color = mix(uBaseColor, uHighlightColor * 0.35, heightFactor * 0.4);
    
    // Add specular reflection highlights (Very faint to avoid bright highlights)
    color += vec3(1.0, 1.0, 1.0) * spec * 0.12;
    
    // Add Fresnel glow (Tuned down to exactly 0.06 as requested for soft atmospheric volumetric glow)
    color += vec3(1.0, 1.0, 1.0) * fresnel * 0.06;
    
    // Add extra subtle diffuse lighting response
    color += uHighlightColor * diffuse * 0.06;
    
    // Edge fading (fades to alpha 0 at borders to blend into darkness)
    // Asymmetric fading on Y-axis to keep the upper half of the hero clean and dark
    float fadeX = smoothstep(0.0, 0.22, vUv.x) * smoothstep(1.0, 0.78, vUv.x);
    float fadeY = smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.65, vUv.y);
    float edgeFade = fadeX * fadeY;
    
    // Output extremely low solid mesh opacity to remain ultra-subtle
    gl_FragColor = vec4(color, edgeFade * 0.10);
  }
`

const WIREFRAME_FRAGMENT_SHADER = `
  varying vec2 vUv;
  uniform vec3 uWireColor;

  void main() {
    // Edge fading for wireframe matching the solid mesh
    float fadeX = smoothstep(0.0, 0.22, vUv.x) * smoothstep(1.0, 0.78, vUv.x);
    float fadeY = smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.65, vUv.y);
    float edgeFade = fadeX * fadeY;
    
    // Wireframe opacity reduced to 0.02 to be barely visible, creating a soft grid texture
    gl_FragColor = vec4(uWireColor, edgeFade * 0.02);
  }
`

export default function LiquidMesh() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene & Camera setup
    const scene = new THREE.Scene()
    
    let width = container.clientWidth
    let height = container.clientHeight
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
    
    // Position camera looking slightly down over the bottom half
    camera.position.set(0, -6.0, 9.5)
    camera.lookAt(0, 0.8, 0)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Geometry creation (Subdivided plane)
    const geometry = new THREE.PlaneGeometry(36, 26, 160, 120)

    // Shared Uniforms (Graphite + Silver visual identity)
    const uniforms = {
      uTime: { value: 0 },
      uBaseColor: { value: new THREE.Color("#050505") },      // Matches background exactly
      uHighlightColor: { value: new THREE.Color("#CCCCCC") }, // Soft Silver-white
    }

    // Material 1: Liquid Solid Mesh
    const solidMaterial = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms: uniforms,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    })

    const solidMesh = new THREE.Mesh(geometry, solidMaterial)
    // Rotate plane backwards
    solidMesh.rotation.x = -Math.PI / 2.8
    scene.add(solidMesh)

    // Material 2: Sync Wireframe Mesh Overlay
    const wireframeMaterial = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: WIREFRAME_FRAGMENT_SHADER,
      uniforms: {
        uTime: uniforms.uTime,
        uWireColor: { value: new THREE.Color("#888888") }, // Deeper graphite-silver wireframe
      },
      transparent: true,
      wireframe: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    })

    const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial)
    // Rotate and offset wireframe slightly up to prevent z-fighting
    wireframeMesh.rotation.x = -Math.PI / 2.8
    wireframeMesh.position.z = 0.01
    scene.add(wireframeMesh)

    // Handle Resize
    const handleResize = () => {
      if (!container) return
      width = container.clientWidth
      height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener("resize", handleResize)

    // Animation Loop
    let animationId: number
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()
      uniforms.uTime.value = elapsedTime

      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      
      // Dispose materials and geometry
      geometry.dispose()
      solidMaterial.dispose()
      wireframeMaterial.dispose()
      renderer.dispose()
      
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
    />
  )
}
