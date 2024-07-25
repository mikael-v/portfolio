import { useParams } from "react-router-dom";
import projects from "../../projectsData";
import React from "react";
import ReactPlayer from "react-player";

function OneProject() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container">
      <div className="project-content">
        <div className="video-section">
          <ReactPlayer
            id="currentDemo"
            url={project.demo}
            playing={false}
            controls={true}
          />
        </div>
        <div className="text-section">
          <h1>{project.title}</h1>
          <p className="indivDesc">{project.description}</p>
          <p className="indivStack">Tech Stack: {project.stack.join(", ")}</p>
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
