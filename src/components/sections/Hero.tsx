import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { PERSONAL_INFO, ANIMATION_VARIANTS } from '../../utils/constants'
import { typewriterEffect } from '../../utils/animations'

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
      
      // Typewriter effect for subtitle
      if (subtitleRef.current) {
        setTimeout(() => {
          typewriterEffect(subtitleRef.current!, PERSONAL_INFO.title, 100)
        }, 1500)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById('about')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center z-10">
        {/* Main Name with Liquid Animation */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={ANIMATION_VARIANTS.liquidText}
          className="mb-8"
        >
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-luxury font-bold text-white leading-tight"
          >
            {PERSONAL_INFO.name}
          </h1>
        </motion.div>

        {/* Professional Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <p
            ref={subtitleRef}
            className="text-2xl md:text-3xl lg:text-4xl font-modern font-light text-white"
          >
            {/* Text will be filled by typewriter effect */}
          </p>
        </motion.div>

        {/* Subtitle Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {PERSONAL_INFO.subtitle}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            className="luxury-button cursor-hover px-8 py-4 text-lg font-semibold"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 255, 0, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const projectsSection = document.getElementById('projects')
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            View My Work
          </motion.button>
          
          <motion.button
            className="border-2 border-text-primary text-text-primary px-8 py-4 text-lg font-semibold rounded-lg cursor-hover transition-all duration-300 hover:bg-text-primary hover:text-primary-black"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(255, 255, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            className="cursor-hover flex flex-col items-center text-text-secondary hover:text-neon-green transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm mb-2 font-modern">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-40 right-32 w-6 h-6 bg-text-primary rounded-full opacity-40"
        animate={{
          y: [0, 30, 0],
          x: [0, -10, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute bottom-32 left-32 w-3 h-3 bg-white rounded-full opacity-70"
        animate={{
          y: [0, -15, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Background Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%)
          `
        }}
      />
    </section>
  )
}

export default Hero
