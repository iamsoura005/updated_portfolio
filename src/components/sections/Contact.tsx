import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { PERSONAL_INFO, ANIMATION_VARIANTS } from '../../utils/constants'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      color: 'neon-green'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone}`,
      color: 'text-primary'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: PERSONAL_INFO.location,
      href: '#',
      color: 'neon-green'
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: `https://${PERSONAL_INFO.github}`,
      color: 'neon-green'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: `https://${PERSONAL_INFO.linkedin}`,
      color: 'text-primary'
    }
  ]

  return (
    <section id="contact" className="section-padding relative bg-gradient-to-b from-transparent to-primary-black-secondary">
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
              Let's Connect
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Ready to collaborate on innovative projects? Let's discuss how we can create 
              something amazing together using cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div variants={ANIMATION_VARIANTS.fadeInLeft}>
              <h3 className="text-3xl font-luxury font-bold text-text-primary mb-8">
                Get In Touch
              </h3>
              
              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className={`flex items-center p-4 glass-simple rounded-lg simple-border cursor-hover group transition-all duration-300 hover:scale-105 hover-lift`}
                    variants={ANIMATION_VARIANTS.fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      boxShadow: `0 10px 30px rgba(0, 255, 0, 0.3)`
                    }}
                  >
                    <div className={`text-neon-green mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-text-secondary text-sm">{info.label}</p>
                      <p className="text-text-primary font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 glass-simple rounded-lg simple-border cursor-hover text-white hover:scale-110 transition-all duration-300 hover-lift`}
                      variants={ANIMATION_VARIANTS.fadeInUp}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                      whileHover={{
                        boxShadow: `0 10px 30px rgba(0, 255, 0, 0.3)`
                      }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={ANIMATION_VARIANTS.fadeInRight}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-text-secondary text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-primary-black-secondary border border-neon-green/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-neon-green focus:ring-2 focus:ring-neon-green/20 transition-all duration-300 cursor-hover hover:border-neon-green/50"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-text-secondary text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-primary-black-secondary border border-text-primary/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-text-primary focus:ring-2 focus:ring-text-primary/20 transition-all duration-300 cursor-hover hover:border-text-primary/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-text-secondary text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-primary-black-secondary border border-neon-green/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-neon-green focus:ring-2 focus:ring-neon-green/20 transition-all duration-300 cursor-hover hover:border-neon-green/50"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-secondary text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-primary-black-secondary border border-neon-green/30 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-neon-green focus:ring-2 focus:ring-neon-green/20 transition-all duration-300 resize-none cursor-hover hover:border-neon-green/50"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full luxury-button cursor-hover px-8 py-4 text-lg font-semibold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{
                    scale: isSubmitting ? 1 : 1.02,
                    boxShadow: isSubmitting ? "none" : "0 10px 30px rgba(0, 255, 0, 0.4)"
                  }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-primary-black border-t-transparent rounded-full animate-spin mr-3"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send size={20} className="mr-3" />
                      Send Message
                    </div>
                  )}
                </motion.button>

                {/* Submit Status */}
                {submitStatus !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center p-4 rounded-lg ${
                      submitStatus === 'success'
                        ? 'bg-neon-green/20 text-neon-green'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {submitStatus === 'success' 
                      ? 'Message sent successfully! I\'ll get back to you soon.' 
                      : 'Failed to send message. Please try again.'}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Contact
