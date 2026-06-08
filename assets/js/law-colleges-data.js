/* =============================================
   LAW UNIVERSITY MULTI COURSE TRACK DATASPACE
   ============================================= */

const LAW_PAGE_CONFIG = {
  title: "Top LAW Colleges in India 2026",
  courseTrack: "LAW Admissions",
  stats: [
    { number: "1,800+", label: "Law Institutions" },
    { number: "1L+", label: "Profiles Evaluated" },
    { number: "95%", label: "Moot Court Connect" },
    { number: "Free", label: "Profile Analysis" }
  ]
};

const LAW_COLLEGES = [
  {
    id: 1,
    name: "Symbiosis Law School (SLS Pune)",
    shortName: "SLS Pune",
    location: "Pune, Maharashtra",
    badge: "Top Ranked",
    badgeColor: "#d4a017",
    featured: true,
    image: "assets/img/home-1/law/Symbiosis-Law-School-Pune.webp",
    courses: [
      { name: "LLB 5 Year", packageCost: "12.50L" },
      { name: "BBA LLB 5 Year", packageCost: "12.50L" }
    ]
  },
  {
    id: 2,
    name: "Kalinga Institute of Industrial Technology (KIIT Law)",
    shortName: "KIIT Law Bhubaneswar",
    location: "Bhubaneswar, Odisha",
    badge: "Deemed University",
    badgeColor: "#1a3c6e",
    featured: true,
    image: "assets/img/home-1/law/kiit.webp",
    courses: [
      { name: "BA LLB 5 Year", packageCost: "15.45L" },
      { name: "BBA LLB 5 Year", packageCost: "15.45L" }
    ]
  },
  {
    id: 3,
    name: "SRM Law School",
    shortName: "SRM Chennai",
    location: "Chennai, Tamil Nadu",
    badge: "Popular Choice",
    badgeColor: "#1a7a1a",
    featured: false,
    image: "assets/img/home-1/law/srm.webp",
    courses: [
      { name: "BA LLB 5 Year", packageCost: "8.18L" }
    ]
  },
  {
    id: 4,
    name: "Sinhgad Law College",
    shortName: "Sinhgad Pune",
    location: "Pune, Maharashtra",
    badge: "Private College",
    badgeColor: "#1a3c6e",
    featured: false,
    image: "assets/img/home-1/law/Sinhgad-Law-College.webp",
    courses: [
      { name: "BA LLB 5 Year", packageCost: "1.21L" },
      { name: "LLB 3 Year", packageCost: "88k" }
    ]
  },
  {
    id: 5,
    name: "Padmashree Dr. D. Y. Patil Law College",
    shortName: "DY Patil Law Pune",
    location: "Pune, Maharashtra",
    badge: "Top Ranked",
    badgeColor: "#d4a017",
    featured: true,
    image: "assets/img/home-1/law/Padmashree-Dr.-D.-Y.-Patil-Law-College-Pune.webp",
    courses: [
      { name: "BA LLB 5 Year", packageCost: "95k" },
      { name: "LLB 3 Year", packageCost: "69k" }
    ]
  },
  {
    id: 6,
    name: "Amity Law School Delhi",
    shortName: "Amity Delhi",
    location: "New Delhi, Delhi",
    badge: "Private University",
    badgeColor: "#1a3c6e",
    featured: false,
    image: "assets/img/home-1/law/amit-law-college-delhi.webp",
    courses: [
      { name: "BA LLB 5 Year", packageCost: "3.67L" }
    ]
  },
  {
    id: 7,
    name: "Amity Law School Pune",
    shortName: "Amity Pune",
    location: "Pune, Maharashtra",
    badge: "Private University",
    badgeColor: "#1a3c6e",
    featured: false,
    image: "assets/img/home-1/law/amit-law-college-pune.webp",
    courses: [
      { name: "BA LLB 5 Year", packageCost: "13.92L" }
    ]
  },
  {
    id: 8,
    name: "Bharath University Law School",
    shortName: "BIHER Chennai",
    location: "Chennai, Tamil Nadu",
    badge: "Deemed University",
    badgeColor: "#1a3c6e",
    featured: false,
    image: "assets/img/home-1/law/bharath-university-law-school-chennai.webp",
    courses: [
      { name: "BA LLB 5 Year", packageCost: "5.5L" },
      { name: "LLB 5 Year", packageCost: "7.5L" }
    ]
  },
  {
    id: 9,
    name: "Dr. M.G.R. Educational and Research Institute (Law Dept)",
    shortName: "MGR University Chennai",
    location: "Chennai, Tamil Nadu",
    badge: "Deemed University",
    badgeColor: "#1a3c6e",
    featured: false,
    image: "assets/img/home-1/law/mgr-university-law-school.webp",
    courses: [
      { name: "LLM 2 Year", packageCost: "40k" }
    ]
  },
  {
    id: 10,
    name: "Pondicherry University Law School",
    shortName: "Pondicherry University",
    location: "Pondicherry, Pondicherry",
    badge: "Central Department",
    badgeColor: "#1a3c6e",
    featured: false,
    image: "assets/img/home-1/law/pondichery-university-law-school-a-department-of-law.webp",
    courses: [
      { name: "LLM 2 Year", packageCost: "1.40L" }
    ]
  },
  {
    id: 11,
    name: "Modern Law College",
    shortName: "Modern Law Pune",
    location: "Pune, Maharashtra",
    badge: "Private College",
    badgeColor: "#1a3c6e",
    featured: false,
    image: "assets/img/home-1/law/modern-law-college-1.webp",
    courses: [
      { name: "BA LLB 5 Year", packageCost: "1.10L" },
      { name: "LLB 3 Year", packageCost: "69k" }
    ]
  },
  {
    id: 12,
    name: "Balaji Law College",
    shortName: "Balaji Law Pune",
    location: "Pune, Maharashtra",
    badge: "Private College",
    badgeColor: "#1a3c6e",
    featured: false,
    image: "assets/img/home-1/law/balaji-law-college-pune.webp",
    courses: [
      { name: "BA LLB 5 Year", packageCost: "1.21L" },
      { name: "LLB 3 Year", packageCost: "80k" }
    ]
  },
  {
    id: 13,
    name: "Savitribai Phule Pune University (Department of Law)",
    shortName: "SPPU Law Pune",
    location: "Pune, Maharashtra",
    badge: "State Department University",
    badgeColor: "#1a3c6e",
    featured: false,
    image: "assets/img/home-1/law/Department-of-Law.webp",
    courses: [
      { name: "LLM 2 Year", packageCost: "40k" }
    ]
  },
  {
    id: 14,
    name: "Saveetha School of Law",
    shortName: "Saveetha Chennai",
    location: "Chennai, Tamil Nadu",
    badge: "Top Ranked",
    badgeColor: "#d4a017",
    featured: false,
    image: "assets/img/home-1/law/saveetha-law-college-chennai.webp",
    courses: [
      { name: "BA LLB 5 Year", packageCost: "11.40L" },
      { name: "BBA LLB 5 Year", packageCost: "11.40L" }
    ]
  }
];