import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticCursor from './components/animations/MagneticCursor'
import AuroraBackground from './components/three/AuroraBackground'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Hide the loading screen from HTML
      const loadingScreen = document.querySelector('.loading-screen')
      if (loadingScreen) {
        loadingScreen.classList.add('hidden')
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App relative min-h-screen bg-primary-black overflow-x-hidden">
      {/* Magnetic Cursor */}
      <MagneticCursor />
      
      {/* Aurora Background */}
      <AuroraBackground />
      
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-black to-primary-black-secondary"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              className="flex flex-col items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Modern Interactive Loading Animation */}
              <div className="relative">
                {/* Outer rotating ring */}
                <motion.div
                  className="w-32 h-32 border-4 border-transparent border-t-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Middle rotating ring */}
                <motion.div
                  className="absolute inset-2 w-28 h-28 border-4 border-transparent border-r-gray-300 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner pulsing circle */}
                <motion.div
                  className="absolute inset-6 w-20 h-20 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Center dot */}
                <motion.div
                  className="absolute inset-12 w-8 h-8 bg-black rounded-full"
                  animate={{
                    scale: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Loading dots */}
              <div className="flex space-x-2 mt-8">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-3 h-3 bg-white rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* Hero Section */}
            <Hero />
            
            {/* About Section */}
            <About />
            
            {/* Skills Section */}
            <Skills />
            
            {/* Projects Section */}
            <Projects />
            
            {/* Contact Section */}
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
