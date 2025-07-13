import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface MousePosition {
  x: number
  y: number
}

const MagneticCursor = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    // Add hover effects for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], .cursor-hover, input, textarea'
      )

      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', () => setIsHovering(true))
        element.addEventListener('mouseleave', () => setIsHovering(false))
      })

      return () => {
        interactiveElements.forEach((element) => {
          element.removeEventListener('mouseenter', () => setIsHovering(true))
          element.removeEventListener('mouseleave', () => setIsHovering(false))
        })
      }
    }

    // Initial setup
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    
    const cleanup = addHoverListeners()

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(() => {
      cleanup()
      addHoverListeners()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      cleanup()
      observer.disconnect()
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-mode-difference"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          mass: 0.5
        }}
        style={{
          width: '20px',
          height: '20px',
          background: isHovering
            ? 'radial-gradient(circle, var(--neon-green-bright) 0%, transparent 70%)'
            : 'radial-gradient(circle, var(--neon-green) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Cursor Trail */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.8
        }}
        style={{
          width: '50px',
          height: '50px',
          border: isHovering
            ? '2px solid rgba(57, 255, 20, 0.3)'
            : '2px solid rgba(0, 255, 0, 0.2)',
          borderRadius: '50%',
        }}
      />

      {/* Aurora Glow Effect */}
      <motion.div
        className="fixed pointer-events-none z-[9997]"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
          scale: isHovering ? 1.8 : 0.8,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 1
        }}
        style={{
          width: '80px',
          height: '80px',
          background: isHovering
            ? 'radial-gradient(circle, rgba(57, 255, 20, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(0, 255, 0, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(10px)',
        }}
      />
    </>
  )
}

export default MagneticCursor
