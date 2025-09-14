import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function ProjectsSection({ projects }) {
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
  id,
  title,
  technologies,
  description,
  heroImage,
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
      <div className="w-100 project-card-image ratio ratio-16x9 rounded-3 bg-dark d-flex align-items-center justify-content-center">
        {heroImage ? (
          <img src={heroImage} alt={`${title} hero image`} className="img-fluid rounded-3" />
        ) : (
          <p className="text-white-50">No Image Available</p>
        )}
      </div>
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
          <a href={`/projects/${id}`} target="_blank" rel="noopener noreferrer" className="d-block project-link-icon">
            <img src="/images/info.png" alt="Information" className="demo-icon" />
          </a>
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