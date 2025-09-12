// src/data/project.js
const projectsData = [
  {
    id: 'stier-coplan',
    title: 'STIER COPLAN - Event Reservation System',
    heroImage: '/images/STIER_COPLAN.png', // Make sure you have this image
    overview: 'STIER COPLAN is a web-based event reservation system developed using Java and Firebase...',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Java', 'Firebase (Firestore)', 'Android'],
    githubRepoLink: 'https://github.com/AlfonsoDelaLuna/Guidance_System',
    // ... other details like features, challenges, etc.
  },
  {
    id: 'clinic-management-system', // new slug-like id
    title: 'Clinic Management System',
    heroImage: '/images/clinic-background.png', // you'll need an image for this
    overview: 'A web-based management system that simplifies the conversion of paper-based to digital health records. It assists nurses with documenting the patient\'s condition, prescribing medication, and storing information for later printing or downloading.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    githubRepoLink: 'https://github.com/AlfonsoDelaLuna/Clinic_Management_System',
    // You can add features, challenges, etc. later
    features: ['Digital Health Records', 'Prescription Management', 'Data Export'],
    challenges: [],
    outcomes: [],
  },
  // ... add the rest of your projects here in the same format
];

export default projectsData;