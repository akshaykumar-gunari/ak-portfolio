export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "Code2",
    skills: ["C", "C++", "Python", "Shell/Bash"],
  },
  {
    name: "Linux & Systems",
    icon: "Terminal",
    skills: [
      "Linux Kernel",
      "Device Drivers",
      "Kernel Module Development",
      "Platform Bring-up",
      "Hardware Debugging",
    ],
  },
  {
    name: "Embedded & RTOS",
    icon: "Cpu",
    skills: [
      "ARM Cortex-M",
      "Zephyr RTOS",
      "Firmware Development",
      "Device Tree",
      "I2C/SPI Protocols",
    ],
  },
  {
    name: "AI/ML & Vision",
    icon: "Brain",
    skills: [
      "Deep Learning",
      "Computer Vision",
      "3D Point Clouds",
      "Image Processing",
      "Unsupervised Learning",
    ],
  },
  {
    name: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      "Yocto Project",
      "Git",
      "GDB",
      "ftrace",
      "QEMU",
      "DMA & NTB Subsystems",
    ],
  },
];
