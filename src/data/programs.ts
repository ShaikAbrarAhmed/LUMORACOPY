

export interface Program {
  slug: string;
  title: string;
  description: string;
  duration: string;
  schedule: string;
  mode: string;
  fee: string;
  feeAmount: number;
  showCurriculum?: boolean;
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
  },
  "data-analyst": {
    slug: "data-analyst",
    title: "Data Analyst",
    description: "Master data manipulation, statistical analysis, SQL querying, and business intelligence. Transform raw data into actionable business insights with AI-assisted workflows.",
    duration: "12 Weeks",
    schedule: "Mon–Fri, 1.5 Hours / Day",
    mode: "Live Online & Hands-on Building",
    fee: "₹4,999",
    feeAmount: 4999,
    showCurriculum: false,
    promotionalGraphic: "/programs/data-analyst.jpg",
    overview: {
      whatIsIt: "A comprehensive, practical program designed to turn beginners and aspiring analysts into data-driven decision makers. You will master analytical thinking, database querying, data visualization, and business intelligence.",
      whatYouWorkOn: "From writing complex SQL queries and cleaning raw datasets to building interactive Power BI dashboards and automating analysis with Python and AI tooling.",
      learningExperience: "Hands-on data solving from day one. You will analyze real-world datasets, solve business case studies, and build portfolio-ready dashboards with direct mentor feedback."
    },
    competencies: [
      {
        title: "Excel & Advanced Analytics",
        description: "Master pivot tables, advanced formulas, lookup functions, and data modeling in Excel.",
        icon: "file-spreadsheet"
      },
      {
        title: "SQL & Database Querying",
        description: "Write complex SQL queries, multi-table joins, aggregations, CTEs, and window functions.",
        icon: "database"
      },
      {
        title: "Python for Data Analysis",
        description: "Manipulate datasets, handle missing values, and perform statistical analysis using Pandas and NumPy.",
        icon: "terminal"
      },
      {
        title: "Data Visualization & Dashboards",
        description: "Design interactive business dashboards and visual reports using Power BI and Matplotlib/Seaborn.",
        icon: "bar-chart"
      },
      {
        title: "Exploratory Data Analysis",
        description: "Uncover patterns, anomalies, correlations, and trends from unstructured raw data.",
        icon: "search"
      },
      {
        title: "Business Problem Solving",
        description: "Translate business questions into analytical frameworks and actionable executive recommendations.",
        icon: "target"
      },
      {
        title: "AI-Assisted Analytics",
        description: "Accelerate query writing, automated report generation, and data cleaning using GenAI workflows.",
        icon: "zap"
      },
      {
        title: "Statistical Modeling",
        description: "Apply hypothesis testing, regression analysis, and descriptive statistics to real scenarios.",
        icon: "line-chart"
      }
    ],
    curriculum: [
      {
        week: "01",
        title: "Foundations of Data Analysis & Excel",
        topics: ["Data Analyst Mindset", "Excel Essentials & Formulas", "Data Formatting & Cleaning", "Filtering & Sorting"],
        practicalWork: "Clean an unformatted multi-sheet business dataset and prepare a summary overview."
      },
      {
        week: "02",
        title: "Advanced Excel & Data Modeling",
        topics: ["VLOOKUP / XLOOKUP", "Pivot Tables & Pivot Charts", "Nested Logical Functions", "Excel Dashboards"],
        practicalWork: "Build an interactive sales performance dashboard in Microsoft Excel.",
        milestone: "Excel Analytics Milestone"
      },
      {
        week: "03",
        title: "SQL Fundamentals & Relational Databases",
        topics: ["Relational Database Concepts", "SELECT, WHERE, ORDER BY", "Filtering & Pattern Matching", "Aggregate Functions & GROUP BY"],
        practicalWork: "Query a relational database to extract customer purchase metrics."
      },
      {
        week: "04",
        title: "Advanced SQL Querying",
        topics: ["INNER / LEFT / RIGHT Joins", "Subqueries & Nested Queries", "Common Table Expressions (CTEs)", "Window Functions"],
        practicalWork: "Solve complex multi-table SQL queries for e-commerce user cohort retention."
      },
      {
        week: "05",
        title: "Database Optimization & Analytics SQL",
        topics: ["Database Indexing Basics", "Data Transformation in SQL", "Case Statements & Conditional Aggregation", "SQL Case Studies"],
        practicalWork: "Execute an end-to-end business query audit for a retail chain dataset.",
        milestone: "SQL Engineering Architecture"
      },
      {
        week: "06",
        title: "Python Foundations for Data",
        topics: ["Python Data Types & Data Structures", "Control Flow & Functions", "NumPy Arrays & Vectorization", "Working with Files"],
        practicalWork: "Write Python scripts to parse, filter, and summarize raw text and CSV logs."
      },
      {
        week: "07",
        title: "Data Manipulation with Pandas",
        topics: ["Pandas DataFrames & Series", "Data Cleaning & Imputation", "Grouping, Aggregating & Merging", "Time-Series Data"],
        practicalWork: "Perform exploratory data analysis (EDA) on a real-world financial transaction dataset."
      },
      {
        week: "08",
        title: "Data Visualization & Storytelling",
        topics: ["Matplotlib & Seaborn", "Visual Hierarchy & Chart Selection", "Communicating Insights to Stakeholders", "Plot Customization"],
        practicalWork: "Create a visual data story report highlighting churn factors for a SaaS application.",
        milestone: "Exploratory Data Analysis Milestone"
      },
      {
        week: "09",
        title: "Power BI & Business Intelligence",
        topics: ["Connecting Data Sources", "Data Transformation in Power Query", "DAX Formulas & Measures", "Building Interactive Views"],
        practicalWork: "Build a production Power BI executive dashboard with drill-down filters."
      },
      {
        week: "10",
        title: "Applied Business Analytics & Metrics",
        topics: ["Key Performance Indicators (KPIs)", "Funnel Analysis & Cohort Analysis", "A/B Testing Foundations", "Financial & Operational Metrics"],
        practicalWork: "Conduct an A/B experiment evaluation and construct an executive summary."
      },
      {
        week: "11",
        title: "AI-Assisted Data Workflows",
        topics: ["ChatGPT & Claude for SQL Generation", "Automating Python EDA with GenAI", "Prompting for Report Synthesis", "AI Quality Auditing"],
        practicalWork: "Build an AI-augmented data pipeline that converts raw CSVs into executive summaries."
      },
      {
        week: "12",
        title: "Capstone Project & Business Defense",
        topics: ["End-to-End Analytics Pipeline", "Dashboard Refinement", "Presentation Techniques", "Capstone Defense"],
        practicalWork: "Present and defend an end-to-end Business Intelligence Capstone Project.",
        milestone: "Final Analytics Capstone"
      }
    ],
    projects: [
      {
        stage: "Learning",
        title: "Sales & Performance Excel Dashboard",
        description: "Analyze multi-channel sales data using advanced formulas, Pivot Tables, and interactive slicers.",
        technologies: ["Microsoft Excel", "Pivot Tables", "Data Modeling"]
      },
      {
        stage: "Analysis",
        title: "E-Commerce Customer Cohort SQL Audit",
        description: "Query relational database tables with window functions and CTEs to identify retention trends and customer lifetime value.",
        technologies: ["SQL", "PostgreSQL", "Database Aggregations"]
      },
      {
        stage: "Visualization",
        title: "Exploratory Data Analysis with Python",
        description: "Process messy real-world datasets with Pandas and generate insightful visualizations using Seaborn and Matplotlib.",
        technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"]
      },
      {
        stage: "Business Problem Solving",
        title: "Executive Power BI Business Intelligence Dashboard",
        description: "Architect a multi-page Power BI dashboard incorporating DAX measures, KPI tracking, and interactive cross-filtering.",
        technologies: ["Power BI", "DAX", "Power Query"]
      },
      {
        stage: "Capstone",
        title: "AI-Augmented Business Intelligence Capstone",
        description: "Synthesize raw enterprise data into a complete business story using SQL, Python, Power BI, and GenAI-assisted summary workflows.",
        technologies: ["SQL", "Python", "Power BI", "GenAI Tools"]
      }
    ],
    genAI: {
      description: "AI is reshaping how analysts work. In this program, you learn how to leverage GenAI tools to write SQL faster, automate data cleaning, and draft executive summaries while maintaining rigorous analytical control.",
      tools: ["ChatGPT", "Claude", "Cursor", "Code Interpreter", "Gemini"],
      integration: "You will integrate AI assistants into your SQL writing, Python EDA scripts, and report drafting to accelerate analysis without compromising logic."
    },
    careerPrep: [
      {
        title: "Resume Refinement",
        description: "Craft an analytics resume highlighting business impact, quantified data achievements, and SQL/Python projects."
      },
      {
        title: "GitHub & Portfolio Showcase",
        description: "Structure your SQL queries, Python notebooks, and Power BI dashboards into a polished public portfolio."
      },
      {
        title: "LinkedIn Optimization",
        description: "Position yourself effectively to attract recruiters looking for Data Analysts and Business Intelligence specialists."
      },
      {
        title: "SQL & Analytics Interviews",
        description: "Prepare for live SQL coding challenges, data puzzle screenings, and database problem solving."
      },
      {
        title: "Business Case Preparation",
        description: "Learn how to structure ambiguous business problems, formulate hypotheses, and present analytical findings."
      },
      {
        title: "Mock Interviews",
        description: "Practice technical query rounds and behavioral presentations with experienced industry mentors."
      }
    ],
    mentors: [
      {
        name: "Purva Kabra",
        role: "Product Manager & Analytics Strategist",
        company: "LumberFi",
        expertise: "Structured Thinking · Business Analytics · Product Strategy",
        image: "/mentors/Purva.png",
        linkedin: "https://www.linkedin.com/in/purva-kabra-pk",
        quote: "Success isn't about having all the answers. It's about asking better questions."
      }
    ],
    paymentPlans: [
      {
        type: "FULL PAYMENT",
        amount: "₹4,999",
        description: "One-time payment"
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
        question: "Who is this Data Analyst program for?",
        answer: "This program is designed for beginners, graduates, and working professionals who want to develop practical data analysis skills in SQL, Python, Excel, and Power BI."
      },
      {
        question: "Do I need a prior programming background?",
        answer: "No prior programming experience is required. We start from foundational data concepts and build up step-by-step through guided hands-on practice."
      },
      {
        question: "How long is the program?",
        answer: "The program spans 12 weeks, requiring approximately 1.5 hours per day of live learning and practical project building."
      },
      {
        question: "What tools will I learn?",
        answer: "You will master Microsoft Excel, SQL (PostgreSQL), Python (Pandas, NumPy, Matplotlib, Seaborn), Power BI, and GenAI analytical tools."
      },
      {
        question: "What projects will I build?",
        answer: "You will progress from interactive Excel dashboards to an e-commerce SQL retention audit, a Python EDA report, an executive Power BI dashboard, and a final AI-augmented BI Capstone."
      },
      {
        question: "What are the payment options?",
        answer: "We offer two payment plans: a one-time Full Payment of ₹4,999, or a Split Payment of ₹2,499.50 at enrollment and ₹2,499.50 after 25 days."
      },
      {
        question: "What happens after submitting the Join Program form?",
        answer: "Our program coordinator will personally reach out to discuss your application, confirm your selected payment plan, and guide you through enrollment."
      },
      {
        question: "Is a certificate provided?",
        answer: "Yes, upon completing the program curriculum and passing the Capstone project defense, you will receive a verified certificate of completion."
      }
    ]
  }
};

