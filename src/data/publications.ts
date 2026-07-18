export interface Publication {
  id: string;
  title: string;
  authors: string;
  conference: string;
  year: string;
  doi: string;
  type: "conference" | "patent";
}

export const publications: Publication[] = [
  {
    id: "C.1",
    title:
      "Progressive Clustering: An Unsupervised Approach Towards Continual Knowledge Acquisition of Incremental Data",
    authors: "Akshaykumar Gunari, et al.",
    conference:
      "ICPRAI 2022 - 3rd International Conference on Pattern Recognition and Artificial Intelligence",
    year: "2022",
    doi: "10.1007/978-3-031-09282-4_30",
    type: "conference",
  },
  {
    id: "C.2",
    title:
      "ABD-Net: Attention Based Decomposition Network for 3D Point Cloud Decomposition",
    authors: "Akshaykumar Gunari, et al.",
    conference:
      "The first Workshop on Structural and Compositional Learning on 3D Data - ICCV 2021",
    year: "2021",
    doi: "10.1109/ICCVW54120.2021.00232",
    type: "conference",
  },
  {
    id: "C.3",
    title:
      "Augmented Data as an Auxiliary Plug-In Toward Categorization of Crowdsourced Heritage Data",
    authors: "Akshaykumar Gunari, et al.",
    conference:
      "Workshop on Digital Heritage (WDH) 2021, 12th Indian Conference on Computer Vision, Graphics and Image Processing",
    year: "2021",
    doi: "10.1007/978-981-19-4136-8_4",
    type: "conference",
  },
  {
    id: "C.4",
    title: "Deep Visual Attention-Based Transfer Clustering",
    authors: "Akshaykumar Gunari, et al.",
    conference:
      "Fourth International Conference on Computing and Network Communications (CoCoNet'20)",
    year: "2020",
    doi: "10.1007/978-981-33-6987-0_29",
    type: "conference",
  },
  {
    id: "P.1",
    title: "System for Attention-Based Decomposition of 3D Point Clouds",
    authors:
      "Siddharth Katageri, Akshaykumar Gunari, Shashidhar V Kudari, et al.",
    conference: "Patent",
    year: "2022",
    doi: "",
    type: "patent",
  },
];
