export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc",
    avatar: "/api/placeholder/40/40",
    content:
      "P2M Solutions transformed our entire development workflow. Their AI-powered automation saved us 40% development time.",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Lead Developer",
    company: "InnovateLabs",
    avatar: "/api/placeholder/40/40",
    content:
      "The cloud infrastructure they built for us scales seamlessly. We've handled 10x traffic growth without issues.",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Product Manager",
    company: "DataVision",
    avatar: "/api/placeholder/40/40",
    content:
      "Their ML integration helped us launch predictive analytics 6 months ahead of schedule. Exceptional work.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder",
    company: "StartupX",
    avatar: "/api/placeholder/40/40",
    content:
      "P2M delivered a full-stack solution that perfectly matched our vision. Professional, fast, and innovative.",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Engineering Manager",
    company: "ScaleUp Co",
    avatar: "/api/placeholder/40/40",
    content:
      "Their DevOps expertise streamlined our deployment pipeline. Zero downtime migrations and robust monitoring.",
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "VP of Technology",
    company: "FutureTech",
    avatar: "/api/placeholder/40/40",
    content:
      "Outstanding API development and documentation. Integration was seamless across our entire tech stack.",
  },
];

export const services = [
  {
    id: 1,
    slug: "web-app-development",
    icon: "Code",
    image:
      "https://res.cloudinary.com/dnmqfgexi/image/upload/v1756669673/web-development_o9g5u3.jpg",
    title: "Web & App Development",
    description:
      "Full-stack web and mobile applications built with cutting-edge technologies and frameworks.",
    longDescription: `Our full-stack development expertise spans across multiple modern technology stacks:

    Frontend Excellence: We craft pixel-perfect, responsive interfaces using React.js and Next.js with TypeScript, delivering seamless user experiences with modern UI/UX principles.
    
    Backend Powerhouse: Our versatile backend solutions include:
    • Node.js/Express.js for high-performance, event-driven microservices
    • .NET Core for enterprise-grade applications with C# and Entity Framework
    • Python ecosystem (Django/FastAPI/Flask) for rapid development and AI integration
    
    Mobile Innovation: We excel in both native Android development using Kotlin/Java and cross-platform solutions with Flutter, ensuring optimal performance and native feel across all devices.
    
    API Development: RESTful and GraphQL APIs built with Node.js, .NET Core, or Python, following industry best practices for security, scalability, and documentation.`,
    features: [
      {
        title: "Full-Stack Development",
        description: "End-to-end solutions with modern frameworks",
        icon: "Code",
      },
      {
        title: "Mobile Development",
        description: "Cross-platform and native mobile apps",
        icon: "Smartphone",
      },
      {
        title: "API Development",
        description: "RESTful and GraphQL APIs",
        icon: "Database",
      },
    ],
    technologies: [
      // Frontend
      "React/Next.js",
      "TypeScript",
      "Redux/Context API",
      // Backend
      "Node.js/Express",
      ".NET Core 7.0",
      "Django/DRF",
      "FastAPI",
      "Flask",
      // Mobile
      "Flutter",
      "Android Native (Kotlin)",
      // Databases
      "PostgreSQL",
      "MongoDB",
      "Redis",
      // Cloud & Tools
      "AWS/Azure",
      "Docker",
      "GraphQL",
      "Socket.io",
    ],
    processSteps: [
      {
        title: "Discovery",
        description: "Requirements gathering and project planning",
      },
      {
        title: "Design",
        description: "UI/UX design and architecture planning",
      },
      {
        title: "Development",
        description: "Agile development with regular updates",
      },
      {
        title: "Deployment",
        description: "Testing and production deployment",
      },
    ],
    benefits: [
      "Faster Time-to-Market",
      "Scalable Architecture",
      "Modern User Experience",
      "Mobile-First Design",
    ],
    caseStudies: [
      {
        title: "E-commerce Platform",
        description:
          "Built a scalable e-commerce solution handling 10k+ daily users",
        metrics: ["50% faster loading times", "30% increase in conversions"],
      },
    ],
    pricing: [
      {
        tier: "Basic",
        price: "Starting at $5k",
        features: [
          "Single-page website",
          "Basic API integration",
          "3 months support",
        ],
      },
      {
        tier: "Professional",
        price: "Starting at $15k",
        features: [
          "Full-stack application",
          "Custom API development",
          "6 months support",
        ],
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: ["Complete solution", "Priority support", "Custom features"],
      },
    ],
    relatedServices: [2, 3, 4], // IDs of related services
  },
  {
    id: 2,
    slug: "ai-ml-integration",
    icon: "Brain",
    image:
      "https://res.cloudinary.com/dnmqfgexi/image/upload/v1756669842/steptodown.com453100_bwkq3q.jpg",
    title: "AI/ML Integration",
    description:
      "Intelligent features powered by machine learning, from predictive analytics to automated workflows.",
    longDescription: `Our AI/ML solutions harness cutting-edge technologies to deliver intelligent, scalable applications:

    Machine Learning Excellence: Custom ML model development using Python's robust ecosystem (TensorFlow, PyTorch, scikit-learn) for classification, regression, and clustering tasks.
    
    Deep Learning Innovation: State-of-the-art neural networks for computer vision and NLP tasks, leveraging transfer learning and custom architectures.
    
    Production-Ready AI: Containerized ML models deployed as microservices, with real-time processing capabilities and automated retraining pipelines.
    
    MLOps Best Practices: Continuous integration and deployment for ML models, with comprehensive monitoring and version control.`,
    features: [
      {
        title: "Deep Learning",
        description: "Neural networks and computer vision",
        icon: "Brain",
      },
      {
        title: "NLP Solutions",
        description: "Text analysis and language processing",
        icon: "MessageSquare",
      },
      {
        title: "Predictive Analytics",
        description: "Data-driven forecasting and insights",
        icon: "TrendingUp",
      },
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "NLTK",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Keras",
      "AWS SageMaker",
      "Azure ML",
    ],
    processSteps: [
      {
        title: "Consultation",
        description: "Understanding business needs and objectives",
      },
      {
        title: "Data Collection",
        description: "Gathering and preparing data for analysis",
      },
      {
        title: "Model Training",
        description: "Developing and training machine learning models",
      },
      {
        title: "Integration",
        description: "Integrating ML models into existing systems",
      },
    ],
    benefits: [
      "Enhanced Decision Making",
      "Increased Operational Efficiency",
      "Scalable AI Solutions",
      "Continuous Learning and Improvement",
    ],
    caseStudies: [
      {
        title: "Predictive Maintenance",
        description:
          "Implemented ML models that predict equipment failures before they occur.",
        metrics: [
          "25% reduction in maintenance costs",
          "40% increase in equipment uptime",
        ],
      },
    ],
    pricing: [
      {
        tier: "Basic",
        price: "Starting at $3k",
        features: ["Basic ML model", "Data analysis report", "1 month support"],
      },
      {
        tier: "Professional",
        price: "Starting at $10k",
        features: [
          "Custom ML model",
          "Integration support",
          "3 months support",
        ],
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: [
          "Comprehensive AI solution",
          "Dedicated support",
          "Custom features",
        ],
      },
    ],
    relatedServices: [1, 3, 4],
  },
  {
    id: 3,
    slug: "cloud-devops",
    icon: "Cloud",
    image:
      "https://res.cloudinary.com/dnmqfgexi/image/upload/v1756670020/steptodown.com638316_wi3avr.jpg",
    title: "Cloud & DevOps",
    description:
      "Scalable cloud infrastructure, CI/CD pipelines, and monitoring solutions for enterprise growth.",
    longDescription: `Transform your infrastructure with our comprehensive cloud and DevOps solutions:

    Cloud Architecture: Expert design and implementation across major cloud providers (AWS, Azure, GCP) with multi-cloud strategies.
    
    Infrastructure as Code: Automated infrastructure provisioning using Terraform and CloudFormation with GitOps practices.
    
    Container Orchestration: Kubernetes-based microservices architecture with service mesh implementation for complex deployments.
    
    Observability Stack: Complete monitoring solutions with Prometheus, Grafana, and ELK stack for real-time insights and alerting.`,
    features: [
      {
        title: "Cloud Migration",
        description: "Seamless migration to cloud platforms",
        icon: "CloudUpload",
      },
      {
        title: "Infrastructure as Code",
        description: "Automated and consistent infrastructure management",
        icon: "CodeBranch",
      },
      {
        title: "Continuous Monitoring",
        description: "Real-time monitoring and alerting",
        icon: "Eye",
      },
    ],
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Jenkins",
      "GitLab CI",
      "Prometheus",
      "Grafana",
      "ELK Stack",
    ],
    processSteps: [
      {
        title: "Assessment",
        description: "Evaluating current infrastructure and needs",
      },
      {
        title: "Planning",
        description: "Designing the cloud architecture and migration plan",
      },
      {
        title: "Migration",
        description: "Executing the migration to the cloud",
      },
      {
        title: "Optimization",
        description: "Optimizing cloud resources and costs",
      },
    ],
    benefits: [
      "Scalable and Flexible Infrastructure",
      "Reduced Operational Costs",
      "Improved Deployment Frequency",
      "Enhanced System Reliability",
    ],
    caseStudies: [
      {
        title: "Global E-commerce Migration",
        description:
          "Migrated a large-scale e-commerce platform to AWS, enabling global reach and scalability.",
        metrics: ["60% reduction in server costs", "99.9% uptime achieved"],
      },
    ],
    pricing: [
      {
        tier: "Basic",
        price: "Starting at $2k",
        features: [
          "Cloud readiness assessment",
          "Basic migration support",
          "1 month monitoring",
        ],
      },
      {
        tier: "Professional",
        price: "Starting at $8k",
        features: [
          "Comprehensive migration",
          "CI/CD setup",
          "3 months monitoring",
        ],
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: [
          "Full cloud solution",
          "24/7 support",
          "Custom architecture",
        ],
      },
    ],
    relatedServices: [1, 2, 4],
  },
  {
    id: 4,
    slug: "workflow-automation",
    icon: "Zap",
    image:
      "https://res.cloudinary.com/dnmqfgexi/image/upload/v1756670156/steptodown.com209375_xdcsdh.jpg",
    title: "Workflow Automation",
    description:
      "Streamline business processes with custom automation tools and API integrations.",
    longDescription:
      "Streamline your business operations with custom automation tools that integrate with your existing systems and workflows. Our workflow automation services include custom API integrations, business process automation, data synchronization, and workflow optimization.",
    features: [
      {
        title: "API Integrations",
        description: "Seamless integration with existing APIs",
        icon: "Link",
      },
      {
        title: "Custom Automation",
        description: "Tailored automation solutions for unique needs",
        icon: "Cogs",
      },
      {
        title: "Data Synchronization",
        description: "Real-time data sync across platforms",
        icon: "Sync",
      },
    ],
    processSteps: [
      {
        title: "Analysis",
        description:
          "Analyzing current workflows and identifying automation opportunities",
      },
      {
        title: "Design",
        description: "Designing the automation workflow and integration points",
      },
      {
        title: "Development",
        description: "Developing custom automation scripts and tools",
      },
      {
        title: "Deployment",
        description:
          "Deploying automation solutions and monitoring performance",
      },
    ],
    technologies: [
      "Zapier",
      "Integromat",
      "Custom Scripts",
      "AWS Lambda",
      "Webhooks",
      "RESTful APIs",
    ],
    benefits: [
      "Increased Efficiency",
      "Reduced Operational Costs",
      "Improved Data Accuracy",
      "Faster Response Times",
    ],
    caseStudies: [
      {
        title: "Automated Reporting System",
        description:
          "Developed an automated reporting system that reduced report generation time by 90%.",
        metrics: ["90% time saved", "100% accuracy in data reporting"],
      },
    ],
    pricing: [
      {
        tier: "Basic",
        price: "Starting at $1k",
        features: [
          "Basic workflow automation",
          "Email support",
          "1 month monitoring",
        ],
      },
      {
        tier: "Professional",
        price: "Starting at $5k",
        features: [
          "Advanced automation solutions",
          "API integrations",
          "3 months monitoring",
        ],
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: [
          "Comprehensive automation suite",
          "Dedicated support",
          "Custom workflows",
        ],
      },
    ],
    relatedServices: [1, 2, 3],
  },
  {
    id: 5,
    slug: "security-solutions",
    icon: "Shield",
    image:
      "https://res.cloudinary.com/dnmqfgexi/image/upload/v1756670234/steptodown.com759931_l5rqc6.jpg",
    title: "Security Solutions",
    description:
      "Robust security implementations, audit compliance, and data protection strategies.",
    longDescription:
      "Protect your applications and data with comprehensive security solutions. We offer vulnerability assessments, penetration testing, secure coding practices, compliance audits, and data encryption strategies to safeguard your digital assets.",
    features: [
      {
        title: "Vulnerability Assessment",
        description: "Identifying and mitigating security vulnerabilities",
        icon: "ShieldAlt",
      },
      {
        title: "Penetration Testing",
        description: "Simulated attacks to test system defenses",
        icon: "Lock",
      },
      {
        title: "Compliance Audits",
        description: "Ensuring adherence to security standards and regulations",
        icon: "ClipboardCheck",
      },
    ],
    processSteps: [
      {
        title: "Evaluation",
        description: "Assessing current security posture and identifying gaps",
      },
      {
        title: "Planning",
        description: "Developing a comprehensive security strategy",
      },
      {
        title: "Implementation",
        description: "Deploying security measures and controls",
      },
      {
        title: "Monitoring",
        description:
          "Continuous monitoring and improvement of security posture",
      },
    ],
    technologies: [
      "OWASP ZAP",
      "Burp Suite",
      "Nessus",
      "Metasploit",
      "Wireshark",
      "Splunk",
    ],
    benefits: [
      "Enhanced Security Posture",
      "Regulatory Compliance",
      "Risk Mitigation",
      "Increased Customer Trust",
    ],
    caseStudies: [
      {
        title: "Financial Institution Security Overhaul",
        description:
          "Redesigned security architecture for a financial institution, achieving full compliance with industry standards.",
        metrics: ["100% compliance", "50% reduction in security incidents"],
      },
    ],
    pricing: [
      {
        tier: "Basic",
        price: "Starting at $2k",
        features: [
          "Initial security assessment",
          "Basic vulnerability scan",
          "1 month support",
        ],
      },
      {
        tier: "Professional",
        price: "Starting at $7k",
        features: [
          "Comprehensive security audit",
          "Penetration testing",
          "3 months support",
        ],
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: [
          "Complete security solution",
          "24/7 monitoring",
          "Custom compliance needs",
        ],
      },
    ],
    relatedServices: [1, 2, 3],
  },
  {
    id: 6,
    slug: "data-engineering",
    icon: "Database",
    image:
      "https://res.cloudinary.com/dnmqfgexi/image/upload/v1756670334/steptodown.com541483_cgpyhq.jpg",
    title: "Data Engineering",
    description:
      "Data pipelines, analytics platforms, and business intelligence solutions.",
    longDescription:
      "We design and implement efficient data pipelines, analytics platforms, and business intelligence solutions to help you make data-driven decisions. Our data engineering services include ETL processes, data warehousing, real-time data processing, and advanced analytics.",
    features: [
      {
        title: "Data Warehousing",
        description:
          "Centralized repository for structured and semi-structured data",
        icon: "Warehouse",
      },
      {
        title: "ETL Processes",
        description:
          "Extract, Transform, Load - data integration and processing",
        icon: "Sync",
      },
      {
        title: "Real-time Analytics",
        description: "Continuous data processing and analytics",
        icon: "ChartLine",
      },
    ],
    processSteps: [
      {
        title: "Consultation",
        description: "Understanding data needs and challenges",
      },
      {
        title: "Design",
        description: "Designing the data architecture and pipeline",
      },
      {
        title: "Implementation",
        description: "Building and deploying data solutions",
      },
      {
        title: "Optimization",
        description: "Tuning and optimizing for performance and cost",
      },
    ],
    technologies: [
      "Apache Kafka",
      "Apache Spark",
      "AWS Redshift",
      "Google BigQuery",
      "Tableau",
      "Power BI",
    ],
    benefits: [
      "Scalable Data Solutions",
      "Real-time Insights",
      "Improved Data Quality",
      "Faster Time-to-Insight",
    ],
    caseStudies: [
      {
        title: "Retail Analytics Platform",
        description:
          "Developed a data analytics platform for a retail chain, enabling real-time inventory and sales analytics.",
        metrics: [
          "70% reduction in report generation time",
          "30% increase in sales due to better insights",
        ],
      },
    ],
    pricing: [
      {
        tier: "Basic",
        price: "Starting at $3k",
        features: [
          "Data pipeline setup",
          "Basic analytics dashboard",
          "1 month support",
        ],
      },
      {
        tier: "Professional",
        price: "Starting at $10k",
        features: [
          "Advanced data engineering",
          "Custom analytics solutions",
          "3 months support",
        ],
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: [
          "Comprehensive data solution",
          "Dedicated support",
          "Custom integrations",
        ],
      },
    ],
    relatedServices: [1, 2, 3],
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Mukesh Jena",
    role: "Software Engineer",
    bio: "Software engineer focused on building scalable, efficient, and user-friendly business applications.",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjgbrcGebNVdw4eu5INxzjJy4YcjVvrGGGw&s",
    linkedin: "https://www.linkedin.com/in/mukesh-jena/?originalSubdomain=in",
    github: "https://github.com/mukeshjena",
    website: "www.mukeshjena.com",
  },
  {
    id: 2,
    name: "Paresh Tripathy",
    role: "Software Engineer",
    bio: "Passionate software engineer skilled in modern frameworks, cloud technologies, and best coding practices.",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQHdmIOE8V2UYA/profile-displayphoto-crop_800_800/B56Zgt2nelG4AI-/0/1753115957055?e=1759363200&v=beta&t=kEVsR0H8hNSXIghe0PXWwYEyZ-IorNWQ1O5ofmDPrmI",
    linkedin:
      "https://www.linkedin.com/in/paresh-tripathy-9a3441256/?originalSubdomain=in",
    github: "https://github.com/paresh720538",
    website: "https://paresh-tripathy.vercel.app/",
  },
  {
    id: 3,
    name: "Prince Kumar Sahni",
    role: "Software Engineer",
    bio: "Software engineer experienced in designing, developing, and maintaining high-quality software solutions",
    avatar:
      "https://images.contactout.com/profiles/4c8e6fe06a3a145ec32e39fd039db052",
    linkedin: "https://www.linkedin.com/in/mrprince123/",
    github: "https://github.com/mrprince123",
    website: "www.princesahni.com",
  },
];

