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
    float spec = pow(max(dot(normal, halfDir), 0.0), 32.0);

    // Fade boundaries to blend smoothly at edges
    float fadeX = smoothstep(16.0, 12.0, abs(vPosition.x));
    float fadeY = smoothstep(14.0, 9.0, abs(vPosition.y));
    float boundaryFade = fadeX * fadeY;

    // Color gradient mixing base color, specular shimmer, and ambient shadows
    vec3 finalColor = mix(uBaseColor, uHighlightColor, diffuse);
    finalColor += vec3(0.65) * spec; // Specular shine matching luxury fabric highlights

    gl_FragColor = vec4(finalColor, boundaryFade * 0.15);
  }
`

export default function LiquidMesh() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let width = container.clientWidth
    let height = container.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
    camera.position.set(0, -6.0, 9.5)
    camera.lookAt(0, 0.8, 0)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const geometry = new THREE.PlaneGeometry(35, 30, 80, 60)

    const uniforms = {
      uTime: { value: 0 },
      uBaseColor: { value: new THREE.Color("#0c0c0e") },
      uHighlightColor: { value: new THREE.Color("#2c2e35") }
    }

    const solidMaterial = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide
    })

    const solidMesh = new THREE.Mesh(geometry, solidMaterial)
    solidMesh.rotation.x = -Math.PI / 2.8
    scene.add(solidMesh)

    const wireframeMaterial = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        uniform float uTime;

        void main() {
          float fadeX = smoothstep(16.0, 12.0, abs(vPosition.x));
          float fadeY = smoothstep(14.0, 9.0, abs(vPosition.y));
          gl_FragColor = vec4(0.4, 0.4, 0.4, fadeX * fadeY * 0.08);
        }
      `,
      uniforms,
      transparent: true,
      wireframe: true,
      depthWrite: false,
      side: THREE.DoubleSide
    })

    const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial)
    wireframeMesh.rotation.x = -Math.PI / 2.8
    wireframeMesh.position.z = 0.01
    scene.add(wireframeMesh)

    const handleResize = () => {
      if (!container) return
      width = container.clientWidth
      height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener("resize", handleResize)

    let animationId: number
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()
      uniforms.uTime.value = elapsedTime
      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
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