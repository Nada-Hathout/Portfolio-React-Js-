import { useState } from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Shipping System",
      description:
        "Angular, HTML5, CSS3, Bootstrap, State Management, ASP.NET Core Web API​",
      color: "#181142ff",
      repo: "https://github.com/Nada-Hathout/ShippingSystemConsumer",
    },
    {
      title: "E-Commerce Application",
      description:
        "Razor Views, Bootstrap, ASP.NET MVC (.NET Framework),​ Entity Framework, Microsoft SQL Server​",
      color: "#513dc2ff",
      repo: "https://github.com/Nada-Hathout/Furni-Ecommerce",
    },
    {
      title: "Flower Shop System",
      description: "Angular, ASP.NET Core Web API​",
      color: "#ff5050ff",
      repo: "https://github.com/Nada-Hathout/Flower-Shop-Angular",
    },
        {
      title: "To-Do List Project",
      description:
        "React, HTML5, CSS3, Bootstrap, useState Hook, Component-Based Design",
      color: "#1287bdff",
      repo: "https://github.com/Nada-Hathout/To-Do-List",
    },
    {
      title: "Educational Platform",
      description:
        "React, React Router, Bootstrap, Responsive Design, Course Listing & Details Pages",
      color: "#918701ff",
      repo: "https://github.com/Nada-Hathout/online-store-React-Js-",
    },
    {
      title: " Responsive Restaurant Website",
      description:
        " HTML, CSS, Js, BootstrapI​",
      color: "#8a025cff",
      repo: "https://github.com/Nada-Hathout/Responsive-food-website",
    },
    {
      title: "Responsive Hotel Website",
      description: "HTML, CSS, JS​, Bootstrap​",
      color: "#b33300ff",
      repo: "https://github.com/Nada-Hathout/fina_project_ui-ux/tree/main/FINAL_PROJECT_ui_ux",
    },
    {
      title: "Simple Shopping Application",
      description: "SQL, ADO.Net​​",
      color: "#421477ff",
      repo: "https://github.com/Nada-Hathout/Shopping-ADO-", // لو ما فيش لينك معين
    },
  {
      title: " Library Management System",
      description: "C#, .NET WinForms, Entity Framework Core, SQL Server​​",
      color: "#1a6d66ff",
      repo: "https://github.com/Nada-Hathout/Library-Management-System", // لو ما فيش لينك معين
    },
  ];

  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="main-container">
      <h1 className="project-header text-center mb-4">Projects</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {currentProjects.map((project, idx) => (
          <div className="col" key={idx}>
            <div
              className="card shadow-sm border-0 rounded-4 d-flex flex-column justify-content-between"
              style={{
                backgroundColor: project.color,
                color: "white",
                height: "250px",
                padding: "1rem",
              }}
            >
              <div>
                <h4 className="card-title">{project.title}</h4>
                <p className="card-text">{project.description}</p>
              </div>
              {project.repo ? (
                <div className="mt-auto text-center">
                  <a
                    href={project.repo}
                    className="btn btn-secondary btn-sm "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center align-items-center mt-4 gap-3">
        <button
          className="btn btn-dark"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="fw-bold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-dark"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Projects;