export const clients = [
  { name: "TechFlow", logo: "/api/placeholder/120/40" },
  { name: "InnovateLabs", logo: "/api/placeholder/120/40" },
  { name: "DataVision", logo: "/api/placeholder/120/40" },
  { name: "ScaleUp Co", logo: "/api/placeholder/120/40" },
  { name: "FutureTech", logo: "/api/placeholder/120/40" },
  { name: "StartupX", logo: "/api/placeholder/120/40" },
];

export const serviceCategories = [
  {
    id: "development",
    title: "Development Services",
    services: [1, 4, 6], // Service IDs
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    services: [3, 5],
  },
  {
    id: "ai",
    title: "AI & Automation",
    services: [2, 4],
  },
];

export const industrySolutions = [
  {
    industry: "Finance",
    relevantServices: [1, 2, 5],
    customFeatures: [
      "Secure payment processing",
      "Regulatory compliance",
      "Real-time analytics",
    ],
  },
  {
    industry: "Healthcare",
    relevantServices: [2, 5, 6],
    customFeatures: [
      "HIPAA compliance",
      "Patient data security",
      "Medical imaging AI",
    ],
  },
];

export const serviceFAQs = {
  1: [
    // Web & App Development FAQs
    {
      question: "Which technology stack do you recommend for my project?",
      answer:
        "We evaluate each project's requirements to recommend the optimal stack. For web apps, we often use React/Next.js with .NET Core or Python backends. For mobile, we suggest Flutter for cross-platform or native Android development based on your needs.",
    },
    {
      question: "Do you provide both web and mobile app development?",
      answer:
        "Yes, we offer comprehensive development services including web applications, progressive web apps (PWA), cross-platform mobile apps using Flutter, and native Android development.",
    },
    {
      question: "How do you ensure application security?",
      answer:
        "We implement security best practices including encrypted data transmission, secure authentication, input validation, and regular security audits.",
    },
    {
      question: "Can you integrate with existing systems?",
      answer:
        "Yes, we specialize in creating APIs and integrations with existing systems using RESTful or GraphQL approaches.",
    },
    {
      question: "What's your expertise in Node.js development?",
      answer:
        "We specialize in building scalable Node.js/Express.js APIs, real-time applications with Socket.io, and microservices architectures. Our Node.js solutions handle millions of requests while maintaining optimal performance.",
    },
    {
      question: "How do you handle mobile app development?",
      answer:
        "We offer both Flutter for cross-platform development and native Android development with Kotlin/Java. Our approach is based on your specific needs, considering factors like performance requirements, budget, and time-to-market.",
    },
    {
      question:
        "Can you work with multiple backend technologies in one project?",
      answer:
        "Yes, we often implement polyglot architectures using Node.js, .NET Core, and Python microservices, choosing the best technology for each specific component.",
    },
  ],
  2: [
    // AI/ML Integration FAQs
    {
      question: "What type of AI solutions do you offer?",
      answer:
        "We offer computer vision, natural language processing, predictive analytics, and custom machine learning solutions tailored to your business needs.",
    },
    {
      question: "How much data is needed for ML models?",
      answer:
        "The amount of data needed varies by project, but generally, we recommend at least 1000 samples per category for basic classification tasks.",
    },
    {
      question: "Can AI/ML solutions work with existing systems?",
      answer:
        "Yes, we design our AI/ML solutions to integrate seamlessly with your existing infrastructure through APIs and microservices.",
    },
    {
      question: "How long does it take to develop an AI solution?",
      answer:
        "Development time varies from 2-6 months depending on complexity, data availability, and integration requirements.",
    },
  ],
  3: [
    // Cloud & DevOps FAQs
    {
      question: "What is DevOps?",
      answer:
        "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle.",
    },
    {
      question: "Why should I move to the cloud?",
      answer:
        "Cloud computing offers scalability, flexibility, and cost savings by allowing you to pay only for the resources you use.",
    },
    {
      question: "How do you handle system monitoring?",
      answer:
        "We implement comprehensive monitoring using tools like Prometheus, Grafana, and ELK Stack for real-time system visibility and alerting.",
    },
    {
      question: "What's your approach to disaster recovery?",
      answer:
        "We implement multi-region deployments, regular backups, and automated recovery procedures to ensure business continuity.",
    },
  ],
  4: [
    // Workflow Automation FAQs
    {
      question: "What is workflow automation?",
      answer:
        "Workflow automation is the process of automating complex business processes and functions beyond just individual tasks.",
    },
    {
      question: "How can automation help my business?",
      answer:
        "Automation can increase efficiency, reduce errors, and free up employee time for more valuable tasks.",
    },
  ],
  5: [
    // Security Solutions FAQs
    {
      question: "What is a vulnerability assessment?",
      answer:
        "A vulnerability assessment is a systematic review of security weaknesses in an information system.",
    },
    {
      question: "How do you ensure data security?",
      answer:
        "We implement robust security measures including encryption, access controls, and regular security audits.",
    },
  ],
  6: [
    // Data Engineering FAQs
    {
      question: "What is data engineering?",
      answer:
        "Data engineering is the practice of designing and building systems that allow for the collection, storage, and analysis of data.",
    },
    {
      question: "What technologies do you use for data engineering?",
      answer:
        "We use a variety of technologies including Apache Kafka, Apache Spark, AWS Redshift, and Google BigQuery.",
    },
  ],
};

