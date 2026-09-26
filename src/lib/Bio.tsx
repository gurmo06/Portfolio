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

export type ProjectLink =
{
  label: string;
  href: string | null;
};

export type Project =
{
  slug: string;
  name: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
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
        slug: "self-hosted-llm",
        name: "Self-Hosted LLM & Remote Assistants",
        description: "• Deployed gpt-oss:20b through Ollama on a headless Ubuntu PC with an NVIDIA RTX 5070 Ti for local model inference.\n• Connected OpenClaw and OpenCode to the model for remote assistant and coding workflows.\n• Made the OpenClaw assistant accessible through a Discord bot backed by the home-hosted model.",
        tech: ["Ollama", "gpt-oss:20b", "OpenClaw", "OpenCode", "Ubuntu Linux", "NVIDIA RTX 5070 Ti", "Discord", "Local LLM Inference"],
        links: [
          { label: "Discord Server", href: null },
        ],
      },
      {
        slug: "aviation-damage-risk-predictor",
        name: "Aviation Damage Risk Predictor",
        description: "• A machine learning pipeline for predicting aircraft damage risk from 307K+ aviation incident records.\n• Uses engineered features from incident metadata, text, missingness patterns, and domain-specific risk signals.\n• Evaluated LightGBM models with cross-validation, threshold tuning, and ablation; achieved 0.939 ROC-AUC.",
        tech: ["Python", "pandas", "scikit-learn", "LightGBM", "NumPy"],
        links: [
          { label: "Notebook", href: "https://colab.research.google.com/drive/1jdd_HggDw_HUZuFoYnVRprFe_ipkBWaX" },
        ],
      },
      {
        slug: "pacman-ai-project-suite",
        name: "Pacman AI Project Suite",
        description: "• A suite of AI agents spanning five Pacman-based projects over search, planning, learning, inference, & classification.\n• Implemented graph and adversarial search, value iteration, Q-learning, Bayes net inference, and supervised classifiers.\n• Applied these algorithms to maze navigation, multi-agent decision-making, reinforcement learning, probabilistic reasoning, and digit/Pacman behavior classification.",
        tech: ["Python", "AI", "Search", "Reinforcement Learning", "Bayes Nets", "Neural Networks", "Classification"],
        links: [
          { label: "P1: Search - Source", href: null },
          { label: "P2: Multi-Agent Search - Source", href: null },
          { label: "P3: Reinforcement Learning - Source", href: null },
          { label: "P4: Inference - Source", href: null },
          { label: "P5: Machine Learning - Source", href: null },
          { label: "Project Folder", href: "https://drive.google.com/drive/folders/1iZRIvIJeyESbL4LKiRnY7ZMz05rISl-m" },
        ],
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
        description: "• An online visualization of system components working together to form a simulated AArch64 system.\n• Models CPU registers, ALU operations, memory, and a five-stage instruction pipeline.\n• Features a web-based interface with step-by-step execution of ARM64 assembly instructions.",
        tech: ["TypeScript", "Computer Architecture", "Low-level Simulation", "Playwright", "React", "Node.js", "Vite", "Tailwind CSS"],
        links: [
          { label: "Source", href: "https://github.com/gurmo06/ARM_Visualizer" },
          { label: "Live", href: "https://arm-visualizer.pages.dev/" },
        ],
      },
      {
        slug: "pintos-operating-system",
        name: "Pintos Operating System",
        description: "• Implemented priority scheduling, nested priority donation, and timer-based thread sleeping, coordinating kernel threads with locks, semaphores, and condition variables.\n• Added user process execution and system calls with memory validation, then implemented demand paging, dynamic stack growth, page eviction, and disk swapping.\n• Extended the file system with dynamically growing files, direct and indirect block indexing, hierarchical directories, and synchronized access to shared file data.",
        tech: ["C", "Pintos", "x86", "GCC", "GNU Make", "Git", "OS Development", "Concurrency & Synchronization", "Process Management", "Virtual Memory", "File Systems"],
        links: [
          { label: "P1: Threads - Source", href: null },
          { label: "P2: User Programs - Source", href: null },
          { label: "P3: Virtual Memory - Source", href: null },
          { label: "P4: File Systems - Source", href: null },
        ],
      },
      {
        slug: "unix-shell",
        name: "Unix Shell",
        description: "• Built a shell in C supporting interactive commands and script execution, with command parsing, configurable executable search paths, and built-in cd, exit, and path commands.\n• Implemented concurrent command execution using fork, execv, and waitpid, plus standard output and error redirection through dup2.",
        tech: ["C", "Linux", "POSIX System Calls", "GCC", "GNU Make", "Git", "Systems Programming", "Process Coordination", "File Descriptor Management", "Command Parsing"],
        links: [
          { label: "Source", href: null },
        ],
      },
      {
        slug: "command-interpreter",
        name: "Command Interpreter",
        description: "• Built a parser and interpreter in C for an assembly-like language supporting arithmetic, bitwise operations, comparisons, and memory access.\n• Implemented conditional branching and label resolution using a hash table to support loops and program control flow.\n• Added function calls and returns using a stack to preserve execution state and restore variables.",
        tech: ["C", "GCC", "GNU Make", "Git", "Language Interpretation", "Parsing", "Hash Tables", "Stack Management", "Dynamic Memory Management"],
        links: [
          { label: "Source", href: null },
        ],
      },
      {
        slug: "dynamic-memory-allocator",
        name: "Dynamic Memory Allocator",
        description: "• Built a custom memory allocator in C with allocation and deallocation routines backed by six size-segregated free lists.\n• Implemented block splitting, adjacent free-block coalescing, and page-aligned heap expansion to reuse memory and manage fragmentation.\n• Developed a heap consistency checker to detect overlapping blocks, alignment violations, incorrect free-list ordering, and allocation-state errors.",
        tech: ["C", "GCC", "GNU Make", "Git", "Memory Allocation", "Pointer Arithmetic", "Bitwise Metadata Encoding", "Data Structures", "Heap Debugging"],
        links: [
          { label: "Source", href: null },
        ],
      },
      {
        slug: "arm-assembly-programming",
        name: "ARM Assembly Programming",
        description: "• Implemented six AArch64 assembly routines covering Hamming distance, bit-matrix transposition, structure comparison, string case conversion, tree depth, and Hamming-code decoding.\n• Used bit masks, shifts, and logical operations to manipulate packed data and implement single-bit error correction.\n• Implemented recursive tree traversal and nested function calls with explicit stack frames and register preservation.",
        tech: ["ARM64/AArch64 Assembly", "GCC", "GNU Make", "Python", "Bit Manipulation", "Recursion", "Stack Management", "Data Layout", "Calling Conventions"],
        links: [
          { label: "Source", href: null },
        ],
      },
      {
        slug: "pipelined-processor-emulator",
        name: "Pipelined Processor Emulator",
        description: "• Implemented a five-stage ARM processor pipeline in C, covering instruction fetch, decode, execution, memory access, and register writeback.\n• Added register forwarding, pipeline stalls, and bubbles to handle data dependencies, load-use hazards, and branch mispredictions.\n• Built a configurable set-associative data cache with LRU replacement, dirty-block tracking, and cache-miss stalls integrated into pipeline execution.",
        tech: ["C", "ARM/AArch64", "GCC", "GNU Make", "Git", "Computer Architecture", "Processor Emulation", "Instruction Decoding", "Pipeline Hazards", "Cache Design", "Memory Hierarchy"],
        links: [
          { label: "Source", href: null },
        ],
      },
      {
        slug: "cloud-scheduler-simulator",
        name: "Cloud Scheduler Simulator",
        description: "• A cloud simulation project for modeling virtual machines, task scheduling, and distributed resource usage.\n• Evaluates workload execution across configurable cloud environments and allocation strategies (4 scheduling algorithms included).\n• Used to compare scheduling efficiency, resource utilization, and overall system performance.",
        tech: ["C++", "Simulation", "Cloud Computing"],
        links: [
          { label: "Source", href: "https://drive.google.com/drive/folders/1jhyUkaCjfSxWEj_45siOKOay2yzZKPHd" },
        ],
      },
      {
        slug: "energy-efficient-graphics-api-benchmark",
        name: "Energy-Efficient Graphics API Benchmark",
        description: "• A GPU efficiency benchmark comparing Vulkan, Direct3D 12, and OpenGL across graphical workloads.\n• Collected FPS, benchmark scores, power, and thermal data across repeated trials.\n• Derived performance-per-watt metrics and found Vulkan delivered the strongest measured efficiency.",
        tech: ["Vulkan", "Direct3D 12", "OpenGL", "GPU-Z"],
        links: [
          { label: "Project Materials", href: "https://drive.google.com/drive/folders/100RdI8gwuy1POOvWJe_-mHTs1zqBgQvl" },
        ],
      },
    ],
  },
  {
    name: "Quantum Computing",
    projects:
    [
      {
        slug: "quantum-optics-research",
        name: "Quantum Optics Research",
        description: "• Studied polarization, quantum state tomography, teleportation, and entanglement swapping through simulated experiments in the Virtual Quantum Optics Laboratory (VQOL).\n• Built Python analysis scripts to reconstruct density matrices, check physical validity, calculate state fidelities, and visualize measurement results.\n• Presented a Bell-CHSH simulation study using photon coincidence counts to estimate correlations and statistical uncertainty.",
        tech: ["VQOL", "Python", "NumPy", "pandas", "Matplotlib", "Quantum Optics", "Quantum State Tomography", "Statistical Analysis", "Scientific Visualization"],
        links: [
          { label: "Source", href: null },
          { label: "Final Presentation", href: null },
        ],
      },
      {
        slug: "qards",
        name: "QARDS - THE Quantum Card Game",
        description: "• A digital card game with a unique twist involving quantum mechanics, available through CLI and GUI interfaces.\n• Incorporates superposition, entanglement, and constructive and destructive interference from a Grover diffusion operator.\n• Won 2nd at the UT IBM Qiskit Fall Fest Hackathon 2025!",
        tech: ["Python", "Qiskit", "PySide6"],
        links: [
          { label: "Source", href: "https://github.com/gurmo06/QARDS" },
        ],
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
        links: [
          { label: "Source", href: "https://github.com/gurmo06/3D-Physics-Simulator" },
        ],
      },
      {
        slug: "mac-switch-mods",
        name: "Mac Switch Mods",
        description: "• Nintendo Switch mods for Mac screen resolutions and aspect ratios, tested with the Astris Nintendo Switch emulator.\n• Used ARM assembly tooling to implement custom resolutions and 16:10 support.\n• Accepts mod requests at macswitchmods@gmail.com.",
        tech: ["ARM Assembly", "Astris Emulator", "Reverse Engineering", "Modding"],
        links: [
          { label: "Source", href: "https://github.com/gurmo06/Mac-Switch-Mods" },
        ],
      },
      {
        slug: "2d-platformer",
        name: "2D Platformer (CS I K Final Project)",
        description: "• Built an interactive 2D platformer game with custom levels and mechanics.\n• Implemented player movement, jumping, collision detection, and a custom win condition.\n• Final project for my HS freshman CS I Honors class, where it all started.",
        tech: ["Unity 2020", "C#", "URP"],
        links: [
          { label: "Source", href: "https://github.com/gurmo06/Final-Project-CS-I-K-2D-Platformer" },
        ],
      },
    ],
  },
  {
    name: "Infrastructure",
    projects:
    [
      {
        slug: "self-hosted-gitea",
        name: "Self-Hosted Gitea Server",
        description: "• Deployed Gitea on a headless Ubuntu home server to host and manage Git repositories.\n• Configured SSH-based Git access and Tailscale connectivity for remote use.\n• Runs alongside Jellyfin, Home Assistant, Syncthing, Mosquitto, and other applications on the home server.",
        tech: ["Gitea", "Git", "SSH", "Ubuntu Linux", "Tailscale", "Jellyfin", "Home Assistant", "Syncthing", "Mosquitto", "Self-Hosting", "Linux Administration"],
        links: [
          { label: "Gitea Server", href: null },
        ],
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
        links: [
          { label: "Source", href: "https://github.com/gurmo06/Tau_Python" },
        ],
      },
      {
        slug: "portfolio",
        name: "This Portfolio!",
        description: "• A personal portfolio website to showcase my projects and skills.\n• Features sections for about me, projects, and contact information.\n• Should be up if you're looking at it :)",
        tech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js"],
        links: [
          { label: "Source", href: "https://github.com/gurmo06/Portfolio/tree/main" },
          { label: "Live", href: "https://gurmo.vercel.app/" },
        ],
      },
    ],
  },
];

export const projects = projectLists.flatMap((list) => list.projects);
