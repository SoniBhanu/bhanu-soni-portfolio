export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  image: string
  github?: string
  live?: string
  category: 'fullstack' | 'frontend' | 'backend' | 'mobile'
  featured: boolean
  date: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart, checkout, and payment integration.",
    longDescription: "Built a complete e-commerce solution with user authentication, product catalog, shopping cart, secure payment processing with Stripe, order management, and admin dashboard. Features include product search, filtering, reviews, and wishlist functionality.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL"],
    image: "/images/project1.jpg",
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://ecommerce-demo.com",
    category: "fullstack",
    featured: true,
    date: "2024"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    longDescription: "Developed a real-time task management application with drag-and-drop functionality, team collaboration features, task assignments, comments, file attachments, and progress tracking. Used WebSockets for live updates and implemented role-based access control.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Tailwind CSS"],
    image: "/images/project2.jpg",
    github: "https://github.com/yourusername/task-manager",
    live: "https://taskmanager-demo.com",
    category: "fullstack",
    featured: true,
    date: "2024"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "AI-powered content generation tool using OpenAI API with custom prompts.",
    longDescription: "Created an AI-powered content generation platform that helps users create blog posts, social media content, and marketing copy. Integrated OpenAI API with customizable parameters, saved templates, and export functionality.",
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Prisma", "PostgreSQL"],
    image: "/images/project3.jpg",
    github: "https://github.com/yourusername/ai-content-generator",
    live: "https://ai-generator-demo.com",
    category: "fullstack",
    featured: true,
    date: "2024"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with interactive maps and forecasts.",
    longDescription: "Built a weather application that displays current weather, 7-day forecast, and interactive radar maps. Integrated multiple weather APIs, implemented geolocation, and created data visualizations for temperature trends.",
    tech: ["React", "OpenWeather API", "Chart.js", "CSS Modules", "Axios"],
    image: "/images/project4.jpg",
    github: "https://github.com/yourusername/weather-dashboard",
    live: "https://weather-demo.com",
    category: "frontend",
    featured: false,
    date: "2023"
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description: "Analytics dashboard for tracking social media performance metrics.",
    longDescription: "Developed an analytics dashboard that aggregates data from multiple social media platforms. Features include engagement metrics, audience demographics, post performance, and custom report generation.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Prisma"],
    image: "/images/project5.jpg",
    github: "https://github.com/yourusername/social-analytics",
    live: "https://analytics-demo.com",
    category: "frontend",
    featured: false,
    date: "2023"
  },
  {
    id: 6,
    title: "RESTful API Gateway",
    description: "Scalable API gateway with authentication and rate limiting.",
    longDescription: "Built a production-ready API gateway that handles authentication, rate limiting, request routing, and caching. Implemented JWT authentication, Redis for rate limiting, and comprehensive logging.",
    tech: ["Node.js", "Express", "Redis", "JWT", "MongoDB", "Docker"],
    image: "/images/project6.jpg",
    github: "https://github.com/yourusername/api-gateway",
    category: "backend",
    featured: false,
    date: "2023"
  }
]

export const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'mobile', label: 'Mobile' }
]