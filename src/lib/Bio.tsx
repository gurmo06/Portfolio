// /src/lib/Bio.tsx

export const name = "Gurmohit Singh";
export const title = "CS Student • Builder • Developer";
export const location = "Austin, TX";
export const email = "gurmo06@my.utexas.edu";
export const about = "I'm a computer science student at the University of Texas at Austin, passionate about building software that makes a difference. I enjoy working on projects that challenge me to learn new technologies and improve my skills. When I'm not coding, I like to play games, read, tinker with hardware, and experiment with cooking.";

export const links =
[
  { label: "GitHub", href: "https://github.com/gurmo06" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gurmohit-singh-88593b326/" },
  { label: "Resume", href: "/resume/Gurmohit Singh - Technical Resume.pdf" },
];

export const projects =
[
  {
    name: "QARDS - THE Quantum Card Game",
    description: "• A digital card game with a unique twist involving quantum mechanics.\n• Incorporates superposition, entanglement, and constructive and destructive interference from a Grover diffusion operator.\n• Offers both a CLI and GUI version.\n• Won 2nd at the UT IBM Qiskit Fall Fest Hackathon 2025!",
    tech: ["Python", "Qiskit", "PySide6"],
    href: "https://github.com/gurmo06/QARDS",
  },
  {
    name: "Tandoorish Indian Cuisine Restaurant Website",
    description: "• A rebuilt, responsive website for a local Indian restaurant.\n• Features a menu, reservation system, and contact information.\n• Currently building and deploying.",
    tech: ["TypeScript", "Vite", "React", "Tailwind CSS", "Spring Boot"],
    href: "https://tandoorish.com",
  },
  {
    name: "System Visualizer",
    description: "• An online visualization for different system components.\n• Includes simulations for CPU registers, ALU operations, cache memory, and pipelining.\n• Designed the codebase to be extensible; actively expanding modules (WIP).",
    tech: ["TypeScript"],
    href: "https://github.com/gurmo06/System_Visualizer",
  },
  {
    name: "Tau",
    description: "• A simple Discord bot with various math functions.\n• Will be expanded with matrix calculations and calculus functions.\n• Currently offline (was previously hosted on Railway but trial ended).",
    tech: ["Python", "Discord API"],
    href: "https://github.com/gurmo06/Tau_Python",
  },
  {
    name: "This Portfolio!",
    description: "• A personal portfolio website to showcase my projects and skills.\n• Features sections for about me, projects, and contact information.\n• Should be up if you're looking at it :)",
    tech: ["TypeScript", "Next.js", "React","Tailwind CSS"],
    href: "https://github.com/gurmo06/Portfolio/tree/main",
  }
];