import React from "react";
import "../styles/navbar.css";

export default function NavBar() {
  return (
    <nav className="navigation">
      <button className="hamburger"></button>
      <div className="navigation-menu">
        <ul className="links-container">
          <li className="regular-li">
            <a className="regular-link" href="/about">
              About
            </a>
          </li>
          <li className="regular-li">
            <a className="regular-link" href="/practices">
              Practices
            </a>
          </li>
          <li className="regular-li">
            <a className="regular-link" href="/services">
              Services
            </a>
          </li>
          <li className="regular-li">
            <a className="regular-link" href="/team">
              Team
            </a>
          </li>
          <li className="extra-li">
            <a href="/book" className="book-button">
              Book appointment
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
