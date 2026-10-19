export const profile = {
  name: "Jamiu Aliyu Adekunle",
  brand: "Cisse",
  role: "Full-stack Engineer",
  location: "Lagos, Nigeria",
  email: "jamiualiyuolanrewaju@gmail.com",
  github: "https://github.com/cisseally99",
  linkedin: "https://www.linkedin.com/in/aliyu-jamiu-1231a4297",
  summary: "I build thoughtful, responsive products across the frontend and full-stack web.",
  now: "Growing at the intersection of frontend craft, full-stack thinking, and AI-powered software.",
};

export const projects = [
  {
    slug: "cisse-portfolio",
    title: "Cisse's portfolio",
    year: "2026",
    description: "A responsive software developer portfolio built to present work clearly today and grow into an AI-assisted project publishing platform tomorrow.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    github: "https://github.com/cisseally99",
    githubLabel: "View GitHub profile",
    liveUrl: null,
    status: "Live build",
    role: "Product design · Frontend · Full-stack",
    overview: "A personal platform designed to make a developer's work feel clear, credible, and easy to explore.",
    problem: "A portfolio should do more than list technologies. It needs to create enough context for a visitor to understand how the work was thought through and how to start a conversation.",
    solution: "I shaped the experience as an editorial system: a focused landing page, structured project routes, a reusable content model, and a direct contact flow that can grow with the portfolio.",
    highlights: ["Designed a responsive visual system from scratch", "Built reusable routes for projects, writing, and experience", "Added a validated contact API with Resend integration", "Connected the GitHub repository to automatic Vercel deployments"],
    nextStep: "Continue growing the portfolio with thoughtful case studies and writing about the systems behind each project.",
  },
  {
    slug: "manpost",
    title: "Manpost",
    year: "2026",
    description: "A beginner-friendly API testing workspace for composing HTTP requests, inspecting responses, and saving work in one place.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    github: "https://github.com/cisseally99/Manpost",
    githubLabel: "View source on GitHub",
    liveUrl: "https://manpost.vercel.app",
    status: "Live",
    role: "Product design · Full-stack engineering",
    overview: "An API workspace that helps developers and learners send HTTP requests and understand the responses they receive.",
    problem: "API testing can feel intimidating when request options and server responses are unfamiliar. Manpost aims to make that workflow approachable while allowing users to test their own permitted public API endpoints.",
    solution: "I built a responsive request workspace for GET, POST, PUT, PATCH, and DELETE, with query parameters, headers, JSON bodies, response inspection, saved requests, and account-backed history. Outbound requests use a controlled server-side handler with public-network checks and rate limits.",
    highlights: ["Built a request composer for five common HTTP methods", "Added response status, timing, headers, and body inspection", "Implemented accounts, saved requests, collections, and request history", "Protected outbound requests with public-address validation and rate limiting"],
    nextStep: "Keep refining the request workflow and make it even easier for first-time users to test their own APIs.",
  },
];

export const articles = [
  {
    slug: "building-an-ai-assisted-portfolio",
    title: "Building an AI-assisted portfolio",
    excerpt: "What a careful, approval-first workflow could look like for keeping a developer portfolio current.",
    date: "Coming soon",
    tags: ["AI", "Architecture", "Portfolio"],
  },
];

export const experience = [
  {
    role: "Open to work",
    company: "Available for software engineering opportunities",
    period: "Now",
    description: "Looking for opportunities to contribute to frontend and full-stack products while continuing to grow as an engineer.",
  },
];

export const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "REST APIs", "Axios", "Fetch API"],
  Databases: ["MongoDB", "MongoDB Atlas", "Mongoose"],
  Tools: ["Git", "GitHub", "Postman", "VS Code", "Vite"],
  Exposure: ["React Router", "Redux", "AWS", "Prisma", "React Native"],
};
