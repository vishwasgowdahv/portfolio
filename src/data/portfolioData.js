export const personalInfo = {
  name: "Vishwas Gowda",
  title: "Full-Stack Developer",
  tagline:
    "Building things for the web — backend, frontend, and everything in between.",
  location: "Aachen, Germany",
  email: "vishwasgowda722@gmail.com",
  github: "https://github.com/vishwasgowdahv",
  available: true,
  bio: [
    "I'm a full-stack web developer based in Aachen, Germany — building clean, scalable web applications from database to deployment.",
    "I care about performance, developer experience, and shipping things that actually work. Whether it's a REST API with rate limiting, a Docker-composed microservice, or a polished React UI — I like to own the whole stack.",
    "When I'm not coding, I'm probably exploring German engineering culture, tracking my work days, or building another side project no one asked for.",
  ],
};

export const techStack = [
  { name: "React", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "HTML / CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "JWT Auth", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "DevOps" },
  { name: "Git / GitHub", category: "DevOps" },
  { name: "Linux / CLI", category: "DevOps" },
];

export const featuredProjects = [
  {
    id: "trimmy",
    title: "Trimmy",
    subtitle: "URL Shortener Platform",
    description:
      "A full-stack URL shortening SaaS with user authentication, per-user rate limiting, click analytics, and a live dashboard. Built to handle real traffic with clean API design.",
    longDescription:
      "Trimmy is a production-ready URL shortener with JWT-based authentication, Redis-style rate limiting per user, click-through analytics (browser, OS, location), a React dashboard, and a clean REST API. Deployed with Docker on AWS.",
    tags: ["Node.js", "React", "MySQL", "Docker", "JWT"],
    type: "Full-Stack SaaS",
    year: "2024",
    status: "Live",
    liveUrl: "https://trimmy.vishwasgowda.com",
    githubUrl: "https://github.com/vishwasgowdahv/trimmy",
    dockerUrl: "https://hub.docker.com/r/vishwasgowdahv/trimmy",
    highlights: [
      "JWT auth with refresh tokens",
      "Per-user rate limiting middleware",
      "Click analytics dashboard",
      "Dockerized deployment on AWS",
    ],
    color: "#C4975A",
  },
  {
    id: "worktrack-eu",
    title: "WorkTrack EU",
    subtitle: "Work Day Tracker for Expats",
    description:
      "A utility app for international students and expats in the EU who can only work 140 days per year under their work permit. Track, visualise, and plan your remaining work days.",
    longDescription:
      "WorkTrack EU helps international students and expats in Germany and the EU manage their legally allowed 140 working days per year. Users log work days, view remaining quota, and get alerts when approaching limits.",
    tags: ["React", "Node.js", "MongoDB"],
    type: "Utility App",
    year: "2024",
    status: "In Development",
    liveUrl: null,
    githubUrl: "https://github.com/vishwasgowdahv/worktrack-eu",
    dockerUrl: null,
    highlights: [
      "140-day work quota tracking",
      "Calendar-based day logging",
      "Visual progress indicators",
      "Quota alerts and notifications",
    ],
    color: "#C8D5C0",
  },
];

export const smallProjects = [
  {
    id: "webshop",
    title: "E-Commerce Webshop",
    description:
      "A full product listing, cart, and checkout flow with a MySQL backend and Express REST API.",
    tags: ["React", "Node.js", "MySQL"],
    year: "2023",
  },
  {
    id: "password-gen",
    title: "Password Generator",
    description:
      "A configurable password generator with strength meter, copy to clipboard, and custom character sets.",
    tags: ["React"],
    year: "2023",
  },
  {
    id: "currency-tracker",
    title: "Currency Exchange Tracker",
    description:
      "Live exchange rates fetched from a public API, with multi-currency comparison and historical charts.",
    tags: ["React", "REST API"],
    year: "2023",
  },
  {
    id: "dev-utilities",
    title: "Dev Utilities",
    description:
      "A collection of small developer tools — base64 encoder, JSON formatter, color picker, and more.",
    tags: ["React", "JavaScript"],
    year: "2024",
  },
];

export const timeline = [
  {
    year: "2024–Present",
    title: "Full-Stack Developer",
    subtitle: "Freelance / Side Projects",
    description:
      "Building full-stack web applications — from REST APIs and Docker deployments to React frontends.",
    type: "work",
  },
  {
    year: "2025-Present",
    title: "Master of Information Systems",
    subtitle: "FH Aachen University, Germany",
    description:
      "Pursuing studies in Information Systems & helping companies to transform digitally.",
    type: "education",
  },
  {
    year: "2019-2024",
    title: "Bachelor of Computer Science Studies",
    subtitle: "Visvesvaraya Technological University",
    description:
      "Began with HTML/CSS, progressed through JavaScript, Node.js, React, databases, and DevOps.",
    type: "education",
  },
];
