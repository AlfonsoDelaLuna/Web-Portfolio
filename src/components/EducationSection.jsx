import React from 'react';

function EducationSection() {
  const educationEntries = [
    {
      id: 1,
      schoolLogo: 'STI_Logo.png',
      schoolName: 'STI College Caloocan',
      degree: 'Bachelor of Science in Information Technology',
      years: '2021 - 2025',
    },
  ];

  return (
    <section id="education">
      <h2 className="fs-2 fw-bold text-center text-orange-accent mb-4">
        Education
      </h2>
      <div className="d-flex flex-column gap-4 pt-3">
        {educationEntries.map((edu) => (
          <EducationItem key={edu.id} {...edu} />
        ))}
      </div>
    </section>
  );
}

function EducationItem({ schoolLogo, schoolName, degree, years }) {
  return (
    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3">
      <img
        src={`/images/${schoolLogo}`}
        alt="School Logo"
        className="education-logo rounded-3 flex-shrink-0"
      />
      <div className="d-flex flex-column">
        <p className="text-orange-accent fw-bold fs-5">
          {schoolName}
        </p>
        <p className="text-light-purple-text fs-6">{degree}</p>
        <p className="text-light-purple-text fs-7">{years}</p>
      </div>
    </div>
  );
}

export default EducationSection;