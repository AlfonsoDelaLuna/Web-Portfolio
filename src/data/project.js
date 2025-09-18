// src/data/project.js
const projectsData = [
  {
    id: 'stier-coplan',
    title: 'STIER COPLAN: Event Reservation System',
    heroImage: '/images/COPLAN_bg.png', // Make sure you have this image
    minioverview: 'STIER COPLAN is a web-based event reservation system developed using Java and Firebase...',
    overview: 'STIER COPLAN is a web-based event reservation system developed using Java and Firebase...',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Java', 'Firebase (Firestore)', 'Android'],
    githubRepoLink: 'https://github.com/AlfonsoDelaLuna/Guidance_System',
    // ... other details like features, challenges, etc.
  },
  {
    id: 'clinic-management-system', // new slug-like id
    title: 'Clinic Management System',
    heroImage: '/images/Clinic_Background_New.png', // you'll need an image for this
    minioverview: 'This web-based Clinic Management System is designed to help school nurses efficiently record and manage the health information of students, faculty, and staff.',
    overview: 'This web-based Clinic Management System is designed to help school nurses efficiently record and manage the health information of students, faculty, and staff. It replaces the manual paper-based process with a secure and streamlined digital solution, allowing for better patient care, inventory management, and data analysis.',
    problem: 'The traditional process of using paper boards and storage drawers for clinic records presents several challenges:',
    problem1: 'Manual Documentation - Time-consuming, prone to errors, and records can be lost or damaged.',
    problem2: 'Limited Accessibility - Only available in physical form, making it difficult for nurses to access and update records.',
    problem3: 'Inventory Tracking Problems - Inefficient tracking of medicine stock and expiration dates, leading to shortages or waste.',
    problem4: 'Delayed Response to Emergencies - Slow access to patient history hinders immediate care.',
    problem5: 'Limited Data Analysis - Difficulty in identifying health trends and justifying budget needs.',
    problem6: 'Privacy Concerns - Paper records lack the security required for confidential health information.',
    problem7: 'Dependence on Nurse’s Availability - Access to records is disrupted if the nurse is absent.',
    featuresList: ['Digital Health Records', 'Prescription Management', 'Data Export'],
    featuresInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus volutpat nisi ac commodo. Nam pretium iaculis augue imperdiet suscipit. Suspendisse tellus ipsum, tincidunt non aliquam et, pharetra vitae sapien. Pellentesque nec sem in dui varius fermentum. Maecenas convallis interdum turpis, quis commodo turpis imperdiet sit amet. Cras porta, dapibus metus ac, ultrices dictum lectus. Sed mollis orci sit amet tincidunt molestie. Nunc justo sem, venenatis in dui vitae, rhoncus efficitur nisl. Sed ut scelerisque est, a vitae sapien.',
    technologyUsed: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus volutpat nisi ac commodo. Nam pretium iaculis augue imperdiet suscipit. Suspendisse tellus ipsum, tincidunt non aliquam et, pharetra vitae sapien. Pellentesque nec sem in dui varius fermentum. Maecenas convallis interdum turpis, quis commodo turpis imperdiet sit amet. Cras porta, dapibus metus ac, ultrices dictum lectus. Sed mollis orci sit amet tincidunt molestie. Nunc justo sem, venenatis in dui vitae, rhoncus efficitur nisl. Sed ut scelerisque est, a vitae sapien.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    githubRepoLink: 'https://github.com/AlfonsoDelaLuna/Clinic_Management_System',
    liveDemoLink: '#', // Placeholder link
    challenges: [],
    outcomes: [],
  },
  {
    id: 'drugstore-management-system',
    title: 'Drugstore Management System',
    heroImage: '/images/Drugstore_bg.png',
    minioverview: 'A web-based inventory management system that streamlines the process of entering medications from paper to digital formats.',
    overview: 'A web-based inventory management system that streamlines the process of entering medications from paper to digital formats. The administrator can download and print data from it, and it assists the nurse in recording the medications that are available and their expiration dates.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    githubRepoLink: 'https://github.com/AlfonsoDelaLuna/Drugstore_Inventory',
    features: ['Inventory Tracking', 'Expiration Date Alerts', 'Data Export'],
    challenges: [],
    outcomes: [],
  },
  {
    id: 'guidance-management-system',
    title: 'Guidance Management System',
    heroImage: '/images/Guidance_bg.png',
    minioverview: 'A web-based inventory management system that tracks the use of consultation forms during the academic year, adds students, and maintains student information.',
    overview: 'A web-based inventory management system that tracks the use of consultation forms during the academic year, adds students, and maintains student information.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    githubRepoLink: 'https://github.com/AlfonsoDelaLuna/Guidance_Management_System',
    features: ['Student Information Management', 'Consultation Form Tracking', 'Reporting'],
    challenges: [],
    outcomes: [],
  },
  {
    id: 'library-management-system',
    title: 'Library Management System',
    heroImage: '/images/Library_bg.png',
    minioverview: 'A web-based management system that keeps track of students who access the library. It assists the librarian in keeping track of how frequently a student visits the library and storing their login sheet for authentication.',
    overview: 'A web-based management system that keeps track of students who access the library. It assists the librarian in keeping track of how frequently a student visits the library and storing their login sheet for authentication.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    githubRepoLink: 'https://github.com/AlfonsoDelaLuna/Library_Management_System',
    features: ['Student Login Tracking', 'Visit Frequency Reports', 'Authentication'],
    challenges: [],
    outcomes: [],
  },
  {
    id: 'transaction-management-system',
    title: 'Transaction Management System',
    heroImage: '/images/Transaction_bg.png',
    minioverview: 'This web-based system assists employees in taking orders from clients and administrators in monitoring daily, monthly, and annual revenue as well as the most lucrative product.',
    overview: 'This web-based system assists employees in taking orders from clients and administrators in monitoring daily, monthly, and annual revenue as well as the most lucrative product.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    githubRepoLink: 'https://github.com/AlfonsoDelaLuna/Transaction-System',
    features: ['Order Management', 'Revenue Tracking', 'Product Analysis'],
    challenges: [],
    outcomes: [],
  }
];

export default projectsData;