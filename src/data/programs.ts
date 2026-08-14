

export interface Program {
  slug: string;
  title: string;
  description: string;
  duration: string;
  schedule: string;
  mode: string;
  fee: string;
  feeAmount: number;
  demoVideo?: {
    url: string;
    thumbnail: string;
  };
  promotionalGraphic?: string;
  brochureUrl?: string;
  overview: {
    whatIsIt: string;
    whatYouWorkOn: string;
    learningExperience: string;
  };
  competencies: {
    title: string;
    description: string;
    icon: string;
  }[];
  curriculum: {
    week: string;
    title: string;
    topics: string[];
    practicalWork: string;
    milestone?: string;
  }[];
  projects: {
    title: string;
    stage: string;
    description: string;
    technologies: string[];
  }[];
  genAI: {
    description: string;
    tools: string[];
    integration: string;
  };
  careerPrep: {
    title: string;
    description: string;
  }[];
  mentors: {
    name: string;
    role: string;
    company: string;
    expertise: string;
    image: string;
    linkedin?: string;
    quote?: string;
  }[];
  paymentPlans: {
    type: "FULL PAYMENT" | "SPLIT PAYMENT";
    amount: string;
    description: string;
    schedule?: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const programs: Record<string, Program> = {
  "web-development-with-genai": {
    slug: "web-development-with-genai",
    title: "MERN Stack Development with GenAI",
    description: "Build robust, scalable web applications using the modern MERN stack. Supercharge your development workflow with AI.",
    duration: "12 Weeks",
    schedule: "Mon–Fri, 1.5 Hours / Day",
    mode: "Live Online & Hands-on Building",
    fee: "₹4,999",
    feeAmount: 4999,
    promotionalGraphic: "/programs/mern-stack-with-gen-ai.jpg",
    brochureUrl: "/brochures/mern-genai.pdf",
    overview: {
      whatIsIt: "A rigorous, hands-on program designed to transform you into a full-stack engineer. You won't just learn syntax; you will build end-to-end systems.",
      whatYouWorkOn: "From responsive interfaces to complex backend APIs, you'll architect database schemas, implement authentication, and deploy production-ready applications.",
      learningExperience: "We focus on building. Less passive video watching, more writing code, debugging, and receiving direct feedback from mentors on actual projects."
    },
    competencies: [
      {
        title: "Frontend Architecture",
        description: "Build responsive, accessible, and performant interfaces using React and modern CSS systems.",
        icon: "layout",
      },
      {
        title: "Backend Engineering",
        description: "Develop robust REST APIs using Node.js and Express with proper error handling.",
        icon: "server",
      },
      {
        title: "Database Design",
        description: "Design efficient MongoDB schemas, handle relationships, and optimize data queries.",
        icon: "database",
      },
      {
        title: "Authentication Systems",
        description: "Implement secure user authentication with JWT and secure password hashing.",
        icon: "shield",
      },
      {
        title: "Full-Stack Integration",
        description: "Connect complex frontends to scalable backends with robust state management.",
        icon: "code2",
      },
      {
        title: "AI Application Development",
        description: "Integrate LLMs directly into your applications to build intelligent features.",
        icon: "terminal",
      },
      {
        title: "Testing & Quality",
        description: "Write reliable tests and ensure code quality before shipping to production.",
        icon: "zap",
      },
      {
        title: "Deployment & DevOps",
        description: "Deploy your full-stack applications with modern CI/CD pipelines.",
        icon: "rocket",
      }
    ],
    curriculum: [
         {
        week: "01",
        title: "HTML, CSS & Tailwind",
        topics: ["Semantic HTML", "Flexbox & Grid", "Tailwind Configuration", "Responsive Design Systems"],
        practicalWork: "Convert a Figma design into a pixel-perfect, responsive UI."
      },
      {
        week: "02",
        title: "JavaScript Foundations",
        topics: ["ES6+ Syntax", "Promises & Async/Await", "DOM Manipulation", "Functional Array Methods"],
        practicalWork: "Build a dynamic interactive web component."
      },
      {
        week: "03",
        title: "React",
        topics: ["Component Architecture", "State & Props", "React Hooks (useState, useEffect)", "Context API"],
        practicalWork: "Build a multi-component stateful application.",
        milestone: "Frontend Interface Deployment"
      },
      {
        week: "04",
        title: "TypeScript",
        topics: ["Types & Interfaces", "Generics", "Type Inference", "React with TypeScript"],
        practicalWork: "Migrate an existing React app to TypeScript for type safety."
      },
      {
        week: "05",
        title: "Node.js & Express",
        topics: ["Event Loop", "REST API Design", "Express Middleware", "Error Handling"],
        practicalWork: "Create a robust backend API serving JSON data."
      },
      {
        week: "06",
        title: "MongoDB & Data Validation",
        topics: ["NoSQL Concepts", "Mongoose Schemas", "Data Relationships", "Zod Validation"],
        practicalWork: "Design a relational schema and connect it to your Express API.",
        milestone: "Backend Database Architecture"
      },
      {
        week: "07",
        title: "Full-Stack Integration",
        topics: ["CORS & Proxying", "Fetching Data", "API State Management", "Handling Loading States"],
        practicalWork: "Connect your React frontend to your Express/MongoDB backend."
      },
      {
        week: "08",
        title: "Authentication & Security",
        topics: ["JWT Tokens", "Bcrypt Hashing", "Protected Routes", "Role-Based Access"],
        practicalWork: "Implement a complete login and registration flow."
      },
      {
        week: "09",
        title: "Advanced State & Real-Time",
        topics: ["Redux/Zustand", "WebSockets", "Socket.io", "Real-Time Updates"],
        practicalWork: "Build a real-time feature (e.g., live chat or notifications)."
      },
      {
        week: "10",
        title: "Next.js",
        topics: ["Server Components", "App Router", "Server Actions", "SEO & Meta"],
        practicalWork: "Build an SEO-optimized full-stack Next.js application.",
        milestone: "Next.js Architecture"
      },
      {
        week: "11",
        title: "Testing, DevOps & Deployment",
        topics: ["Jest/Vitest", "CI/CD Pipelines", "Vercel & Render Deployment", "Environment Variables"],
        practicalWork: "Deploy your full-stack application to the public internet."
      },
      {
        week: "12",
        title: "GenAI Integration & Capstone",
        topics: ["OpenAI/Anthropic API", "Prompt Engineering", "AI Tooling", "Capstone Presentation"],
        practicalWork: "Build the final Capstone project integrating AI capabilities.",
        milestone: "Final Production App"
      }
    ],
    projects: [
      {
        stage: "Learning",
        title: "Interactive Components",
        description: "Master the DOM, state, and UI logic by building foundational web components.",
        technologies: ["JavaScript", "HTML", "Tailwind CSS"]
      },
      {
        stage: "Building",
        title: "Full-Stack Dashboard",
        description: "Develop a secure, data-driven dashboard with authentication, CRUD operations, and responsive charts.",
        technologies: ["React", "Node.js", "Express", "MongoDB"]
      },
      {
        stage: "Deploying",
        title: "Real-Time Application",
        description: "Engineer a high-performance web app with real-time state synchronization using WebSockets.",
        technologies: ["Next.js", "TypeScript", "Socket.io"]
      },
      {
        stage: "Capstone",
        title: "AI-Powered SaaS MVP",
        description: "Architect and launch a complete software-as-a-service product integrating a GenAI pipeline to solve a specific user problem.",
        technologies: ["MERN Stack", "GenAI APIs", "Vercel"]
      }
    ],
    genAI: {
      description: "AI is fundamentally changing software engineering. In this program, you will not just learn how to use AI tools—you will learn how to integrate them into your codebases and accelerate your development workflow while deeply understanding the underlying engineering.",
      tools: ["ChatGPT", "Claude", "Cursor", "GitHub Copilot", "Gemini"],
      integration: "You will build applications that utilize LLM APIs to generate content, analyze data, and provide intelligent features to end-users."
    },
    careerPrep: [
      {
        title: "Resume Refinement",
        description: "Craft a developer resume that highlights engineering accomplishments over generic responsibilities."
      },
      {
        title: "GitHub Portfolio",
        description: "Structure your repositories with clean commits, professional readmes, and clear architecture documentation."
      },
      {
        title: "LinkedIn Optimization",
        description: "Position yourself effectively in the professional network to attract engineering recruiters."
      },
      {
        title: "Technical Interviews",
        description: "Master problem-solving communication and prepare for standard technical screening rounds."
      },
      {
        title: "System Design Basics",
        description: "Learn how to discuss application architecture, scalability, and technical tradeoffs."
      },
      {
        title: "Mock Interviews",
        description: "Practice your behavioral and technical delivery with experienced industry mentors."
      }
    ],
    mentors: [
      {
        name: "Gokul",
        role: "Sr. MERN Stack & Polymath Developer",
        company: "Cirakas Consultancy",
        expertise: "800+ Students Trained · 5+ Years of Industry Experience",
        image: "/mentors/Gokul.jpeg",
        linkedin: "https://www.linkedin.com/in/gokul-dev1/",
        quote: "Students don't need more information. They need better direction."
      },
    ],
    paymentPlans: [
      {
        type: "FULL PAYMENT",
        amount: "₹4,999",
        description: "One-time payment",
      },
      {
        type: "SPLIT PAYMENT",
        amount: "₹4,999",
        description: "Split into two installments",
        schedule: [
          "₹2,499.50 at enrollment",
          "₹2,499.50 after 25 days"
        ]
      }
    ],
    faqs: [
      {
        question: "Who is this program for?",
        answer: "This program is for beginners and intermediate developers who want to transition from tutorial hell to building production-ready applications. It's ideal for those who want structured guidance, mentorship, and practical project experience."
      },
      {
        question: "How long is the program?",
        answer: "The program spans 12 weeks, requiring approximately 1.5 hours of dedicated learning and building time per day."
      },
      {
        question: "What is the class schedule?",
        answer: "The structured sessions and guided building take place Monday through Friday. Weekends are generally reserved for project work, catching up, or resting."
      },
      {
        question: "What projects will I build?",
        answer: "You will progress from interactive frontend components to a full-stack dashboard, a real-time web application, and ultimately an AI-powered SaaS Capstone project."
      },
      {
        question: "What are the payment options?",
        answer: "We offer two payment plans: a one-time Full Payment of ₹4,999, or a Split Payment where you pay ₹2,499.50 at enrollment and the remaining ₹2,499.50 after 25 days."
      },
      {
        question: "What happens after submitting the Join Program form?",
        answer: "After you submit the form, your request is logged. Our program coordinator will personally reach out to you to discuss your application, confirm your selected payment plan, and handle the actual enrollment."
      },
      {
        question: "Is a certificate provided?",
        answer: "Yes, upon successfully completing the program and your capstone project, you will receive a verified certificate of completion."
      },
      {
        question: "What happens after completing the program?",
        answer: "You will graduate with a professional portfolio, an optimized resume and GitHub profile, and the engineering confidence to tackle complex web development roles or build your own products."
      }
    ]
  }
};
