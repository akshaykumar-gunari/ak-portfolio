export interface BlogPost {
  title: string;
  date: string;
  category: string;
  categoryColor: "cyan" | "purple" | "green" | "amber";
  excerpt: string;
  link: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Understanding DMA in the Linux Kernel",
    date: "2026-07-10",
    category: "Linux Kernel",
    categoryColor: "cyan",
    excerpt:
      "A deep dive into Direct Memory Access — how DMA engines work, kernel APIs for DMA mapping, and real-world patterns from server platform drivers.",
    link: "https://akshaykumar-gunari.github.io/explore-with-ak/linux/kernel/dma/",
  },
  {
    title: "I2C Protocol: From Signals to Kernel Drivers",
    date: "2026-06-28",
    category: "Linux Kernel",
    categoryColor: "cyan",
    excerpt:
      "Breaking down the I2C protocol from electrical signals to how Linux kernel I2C subsystem works — with practical examples from sensor enablement.",
    link: "https://akshaykumar-gunari.github.io/explore-with-ak/linux/kernel/protocols/i2c/",
  },
  {
    title: "Attention Based Decomposition for 3D Point Clouds",
    date: "2026-06-15",
    category: "AI & ML",
    categoryColor: "purple",
    excerpt:
      "How ABD-Net decomposes 3D point clouds into basic geometric shapes using attention mechanisms — insights from our ICCV 2021 workshop paper.",
    link: "https://akshaykumar-gunari.github.io/explore-with-ak/ai-ml/3d-vision/",
  },
  {
    title: "Linear Algebra for Deep Learning: A Practical Guide",
    date: "2026-05-30",
    category: "Mathematics",
    categoryColor: "green",
    excerpt:
      "The essential linear algebra concepts every deep learning practitioner should know — from matrix factorizations to eigenvalue decompositions.",
    link: "https://akshaykumar-gunari.github.io/explore-with-ak/mathematics/linear-algebra/",
  },
];

export interface BlogCategory {
  name: string;
  description: string;
  icon: string;
  link: string;
  color: "cyan" | "purple" | "green" | "amber";
  postCount: number;
}

export const blogCategories: BlogCategory[] = [
  {
    name: "Linux Kernel",
    description:
      "Kernel internals, device drivers, memory management, and platform bring-up.",
    icon: "Terminal",
    link: "https://akshaykumar-gunari.github.io/explore-with-ak/linux/",
    color: "cyan",
    postCount: 6,
  },
  {
    name: "AI & ML",
    description:
      "Computer vision, deep learning, 3D vision, and ML algorithms.",
    icon: "Brain",
    link: "https://akshaykumar-gunari.github.io/explore-with-ak/ai-ml/",
    color: "purple",
    postCount: 5,
  },
  {
    name: "Mathematics",
    description:
      "Linear algebra, probability, calculus, and discrete math.",
    icon: "Sigma",
    link: "https://akshaykumar-gunari.github.io/explore-with-ak/mathematics/",
    color: "green",
    postCount: 4,
  },
  {
    name: "Systems Programming",
    description:
      "C/C++ deep dives, firmware development, and Python for systems.",
    icon: "Code2",
    link: "https://akshaykumar-gunari.github.io/explore-with-ak/systems/",
    color: "amber",
    postCount: 3,
  },
];
