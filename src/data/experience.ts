export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
  type: "industry" | "research";
}

export const experiences: Experience[] = [
  {
    company: "Juniper Networks - HPE India Private Limited",
    role: "Software Engineer - 3",
    duration: "July 2025 - Present",
    location: "Bangalore, India",
    highlights: [
      "Develop Linux kernel drivers for QFX-5K data center switches",
      "Contributing to hardware bring-up, platform debugging, and performance optimization",
      "Supporting reliable and high-throughput networking systems",
    ],
    type: "industry",
  },
  {
    company: "Juniper Networks - HPE India Private Limited",
    role: "Software Engineer - 2",
    duration: "March 2024 - June 2025",
    location: "Bangalore, India",
    highlights: [
      "Contributed to QFX-5K switch platform bring-up within the Linux Platform Development team",
      "Developed platform daemons on Junos EVO OS",
      "Debugged platform-level issues across system components",
    ],
    type: "industry",
  },
  {
    company: "AMD India Private Limited",
    role: "System Software Designer - 2",
    duration: "May 2023 - March 2024",
    location: "Bangalore, India",
    highlights: [
      "Developed Linux kernel drivers for DMA and Non-Transparent Bridge (NTB) subsystems",
      "Built performance evaluation tools integrating dma-test and ntb_perf",
      "Measured DMA data transfer efficiency across multi-node server platforms",
    ],
    type: "industry",
  },
  {
    company: "AMD India Private Limited",
    role: "System Software Designer - 1",
    duration: "July 2021 - May 2023",
    location: "Bangalore, India",
    highlights: [
      "Enabled Human Presence Detection (HPD) and Ambient Light Sensors on AMD platforms",
      "Developed firmware for ARM Cortex-M4 co-processor sensor integration",
      "Integrated sensors including TDK CH201 and Sunny M1 for AMD MP2",
    ],
    type: "industry",
  },
  {
    company: "Centre of Excellence in Visual Intelligence (CEVI)",
    role: "Research Intern",
    duration: "March 2021 - July 2021",
    location: "Hubli, India",
    highlights: [
      "Worked on a DST-funded research project on clustering and categorization of crowdsourced 2D and 3D data",
      "Co-authored 4 research papers published in national and international conferences",
    ],
    type: "research",
  },
  {
    company: "Indian Institute of Technology - Delhi",
    role: "Project Trainee",
    duration: "June 2019 - July 2019",
    location: "New Delhi, India",
    highlights: [
      "Worked on endoscopic tool tracking as part of a neuro-engineering research project",
    ],
    type: "research",
  },
];
