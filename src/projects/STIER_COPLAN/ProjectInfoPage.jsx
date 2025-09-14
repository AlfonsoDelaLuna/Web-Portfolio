import React from 'react';
import './ProjectInfoPage.css'; // Assuming you'll create this CSS file

const ProjectInfoPage = ({ project }) => {
  if (!project) {
    return (
      <div className="project-info-container no-project">
        <h2>No Project Selected</h2>
        <p>Please select a project from the portfolio to view its details.</p>
      </div>
    );
  }

  return (
    <div className="project-info-container">
      <h1 className="project-title">{project.title}</h1>
      <p className="project-tagline">{project.tagline}</p>

      {project.heroImage && (
        <div className="project-image-wrapper">
          <img
            src={project.heroImage}
            alt={`Screenshot of ${project.title}`}
            className="project-main-image"
          />
        </div>
      )}

      <section className="project-section project-overview">
        <h2>Overview</h2>
        <p>{project.overview}</p>
      </section>

      {project.features && project.features.length > 0 && (
        <section className="project-section project-features">
          <h2>Key Features</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="project-section project-technologies">
        <h2>Technologies Used</h2>
        <div className="tech-pills">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {project.challengesAndSolutions && project.challengesAndSolutions.length > 0 && (
        <section className="project-section project-challenge-solution">
          <h2>Challenges & Solutions</h2>
          {project.challengesAndSolutions.map((item, index) => (
            <div key={index} className="challenge-solution-item">
              <h3>{item.challenge}</h3>
              <p>{item.solution}</p>
            </div>
          ))}
        </section>
      )}

      {project.learnings && (
        <section className="project-section project-learnings">
          <h2>Learnings & Future Improvements</h2>
          <p>{project.learnings}</p>
          {project.futureImprovements && project.futureImprovements.length > 0 && (
            <ul>
              {project.futureImprovements.map((improvement, index) => (
                <li key={index}>{improvement}</li>
              ))}
            </ul>
          )}
        </section>
      )}

      <div className="project-actions">
        {project.liveDemoLink && (
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button primary-button"
          >
            Live Demo
          </a>
        )}
        {project.githubRepoLink && (
          <a
            href={project.githubRepoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary-button"
          >
            View Code on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectInfoPage;