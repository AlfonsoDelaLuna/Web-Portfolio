// src/projects/Clinic_Management_v2/ClinicManagementInfoPage.jsx
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Guidance_ManagementInfoPage.css";

// Custom hook for observing element intersection
const useIntersectionObserver = (options) => {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, isVisible];
};

// AnimatedSection component to wrap content
const AnimatedSection = ({ children }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
};

const GuidanceManagementInfoPage = ({ project }) => {
  if (!project) {
    return <div>Project not found</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div className="clinic-info-container">
      <header className="clinic-header">
        <AnimatedSection>
          <div className="header-container">
            <h1>{project.title}</h1>
            <a href="/" className="back-button">
              Back to Projects
            </a>
          </div>
          <p>{project.overview}</p>
          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <div className="project-links">
            <a
              href={project.githubRepoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/Github.png"
                alt="GitHub"
                className="link-icon"
              />
              <span>GitHub</span>
            </a>
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/info.png"
                alt="Live Demo"
                className="link-icon"
              />
              <span>Live Demo</span>
            </a>
          </div>
        </AnimatedSection>
      </header>

      <main className="clinic-main">
        <AnimatedSection>
          <section className="clinic-section problem-section">
            <h2>Problem</h2>
            <p>{project.problem}</p>
            <ol>
              <li>{project.problem1}</li>
              <li>{project.problem2}</li>
              <li>{project.problem3}</li>
              <li>{project.problem4}</li>
              <li>{project.problem5}</li>
            </ol>
          </section>
        </AnimatedSection>
        <div className="clinic-slider-wrapper">
          <Slider {...sliderSettings}>
            <div className="slide-item">
              <img
                src="/images/Guidance_Image/Guidance_Login.png"
                alt="Login"
              />
            </div>
            <div className="slide-item">
              <img
                src="/images/Guidance_Image/Guidance_MainSystem.png"
                alt="Main"
              />
            </div>
            <div className="slide-item">
              <img
                src="/images/Guidance_Image/Guidance_AddStudent.png"
                alt="Add Student"
              />
            </div>
            <div className="slide-item">
              <img src="/images/Guidance_Image/Guidance_SHS.png" alt="SHS" />
            </div>
            <div className="slide-item">
              <img
                src="/images/Guidance_Image/Guidance_College.png"
                alt="College"
              />
            </div>
          </Slider>
        </div>
      </main>
    </div>
  );
};

export default GuidanceManagementInfoPage;
