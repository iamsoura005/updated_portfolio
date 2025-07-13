import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, GraduationCap, Award } from 'lucide-react'
import { PERSONAL_INFO, EDUCATION, ANIMATION_VARIANTS } from '../../utils/constants'
import { animateCounter } from '../../utils/animations'

const About = () => {
  const cgpaRef = useRef<HTMLSpanElement>(null)
  const cgpaCardRef = useRef<HTMLSpanElement>(null)
  const [cgpaAnimated, setCgpaAnimated] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView && !cgpaAnimated && cgpaRef.current && cgpaCardRef.current) {
      animateCounter(cgpaRef.current, 0, PERSONAL_INFO.cgpa, 2, 2)
      animateCounter(cgpaCardRef.current, 0, PERSONAL_INFO.cgpa, 2, 2)
      setCgpaAnimated(true)
    }
  }, [inView, cgpaAnimated])

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={ANIMATION_VARIANTS.staggerContainer}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Profile & Info */}
          <motion.div variants={ANIMATION_VARIANTS.fadeInLeft}>
            {/* Section Title */}
            <motion.h2 
              className="text-5xl md:text-6xl font-luxury font-bold text-gradient mb-8"
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              About Me
            </motion.h2>

            {/* Profile Description */}
            <motion.div 
              className="mb-8"
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Currently pursuing <span className="text-neon-green font-semibold">B.E. in Computer Science (AI & ML)</span> at
                UEM Kolkata with a CGPA of <span ref={cgpaRef} className="text-neon-green font-bold text-xl">0.00</span>/10.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Passionate about creating impactful solutions through the fusion of artificial intelligence, 
                machine learning, and full-stack development. Specializing in IoT integration, predictive 
                analytics, and mobile app development.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                My journey in technology is driven by curiosity and the desire to solve real-world problems 
                through innovative solutions that make a difference in people's lives.
              </p>
            </motion.div>

            {/* Key Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6 mb-8"
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              <div className="glass-simple p-6 rounded-lg simple-border hover-lift">
                <div className="flex items-center mb-3">
                  <GraduationCap className="text-white mr-3" size={24} />
                  <h3 className="text-white font-semibold">Education</h3>
                </div>
                <p className="text-gray-300">B.E. Computer Science</p>
                <p className="text-gray-300">(AI & ML)</p>
              </div>

              <div className="glass-simple p-6 rounded-lg simple-border hover-lift">
                <div className="flex items-center mb-3">
                  <Award className="text-white mr-3" size={24} />
                  <h3 className="text-white font-semibold">CGPA</h3>
                </div>
                <p className="text-gray-300">
                  <span ref={cgpaCardRef} className="text-2xl font-bold text-white">0.00</span>/10
                </p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div 
              className="flex items-center text-text-secondary"
              variants={ANIMATION_VARIANTS.fadeInUp}
            >
              <MapPin className="text-text-primary mr-3" size={20} />
              <span>{PERSONAL_INFO.location}</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Education Timeline */}
          <motion.div variants={ANIMATION_VARIANTS.fadeInRight}>
            <h3 className="text-3xl font-luxury font-bold text-text-primary mb-8">Educational Journey</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-neon-green"></div>
              
              {/* Timeline Items */}
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="relative flex items-start mb-12 last:mb-0"
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className={`
                    relative z-10 w-12 h-12 rounded-full flex items-center justify-center mr-6
                    ${edu.status === 'current'
                      ? 'bg-neon-green shadow-lg shadow-neon-green/50'
                      : 'bg-text-primary shadow-lg shadow-text-primary/50'
                    }
                  `}>
                    <GraduationCap size={20} className="text-primary-black" />
                  </div>
                  
                  {/* Timeline Content */}
                  <div className="glass-simple p-6 rounded-lg flex-1 simple-border hover-lift">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-text-primary">{edu.degree}</h4>
                      {edu.status === 'current' && (
                        <span className="bg-neon-green text-primary-black px-3 py-1 rounded-full text-sm font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <p className="text-neon-green font-medium mb-2">{edu.institution}</p>
                    <p className="text-text-secondary text-sm mb-3">{edu.duration}</p>
                    
                    {edu.cgpa && (
                      <p className="text-neon-green font-semibold mb-3">CGPA: {edu.cgpa}</p>
                    )}

                    {edu.percentage && (
                      <p className="text-neon-green font-semibold mb-3">Percentage: {edu.percentage}</p>
                    )}
                    
                    {edu.courses && (
                      <div>
                        <p className="text-text-secondary text-sm mb-2">Key Courses:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, courseIndex) => (
                            <span 
                              key={courseIndex}
                              className="bg-primary-black-secondary text-text-primary px-2 py-1 rounded text-xs"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  )
}

export default About
