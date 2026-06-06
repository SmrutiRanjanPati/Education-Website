/* =============================================
   BLOG DATA - Add / Edit your blogs here
   Each blog needs:
   - id         : unique number
   - title      : blog heading
   - category   : tag shown on card
   - date       : publish date
   - author     : author name
   - image      : path to image (put images in assets/img/blogs/)
   - excerpt    : short summary shown on listing page (1-2 lines)
   - paragraphs : array of paragraph strings (2-3 paragraphs)
   ============================================= */

const BLOG_DATA = [
  {
    id: 1,
    title: "How to Choose the Right Medical College in India",
    category: "MBBS",
    date: "May 18, 2026",
    author: "Career Future Team",
    image: "assets/img/home-1/mbbs/ACS-Medical-College-and-Hospital-Chennai-logo-768x384.webp",
    excerpt: "Choosing the right medical college is one of the most important decisions of your life. Here's a complete guide to help you navigate the options.",
    paragraphs: [
      "Selecting a medical college in India involves much more than just rankings. You need to consider factors like faculty quality, hospital infrastructure, clinical exposure, and hostel facilities. Top institutions like AIIMS, JIPMER, and Kasturba Medical College have consistently produced world-class doctors because of their holistic approach to medical education.",
      "Your NEET score will largely determine which colleges you are eligible for. However, don't overlook state quota seats and management quota options if your score falls slightly below the cutoff of your dream institution. Many private medical colleges offer excellent infrastructure and faculty that rival government colleges.",
      "Always visit the campus before making your final decision. Speak with current students, assess the OPD patient load (which determines your clinical exposure), and verify that the college is recognized by the National Medical Commission (NMC). A college with strong alumni network and placement support can shape your entire career."
    ]
  },
  {
    id: 2,
    title: "MBA Admissions 2026: Everything You Need to Know",
    category: "MBA",
    date: "May 12, 2026",
    author: "Career Future Team",
    image: "assets/img/blogs/mba-admissions.webp",
    excerpt: "From CAT scores to GD-PI rounds, we break down the complete MBA admission process for top B-schools in India for the 2026 batch.",
    paragraphs: [
      "The MBA admission season in India is highly competitive, with over 2 lakh students appearing for CAT every year. The top IIMs - Ahmedabad, Bangalore, Calcutta, and Lucknow - typically require a CAT percentile above 99 for a call. However, institutes like XLRI, FMS Delhi, and MDI Gurgaon offer equally rewarding programs with slightly different selection criteria.",
      "Beyond CAT scores, most premier B-schools evaluate candidates on academic consistency, work experience, extracurricular achievements, and performance in Group Discussions and Personal Interviews. A well-rounded profile often outweighs a marginally higher test score. Building your profile two years before applying significantly improves your chances.",
      "Choosing between a 1-year and 2-year MBA program is another critical decision. Programs like ISB Hyderabad's PGP or IIM Ahmedabad's PGPX are designed for experienced professionals, while the traditional 2-year PGP suits fresh graduates. Evaluate ROI, average placement salaries, and industry connections before committing to any program."
    ]
  },
  {
    id: 3,
    title: "BSc Agriculture: Career Scope and Top Colleges in 2026",
    category: "BSC AG",
    date: "May 5, 2026",
    author: "Career Future Team",
    image: "assets/img/blogs/bsc-agriculture.webp",
    excerpt: "Agriculture is one of India's fastest-growing sectors. Discover the career opportunities, top colleges, and salary potential for BSc Agriculture graduates.",
    paragraphs: [
      "BSc Agriculture has emerged as one of the most promising undergraduate programs in India, driven by the government's focus on agri-tech, organic farming, and rural development. Graduates can pursue careers in agricultural banking, research institutions, agri-startups, or government services through competitive exams like ARS-NET and State PSC agricultural services.",
      "Top institutions for BSc Agriculture include Punjab Agricultural University (PAU), G.B. Pant University of Agriculture and Technology, Tamil Nadu Agricultural University (TNAU), and Acharya N.G. Ranga Agricultural University. These universities offer excellent research facilities, industry tie-ups, and placement support with companies like ITC, Mahindra Agri, and Bayer CropScience.",
      "The starting salary for BSc Agriculture graduates ranges from ₹3.5 to ₹6 LPA in private sector roles, with government positions offering competitive pay scales and job security. Pursuing an MSc Agriculture or MBA in Agribusiness after your undergraduate degree can significantly boost your earning potential and open doors to international opportunities in organizations like FAO and World Bank."
    ]
  },
  {
    id: 4,
    title: "LLB vs BA LLB: Which Law Program Should You Choose?",
    category: "LAW",
    date: "April 28, 2026",
    author: "Career Future Team",
    image: "assets/img/blogs/law-program.webp",
    excerpt: "Confused between a 3-year LLB and a 5-year integrated BA LLB? We compare both programs to help you make the right choice for your legal career.",
    paragraphs: [
      "The choice between a 3-year LLB and a 5-year integrated BA LLB (or BBA LLB, B.Com LLB) depends largely on when you decide to pursue law. If you are a Class 12 student with a clear interest in the legal profession, the 5-year integrated program at top National Law Universities (NLUs) is the gold standard. The CLAT examination is your gateway to these prestigious institutions.",
      "For graduates from other disciplines who discover a passion for law later, the 3-year LLB program is ideal. Universities like Delhi University's Faculty of Law, Symbiosis Law School, and Amity Law School offer excellent 3-year programs with strong moot court traditions and internship pipelines with leading law firms and courts.",
      "Career paths after law are incredibly diverse. You can practice as an advocate in district courts, High Courts, or the Supreme Court; join a corporate law firm; work in-house for a company's legal department; pursue judicial services; or enter academia. The Bar Council of India requires all law graduates to enroll with their respective State Bar Council before practicing - a crucial step that many overlook during their academic years."
    ]
  },
  {
    id: 5,
    title: "BDS to MDS: Complete Guide to Dental Education in India",
    category: "BDS/MDS",
    date: "April 20, 2026",
    author: "Career Future Team",
    image: "assets/img/blogs/dental-education.webp",
    excerpt: "From NEET cutoffs to specialisation options, here is your definitive guide to dental education in India and building a successful dental career.",
    paragraphs: [
      "Bachelor of Dental Surgery (BDS) is a 5-year undergraduate program including a mandatory one-year internship. The course covers subjects like oral anatomy, dental materials, oral surgery, orthodontics, and prosthodontics. Admission is through NEET, and top colleges include Maulana Azad Institute of Dental Sciences, Manipal College of Dental Sciences, and SRM Dental College.",
      "After completing BDS, graduates can either start practising independently, work in dental clinics or hospitals, or pursue MDS (Master of Dental Surgery) for specialisation. MDS specialisations include Orthodontics, Oral and Maxillofacial Surgery, Periodontics, Prosthodontics, and Endodontics. Specialised dentists command significantly higher fees and are in high demand in metro cities.",
      "The dental profession in India is growing rapidly with increasing awareness about oral health. A BDS graduate can expect starting earnings of ₹3-5 LPA in institutional roles, while a self-practising dentist in an urban area can earn ₹8-15 LPA within 3-5 years of experience. With the right location and skills, dental entrepreneurship can be highly rewarding."
    ]
  },
  {
    id: 6,
    title: "B.Tech Admissions Through JEE: Strategy for 2026",
    category: "B-TECH",
    date: "April 14, 2026",
    author: "Career Future Team",
    image: "assets/img/home-1/news/soa-ins-1024x505.webp",
    excerpt: "Cracking JEE Main and Advanced requires more than hard work - it demands a smart strategy. Here's how to plan your preparation for B.Tech admissions in 2026.",
    paragraphs: [
      "JEE Main 2026 will be conducted in two sessions, and your best score across both sessions will be considered for admission to NITs, IIITs, and other centrally funded technical institutes. For IIT admissions, you need to qualify JEE Advanced, which is among the toughest entrance examinations in the world. Only the top 2.5 lakh JEE Main qualifiers are eligible to appear for JEE Advanced.",
      "Subject-wise, Physics and Mathematics form the backbone of JEE preparation. Chemistry, though often underestimated, can be a scoring subject that significantly boosts your overall percentile. Consistent practice of previous year papers, mock tests, and concept clarity over rote learning is the recipe followed by most top rankers.",
      "Beyond IITs and NITs, private institutions like BITS Pilani, VIT Vellore, Manipal Institute of Technology, and SRM University offer excellent B.Tech programs with strong placement records. These colleges conduct their own entrance exams (BITSAT, VITEEE, MET) and are excellent alternatives for students who narrowly miss the IIT/NIT cutoffs. Don't limit your options - explore all avenues."
    ]
  },
  {
    id: 7,
    title: "B.Tech Admissions Through JEE: Strategy for 2026",
    category: "B-TECH",
    date: "April 14, 2026",
    author: "Career Future Team",
    image: "assets/img/home-1/MBA/Pune-Institute-of-Business-Management-Pune.webp",
    excerpt: "Cracking JEE Main and Advanced requires more than hard work - it demands a smart strategy. Here's how to plan your preparation for B.Tech admissions in 2026.",
    paragraphs: [
      "JEE Main 2026 will be conducted in two sessions, and your best score across both sessions will be considered for admission to NITs, IIITs, and other centrally funded technical institutes. For IIT admissions, you need to qualify JEE Advanced, which is among the toughest entrance examinations in the world. Only the top 2.5 lakh JEE Main qualifiers are eligible to appear for JEE Advanced.",
      "Subject-wise, Physics and Mathematics form the backbone of JEE preparation. Chemistry, though often underestimated, can be a scoring subject that significantly boosts your overall percentile. Consistent practice of previous year papers, mock tests, and concept clarity over rote learning is the recipe followed by most top rankers.",
      "Beyond IITs and NITs, private institutions like BITS Pilani, VIT Vellore, Manipal Institute of Technology, and SRM University offer excellent B.Tech programs with strong placement records. These colleges conduct their own entrance exams (BITSAT, VITEEE, MET) and are excellent alternatives for students who narrowly miss the IIT/NIT cutoffs. Don't limit your options - explore all avenues."
    ]
  }
];
