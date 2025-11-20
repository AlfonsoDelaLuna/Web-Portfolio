// src/App.jsx (with react-router-dom)
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import "./index.css"; // Your main CSS import (includes Bootstrap)

import HeaderSection from "./components/HeaderSection";
import ProjectsSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ClinicManagementInfoPage from "./projects/Clinic_Management/ClinicManagementInfoPage"; // New clinic project page
import DrugstoreManagementInfoPage from "./projects/Drugstore_Management/Drugstore_ManagementInfoPage"; // New drugstore project page
import GuidanceManagementInfoPage from "./projects/Guidance_Management/Guidance_ManagementInfoPage"; // New guidance project page
import LibraryManagementInfoPage from "./projects/Library_Management/Library_ManagementInfoPage"; // New library project page
import TransactionManagementInfoPage from "./projects/Transaction_Management/Transaction_ManagementInfoPage"; // New library project page
import projectsData from "./data/project"; // Import your project data

// This component will render your main portfolio sections
const HomePage = () => (
  <>
    <HeaderSection />
    <ProjectsSection projects={projectsData} />{" "}
    {/* Pass project data to ProjectsSection */}
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
                  path="/projects/:projectId"
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
// Helper component to find the project and render the correct page
const ProjectDetailWrapper = () => {
  const { projectId } = useParams(); // Hook to get URL parameters
  const project = projectsData.find((p) => p.id.toString() === projectId);

  // Conditionally render the new page for the specific project
  if (projectId === "clinic-management-system") {
    return <ClinicManagementInfoPage project={project} />;
  }

  if (projectId === "drugstore-management-system") {
    return <DrugstoreManagementInfoPage project={project} />;
  }

  if (projectId === "guidance-management-system") {
    return <GuidanceManagementInfoPage project={project} />;
  }

  if (projectId === "library-management-system") {
    return <LibraryManagementInfoPage project={project} />;
  }
  if (projectId === "transaction-management-system") {
    return <TransactionManagementInfoPage project={project} />;
  }
};

export default App;
