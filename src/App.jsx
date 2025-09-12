// src/App.jsx (with react-router-dom)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './index.css'; // Your main CSS import (includes Bootstrap)

import HeaderSection from './components/HeaderSection';
import ProjectsSection from './components/ProjectSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectInfoPage from './projects/STIER_COPAN/ProjectInfoPage'; // Import the new page
import projectsData from './data/project'; // Import your project data

// This component will render your main portfolio sections
const HomePage = () => (
  <>
    <HeaderSection />
    <ProjectsSection projects={projectsData} /> {/* Pass project data to ProjectsSection */}
    <ExperienceSection />
    <EducationSection />
  </>
);

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 font-space-grotesk">
        <div className="flex-grow-1">
          <main className="container py-5 px-4 px-sm-5 px-md-5">
            <div className="d-flex flex-column gap-5">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/project/:projectId"
                  element={<ProjectDetailWrapper />}
                />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

// Helper component to find the project based on URL parameter
const ProjectDetailWrapper = () => {
  const { projectId } = useParams(); // Hook to get URL parameters
  const project = projectsData.find((p) => p.id === projectId);

  return <ProjectInfoPage project={project} />;
};

export default App;