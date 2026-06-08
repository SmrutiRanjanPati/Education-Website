/* =============================================
   B.DS / M.DS DENTAL SCIENCES CENTRAL DATABASE
   ============================================= */

const DENTAL_PAGE_CONFIG = {
  title: "Top BDS / MDS Colleges in India 2026",
  courseTrack: "BDS / MDS Dental Sciences",
  stats: [
    { number: "300+", label: "Dental Colleges" },
    { number: "1L+", label: "Profiles Guided" },
    { number: "95%", label: "Allotment Index" },
    { number: "Free", label: "State counseling Map" }
  ]
};

const DENTAL_COLLEGES = [
  {
    id: 1,
    name: "Siddharth Institute of Dental Sciences",
    shortName: "Siddharth Begur",
    location: "Begur, Karnataka",
    fee: "₹ 11,00,000/-",
    image: "assets/img/home-1/mbbs/siddharth-t-begur-768x384.webp",
    badge: "Karnataka Choice",
    badgeColor: "#1e3a8a",
    highlights: ["Top Academic Track", "Modern Dental Simulation", "Excellent OPD Flow"],
    featured: true
  },
  {
    id: 2,
    name: "Hamdard Institute of Medical Sciences and Research (Dental Wing)",
    shortName: "Hamdard Delhi",
    location: "New Delhi, Delhi",
    fee: "₹ 12,00,000/-",
    image: "assets/img/home-1/mbbs/humdard-1-768x384.webp",
    badge: "Delhi Premier",
    badgeColor: "#b45309",
    highlights: ["Premium Capital Base", "Highly Equipped Hospital", "DCI Listed"],
    featured: true
  },
  {
    id: 3,
    name: "Rural Dental College of Pravara Medical Trust",
    shortName: "Rural Dental Loni",
    location: "Loni, Maharashtra",
    fee: "₹ 12,75,000/-",
    image: "assets/img/home-1/mbbs/rural-medical-collge-768x384.webp",
    badge: "Deemed University",
    badgeColor: "#15803d",
    highlights: ["Massive Rural Inflow", "Elite Maxillofacial Units", "Top Placements"],
    featured: false
  },
  {
    id: 4,
    name: "Kasturba College of Dental Sciences (KMC Manipal)",
    shortName: "KMC Dental Manipal",
    location: "Manipal, Karnataka",
    fee: "₹ 13,00,000/-",
    image: "assets/img/home-1/mbbs/Kasturba-Manipal-768x384.webp",
    badge: "Top Ranked",
    badgeColor: "#d4a017",
    highlights: ["NIRF Rank #1 Dental", "World-Class Prosthodontics", "Elite Research Cells"],
    featured: true
  },
  {
    id: 5,
    name: "Kasturba College of Dental Sciences (KMC Mangalore)",
    shortName: "KMC Dental Mangalore",
    location: "Mangalore, Karnataka",
    fee: "₹ 13,00,000/-",
    image: "assets/img/home-1/mbbs/Kasturba-Mangalore-768x384.webp",
    badge: "Deemed University",
    badgeColor: "#1e3a8a",
    highlights: ["Premium Coastal Labs", "Highly Advanced Orthodontics", "Excellent Infrastructure"],
    featured: false
  },
  {
    id: 6,
    name: "Sri Devaraj Urs Dental College",
    shortName: "SDUMC Dental Kolar",
    location: "Kolar, Karnataka",
    fee: "₹ 14,50,000/-",
    image: "assets/img/home-1/mbbs/Devaraj-Urs-Kolar-768x384.webp",
    badge: "Deemed University",
    badgeColor: "#1e3a8a",
    highlights: ["Expansive Teaching Base", "Modern Operative Clinics", "Optimal Stomatology"],
    featured: false
  },
  {
    id: 7,
    name: "AB Shetty Memorial Institute of Dental Sciences (KS Hegde)",
    shortName: "AB Shetty Mangalore",
    location: "Mangalore, Karnataka",
    fee: "₹ 14,50,000/-",
    image: "assets/img/home-1/mbbs/KS-Hegde-Mangalore-768x384.webp",
    badge: "Deemed University",
    badgeColor: "#1e3a8a",
    highlights: ["Nitte Group Component", "Advanced Implantology wings", "Global Alumni Network"],
    featured: false
  },
  {
    id: 8,
    name: "JSS Dental College and Hospital",
    shortName: "JSS Dental Mysore",
    location: "Mysore, Karnataka",
    fee: "₹ 14,72,000/-",
    image: "assets/img/home-1/mbbs/JSS-Mysore-768x384.webp",
    badge: "Top Ranked",
    badgeColor: "#b45309",
    highlights: ["Prestigious Heritage Frame", "Massive Daily Chair Turnover", "Excellent MDS Selection Rate"],
    featured: true
  },
  {
    id: 9,
    name: "MM College of Dental Sciences & Research",
    shortName: "MM Dental Ambala",
    location: "Ambala, Haryana",
    fee: "₹ 15,43,000/-",
    image: "assets/img/home-1/mbbs/MM-Ambala-Haryana-1-768x384.webp",
    badge: "Popular Choice",
    badgeColor: "#15803d",
    highlights: ["Largest Private Dental Wing", "Advanced Pedodontics Labs", "Comprehensive Housing"],
    featured: false
  },
  {
    id: 10,
    name: "KLE VK Institute of Dental Sciences",
    shortName: "KLE Dental Belgaum",
    location: "Belgaum, Karnataka",
    fee: "₹ 15,25,000/-",
    image: "assets/img/home-1/mbbs/Jawaharlal-Belgaum-768x384.webp",
    badge: "Deemed University",
    badgeColor: "#1e3a8a",
    highlights: ["State of the Art CAD-CAM Labs", "High Clinical Exposure Indices", "International Residencies"],
    featured: false
  },
  {
    id: 11,
    name: "Sri Siddhartha Dental College",
    shortName: "SSDC Tumkur",
    location: "Tumkur, Karnataka",
    fee: "₹ 15,65,000/-",
    image: "assets/img/home-1/mbbs/Siddhartha-Tumkur-768x384.webp",
    badge: "Deemed University",
    badgeColor: "#1e3a8a",
    highlights: ["Calm Residential Layout", "Highly Experienced Periodontists", "Predictable Selection Tracks"],
    featured: false
  },
  {
    id: 12,
    name: "KM Shah Dental College and Hospital",
    shortName: "KM Shah Vadodara",
    location: "Vadodara, Gujarat",
    fee: "₹ 15,95,000/-",
    image: "assets/img/home-1/mbbs/BK-Shah-Vadadora-768x384.webp",
    badge: "Deemed University",
    badgeColor: "#1e3a8a",
    highlights: ["Premium Endodontic Microscopes", "High Quality Inpatient Matrix", "Well Documented Research"],
    featured: false
  },
  {
    id: 13,
    name: "School of Dental Sciences - KIIT University",
    shortName: "KIIT Dental Bhubaneswar",
    location: "Bhubaneswar, Odisha",
    fee: "₹ 16,00,000/-",
    image: "assets/img/home-1/mbbs/kiit-768x384.webp",
    badge: "Deemed University",
    badgeColor: "#1e3a8a",
    highlights: ["Elite Corporate Campus Space", "Advanced Laser Dentistry Modules", "100% On-Campus Allotments"],
    featured: false
  },
  {
    id: 14,
    name: "Yenepoya Dental College",
    shortName: "Yenepoya Dental Mangalore",
    location: "Mangalore, Karnataka",
    fee: "₹ 16,00,000/-",
    image: "assets/img/home-1/mbbs/Yenepoya-Mangalore-768x384.webp",
    badge: "Deemed University",
    badgeColor: "#1e3a8a",
    highlights: ["Digital Oral Radiography Setup", "Elite Infrastructure Footprint", "Hi-Tech Virtual Class Ecosystems"],
    featured: false
  },
  {
    id: 15,
    name: "BLDE University Dental College",
    shortName: "BLDE Dental Bijapur",
    location: "Bijapur, Karnataka",
    fee: "₹ 17,00,000/-",
    image: "assets/img/home-1/mbbs/BLDE-Bijapur-768x384.webp",
    badge: "Deemed University",
    badgeColor: "#1e3a8a",
    highlights: ["Stable Regional Patient Base", "Affordable Secondary Overhead Costing", "Solid Placement Tracking"],
    featured: false
  },
  {
    id: 16,
    name: "MGM Dental College and Hospital",
    shortName: "MGM Dental Navi Mumbai",
    location: "Navi Mumbai, Maharashtra",
    fee: "₹ 20,00,000/-",
    image: "assets/img/home-1/mbbs/MGM-Navi-Mumbai-768x384.webp",
    badge: "Deemed University",
    badgeColor: "#1e3a8a",
    highlights: ["Strategic Metropolitan Location", "Advanced Oral Pathology Labs", "Excellent PG Tracks Success"],
    featured: false
  },
  {
    id: 17,
    name: "MGM Dental College (Aurangabad Campus)",
    shortName: "MGM Dental Aurangabad",
    location: "Aurangabad, Maharashtra",
    fee: "₹ 20,00,000/-",
    image: "assets/img/home-1/mbbs/MGM-Aurangabad-768x384.webp",
    badge: "Deemed University",
    badgeColor: "#1e3a8a",
    highlights: ["Heavy Daily Outpatient Flow", "Premium Ceramic Prosthetics Labs", "Elite Library Frameworks"],
    featured: false
  },
  {
    id: 18,
    name: "Dr. D. Y. Patil Dental College and Hospital",
    shortName: "DY Patil Dental Pune",
    location: "Pune, Maharashtra",
    fee: "₹ 22,00,000/-",
    image: "assets/img/home-1/mbbs/DY-Patil-Pune-768x384.webp",
    badge: "Deemed University",
    badgeColor: "#1e3a8a",
    highlights: ["Ultra Elite Medical Infrastructure", "Advanced CBCT Imaging Center", "Global Fellowship Direct Pathways"],
    featured: false
  },
  {
    id: 19,
    name: "Rajarajeshwari Dental College and Hospital",
    shortName: "RRDCH Dental Bangalore",
    location: "Bengalaru, Karnataka",
    fee: "₹ 22,50,000/-",
    image: "assets/img/home-1/mbbs/Raja-Rajeshwari-Medical-College-and-Hospital-Bangalore-768x384.webp",
    badge: "Deemed University",
    badgeColor: "#1e3a8a",
    highlights: ["Massive Local Chair Flow Volume", "MoE Recognized Center of Excellence", "High Tech Campus Layout"],
    featured: false
  },
  {
    id: 20,
    name: "Sree Balaji Dental College and Hospital",
    shortName: "SBDCH Dental Chennai",
    location: "Chennai, Tamil Nadu",
    fee: "₹ 24,50,000/-",
    image: "assets/img/home-1/mbbs/Sree-Balaji-Medical-College-and-Hospital-SBMCH-Chennai-768x384.webp",
    badge: "Deemed University",
    badgeColor: "#1e3a8a",
    highlights: ["Massive Patient Density Registers", "Highly Recognized Urban Base", "Advanced Practical Internships Module"],
    featured: false
  }
];