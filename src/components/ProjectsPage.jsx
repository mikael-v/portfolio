import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../../projectsData";

function AllProjects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="projects-container">
      <section className="slider">
        <Link to={`/projects/${projects[currentSlide].id}`}>
          <div className="item">
            <div className="item-left">
              <h1>{projects[currentSlide].title}</h1>
              <Link to={`/projects/${projects[currentSlide].id}`}>
                <img
                  id="coverImg"
                  src={projects[currentSlide].imgs[0]}
                  alt=""
                />
              </Link>
            </div>
            <div className="item-right">
              <p className="desc">{projects[currentSlide].description}</p>
              <p className="stack">
                Tech Stack: {projects[currentSlide].stack.join(", ")}
              </p>
            </div>
          </div>
        </Link>
      </section>
      <section id="buttons">
        <button id="prev" className="transparent-button" onClick={handlePrev}>
          <FontAwesomeIcon
            className="transparent-button"
            alt=""
            icon={faArrowCircleLeft}
          />
        </button>

        <button id="next" className="transparent-button" onClick={handleNext}>
          <FontAwesomeIcon
            className="transparent-button"
            alt=""
            icon={faArrowCircleRight}
          />
        </button>
      </section>
    </div>
  );
}

export default AllProjects;
