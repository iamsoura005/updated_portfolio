// Personal Information
export const PERSONAL_INFO = {
  name: "SOURASANTA DUTTA",
  title: "AI/ML Engineer & Full-Stack Developer",
  subtitle: "Innovating at the intersection of Artificial Intelligence and Web Development",
  email: "sourasantadutta@gmail.com",
  phone: "+91 7811035677",
  location: "Purba Bardhaman, West Bengal, India",
  linkedin: "linkedin.com/in/sourasanta-dutta-852345282",
  github: "github.com/iamsoura005",
  cgpa: 8.7,
  university: "University of Engineering and Management Kolkata",
  degree: "B.E. Computer Science (AI & ML)",
  duration: "July 2023 to Present"
}

// Skills Data
export const SKILLS = {
  technical: {
    languages: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 75 },
      { name: "C", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "MySQL", level: 75 }
    ],
    frameworks: [
      { name: "React JS", level: 85 },
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 80 },
      { name: "Node.js", level: 75 }
    ],
    tools: [
      { name: "VS Code", level: 95 },
      { name: "Google Colab", level: 90 },
      { name: "Jupyter", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Android Studio", level: 75 }
    ],
    specializations: [
      { name: "AI/ML", level: 80 },
      { name: "Data Analysis", level: 80 },
      { name: "IoT", level: 75 },
      { name: "Cryptography", level: 70 },
      { name: "Cybersecurity", level: 70 }
    ]
  },
  soft: [
    "UI Design",
    "Content Writing",
    "Social Media Management",
    "Project Management",
    "Team Leadership",
    "Problem Solving"
  ],
  creative: [
    "Cinematography",
    "Tabla Playing",
    "Creative Prototyping",
    "Digital Art",
    "Music Production"
  ]
}

// Projects Data
export const PROJECTS = [
  {
    id: 1,
    title: "Women Safety Project",
    subtitle: "IoT + ML + App Development",
    description: "Arduino and Machine Learning-based comprehensive safety solution for women and children with dual activation system and emergency response features.",
    features: [
      "Dual Activation: Button press or voice recognition ('Help' twice)",
      "Emergency Alerts: Live location to 10 contacts and nearest police station",
      "Auto-Call: Automatically calls nearest selected contact",
      "Real-time GPS tracking and SOS messaging"
    ],
    technologies: ["Arduino", "Machine Learning", "Mobile App Development", "IoT", "GPS", "Voice Recognition"],
    impact: "Women and child safety enhancement",
    category: "IoT + ML",
    image: "/projects/women-safety.jpg",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "AI Based Eye Disease Detection",
    subtitle: "Deep Learning + Medical AI",
    description: "Advanced deep learning model for comprehensive eye disease detection using fundus camera images with high accuracy classification.",
    features: [
      "Classifies 39 different eye conditions",
      "Detects Diabetic Retinopathy with 95% accuracy",
      "Glaucoma detection and staging",
      "Age-related Macular Degeneration analysis"
    ],
    technologies: ["Deep Learning", "Computer Vision", "TensorFlow", "Medical AI", "Image Processing", "CNN"],
    impact: "Healthcare automation and early disease detection",
    category: "AI/ML",
    image: "/projects/eye-detection.jpg",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Crime Detection & Hotspot Mapping",
    subtitle: "Predictive Analytics + Data Science",
    description: "Intelligent predictive analytics tool for forecasting crimes and identifying hotspots using machine learning algorithms.",
    features: [
      "Linear Regression for crime prediction",
      "K-Means clustering for hotspot identification",
      "Interactive data visualization dashboard",
      "Real-time crime pattern analysis"
    ],
    technologies: ["Python", "scikit-learn", "Data Visualization", "Pandas", "Seaborn", "Matplotlib"],
    impact: "Law enforcement assistance and crime prevention",
    category: "Data Science",
    image: "/projects/crime-mapping.jpg",
    demoUrl: "#",
    githubUrl: "#"
  }
]

// Education Timeline
export const EDUCATION = [
  {
    id: 1,
    institution: "University of Engineering and Management Kolkata",
    degree: "B.E. Computer Science (AI & ML)",
    duration: "July 2023 - Present",
    cgpa: "8.7/10",
    courses: ["Programming in C and Python", "Data Structures & Algorithms", "Computer Organization", "Artificial Intelligence", "Machine Learning", "Java Programming"],
    status: "current"
  },
  {
    id: 2,
    institution: "Burdwan Municipal High School",
    degree: "Higher Secondary (Class 12th)",
    duration: "2021 - 2023",
    percentage: "85%",
    stream: "Science",
    status: "completed"
  },
  {
    id: 3,
    institution: "Burdwan Municipal High School",
    degree: "Secondary (Class 10th)",
    duration: "2019 - 2021",
    percentage: "88.28%",
    status: "completed"
  }
]

// Hobbies and Interests
export const HOBBIES = [
  {
    name: "Reading Books",
    icon: "📚",
    description: "Exploring knowledge through literature and technical books"
  },
  {
    name: "Writing",
    icon: "✍️",
    description: "Content creation and technical writing"
  },
  {
    name: "Cinematography",
    icon: "🎬",
    description: "Visual storytelling and video production"
  },
  {
    name: "Tabla Playing",
    icon: "🥁",
    description: "Classical Indian percussion instrument"
  }
]

// Animation Variants
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  },
  liquidText: {
    hidden: {
      opacity: 0,
      y: 100,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  }
}
