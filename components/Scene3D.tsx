'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function BarChart() {
  const groupRef = useRef<THREE.Group>(null)

  const bars = useMemo(() => {
    const data = [0.4, 0.6, 0.5, 0.8, 0.7, 0.9, 1.0, 0.85, 1.2, 1.4, 1.3, 1.6]
    return data.map((h, i) => ({
      height: h,
      x: (i - data.length / 2) * 0.35,
      targetHeight: h * 2.5,
    }))
  }, [])

  const meshRefs = useRef<(THREE.Mesh | null)[]>([])
  const glowRefs = useRef<(THREE.Mesh | null)[]>([])
  const progress = useRef(0)

  useFrame((state, delta) => {
    progress.current = Math.min(1, progress.current + delta * 0.4)
    const t = state.clock.elapsedTime

    bars.forEach((bar, i) => {
      const mesh = meshRefs.current[i]
      const glow = glowRefs.current[i]
      if (!mesh) return

      // Ease in the bars
      const eased = 1 - Math.pow(1 - progress.current, 3)
      const currentH = bar.targetHeight * eased
      mesh.scale.y = Math.max(0.001, currentH)
      mesh.position.y = (currentH * bar.targetHeight) / 2 - 1.5

      // Glow pulse on top
      if (glow) {
        glow.position.y = currentH * bar.targetHeight - 1.5 + 0.05
        const pulse = 0.5 + 0.5 * Math.sin(t * 2 + i * 0.8)
        ;(glow.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.5 + pulse * 0.5
      }
    })

    // Slow group rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      {bars.map((bar, i) => (
        <group key={i}>
          {/* Bar */}
          <mesh
            ref={(el) => { meshRefs.current[i] = el }}
            position={[bar.x, -1.5, 0]}
          >
            <boxGeometry args={[0.25, 1, 0.25]} />
            <meshStandardMaterial
              color="#22c55e"
              emissive="#22c55e"
              emissiveIntensity={0.2}
              transparent
              opacity={0.85}
            />
          </mesh>
          {/* Glowing top */}
          <mesh
            ref={(el) => { glowRefs.current[i] = el }}
            position={[bar.x, -1.5, 0]}
          >
            <boxGeometry args={[0.27, 0.06, 0.27]} />
            <meshStandardMaterial
              color="#4ade80"
              emissive="#4ade80"
              emissiveIntensity={1}
              transparent
              opacity={0.9}
            />
          </mesh>
        </group>
      ))}
      {/* Floor grid */}
      <mesh position={[0, -1.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 2]} />
        <meshStandardMaterial
          color="#22c55e"
          transparent
          opacity={0.04}
          wireframe
        />
      </mesh>
    </group>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 1, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#22c55e" />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#4ade80" />
        <BarChart />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  )
}