// Section Content
export const sectionContent = {
  hero: {
    badge: {
      text: "AI-Powered Software Solutions",
      icon: "Sparkles"
    },
    title: {
      line1: "Innovating Software",
      line2: "Empowering Businesses"
    },
    description: "We build next-generation software solutions that transform ideas into reality. From AI-powered applications to scalable cloud infrastructure.",
    buttons: {
      primary: "Start Your Project",
      secondary: "View Our Work"
    }
  },
  services: {
    title: {
      line1: "Our",
      line2: "Services"
    },
    description: "Comprehensive software solutions tailored to accelerate your business growth and digital transformation"
  },
  portfolio: {
    title: {
      line1: "Our",
      line2: "Projects"
    },
    description: "Showcasing innovative solutions we've built for forward-thinking companies"
  },
  team: {
    title: {
      line1: "Meet Our",
      line2: "Team"
    },
    description: "The talented individuals behind P2M Solutions, bringing diverse expertise and shared passion for innovation"
  },
  testimonials: {
    title: {
      line1: "Trusted by",
      line2: "Innovative Companies"
    },
    description: "See what our clients say about working with P2M Solutions"
  },
  contact: {
    title: {
      line1: "Let's Build",
      line2: "Something Together"
    },
    description: "Ready to transform your ideas into reality? Get in touch and let's discuss your next project.",
    contactInfo: [
      {
        icon: "MapPin",
        title: "Visit Us",
        details: ["Noida Sector 63", "New Delhi, India"]
      },
      {
        icon: "Phone",
        title: "Call Us",
        details: ["+91 7369900185, +91 7205384589, ", "Mon-Fri 9AM-6PM PST"]
      },
      {
        icon: "Mail",
        title: "Email Us",
        details: ["info.p2msolutions@gmail.com", "Response within 24 hours"]
      },
      {
        icon: "Clock",
        title: "Business Hours",
        details: ["Monday - Friday", "9:00 AM - 6:00 PM PST"]
      }
    ],
    form: {
      title: "Send us a message",
      fields: {
        name: "Full Name",
        email: "Email Address",
        company: "Company Name",
        projectType: "Project Type",
        message: "Tell us about your project"
      },
      projectTypes: [
        "Web Development",
        "Mobile App",
        "AI/ML Integration",
        "Cloud Infrastructure",
        "Automation",
        "Other"
      ],
      submitButton: "Send Message",
      submittingText: "Sending...",
      successMessage: "Message sent — we will get back soon.",
      emailSubject: "Thanks for Contacting P2Msolutions"
    }
  }
};

