import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'STIER COPLAN',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Java', 'Firebase', 'Android'],
      description: [
        'Created a reservation system in Java and Firebase to handle student event bookings.',
        'Prevented 30+ double bookings during actual campus reservations.',
      ],
      backgroundImageClass: 'coplan-background',
      infoLink: '/projects/1',
      githubLink: 'https://github.com/AlfonsoDelaLuna/Guidance_System',
    },
    {
      id: 2,
      title: 'Clinic Management System',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      description: [
        'A web-based management system that simplifies the conversion of paper-based to digital health records. It assists nurses with documenting the patient\'s condition, prescribing medication, and storing information for later printing or downloading.',
      ],
      backgroundImageClass: 'clinic-background',
      infoLink: 'project/Clinic_Management_System/info.html',
      githubLink: 'https://github.com/AlfonsoDelaLuna/Clinic_Management_System',
    },
    {
      id: 3,
      title: 'Library Management System',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      description: [
        'A web-based management system that keeps track of students who access the library. It assists the librarian in keeping track of how frequently a student visits the library and storing their login sheet for authentication.',
      ],
      backgroundImageClass: 'library-background',
      infoLink: 'project/Library_Management_System/info.html',
      githubLink: 'https://github.com/AlfonsoDelaLuna/Library_Management_System',
    },
    {
      id: 4,
      title: 'Guidance Management System',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      description: [
        'A web-based inventory management system that tracks the use of consultation forms during the academic year, adds students, and maintains student information.',
      ],
      backgroundImageClass: 'guidance-background',
      infoLink: 'project/STIER_COPLAN/info.html',
      githubLink: 'https://github.com/AlfonsoDelaLuna/Guidance_System',
    },
    {
      id: 5,
      title: 'Drugstore Management System',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      description: [
        'A web-based inventory management system that streamlines the process of entering medications from paper to digital formats. The administrator can download and print data from it, and it assists the nurse in recording the medications that are available and their expiration dates.',
      ],
      backgroundImageClass: 'drugstore-background',
      infoLink: 'project/Drugstore_Management_System/info.html',
      githubLink: 'https://github.com/AlfonsoDelaLuna/Drugstore_Inventory',
    },
    {
      id: 6,
      title: 'Transaction Management System',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      description: [
        'This web-based system assists employees in taking orders from clients and administrators in monitoring daily, monthly, and annual revenue as well as the most lucrative product.',
      ],
      backgroundImageClass: 'transaction-background',
      infoLink: 'project/Transaction_Management_System/info.html',
      githubLink: 'https://github.com/AlfonsoDelaLuna/Transaction-System',
    },
  ];

  return (
    <section id="projects">
      <h2 className="fs-2 fw-bold text-center text-orange-accent mb-4">
        Projects
      </h2>
      <div className="row g-4 pt-3"> {/* Bootstrap grid row with gap */}
        {projects.map((project) => (
          <div key={project.id} className="col-12 col-sm-6 col-lg-4"> {/* Responsive columns */}
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  technologies,
  description,
  backgroundImageClass,
  infoLink,
  githubLink,
}) {
  // Map technology to a custom Bootstrap-themed color or use custom class
  const getTechTagClass = (tech) => {
    switch (tech) {
      case 'HTML':
      case 'CSS':
      case 'JavaScript':
        return 'bg-tech-blue-primary';
      case 'PHP':
      case 'MySQL':
      case 'Java':
      case 'Firebase':
      case 'Android':
        return 'bg-tech-blue-secondary';
      default:
        return 'bg-secondary';
    }
  };

  return (
    // Added 'project-card' for the main hover effect
    <div className="d-flex flex-column gap-3 rounded-lg bg-card-bg p-4 h-100 project-card">
      <div
        className={`w-100 project-card-image ratio ratio-16x9 rounded-3 ${backgroundImageClass}`}
      ></div>
      <div>
        <p className="text-orange-accent fs-5 fw-bold mb-2">
          {title}
        </p>
        <div className="d-flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`badge text-white px-2 py-1 rounded-pill ${getTechTagClass(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>
        {Array.isArray(description) ? (
          <ul className="text-light-purple-text fs-7 fw-normal pt-2 list-unstyled">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-light-purple-text fs-7 fw-normal pt-2 text-justify">
            {description}
          </p>
        )}
        <div className="d-flex gap-3 pt-2"> {/* Increased gap a bit */}
          {infoLink && (
            // Added 'project-link-icon' for the icon hover effect
            <a
              href={infoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="d-block project-link-icon"
            >
              <img src="/images/info.png" alt="Information" className="demo-icon" />
            </a>
          )}
          {githubLink && (
            // Added 'project-link-icon' and fixed path
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="d-block project-link-icon"
            >
              <img src="public/images/github.png" alt="GitHub" className="demo-icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;