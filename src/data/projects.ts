export interface Project {
  title: string;
  description: string;
  domain: string[];
  duration: string;
  association: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: "NTB and DMA Driver Development",
    description:
      "Developed Linux kernel drivers for DMA and Non-Transparent Bridge (NTB) on server platforms. Built kernel modules for performance evaluation of NTB data transfer over DMA across multi-node systems.",
    domain: ["Linux Kernel", "DMA", "NTB"],
    duration: "January 2023 - March 2024",
    association: "AMD India Pvt Limited",
    highlights: [
      "Linux kernel driver development",
      "Multi-node performance evaluation",
      "DMA data transfer optimization",
    ],
  },
  {
    title: "Designing and Enablement of Zephyr RTOS",
    description:
      "Ported and enabled Zephyr RTOS on ARM Cortex-M4, including device tree and memory configuration for embedded platform development.",
    domain: ["RTOS", "Zephyr", "ARM", "Device Tree"],
    duration: "March 2022 - December 2022",
    association: "AMD India Pvt Limited",
    highlights: [
      "RTOS porting on ARM Cortex-M4",
      "Device tree configuration",
      "Memory management setup",
    ],
  },
  {
    title: "HPD Sensors Enablement",
    description:
      "Enabled HPD and sensor stack on ARM Cortex-M4 platforms. Developed firmware for sensor integration and data communication to OS services.",
    domain: ["Firmware", "Sensors", "I2C"],
    duration: "July 2021 - December 2022",
    association: "AMD India Pvt Limited",
    highlights: [
      "Sensor stack enablement",
      "Firmware development",
      "I2C protocol implementation",
    ],
  },
  {
    title: "Progressive Clustering",
    description:
      "Developed an unsupervised learning framework for clustering dynamically growing datasets with evolving class distributions.",
    domain: ["Deep Learning", "Computer Vision", "Unsupervised Learning"],
    duration: "January 2021 - July 2021",
    association: "Centre of Excellence in Visual Intelligence (CEVI)",
    highlights: [
      "Unsupervised learning framework",
      "Incremental knowledge acquisition",
      "Dynamic dataset clustering",
    ],
  },
  {
    title: "ABD-Net: Attention Based Decomposition Network",
    description:
      "Developed a deep learning model for 3D point cloud decomposition into basic geometric shapes using attention mechanisms.",
    domain: ["Deep Learning", "3D Vision", "Point Clouds"],
    duration: "March 2021 - June 2021",
    association: "Centre of Excellence in Visual Intelligence (CEVI)",
    highlights: [
      "3D point cloud processing",
      "Attention-based decomposition",
      "Geometric shape recognition",
    ],
  },
];