// Page Content
export const pageContent = {
  about: {
    hero: {
      title: {
        line1: "From College Dreams to",
        line2: "Professional Reality"
      },
      description: "Three passionate developers, one shared vision. We've transformed from college friends into a professional powerhouse, delivering solutions that scale from 100 to 100,000+ users.",
      highlight: "100 to 100,000+ users"
    },
    timeline: [
      {
        year: "2021",
        title: "The Beginning",
        description: "Started as college friends with a shared passion for technology and innovation.",
        align: "left" as const
      },
      {
        year: "2022",
        title: "First Projects",
        description: "Delivered our first client projects, learning and growing with each challenge.",
        align: "right" as const
      },
      {
        year: "2023",
        title: "Professional Growth",
        description: "Expanded our expertise in AI/ML, cloud solutions, and enterprise applications.",
        align: "left" as const
      },
      {
        year: "2024",
        title: "P2M Solutions",
        description: "Officially launched P2M Solutions, serving clients across multiple industries.",
        align: "right" as const
      }
    ],
    stats: [
      { number: "50", suffix: "+", label: "Projects Completed" },
      { number: "25", suffix: "+", label: "Happy Clients" },
      { number: "3", suffix: "", label: "Team Members" },
      { number: "99", suffix: "%", label: "Client Satisfaction" }
    ]
  },
  pricing: {
    hero: {
      title: {
        line1: "Simple,",
        line2: "Transparent Pricing"
      },
      description: "Choose the perfect plan for your business. Start small and scale as you grow."
    },
    plans: [
      {
        name: "Starter",
        price: "₹12,999",
        period: "one-time",
        tagline: "Perfect for individuals & small businesses just getting started online.",
        features: [
          "1 Landing Page (Static or Dynamic)",
          "Modern & Responsive Design (Mobile + Desktop)",
          "Basic SEO Optimization (Meta, Alt, Sitemap)",
          "Contact Form with Email Integration",
          "Free SSL & Hosting Setup Assistance",
          "1 Free Revision",
          "Delivery in 7–10 Days",
          "6 months Free Maintenance & Support"
        ],
        accent: "from-light-text to-light-text-secondary",
        recommended: false
      },
      {
        name: "Business",
        price: "₹34,999",
        period: "one-time",
        tagline: "Best for growing businesses that need a professional online presence.",
        features: [
          "Up to 7 Pages (Home, About, Services, Blog, Portfolio, Contact, etc.)",
          "Custom UI/UX Design with Branding",
          "Advanced SEO Setup (On-page + Keywords)",
          "Blog/Portfolio Section with CMS (Easy Editing)",
          "Performance Optimization & Speed Setup",
          "WhatsApp/Chatbot Integration",
          "Priority Support (Email + WhatsApp)",
          "2 Free Revisions",
          "Delivery in 20–25 Days"
        ],
        accent: "from-light-text to-light-text-secondary",
        recommended: true
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        period: "project-based",
        tagline: "Tailored solutions for enterprises, startups & large-scale projects.",
        features: [
          "Unlimited Pages & Fully Custom Design",
          "E-commerce Store / Marketplace Development",
          "Payment Gateway Integration (Razorpay, Stripe, PayPal)",
          "CRM, ERP & 3rd Party API Integrations",
          "Cloud Solutions & AI/ML Integrations",
          "Custom Admin Dashboard",
          "Dedicated Project Manager",
          "Ongoing Maintenance & Support",
          "SEO + Digital Marketing Strategy",
          "Delivery Timeline Based on Scope"
        ],
        accent: "from-light-text to-light-text-secondary",
        recommended: false
      }
    ]
  }
};

export const features = [
  {
    slug: "web-app-development",
    title: "Web & App Development",
    description:
      "We craft modern, responsive web applications and mobile apps that deliver exceptional user experiences and drive business growth.",
    benefits: [
      "Custom React/Next.js applications",
      "Progressive Web Apps (PWA)",
      "Cross-platform mobile development",
      "API-first architecture",
    ],
  },
  {
    slug: "ai-ml-integration",
    title: "AI/ML Integrations",
    description:
      "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent features for your applications.",
    benefits: [
      "Predictive analytics and forecasting",
      "Natural language processing",
      "Computer vision solutions",
      "Automated decision systems",
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps Solutions",
    description:
      "Scale your applications with robust cloud infrastructure, automated deployments, and monitoring solutions that ensure reliability.",
    benefits: [
      "Containerized microservices",
      "Auto-scaling infrastructure",
      "CI/CD pipeline automation",
      "Real-time monitoring & alerts",
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    description:
      "Streamline your business operations with custom automation tools that integrate with your existing systems and workflows.",
    benefits: [
      "Custom API integrations",
      "Business process automation",
      "Data synchronization",
      "Workflow optimization",
    ],
  },
];
