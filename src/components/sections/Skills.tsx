import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Wrench, Brain, Palette } from 'lucide-react'
import { SKILLS, ANIMATION_VARIANTS } from '../../utils/constants'

interface SkillBarProps {
  skill: { name: string; level: number }
  delay: number
}

const SkillBar = ({ skill, delay }: SkillBarProps) => {
  const [progress, setProgress] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(skill.level)
      }, delay * 100)
      return () => clearTimeout(timer)
    }
  }, [inView, skill.level, delay])

  return (
    <motion.div
      ref={ref}
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: delay * 0.1, duration: 0.6 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-text-primary font-medium">{skill.name}</span>
        <span className="text-white font-bold">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-primary-black-secondary rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-white rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: delay * 0.1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </motion.div>
      </div>
    </motion.div>
  )
}

interface SkillCategoryProps {
  title: string
  icon: React.ReactNode
  skills: { name: string; level: number }[]
}

const SkillCategory = ({ title, icon, skills }: SkillCategoryProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      className="glass-simple p-8 rounded-xl simple-border hover-lift"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={ANIMATION_VARIANTS.fadeInUp}
    >
      <div className="flex items-center mb-6">
        <div className="text-text-primary mr-4">
          {icon}
        </div>
        <h3 className="text-2xl font-luxury font-bold text-text-primary">
          {title}
        </h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            delay={index}
          />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="skills" className="section-padding relative bg-gradient-to-b from-transparent to-primary-black-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          {/* Section Title */}
          <motion.div 
            className="text-center mb-16"
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            <h2 className="text-5xl md:text-6xl font-luxury font-bold text-gradient mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A comprehensive toolkit spanning artificial intelligence, full-stack development, 
              and creative technologies to build innovative solutions.
            </p>
          </motion.div>

          {/* Technical Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <SkillCategory
              title="Programming Languages"
              icon={<Code size={32} />}
              skills={SKILLS.technical.languages}
            />

            <SkillCategory
              title="Frameworks & Libraries"
              icon={<Wrench size={32} />}
              skills={SKILLS.technical.frameworks}
            />

            <SkillCategory
              title="Tools & Platforms"
              icon={<Brain size={32} />}
              skills={SKILLS.technical.tools}
            />

            <SkillCategory
              title="Specializations"
              icon={<Palette size={32} />}
              skills={SKILLS.technical.specializations}
            />
          </div>

          {/* Soft Skills & Creative Skills */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Soft Skills */}
            <motion.div
              className="glass-simple p-8 rounded-xl simple-border hover-lift"
              variants={ANIMATION_VARIANTS.fadeInLeft}
            >
              <h3 className="text-2xl font-luxury font-bold text-text-primary mb-6 flex items-center">
                <Palette className="mr-4" size={32} />
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {SKILLS.soft.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="bg-primary-black-secondary p-4 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0, 255, 0, 0.3)"
                    }}
                  >
                    <span className="text-text-primary font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Creative Skills */}
            <motion.div
              className="glass-simple p-8 rounded-xl simple-border hover-lift"
              variants={ANIMATION_VARIANTS.fadeInRight}
            >
              <h3 className="text-2xl font-luxury font-bold text-text-primary mb-6 flex items-center">
                <Brain className="mr-4" size={32} />
                Creative Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {SKILLS.creative.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="bg-primary-black-secondary p-4 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)"
                    }}
                  >
                    <span className="text-text-primary font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
    </section>
  )
}

export default Skills
