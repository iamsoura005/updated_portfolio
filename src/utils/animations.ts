import { gsap } from 'gsap'

// GSAP Animation Utilities
export const animateOnScroll = (element: HTMLElement, animation: any) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(element, animation.from, animation.to)
          observer.unobserve(element)
        }
      })
    },
    { threshold: 0.1 }
  )
  
  observer.observe(element)
}

// Liquid Text Animation
export const liquidTextAnimation = {
  from: {
    opacity: 0,
    y: 100,
    filter: "blur(10px)",
    background: "linear-gradient(45deg, transparent, transparent)"
  },
  to: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    background: "linear-gradient(45deg, #64ffda, #bb86fc, #82b1ff)",
    duration: 1.5,
    ease: "power3.out"
  }
}

// Aurora Glow Animation
export const auroraGlowAnimation = {
  from: {
    boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)"
  },
  to: {
    boxShadow: "0 0 40px rgba(100, 255, 218, 0.8)",
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "power2.inOut"
  }
}

// Floating Animation
export const floatingAnimation = {
  from: {
    y: 0
  },
  to: {
    y: -20,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: "power2.inOut"
  }
}

// Magnetic Effect
export const createMagneticEffect = (element: HTMLElement, strength: number = 0.3) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength
    
    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: "power2.out"
    })
  }
  
  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    })
  }
  
  element.addEventListener('mousemove', handleMouseMove)
  element.addEventListener('mouseleave', handleMouseLeave)
  
  return () => {
    element.removeEventListener('mousemove', handleMouseMove)
    element.removeEventListener('mouseleave', handleMouseLeave)
  }
}

// Typewriter Effect
export const typewriterEffect = (element: HTMLElement, text: string, speed: number = 50) => {
  element.textContent = ''
  let i = 0
  
  const typeInterval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i)
      i++
    } else {
      clearInterval(typeInterval)
    }
  }, speed)
  
  return () => clearInterval(typeInterval)
}

// Counter Animation
export const animateCounter = (
  element: HTMLElement, 
  start: number, 
  end: number, 
  duration: number = 2,
  decimals: number = 0
) => {
  gsap.to({ value: start }, {
    value: end,
    duration,
    ease: "power2.out",
    onUpdate: function() {
      element.textContent = this.targets()[0].value.toFixed(decimals)
    }
  })
}

// Stagger Animation
export const staggerAnimation = (elements: NodeListOf<Element>, delay: number = 0.1) => {
  gsap.fromTo(elements, 
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: delay,
      ease: "power3.out"
    }
  )
}

// 3D Card Hover Effect
export const card3DHoverEffect = (card: HTMLElement) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const rotateX = (e.clientY - centerY) / 10
    const rotateY = (centerX - e.clientX) / 10
    
    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.3,
      ease: "power2.out"
    })
  }
  
  const handleMouseLeave = () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    })
  }
  
  card.addEventListener('mousemove', handleMouseMove)
  card.addEventListener('mouseleave', handleMouseLeave)
  
  return () => {
    card.removeEventListener('mousemove', handleMouseMove)
    card.removeEventListener('mouseleave', handleMouseLeave)
  }
}

// Parallax Scroll Effect
export const parallaxScroll = (element: HTMLElement, speed: number = 0.5) => {
  const handleScroll = () => {
    const scrolled = window.pageYOffset
    const yPos = -(scrolled * speed)
    
    gsap.set(element, {
      y: yPos
    })
  }
  
  window.addEventListener('scroll', handleScroll)
  
  return () => window.removeEventListener('scroll', handleScroll)
}

// Aurora Wave Animation
export const auroraWaveAnimation = (element: HTMLElement) => {
  const tl = gsap.timeline({ repeat: -1 })
  
  tl.to(element, {
    background: "linear-gradient(45deg, #64ffda, #bb86fc)",
    duration: 2,
    ease: "power2.inOut"
  })
  .to(element, {
    background: "linear-gradient(45deg, #bb86fc, #82b1ff)",
    duration: 2,
    ease: "power2.inOut"
  })
  .to(element, {
    background: "linear-gradient(45deg, #82b1ff, #64ffda)",
    duration: 2,
    ease: "power2.inOut"
  })
  
  return tl
}
