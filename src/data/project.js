// src/data/project.js
const projectsData = [
  {
    //STIER COPLAN
    id: "stier-coplan",
    title: "STIER COPLAN: Event Reservation System",
    heroImage: "/images/COPLAN_bg.png", // Make sure you have this image
    minioverview:
      "STIER COPLAN is a web-based event reservation system developed using Java and Firebase...",
    overview:
      "STIER COPLAN is a web-based event reservation system developed using Java and Firebase...",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Java",
      "Firebase (Firestore)",
      "Android",
    ],
    githubRepoLink: "https://github.com/AlfonsoDelaLuna/Guidance_System",
    // ... other details like features, challenges, etc.
  },
  {
    //Clinic Management System
    id: "clinic-management-system", // new slug-like id
    title: "Clinic Management System",
    heroImage: "/images/Clinic_Login.png", // you'll need an image for this
    minioverview:
      "This web-based Clinic Management System is designed to help school nurses efficiently record and manage the health information of students, faculty, and staff.",
    overview:
      "This web-based Clinic Management System is designed to help school nurses efficiently record and manage the health information of students, faculty, and staff. It replaces the manual paper-based process with a secure and streamlined digital solution, allowing for better patient care, inventory management, and data analysis.",
    problem:
      "The traditional process of using paper boards and storage drawers for clinic records presents several challenges:",
    problem1:
      "Manual Documentation - Time-consuming, prone to errors, and records can be lost or damaged.",
    problem2:
      "Limited Accessibility - Only available in physical form, making it difficult for nurses to access and update records.",
    problem3:
      "Inventory Tracking Problems - Inefficient tracking of medicine stock and expiration dates, leading to shortages or waste.",
    problem4:
      "Delayed Response to Emergencies - Slow access to patient history hinders immediate care.",
    problem5:
      "Limited Data Analysis - Difficulty in identifying health trends and justifying budget needs.",
    problem6:
      "Privacy Concerns - Paper records lack the security required for confidential health information.",
    problem7:
      "Dependence on Nurse’s Availability - Access to records is disrupted if the nurse is absent.",
    featuresList: [
      "Digital Health Records",
      "Prescription Management",
      "Data Export",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    githubRepoLink:
      "https://github.com/AlfonsoDelaLuna/Clinic_Management_System",
    liveDemoLink: "#", // Placeholder link
    challenges: [],
    outcomes: [],
  },
  {
    // Drugstore Management System
    id: "drugstore-management-system",
    title: "Drugstore Management System",
    heroImage: "/images/Drugstore_bg.png",
    minioverview:
      "A web-based management system is designed to manage and track inventory for a drugstore.",
    overview:
      "This Drugstore Inventory System is designed to streamline the management of pharmaceutical products and related items within a drugstore setting. It provides a centralized platform for monitoring stock levels, tracking product information (such as name, description, supplier, and expiration date), and generating comprehensive reports for informed decision-making in inventory management. The system aims to improve efficiency, reduce errors, and optimize stock levels to meet customer demand while minimizing waste.",
    problem:
      "The major problems observed in the current inventory process are:",
    problem1:
      "Paper-based inventory process – Manual recording makes stock monitoring inefficient, disorganized, and prone to damage or loss.",
    problem2:
      "Incorrect information recording – Errors in writing product details (such as quantity, supplier, or expiration date) result in unreliable data.",
    problem3:
      "Difficulty in monitoring stock levels – Without a centralized system, tracking available products becomes time-consuming and may lead to delays in serving customers.",
    problem4:
      "Inability to properly track expiration dates – Medicines may remain unsupervised until expired, leading to waste and potential health risks.",
    problem5:
      "Lack of accurate reports for decision-making – Generating reliable reports manually is tedious, limiting the ability to make informed inventory and business decisions.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    githubRepoLink: "https://github.com/AlfonsoDelaLuna/Drugstore_Inventory",
    features: ["Inventory Tracking", "Expiration Date Alerts", "Data Export"],
    challenges: [],
    outcomes: [],
  },
  {
    // Guidance Management System
    id: "guidance-management-system",
    title: "Guidance Management System",
    heroImage: "/images/Guidance_Image/Guidance_bg.png",
    minioverview:
      "This project is a guidance system for educational institutions, such as schools and colleges. It provides a range of features to manage student records, track consultations, and facilitate various guidance-related activities.",
    overview:
      "This Guidance Management System is designed to streamline the management of guidance activities and student records within educational institutions. It provides a centralized platform for tracking student information, managing consultations, and generating comprehensive reports for informed decision-making in guidance management. The system aims to improve efficiency, reduce errors, and optimize guidance activities to meet the needs of students and educational staff.",
    problem:
      "These are the problems faced prior of the development of the Guidance Management System:",
    problem1:
      "Some students may have difficulty accessing or completing the online form due to limited internet access or lack of technical skills.",
    problem2:
      "Risk of data breaches or unauthorized access if information is not stored securely on PCs or physical files.",
    problem3:
      "Incomplete or inaccurate information submitted by students, making records unreliable.",
    problem4: "Mismanagement or loss of physical forms in storage.",
    problem5:
      "Delays in retrieving student information when addressing issues such as academics, bullying, or violations.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    githubRepoLink: "https://github.com/AlfonsoDelaLuna/Guidance_System",
    features: [
      "Student Record Management",
      "Consultation Tracking",
      "Report Generation",
    ],
    challenges: [],
    outcomes: [],
  },
  {
    //Library Management System
    id: "library-management-system",
    title: "Library Management System",
    heroImage: "/images/Library_bg.png",
    minioverview:
      "A web-based management system that keeps track of students who access the library. It assists the librarian in keeping track of how frequently a student visits the library and storing their login sheet for authentication.",
    overview:
      "A web-based management system that keeps track of students who access the library. It assists the librarian in keeping track of how frequently a student visits the library and storing their login sheet for authentication.",
    problem:
      "These are the 5 main problems faced in the library management system:",
    problem1:
      "Library management system malfunction – Inaccurate storage of student numbers in the admin's Excel file compromises data integrity.",
    problem2:
      "Paper-based authentication system introduced – Manual recording leads to inefficiencies, inaccuracies, and increased risk of data loss.",
    problem3:
      "User feedback received – Frustration with system errors highlighted the need for an operational change.",
    problem4:
      "Log-out feature removed – Eliminating this feature reduces queues during lunch breaks and closing times.",
    problem5:
      "Staff training conducted – Ensured a smooth transition to the new paper-based system while addressing technical issues.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    githubRepoLink:
      "https://github.com/AlfonsoDelaLuna/Library_Management_System",
    features: [
      "Student Login Tracking",
      "Visit Frequency Reports",
      "Authentication",
    ],
    challenges: [],
    outcomes: [],
  },
  {
    //Transaction Management System
    id: "transaction-management-system",
    title: "Transaction Management System",
    heroImage: "/images/Transaction_bg.png",
    minioverview:
      "This web-based system assists employees in taking orders from clients and administrators in monitoring daily, monthly, and annual revenue as well as the most lucrative product.",
    overview:
      "A web-based management system that keeps track of students who access the library. It assists the librarian in keeping track of how frequently a student visits the library and storing their login sheet for authentication.",
    problem:
      "These are the 5 main problems faced in the transaction management system:",
    problem1: "Multiple customers ordering at the same time caused confusion. ",
    problem2: "Handwritten notes were sometimes unclear or hard to read.",
    problem3: "Orders could easily be misplaced or lost.",
    problem4: "Delays often occurred in communicating orders to the chef.",
    problem5: "Mistakes in food preparation happened due to miscommunication.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    githubRepoLink: "https://github.com/AlfonsoDelaLuna/Transaction-System",
    features: ["Order Management", "Revenue Tracking", "Product Analysis"],
    challenges: [],
    outcomes: [],
  },
];

export default projectsData;
