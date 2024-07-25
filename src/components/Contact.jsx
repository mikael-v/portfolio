import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactPage() {
  return (
    <div className="container contact-page">
      <h1>Contact Me</h1>
      <hr />
      <p id="contact-p">
        I am currently looking for new opportunities as a junior developer.
        Ideally I would like to work in Frontend development and collaborate
        with those who focus in charity and aid for others. However, I'm always
        open to exploring other options, so get in touch if you're interested in
        collborating as my inbox is always open.
      </p>
      <h2 id="contact-links">Contact Links</h2>
      <section id="social-icons">
        <a href="https://github.com/mikael-v/" target="_blank">
          <FontAwesomeIcon
            alt="github icon that links to personal github page"
            className="social-icon"
            icon={faGithub}
          />
        </a>
        <a href="mailto:mikael-v@outlook.com">
          <FontAwesomeIcon
            className="social-icon"
            alt="envelope icon that links to personal email address"
            icon={faEnvelope}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mikael-vadi-516b59313/"
          target="_blank"
        >
          <FontAwesomeIcon
            className="social-icon"
            icon={faLinkedin}
            alt="linkedin icon leading to linkedin page when clicked"
          />
        </a>
      </section>
    </div>
  );
}

export default ContactPage;
