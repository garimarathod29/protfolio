export const portfolioData = {
  personal: {
    name: 'Garima Rathod',
    shortName: 'Garima',
    roles: [
      'Full Stack MERN Developer',
      'React.js & Node.js Engineer',
      'Real-Time Systems & WebSockets',
      'Computer Science Graduate'
    ],
    status: 'Available for Full-time Roles & Contracts',
    location: 'Indore / Ujjain / Ratlam, M.P.',
    email: 'garimarathod05@gmail.com',
    phone: '+91 8815937569',
    phoneRaw: '8815937569',
    github: 'https://github.com/garima-rathod',
    linkedin: 'https://linkedin.com/in/garima-rathod',
    summary: 'Full Stack Developer with hands-on expertise in building scalable MERN stack applications using React.js, Node.js, Express.js, and MongoDB, with strong skills in API development, real-time systems, and responsive UI design.',
    yearsOfExperience: '1.5+',
    projectsCompleted: '6+ Live Commercial & Full-Stack Apps',
  },

  stats: [
    { label: 'Work Experience', value: '1.5+ Yrs', description: 'Full Stack & MERN Internships' },
    { label: 'Commercial Apps', value: '5+', description: 'Production platforms shipped' },
    { label: 'Flagship Projects', value: '3+', description: 'Full-stack MERN & AI suites' },
    { label: 'B.Tech CGPA', value: '7.56', description: 'Computer Science & Engineering' }
  ],

  // Real Commercial & Featured Projects (NO "Aass Pass")
  projects: [
    {
      id: 'atiko',
      title: 'Atiko',
      subtitle: 'AI-Powered Healthcare Ecosystem',
      category: 'Commercial MERN',
      badge: 'Live Client Platform',
      icon: '🩺',
      gradient: 'bg-indigo-600',
      description: 'Comprehensive multi-role healthcare platform supporting Male, Female, Caretaker, Family, Senior, Doctor, Admin, and Sub-admin users. Integrates intelligent AI health assistance, doctor consultations, calendar slot scheduling, and health history tracking.',
      features: [
        'Multi-role RBAC for 8 distinct user personas (Patients, Caretakers, Doctors, Admins)',
        'AI-driven health questionnaire and symptom assessment module',
        'Doctor scheduling, appointment slot management, and video consultation workflow',
        'Secure prescription tracking and digitized health history storage'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'Redux'],
      company: 'Acore IT Hub',
      metrics: '8 User Roles supported with end-to-end appointment lifecycle',
      liveUrl: 'https://atiko-healthcare.example.com',
      githubUrl: 'https://github.com/garimarathod05',
      heroImage: '/projects/atiko-hero.jpg'
    },
    {
      id: 'global-axis',
      title: 'Global Axis Internationals',
      subtitle: 'Modern Job Seeker & Recruitment Platform',
      category: 'Commercial MERN',
      badge: 'Recruitment SaaS',
      icon: '💼',
      gradient: 'bg-blue-600',
      description: 'Enterprise recruitment ecosystem similar to LinkedIn and Naukri. Empowers job seekers to discover vacancies, apply with tailored profiles, and track application states, while recruiters manage job postings and hiring workflows.',
      features: [
        'Job search and multi-criteria filtering (location, salary, experience, tech stack)',
        'Candidate profile builder with resume upload and portfolio linking',
        'Recruiter dashboard for posting vacancies, review queues, and applicant tracking (ATS)',
        'Automated email notifications and status update workflows'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Tailwind CSS', 'JWT'],
      company: 'Acore IT Hub',
      metrics: 'Dual portal for applicants and recruiters with full ATS workflow',
      liveUrl: 'https://globalaxis-jobs.example.com',
      githubUrl: 'https://github.com/garimarathod05',
      heroImage: '/projects/global-axis-hero.jpg'
    },
    {
      id: 'jhatpat',
      title: 'Jhatpat',
      subtitle: 'Blinkit-Style Quick Commerce Platform',
      category: 'Commercial MERN',
      badge: 'Quick Commerce',
      icon: '⚡',
      gradient: 'bg-amber-600',
      description: 'Ultra-fast instant grocery and product delivery application. Local merchants register their stores and manage inventories, while consumers browse nearby shops, add items to cart, and enjoy smooth checkout with live order tracking.',
      features: [
        'Merchant onboarding portal for inventory, pricing, and order fulfillment',
        'Geo-aware nearby shop discovery with live product availability',
        'Persistent cart with real-time bill breakdown and Razorpay payment gateway',
        'Live order status tracking from preparation to doorstep delivery'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Socket.io', 'Tailwind CSS'],
      company: 'Acore IT Hub',
      metrics: 'Real-time order state updates via Socket.io with Razorpay checkout',
      liveUrl: 'https://jhatpat-delivery.example.com',
      githubUrl: 'https://github.com/garimarathod05',
      heroImage: '/projects/jhatpat-hero.jpg'
    },
    {
      id: 'prescripto',
      title: 'Prescripto',
      subtitle: 'Full-Featured Doctor Appointment Platform',
      category: 'Personal Project',
      badge: 'Healthcare Suite',
      icon: '🏥',
      gradient: 'bg-teal-600',
      description: 'Comprehensive doctor appointment scheduling platform featuring patient, doctor, and admin panels. Facilitates seamless booking, slot availability checks, appointment cancellations, and clinical schedule management.',
      features: [
        'Three-tier authentication for Patients, Certified Doctors, and Administrator',
        'Interactive calendar slot booking avoiding double-booking conflicts',
        'Patient history records with doctor remarks and prescription notes',
        'Responsive UI tailored for desktop consultations and mobile booking'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
      company: 'Project Experience',
      metrics: 'Zero slot collisions with atomic MongoDB transaction updates',
      liveUrl: 'https://prescripto-health.example.com',
      githubUrl: 'https://github.com/garimarathod05',
      heroImage: '/projects/prescripto-hero.jpg'
    },
    {
      id: 'imagify',
      title: 'Imagify',
      subtitle: 'AI-Powered Text-to-Image Creation Studio',
      category: 'Personal Project',
      badge: 'AI Generation',
      icon: '🎨',
      gradient: 'bg-purple-600',
      description: 'AI-powered web application that turns imaginative natural language text prompts into high-resolution images, delivering a smooth, snappy, and interactive creative experience.',
      features: [
        'Instant AI image generation from descriptive text prompts',
        'Interactive preview gallery with high-speed download in PNG formats',
        'Prompt history storage with user favorite bookmarking',
        'Modern responsive UI with glassmorphism and real-time generation indicators'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'AI APIs', 'MongoDB', 'Tailwind CSS'],
      company: 'Project Experience',
      metrics: 'Smooth user interface with instant prompt-to-image preview flow',
      liveUrl: 'https://imagify-studio.example.com',
      githubUrl: 'https://github.com/garimarathod05',
      heroImage: '/projects/imagify-hero.jpg'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Platform',
      subtitle: 'Complete Full-Stack Buying & Selling Suite',
      category: 'Personal Project',
      badge: 'E-Commerce',
      icon: '🛒',
      gradient: 'bg-emerald-600',
      description: 'Complete e-commerce web platform engineered with secure user authentication, product catalog management, persistent cart state, order processing, and checkout flow.',
      features: [
        'User registration and session authorization via secure JWT tokens',
        'Product search, categorization, and stock level display',
        'Interactive cart with quantity controls and instant total recalculation',
        'Order placement confirmation and user order history dashboard'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Redux'],
      company: 'Project Experience',
      metrics: 'Full buying workflow from product selection to checkout completion',
      liveUrl: 'https://ecommerce-store.example.com',
      githubUrl: 'https://github.com/garimarathod05',
      heroImage: '/projects/ecommerce-hero.jpg'
    }
  ],

  skillCategories: [
    {
      id: 'frameworks',
      name: 'Frameworks & Libraries',
      description: 'Modern component libraries and server frameworks',
      skills: [
        { name: 'React.js', level: 'Core Expertise', type: 'Frontend', color: '#61DAFB' },
        { name: 'Node.js', level: 'Core Expertise', type: 'Backend', color: '#339933' },
        { name: 'Express.js', level: 'Core Expertise', type: 'Backend', color: '#111827' },
        { name: 'Tailwind CSS', level: 'Advanced', type: 'UI / Styling', color: '#06B6D4' },
        { name: 'Redux', level: 'Advanced', type: 'State Management', color: '#764ABC' },
        { name: 'Socket.io', level: 'Proficient', type: 'Real-time', color: '#010101' }
      ]
    },
    {
      id: 'languages',
      name: 'Programming Languages',
      description: 'Core programming and scripting languages',
      skills: [
        { name: 'JavaScript', level: 'Proficient', type: 'Frontend & Backend', color: '#F7DF1E' },
        { name: 'TypeScript', level: 'Proficient', type: 'Typed JS', color: '#3178C6' },
        { name: 'Java', level: 'Proficient', type: 'OOP & Systems', color: '#007396' },
        { name: 'C++', level: 'Academic & Logic', type: 'Algorithms', color: '#00599C' },
        { name: 'HTML & CSS', level: 'Mastery', type: 'Markup & Styles', color: '#E34F26' }
      ]
    },
    {
      id: 'databases',
      name: 'Databases & Storage',
      description: 'NoSQL document stores and relational databases',
      skills: [
        { name: 'MongoDB', level: 'Core Expertise', type: 'NoSQL Database', color: '#47A248' },
        { name: 'SQL', level: 'Proficient', type: 'Relational DB', color: '#00758F' },
        { name: 'Firebase', level: 'Proficient', type: 'Cloud BaaS', color: '#FFCA28' }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & DevOps',
      description: 'Version control, API testing, and payment infrastructure',
      skills: [
        { name: 'Git', level: 'Advanced', type: 'Version Control', color: '#F05032' },
        { name: 'GitHub', level: 'Advanced', type: 'Collaboration', color: '#181717' },
        { name: 'Postman', level: 'Advanced', type: 'API Testing', color: '#FF6C37' },
        { name: 'Razorpay', level: 'Proficient', type: 'Payment Gateway', color: '#0C2340' }
      ]
    },
    {
      id: 'softskills',
      name: 'Professional Competencies',
      description: 'Communication and engineering practices',
      skills: [
        { name: 'Good Communication', level: 'Core Trait', type: 'Soft Skill', color: '#10B981' },
        { name: 'API Development', level: 'High Focus', type: 'Architecture', color: '#6366F1' },
        { name: 'Real-time Systems', level: 'High Focus', type: 'WebSockets', color: '#3B82F6' },
        { name: 'Responsive UI Design', level: 'High Focus', type: 'User Experience', color: '#EC4899' }
      ]
    }
  ],

  experience: [
    {
      role: 'Full Stack Developer',
      company: 'ACORE IT HUB',
      type: 'Full-Time',
      location: 'Indore, M.P.',
      period: '22 Feb 2026 – Present',
      current: true,
      badge: 'Active Role',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Socket.io', 'Redux', 'Tailwind CSS', 'Razorpay'],
      summary: 'Developing production-grade enterprise web applications across healthcare, recruitment, and quick commerce domains.',
      projectsDelivered: [
        {
          name: 'Atiko – AI Healthcare Ecosystem',
          desc: 'Developed a multi-role healthcare platform for Male, Female, Caretaker, Family, Senior, Doctor, Admin & Sub-admin users with AI features, doctor consultations, appointment booking, and health management modules.'
        },
        {
          name: 'Global Axis Internationals – Job Seeker Platform',
          desc: 'Built a recruitment platform similar to LinkedIn/Naukri where job seekers apply for jobs and recruiters post/manage openings with profile management and hiring workflows.'
        },
        {
          name: 'Jhatpat – Quick Commerce Platform',
          desc: 'Created a Blinkit-style instant delivery application where shops can register themselves, manage products, and users can purchase items with smooth checkout flow.'
        }
      ]
    },
    {
      role: 'MERN INTERN',
      company: 'INDUS AI SOLUTION',
      type: 'Internship',
      location: 'Indore / Remote',
      period: '15 Jan 2025 – 15 Feb 2026',
      current: false,
      badge: 'Completed (1 Year)',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
      summary: 'Engineered core modules for smart inventory management and learning management systems, focusing on clean code, database queries, and responsive interfaces.',
      projectsDelivered: [
        {
          name: 'Inventory Management System',
          desc: 'Created a smart inventory system for managing products, stock levels, sales records, and automated reporting.'
        },
        {
          name: 'Learning Management System',
          desc: 'Developed an online learning platform with course management, student enrollment, progress tracking, and secure user authentication.'
        }
      ]
    }
  ],

  education: [
    {
      degree: 'B-Tech: Computer Science and Engineering',
      institution: 'Mahakal Institute of Technology & Management',
      location: 'Ujjain, M.P.',
      period: 'Graduation Date: Jan 2025',
      grade: 'CGPA: 7.56',
      badge: 'Undergraduate Degree',
      highlights: ['Data Structures & Algorithms', 'Database Systems', 'Web Engineering', 'Operating Systems']
    },
    {
      degree: '12th PCM MP Board',
      institution: 'Shree Guru Tegh Bahadur Public School',
      location: 'Ratlam, M.P.',
      period: 'Completed in: Jan 2021',
      grade: '81.8%',
      badge: 'Senior Secondary',
      highlights: ['Physics', 'Chemistry', 'Mathematics']
    },
    {
      degree: '10th MP Board',
      institution: 'Shree Guru Tegh Bahadur Public School',
      location: 'Ratlam, M.P.',
      period: 'Completed in: Jan 2019',
      grade: '80.0%',
      badge: 'Secondary School',
      highlights: ['Science', 'Mathematics', 'General Academics']
    }
  ],

  terminalCommands: {
    help: 'Available commands: [summary], [experience], [projects], [skills], [education], [contact], [resume], [clear]',
    summary: 'Garima Rathod | Full Stack Developer with hands-on expertise in building scalable MERN stack applications using React.js, Node.js, Express.js, and MongoDB, with strong skills in API development, real-time systems, and responsive UI design.',
    experience: '1. Acore IT Hub (Full Stack Developer: 22 Feb 2026 – Present) | 2. Indus AI Solution (MERN Intern: 15 Jan 2025 – 15 Feb 2026)',
    projects: 'Acore IT Hub: Atiko (AI Healthcare), Global Axis (Recruitment), Jhatpat (Quick Commerce) | Personal: Prescripto, Imagify, E-Commerce',
    skills: 'Frameworks: React.js, Node.js, Express.js, Tailwind CSS, Redux, Socket.io | Languages: JavaScript, TypeScript, Java, C++, HTML, CSS | Databases: MongoDB, SQL, Firebase | Tools: Git, GitHub, Postman, Razorpay',
    education: 'B-Tech CS (CGPA 7.56, Mahakal Institute of Technology & Management, Ujjain, 2025) | 12th (81.8%, Ratlam, 2021) | 10th (80%, Ratlam, 2019)',
    contact: 'Phone: 8815937569 | Email: garimarathod05@gmail.com | Location: Indore / Ujjain / Ratlam, M.P.',
    resume: 'Opening executive resume view...',
    clear: 'Clearing terminal console...'
  }
};
