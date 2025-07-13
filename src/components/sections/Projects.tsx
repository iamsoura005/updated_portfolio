import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Shield, Eye, BarChart3 } from 'lucide-react'
import { PROJECTS, ANIMATION_VARIANTS } from '../../utils/constants'

interface ProjectCardProps {
  project: typeof PROJECTS[0]
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'IoT + ML':
        return <Shield size={32} className="text-neon-green" />
      case 'AI/ML':
        return <Eye size={32} className="text-text-primary" />
      case 'Data Science':
        return <BarChart3 size={32} className="text-neon-green" />
      default:
        return <Shield size={32} className="text-neon-green" />
    }
  }

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={ANIMATION_VARIANTS.fadeInUp}
      transition={{ delay: index * 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="glass-simple p-8 rounded-2xl simple-border h-full cursor-pointer hover-lift"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        {/* Project Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center">
            {getProjectIcon(project.category)}
            <div className="ml-4">
              <h3 className="text-2xl font-luxury font-bold text-text-primary mb-1">
                {project.title}
              </h3>
              <p className="text-neon-green font-medium">{project.subtitle}</p>
            </div>
          </div>
          
          <span className="bg-primary-black-secondary text-text-primary px-3 py-1 rounded-full text-sm font-semibold">
            {project.category}
          </span>
        </div>

        {/* Project Description */}
        <p className="text-text-secondary leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-text-primary font-semibold mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {project.features.map((feature, featureIndex) => (
              <motion.li
                key={featureIndex}
                className="text-text-secondary text-sm flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
              >
                <span className="text-neon-green mr-2 mt-1">•</span>
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-text-primary font-semibold mb-3">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                className="bg-primary-black-secondary text-neon-green px-3 py-1 rounded-full text-xs font-medium border border-neon-green/30 hover:bg-neon-green/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: (index * 0.2) + (techIndex * 0.05) }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="mb-6">
          <div className="flex items-center">
            <span className="text-neon-green font-semibold mr-2">Impact:</span>
            <span className="text-text-secondary text-sm">{project.impact}</span>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex gap-4 pt-4 border-t border-primary-black-secondary">
          <motion.button
            className="flex items-center text-neon-green hover:text-text-primary transition-colors duration-300 cursor-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} className="mr-2" />
            <span className="font-medium">Code</span>
          </motion.button>

          <motion.button
            className="flex items-center text-text-primary hover:text-neon-green transition-colors duration-300 cursor-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={18} className="mr-2" />
            <span className="font-medium">Demo</span>
          </motion.button>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? "0 20px 60px rgba(0, 255, 0, 0.3)"
              : "0 10px 30px rgba(0, 255, 0, 0.1)"
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="projects" className="section-padding relative">
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
              Featured Projects
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Innovative solutions combining AI/ML, IoT, and full-stack development 
              to solve real-world problems and create meaningful impact.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            variants={ANIMATION_VARIANTS.fadeInUp}
          >
            <motion.button
              className="luxury-button cursor-hover px-8 py-4 text-lg font-semibold"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 255, 0, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open('https://github.com/iamsoura005', '_blank')
              }}
            >
              View All Projects on GitHub
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Projects
