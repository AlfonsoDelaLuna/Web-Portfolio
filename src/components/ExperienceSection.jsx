import React from 'react';

function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      companyLogo: 'STI_Logo.png',
      title: 'MIS/IT Department - Internship',
      company: 'STI College Caloocan',
      duration: 'February 2025 - April 2025',
      responsibilities: [
        'Built and deployed record systems for the clinic, library, and guidance office using PHP/MySQL, improving efficiency by 83% and cutting manual tracking errors.',
        'Ran a cybersecurity orientation for over 30 senior high school interns, helping them understand common digital threats and how to avoid them.',
        'Fixed network and hardware issues, resolving 73% of cases and reducing system downtime for students and staff.',
        'Worked with teams on full-stack projects and IT support, improving technical knowledge, communication, and ability to solve real-world problems.',
      ],
    },
  ];

  return (
    <section id="experience">
      <h2 className="fs-2 fw-bold text-center text-orange-accent mb-4">
        Experience
      </h2>
      <div className="d-flex flex-column gap-3 pt-3">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} {...experience} />
        ))}
      </div>
    </section>
  );
}

function ExperienceItem({ companyLogo, title, company, duration, responsibilities }) {
  return (
    <div className="d-flex flex-column flex-sm-row gap-3">
      <img
        src={`./images/${companyLogo}`}
        alt="Company Logo"
        className="experience-logo rounded-3 flex-shrink-0"
      />
      <div className="d-flex flex-column">
        <p className="text-orange-accent fw-bold fs-5">
          {title}
        </p>
        <p className="text-light-purple-text fs-6">
          {company} | {duration}
        </p>
        <ul className="text-light-purple-text fs-7 list-unstyled mt-2"> {/* Custom styling for list bullets */}
          {responsibilities.map((resp, index) => (
            <li key={index} className="mb-1 d-flex align-items-start">
              <span className="me-2 text-warning">&bull;</span> {/* Custom bullet */}
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceSection;