// /src/lib/Bio.tsx

export const name = "Gurmohit Singh";
export const title = "CS Student • Builder • Developer";
export const location = "Austin, TX";
export const email = "gurmo06@my.utexas.edu";
export const about = "I'm a computer science student at the University of Texas at Austin, passionate about building software that makes a difference. I enjoy working on projects that challenge me to learn new technologies; I have a particular interest in low-level systems applications and AI/ML, and I love tinkering with hardware too! When I'm not coding, I like to play games, read books, mess around with my car (I'd love to talk about cars as well!), and experiment with cooking.";

export const links =
[
  { label: "GitHub", href: "https://github.com/gurmo06" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gurmo06/" },
  { label: "Resume", href: "/resume/Gurmohit Singh - Technical Resume.pdf" },
];

export type Project =
{
  slug: string;
  name: string;
  description: string;
  tech: string[];
  liveHref: string | null;
  sourceHref: string;
};

export type ProjectList =
{
  name: string;
  projects: Project[];
};

// Add another named list here to create a new homepage section.
export const projectLists: ProjectList[] =
[
  {
    name: "AI/ML",
    projects:
    [
      {
        slug: "aviation-damage-risk-predictor",
        name: "Aviation Damage Risk Predictor",
        description: "• A machine learning pipeline for predicting aircraft damage risk from 307K+ aviation incident records.\n• Uses engineered features from incident metadata, text, missingness patterns, and domain-specific risk signals.\n• Evaluated LightGBM models with cross-validation, threshold tuning, and ablation; achieved 0.939 ROC-AUC.",
        tech: ["Python", "pandas", "scikit-learn", "LightGBM", "NumPy"],
        liveHref: null,
        sourceHref: "https://colab.research.google.com/drive/1jdd_HggDw_HUZuFoYnVRprFe_ipkBWaX",
      },
      {
        slug: "pacman-ai-project-suite",
        name: "Pacman AI Project Suite",
        description: "• A suite of AI agents spanning five Pacman-based projects over search, planning, learning, inference, & classification.\n• Implemented graph and adversarial search, value iteration, Q-learning, Bayes net inference, and supervised classifiers.\n• Applied these algorithms to maze navigation, multi-agent decision-making, reinforcement learning, probabilistic reasoning, and digit/Pacman behavior classification.",
        tech: ["Python", "AI", "Search", "Reinforcement Learning", "Bayes Nets", "Neaural Networks", "Classification"],
        liveHref: null,
        sourceHref: "https://drive.google.com/drive/folders/1iZRIvIJeyESbL4LKiRnY7ZMz05rISl-m",
      },
    ],
  },
  {
    name: "Systems",
    projects:
    [
      {
        slug: "arm-visualizer",
        name: "ARM Visualizer",
        description: "• An online visualization for different system components working together to form a simulated AArch64 system.\n• Includes low-level simulations for CPU registers, ALU operations, cache memory, and pipelining.\n• Features a web-based interface and a step by step execution pattern for ARM64 Assembly instructions.",
        tech: ["TypeScript", "Computer Architecture", "Low-level Simulation", "PlayWright", "React", "Node.js", "Vite", "Tailwind CSS"],
        liveHref: "https://arm-visualizer.pages.dev/",
        sourceHref: "https://github.com/gurmo06/ARM_Visualizer",
      },
      {
        slug: "cloud-scheduler-simulator",
        name: "Cloud Scheduler Simulator",
        description: "• A cloud simulation project for modeling virtual machines, task scheduling, and distributed resource usage.\n• Evaluates workload execution across configurable cloud environments and allocation strategies (4 scheduling algorithms included).\n• Used to compare scheduling efficiency, resource utilization, and overall system performance.",
        tech: ["C++", "Simulation", "Cloud Computing"],
        liveHref: null,
        sourceHref: "https://drive.google.com/drive/folders/1jhyUkaCjfSxWEj_45siOKOay2yzZKPHd",
      },
      {
        slug: "energy-efficient-graphics-api-benchmark",
        name: "Energy-Efficient Graphics API Benchmark",
        description: "• A GPU efficiency benchmark comparing Vulkan, Direct3D 12, and OpenGL across graphical workloads.\n• Collected FPS, benchmark scores, power, and thermal data across repeated trials.\n• Derived performance-per-watt metrics and found Vulkan delivered the strongest measured efficiency.\n\n",
        tech: ["Vulkan", "Direct3D 12", "OpenGL", "GPU-Z"],
        liveHref: null,
        sourceHref: "https://drive.google.com/drive/folders/100RdI8gwuy1POOvWJe_-mHTs1zqBgQvl",
      },
    ],
  },
  {
    name: "Quantum Computing",
    projects:
    [
      {
        slug: "qards",
        name: "QARDS - THE Quantum Card Game",
        description: "• A digital card game with a unique twist involving quantum mechanics.\n• Incorporates superposition, entanglement, and constructive and destructive interference from a Grover diffusion operator.\n• Offers both a CLI and GUI version.\n• Won 2nd at the UT IBM Qiskit Fall Fest Hackathon 2025!",
        tech: ["Python", "Qiskit", "PySide6"],
        liveHref: null,
        sourceHref: "https://github.com/gurmo06/QARDS",
      },
    ],
  },
  {
    name: "Games",
    projects:
    [
      {
        slug: "3d-physics-simulator",
        name: "3D Physics Simulator",
        description: "• Built an interactive 3D physics sandbox for exploring gravity, collisions, and attraction between objects.\n• Implemented customizable controls for sphere count, mass, elasticity, wind, gravity, and player push force with live readouts.\n• Built for TSA 2024; won 1st in regionals and placed in states.",
        tech: ["Unity 2022", "C#", "Unity Rigidbody Physics", "HDRP", "Cinemachine"],
        liveHref: null,
        sourceHref: "https://github.com/gurmo06/3D-Physics-Simulator",
      },
      {
        slug: "mac-switch-mods",
        name: "Mac Switch Mods",
        description: "• Nintendo Switch mods designed for the esoteric screen resolutions and aspedt ratios of Macs.\n• Used ARM Assembly tooling to engineer custom resolutions and 16:10 support.\n• Tested with the Astris Nintendo Switch Emularor.\n• You can email requests at macswitchmods@gmail.com",
        tech: ["ARM Assembly", "Astris Emulator", "Reverse Engineering", "Modding"],
        liveHref: null,
        sourceHref: "https://github.com/gurmo06/Mac-Switch-Mods",
      },
      {
        slug: "2d-platformer",
        name: "2D Platformer (CS I K Final Project)",
        description: "• Built an interactive 2D platformer game with custom levels and mechanics.\n• Implemented player movement, jumping, collision detection, and a custom win condition.\n• Final project for my HS freshman CS I Honors class where it all started",
        tech: ["Unity 2020", "C#", "URP"],
        liveHref: null,
        sourceHref: "https://github.com/gurmo06/Final-Project-CS-I-K-2D-Platformer",
      },
    ],
  },
  {
    name: "Miscellaneous",
    projects:
    [
      {
        slug: "tau",
        name: "Tau",
        description: "• A simple Discord bot with various math functions.\n• Will be expanded with matrix calculations and calculus functions.\n• Currently offline (was previously hosted on Railway but trial ended).",
        tech: ["Python", "Discord API", "NumPy", "SymPy", "Railway"],
        liveHref: null,
        sourceHref: "https://github.com/gurmo06/Tau_Python",
      },
      {
        slug: "portfolio",
        name: "This Portfolio!",
        description: "• A personal portfolio website to showcase my projects and skills.\n• Features sections for about me, projects, and contact information.\n• Should be up if you're looking at it :)",
        tech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js"],
        liveHref: "https://gurmo.vercel.app/",
        sourceHref: "https://github.com/gurmo06/Portfolio/tree/main",
      },
    ],
  },
];

export const projects = projectLists.flatMap((list) => list.projects);
