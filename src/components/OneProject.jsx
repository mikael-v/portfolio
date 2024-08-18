import { useParams, Link } from "react-router-dom";
import projects from "../../projectsData";
import React from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function OneProject() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container">
      <div className="back-button-container">
        <Link to="/projects">
          <button className="back-button">Back to All Projects</button>
        </Link>
      </div>
      <div className="project-content">
        <div className="text-section">
          <div className="title-section">
            <h1>
              {project.link ? (
                <Link to={project.link} target="_blank">
                  {project.title}
                </Link>
              ) : (
                project.title
              )}
            </h1>
            <Link to={project.repo}>
              <FontAwesomeIcon
                alt="github icon that links to the repository for this project"
                className="gh-icon"
                icon={faGithub}
              />
            </Link>
          </div>
          <div className="video-section">
            <ReactPlayer
              id="currentDemo"
              width="100%"
              height="100%"
              url={project.demo}
              playing={false}
              controls={true}
            />
          </div>
          <p className="indivDesc">{project.description}</p>
          <p className="indivStack">Tech Stack: {project.stack.join(", ")}</p>
          <p></p>
        </div>
      </div>
      <section id="images">
        {project.imgs.slice(1, 4).map((img, index) => (
          <img
            key={index}
            className="project-img"
            src={img}
            alt={`${project.title} image ${index + 1}`}
          />
        ))}
      </section>
    </div>
  );
}

export default OneProject;
