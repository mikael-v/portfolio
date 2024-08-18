import profilePhoto from "../assets/images/profilePhoto.png";
import { useNavigate } from "react-router-dom";
import CV from "../assets/CV.pdf";

function Homepage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/contact");
  }

  return (
    <div className="container home">
      <section id="intro">
        <img id="profileImg" src={profilePhoto} alt="" />
        <div id="intro-text">
          <p>Hello World!</p>
          <p>My name is Mikael Vadi (He/They)</p>
          <div id="wrapper">
            <div className="static-text">I am a Junior</div>
            <ul className="dynamic-roles">
              <li>
                <span>Frontend Developer</span>
              </li>

              <li>
                <span>Backend Developer</span>
              </li>
              <li>
                <span>Fullstack Developer</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="about-me">
        <h1 id="title">About Me</h1>
        <hr />
        <p>
          I am a 22 year-old web and mobile developer from England. After
          achieving certification at the intensive Software Development bootcamp
          at Northcoders, I am looking to get my foot in the door of the tech
          worldas a developer. As well as my proficiencies in JavaScript, HTML
          and CSS, my time at the bootcamp and my personal experiences have
          allowed me to develop skills in various technologies as can be seen on
          my projects page.
        </p>
        <p>
          Outside of web and app development, I'm passionate about global and
          charitable causes, and aid for minority communities. As someone who
          comes from a BIPOC LGBTQ+ background, issues surrounding human rights
          and diversity are very important to me. In my spare time, I like to
          crochet as I find it helps me destress and come up with new project
          ideas; read to hone my general knowledge and play and run multiplayer
          online games to exercise time management, unwind, and collaborate with
          others.
        </p>
      </section>
      <section id="footer-buttons">
        <button className="footer-button" onClick={handleClick}>
          Contact Me
        </button>
        <a href={CV} target="_blank">
          <button className="footer-button">View CV</button>
        </a>
      </section>
    </div>
  );
}

export default Homepage;
