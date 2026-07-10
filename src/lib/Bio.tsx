// /src/lib/Bio.tsx

export const name = "Gurmohit Singh";
export const title = "CS Student • Builder • Developer";
export const location = "Austin, TX";
export const email = "gurmo06@my.utexas.edu";
export const about = "I'm a computer science student at the University of Texas at Austin, passionate about building software that makes a difference. I enjoy working on projects that challenge me to learn new technologies; I have a particular interest in low-level systems applications and scalable solutions, and I love tinkering with hardware too! When I'm not coding, I like to play games, read books, mess around with my car (I'd love to talk about cars as well!), and experiment with cooking.";

export const links =
[
  { label: "GitHub", href: "https://github.com/gurmo06" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gurmohit-singh-88593b326/" },
  { label: "Resume", href: "/resume/Gurmohit Singh - Technical Resume.pdf" },
];

export const projects =
[
  {
    name: "Aviation Damage Risk Predictor",
    description: "• A machine learning pipeline for predicting aircraft damage risk from 307K+ aviation incident records.\n• Uses engineered features from incident metadata, text, missingness patterns, and domain-specific risk signals.\n• Evaluated LightGBM models with cross-validation, threshold tuning, and ablation testing; achieved 0.939 ROC-AUC.",
    tech: ["Python", "Pandas", "scikit-learn", "LightGBM", "NumPy"],
    href: "https://colab.research.google.com/drive/1jdd_HggDw_HUZuFoYnVRprFe_ipkBWaX",
  },
  {
    name: "Energy-Efficient Graphics API Benchmark",
    description: "• A GPU efficiency benchmark comparing Vulkan, Direct3D 12, and OpenGL across graphical workloads.\n• Collected FPS, benchmark scores, power, and thermal data across repeated trials.\n• Derived performance-per-watt metrics and found Vulkan delivered the strongest measured efficiency.\n\n",
    tech: ["Vulkan", "Direct3D 12", "OpenGL", "GPU-Z"],
    href: "https://drive.google.com/drive/folders/100RdI8gwuy1POOvWJe_-mHTs1zqBgQvl",
  },
  {
    name: "QARDS - THE Quantum Card Game",
    description: "• A digital card game with a unique twist involving quantum mechanics.\n• Incorporates superposition, entanglement, and constructive and destructive interference from a Grover diffusion operator.\n• Offers both a CLI and GUI version.\n• Won 2nd at the UT IBM Qiskit Fall Fest Hackathon 2025!",
    tech: ["Python", "Qiskit", "PySide6"],
    href: "https://github.com/gurmo06/QARDS",
  },
  {
    name: "Cloud Scheduler Simulator",
    description: "• A cloud simulation project for modeling virtual machines, task scheduling, and distributed resource usage.\n• Evaluates workload execution across configurable cloud environments and allocation strategies.\n• Used to compare scheduling efficiency, resource utilization, and overall system performance.\n\n",
    tech: ["C++", "Simulation", "Cloud Computing", "Scheduling"],
    href: "https://github.com/CS378-EEC-Projects/Project-1-Cloud-Sim"
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
