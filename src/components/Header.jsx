import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ onToggleMenu }) {
  const [isShown, setIsShown] = useState(false);

  function handleMenu(event) {
    event.preventDefault();
    setIsShown(!isShown);
    onToggleMenu(!isShown);
  }

  return (
    <div id="header">
      <h3 id="name">
        <a href="/">Mikael Vadi</a>
      </h3>
      <a id="hamburger-menu" href="#menu" onClick={handleMenu}>
        &#9776;
      </a>
      {isShown && (
        <div id="dropdown-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">My Projects</a>
            </li>

            <li>
              <Link to="/contacts">Contact Me</Link>
              {/* <a href="contact">Contact Me</a> */}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
