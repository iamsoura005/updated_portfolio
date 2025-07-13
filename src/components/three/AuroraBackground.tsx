import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Aurora Particle System Component
const AuroraParticles = () => {
  const pointsRef = useRef<THREE.Points>(null)
  const particleCount = 3000
  
  // Generate particle positions
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)
  
  const auroraColors = [
    new THREE.Color(0x00ff00), // Neon green
    new THREE.Color(0xffffff), // White
    new THREE.Color(0x39ff14)  // Bright neon green
  ]
  
  for (let i = 0; i < particleCount; i++) {
    // Spread particles across the screen
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    
    // Assign random aurora colors
    const color = auroraColors[Math.floor(Math.random() * auroraColors.length)]
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime()
      
      // Animate particles with wave motion
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        
        // Create wave motion
        positions[i3 + 1] += Math.sin(time * 0.5 + positions[i3] * 0.1) * 0.002
        positions[i3] += Math.cos(time * 0.3 + positions[i3 + 1] * 0.1) * 0.001
        
        // Reset particles that go too far
        if (positions[i3 + 1] > 10) positions[i3 + 1] = -10
        if (positions[i3] > 10) positions[i3] = -10
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true
      
      // Rotate the entire particle system slowly
      pointsRef.current.rotation.y = time * 0.05
      pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} colors={colors}>
      <PointMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

// Aurora Waves Component
const AuroraWaves = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()

      // Animate the aurora waves
      meshRef.current.rotation.z = time * 0.1
      const material = meshRef.current.material as THREE.MeshBasicMaterial
      material.opacity = 0.1 + Math.sin(time * 0.5) * 0.05
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[30, 30, 50, 50]} />
      <meshBasicMaterial
        color="#00ff00"
        transparent
        opacity={0.1}
        wireframe
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}

// Floating Orbs Component
const FloatingOrbs = () => {
  const orbsRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (orbsRef.current) {
      const time = state.clock.getElapsedTime()
      
      orbsRef.current.children.forEach((orb, index) => {
        orb.position.y = Math.sin(time * 0.5 + index) * 2
        orb.position.x = Math.cos(time * 0.3 + index) * 3
        orb.rotation.x = time * 0.2
        orb.rotation.y = time * 0.1
      })
    }
  })

  const orbs = []
  for (let i = 0; i < 5; i++) {
    orbs.push(
      <mesh key={i} position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 5 - 2.5]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial
          color={i % 3 === 0 ? "#00ff00" : i % 3 === 1 ? "#ffffff" : "#39ff14"}
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    )
  }

  return <group ref={orbsRef}>{orbs}</group>
}

// Main Aurora Background Component
const AuroraBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Hide default cursor on canvas
    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'none'
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        {/* Ambient lighting */}
        <ambientLight intensity={0.2} />
        
        {/* Aurora Particles */}
        <AuroraParticles />
        
        {/* Aurora Waves */}
        <AuroraWaves />
        
        {/* Floating Orbs */}
        <FloatingOrbs />
        
        {/* Additional atmospheric effects */}
        <fog attach="fog" args={['#0a0a0a', 5, 15]} />
      </Canvas>
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 255, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(57, 255, 20, 0.05) 0%, transparent 50%)
          `
        }}
      />
    </div>
  )
}

export default AuroraBackground
