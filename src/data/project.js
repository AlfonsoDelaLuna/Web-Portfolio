// src/data/project.js
const projectsData = [
  {
    id: 'stier-coplan',
    title: 'STIER COPLAN - Event Reservation System',
    heroImage: '/images/COPLAN_bg.png', // Make sure you have this image
    overview: 'STIER COPLAN is a web-based event reservation system developed using Java and Firebase...',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Java', 'Firebase (Firestore)', 'Android'],
    githubRepoLink: 'https://github.com/AlfonsoDelaLuna/Guidance_System',
    // ... other details like features, challenges, etc.
  },
  {
    id: 'clinic-management-system', // new slug-like id
    title: 'Clinic Management System',
    heroImage: '/images/Clinic_Background_New.png', // you'll need an image for this
    overview: 'A web-based management system that simplifies the conversion of paper-based to digital health records. It assists nurses with documenting the patient\'s condition, prescribing medication, and storing information for later printing or downloading.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    githubRepoLink: 'https://github.com/AlfonsoDelaLuna/Clinic_Management_System',
    // You can add features, challenges, etc. later
    features: ['Digital Health Records', 'Prescription Management', 'Data Export'],
    challenges: [],
    outcomes: [],
  },
  {
    id: 'drugstore-management-system',
    title: 'Drugstore Management System',
    heroImage: '/images/Drugstore_bg.png',
    overview: 'A web-based inventory management system that streamlines the process of entering medications from paper to digital formats. The administrator can download and print data from it, and it assists the nurse in recording the medications that are available and their expiration dates.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    githubRepoLink: 'https://github.com/AlfonsoDelaLuna/Drugstore_Inventory',
    features: ['Inventory Tracking', 'Expiration Date Alerts', 'Data Export'],
    challenges: [],
    outcomes: [],
  },
  {
    id: 'guidance-management-system',
    title: 'Guidance Management System',
    heroImage: '/images/Guidance_bg.png',
    overview: 'A web-based inventory management system that tracks the use of consultation forms during the academic year, adds students, and maintains student information.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    githubRepoLink: 'https://github.com/AlfonsoDelaLuna/Guidance_Management_System',
    features: ['Student Information Management', 'Consultation Form Tracking', 'Reporting'],
    challenges: [],
    outcomes: [],
  },
  {
    id: 'library-management-system',
    title: 'Library Management System',
    heroImage: '/images/Library_bg.png',
    overview: 'A web-based management system that keeps track of students who access the library. It assists the librarian in keeping track of how frequently a student visits the library and storing their login sheet for authentication.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    githubRepoLink: 'https://github.com/AlfonsoDelaLuna/Library_Management_System',
    features: ['Student Login Tracking', 'Visit Frequency Reports', 'Authentication'],
    challenges: [],
    outcomes: [],
  },
  {
    id: 'transaction-management-system',
    title: 'Transaction Management System',
    heroImage: '/images/Transaction_bg.png',
    overview: 'This web-based system assists employees in taking orders from clients and administrators in monitoring daily, monthly, and annual revenue as well as the most lucrative product.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    githubRepoLink: 'https://github.com/AlfonsoDelaLuna/Transaction-System',
    features: ['Order Management', 'Revenue Tracking', 'Product Analysis'],
    challenges: [],
    outcomes: [],
  }
];

export default projectsData;