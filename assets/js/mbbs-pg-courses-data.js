/* =========================================================
   MBBS POSTGRADUATE SPECIALIZATION DATASPACE CONFIG MODULE
   ========================================================= */

const MBBS_PG_CONFIG = {
  course:"MBBS PG",
  stats: [
    { number: "35+", label: "Core Specialties" },
    { number: "15K+", label: "PG Seats Monitored" },
    { number: "98.4%", label: "Allocation Index" },
    { number: "Elite", label: "Stipend Assured" }
  ]
};

const MBBS_PG_DATASET = [
  {
    id: 1,
    name: "MD Pathology & Microbiology",
    type: "Clinical Pathology Track",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-Pathology-Microbiology-300x225.webp",
    seatDensity: "High Availability",
    highlights: ["Diagnostic Center Core", "Lab Operations Control", "Research Centric Line"],
    featured: true
  },
  {
    id: 2,
    name: "MD Emergency Medicine",
    type: "High Acute Critical Care",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/medicines1.webp",
    seatDensity: "Competitive Matrix",
    highlights: ["Trauma Room Command", "Rapid Skill Track", "High Placement Yield"],
    featured: true
  },
  {
    id: 3,
    name: "MD Research & Development",
    type: "Paraclinical Advanced Track",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-R-D-300x225.webp",
    seatDensity: "Selective Allocations",
    highlights: ["Pharmaceutical R&D Labs", "Global Academic Vector", "Investigational Tracks"],
    featured: false
  },
  {
    id: 4,
    name: "MD Anesthesiology",
    type: "Critical Care Supportive Track",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/md-anesthesiology.webp",
    seatDensity: "High Year-Round Demand",
    highlights: ["Operation Theater Core", "ICU Intensive Rotations", "Interventional Pain Track"],
    featured: false
  },
  {
    id: 5,
    name: "MD Anatomy",
    type: "Non-Clinical Foundation Track",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/md-anatomy.webp",
    seatDensity: "Stable Allocation Tiers",
    highlights: ["Academic Faculty Track", "Morphological Systems Research", "Low Stress Work Profile"],
    featured: false
  },
  {
    id: 6,
    name: "MD Biochemistry (Non-Clinical Credit)",
    type: "Laboratory Diagnostics Line",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/md-biochemistry-non-clinical-credit.webp",
    seatDensity: "Accessible Thresholds",
    highlights: ["Metabolic Vector Tracking", "Endocrine Profiling Systems", "Quality Assurance Control"],
    featured: false
  },
  {
    id: 7,
    name: "MD Biophysics (Non-Clinical)",
    type: "Structural Biology Specialization",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/md-biophysics-non-clinical.webp",
    seatDensity: "Niche Research Selections",
    highlights: ["Molecular Mechanics Focus", "Elite Diagnostic Engineering", "Advanced Analytical Tracks"],
    featured: false
  },
  {
    id: 8,
    name: "MD Community Medicine",
    type: "Preventive & Public Health Line",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/md-community-medicine.webp",
    seatDensity: "Abundant Intake Matrix",
    highlights: ["WHO Strategic Programs", "Epidemiological Studies", "Healthcare Group Management"],
    featured: false
  },
  {
    id: 9,
    name: "MD Dermatology",
    type: "Premium Pure Clinical Line",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/md-dermatology.webp",
    seatDensity: "Ultra Competitive Cutting Edge",
    highlights: ["Highest Choice Cutoff", "Cosmetology Specializations", "Elite Independent Practice"],
    featured: true
  },
  {
    id: 10,
    name: "MD Forensic Medicine & Toxicology",
    type: "Medico-Legal Expert Track",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-Forensic-Medicine-Forensic-Medicine-Toxicology.webp",
    seatDensity: "Predictable Thresholds",
    highlights: ["State Jurisprudence Labs", "Post Mortem Analysis", "Toxicology Diagnostics Desk"],
    featured: false
  },
  {
    id: 11,
    name: "MD General Medicine",
    type: "Core Clinical Foundation Line",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-General-Medicine.webp",
    seatDensity: "High Choice Load",
    highlights: ["Tertiary IPD Ward Management", "Super Specialty Escalations", "Intense Diagnostics Control"],
    featured: true
  },
  {
    id: 12,
    name: "MD Hospital Administration",
    type: "Medical Governance Executive",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-Hospital-Administration.webp",
    seatDensity: "Corporate Track Matrix",
    highlights: ["Clinical Quality Parameters", "Operational Resource Mapping", "Elite Strategic Controls"],
    featured: false
  },
  {
    id: 13,
    name: "MD Health Administration",
    type: "Public Policy Operations Desk",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-Health-Administration.webp",
    seatDensity: "Government Track Paths",
    highlights: ["National Health Registries", "System Wide Auditing", "Organizational Oversight"],
    featured: false
  },
  {
    id: 14,
    name: "MD Lab Medicine",
    type: "Integrated Diagnostic Systems",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-Lab-Medicine.webp",
    seatDensity: "Highly Practical Flow",
    highlights: ["Cross Disciplinary Path Automation", "Clinical Sample Controls", "Diagnostic Asset Management"],
    featured: false
  },
  {
    id: 15,
    name: "MD Microbiology (Non-Clinical)",
    type: "Infectious Pathogens Control",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-Microbiology-non-clinical-.webp",
    seatDensity: "Stable Allocation Tiers",
    highlights: ["Bacterial Culture Assays", "Virology Lab Directorship", "Hospital Infection Monitoring"],
    featured: false
  },
  {
    id: 16,
    name: "MD Nuclear Medicine",
    type: "Advanced Targeted Theranostics",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-Nuclear-Medicine.webp",
    seatDensity: "Premium Niche Specialization",
    highlights: ["PET CT Diagnostic Scans", "Radioisotope Molecular Therapy", "High Technology Oncology Connect"],
    featured: true
  },
  {
    id: 17,
    name: "MD Obstetrics & Gynecology",
    type: "Maternal Fetal Medicine Specialization",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-Obstetrics-Gynecology.webp",
    seatDensity: "High Volume Clinical Pressure",
    highlights: ["Labor Room Directorship", "Antenatal Critical Care", "Reproductive Medicine Paths"],
    featured: false
  },
  {
    id: 18,
    name: "MD Ophthalmology",
    type: "Ophthalmic Therapeutics Tracker",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-Ophthalmology.webp",
    seatDensity: "Stable Cutoff Indexes",
    highlights: ["Refractive Disease Controls", "Retinal Pathologies Mapping", "Clinical Visual Sciences"],
    featured: false
  },
  {
    id: 19,
    name: "MD Pediatrics",
    type: "Neonatal & Child Health Core",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-Pediatrics.webp",
    seatDensity: "Elite Competitive Category",
    highlights: ["NICU/PICU Lifecycle Support", "Developmental Disorder Audits", "High Choice Career Placements"],
    featured: true
  },
  {
    id: 20,
    name: "MD Pathology",
    type: "Paraclinical Histopathology Core",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-Pathology.webp",
    seatDensity: "Highly Predictable Windows",
    highlights: ["Onco histopathology Biopsies", "Cytogenetic Evaluation Systems", "Lab Automation Supervision"],
    featured: false
  },
  {
    id: 21,
    name: "MD Dermatology, Venereology & Leprosy",
    type: "Comprehensive Dermato Leprological Track",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-Dermatology-Venereology-Leprosy.webp",
    seatDensity: "Top Bracket CUTOFF Metrics",
    highlights: ["Cutaneous Manifestations Systems", "Clinical Venereology Assays", "Laser Cosmetology Systems"],
    featured: false
  },
  {
    id: 22,
    name: "MD Pharmacology",
    type: "Therapeutics & Trial Monitoring",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/Pharmacology-300x225.webp",
    seatDensity: "Accessible Windows",
    highlights: ["Clinical Trial Architecture", "Pharmacovigilance Platforms", "Corporate Biotech Directorship"],
    featured: false
  },
  {
    id: 23,
    name: "MD Physiology",
    type: "Functional Systems Evaluation",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-Physiology.webp",
    seatDensity: "Baseline Stable Package",
    highlights: ["Electrophysiology Assays", "Neurofunctional Data Tracking", "Medical Academic Careers"],
    featured: false
  },
  {
    id: 24,
    name: "MD Physical Medicine & Rehabilitation",
    type: "Restorative Clinical Medicine",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-Physical-Medicine-Rehabilitation.webp",
    seatDensity: "Emerging Choice Vector",
    highlights: ["Neurorehabilitation Postings", "Spinal Cord Trauma Care", "Prosthetic Design Frameworks"],
    featured: false
  },
  {
    id: 25,
    name: "MD Psychiatry",
    type: "Behavioral Sciences & Neuropsychiatry",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/Psychiatry.webp",
    seatDensity: "Steadily Rising Cutoffs",
    highlights: ["De addiction Center Protocols", "Child Psychoanalysis Clinics", "Therapeutic Brain Interventions"],
    featured: false
  },
  {
    id: 26,
    name: "MD Radio Diagnosis",
    type: "Premium Diagnostic Interventional Imaging",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-Radio-Diagnosis.webp",
    seatDensity: "Peak National Ranking Demands",
    highlights: ["3T MRI/Multi Slice CT Processing", "Interventional Radiology Steps", "High Ceiling Capital Returns"],
    featured: true
  },
  {
    id: 27,
    name: "MD Radiology",
    type: "Core Radiographic Diagnostics",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-Radiology.webp",
    seatDensity: "Top Structural Tier Priority",
    highlights: ["Advanced Sonography Formats", "Cross Sectional Matrix Scans", "Hospital Imaging Administration"],
    featured: false
  },
  {
    id: 28,
    name: "MD Radiotherapy",
    type: "Radiation Clinical Oncology Core",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/MD-Radiotherapy.webp",
    seatDensity: "Strong High Value Placement",
    highlights: ["Linear Accelerator Configurations", "Brachytherapy Dose Calculations", "Solid Tumor Multi Modality Care"],
    featured: false
  },
  {
    id: 29,
    name: "MD Tuberculosis & Respiratory Diseases",
    type: "Pulmonology & Sleep Medicine",
    categoryBadge: "MBBS MD",
    badgeColor: "#1e3a8a",
    image: "assets/img/home-1/mbbs-pg/Tuberculosis-Respiratory-Diseases-Medicine.webp",
    seatDensity: "High Choice Load Vectors",
    highlights: ["Bronchoscopy Lab Interventions", "Sleep Apnea Diagnostic Clinics", "Critical Allergy Management"],
    featured: false
  },
  
  /* --- SURGICAL BRANCHES (MS) --- */
  {
    id: 30,
    name: "MS Obstetrics and Gynecology",
    type: "Surgical Operative Gynecology",
    categoryBadge: "MBBS MS",
    badgeColor: "#b45309",
    image: "assets/img/home-1/mbbs-pg/MD-Obstetrics-Gynecology.webp",
    seatDensity: "Heavy Duty Load Factor",
    highlights: ["Laparoscopic Hysterectomies", "Urogynecology Pelvic Repairs", "High Risk Surgical Postings"],
    featured: true
  },
  {
    id: 31,
    name: "MS Orthopedics",
    type: "Bone, Joint & Trauma Surgery",
    categoryBadge: "MBBS MS",
    badgeColor: "#b45309",
    image: "assets/img/home-1/mbbs-pg/Orthopedics.webp",
    seatDensity: "Top Surgical Request Choice",
    highlights: ["Arthroplasty Joint Replacements", "Complex Spine Realignment", "Sports Arthroscopic Interventions"],
    featured: true
  },
  {
    id: 32,
    name: "MS Anatomy",
    type: "Structural Surgical Foundation",
    categoryBadge: "MBBS MS",
    badgeColor: "#b45309",
    image: "assets/img/home-1/mbbs-pg/Anatomy.webp",
    seatDensity: "Open Access Index",
    highlights: ["Advanced Cadaveric Dissection", "Surgical Anatomy Modeling", "Higher Research Tiers"],
    featured: false
  },
  {
    id: 33,
    name: "MS ENT",
    type: "Otolaryngology Head & Neck Surgery",
    categoryBadge: "MBBS MS",
    badgeColor: "#b45309",
    image: "assets/img/home-1/mbbs-pg/ENT.webp",
    seatDensity: "Stable Selection Windows",
    highlights: ["Microscopic Ear Interventions", "Endoscopic Sinus Clearance", "Cochlear Implant Programs"],
    featured: false
  },
  {
    id: 34,
    name: "MS General Surgery",
    type: "Core Operative Medicine Engine",
    categoryBadge: "MBBS MS",
    badgeColor: "#b45309",
    image: "assets/img/home-1/mbbs-pg/General-Surgery.webp",
    seatDensity: "High Intake Load Limits",
    highlights: ["Abdominal Laparoscopy Suites", "Emergency Trauma Laparotomies", "Solid Foundation to Super Specialty MCh"],
    featured: true
  },
  {
    id: 35,
    name: "MS Ophthalmology",
    type: "Microsurgical Eye Restoration",
    categoryBadge: "MBBS MS",
    badgeColor: "#b45309",
    image: "assets/img/home-1/mbbs-pg/Ophthalmology.webp",
    seatDensity: "Competitive Balanced Choice",
    highlights: ["Phacoemulsification Cataract Operations", "Coronary Keratoplasty Transplants", "Microscopic Interventions Skills"],
    featured: false
  },
  {
    id: 36,
    name: "MS Anesthesia",
    type: "Surgical Operative Pain Controls",
    categoryBadge: "MBBS MS",
    badgeColor: "#b45309",
    image: "assets/img/home-1/mbbs-pg/Anesthesia.webp",
    seatDensity: "High Volume Requirements",
    highlights: ["Advanced Nerve Block Blocks", "Neuroanesthesia Protocols", "Pediatric Resuscitation Training"],
    featured: false
  },
  {
    id: 37,
    name: "MS Medicine",
    type: "Comprehensive Therapeutic Surgical Analytics",
    categoryBadge: "MBBS MS",
    badgeColor: "#b45309",
    image: "assets/img/home-1/mbbs-pg/MS-Medicine.webp",
    seatDensity: "Niche Specialized Formats",
    highlights: ["Operative Diagnostics Matrix", "Invasive Internal Tracking", "Structural Case Processing"],
    featured: false
  },
  {
    id: 38,
    name: "MS Neurosurgery",
    type: "Advanced Cerebrospinal Surgical Core",
    categoryBadge: "MBBS MS",
    badgeColor: "#b45309",
    image: "assets/img/home-1/mbbs-pg/Neurosurgery.webp",
    seatDensity: "Elite Long Term Commitment Track",
    highlights: ["Microvascular Aneurysm Clipping", "Stereotactic Brain Tumor Resection", "Complex Spinal Fusion Workflows"],
    featured: true
  },
  {
    id: 39,
    name: "MS Traumatology and Surgery",
    type: "Acute Trauma Emergency Architecture",
    categoryBadge: "MBBS MS",
    badgeColor: "#b45309",
    image: "assets/img/home-1/mbbs-pg/Traumatology-and-Surgery.webp",
    seatDensity: "High Alert High Reward Option",
    highlights: ["Polytrauma Damage Control Teams", "Emergency Vascular Grafting", "High Capacity Critical Stabilization"],
    featured: false
  },
  
  /* --- DUAL INTERACTION INTEGRATED SPECIALTIES (MD/MS) --- */
  {
    id: 40,
    name: "MD/MS Neurosurgery",
    type: "Direct 6 Year Integrated Super Specialty",
    categoryBadge: "MBBS MD/MS",
    badgeColor: "#6d28d9",
    image: "assets/img/home-1/mbbs-pg/MS-MDAnatomy.webp",
    seatDensity: "Extremely Restricted High Choice Allocation",
    highlights: ["Skips Intermediate MS Phase", "Immediate High Tier Clinical Authority", "Intense Research Residency Mandate"],
    featured: true
  },
  {
    id: 41,
    name: "MD/MS Ophthalmology",
    type: "Integrated Eye Sciences Platform",
    categoryBadge: "MBBS MD/MS",
    badgeColor: "#6d28d9",
    image: "assets/img/home-1/mbbs-pg/MD-Ophthalmology.webp",
    seatDensity: "Stable Selection Matrix",
    highlights: ["Surgical Medical Balance Track", "High Fidelity Laser Labs Modules", "Accelerated Fellowship Options"],
    featured: false
  },
  {
    id: 42,
    name: "MD/MS Obstetrics & Gynecology",
    type: "Dual Track Maternal Operative Sciences",
    categoryBadge: "MBBS MD/MS",
    badgeColor: "#6d28d9",
    image: "assets/img/home-1/mbbs-pg/Obstetrics-and-Gynecology.webp",
    seatDensity: "High Competitive Demand Trends",
    highlights: ["Endocrine & Infertility Surgical Modules", "Fetal Ultrasound Interventions Suite", "Elite Structural Hospital Alignment"],
    featured: false
  }
];