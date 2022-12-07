import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import NavBar from "./NavBar";

export default function TopPart() {
  return (
    <div className="header-container">
      <NavBar />
      <div className="inner-header">
        <div className="landing-page-title">
          Best care for patients and doctors
        </div>
        <div className="landing-page-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </div>
        <div className="lower-container">
          <div className="left-buttons">
            <Link className="get-started" to="/getstarted">
              {" "}
              Get started{" "}
            </Link>

            <a className="learn-more" href="/#">
              Learn more
            </a>
          </div>
          <div className="right-buttons">
            <a href="/#">HEALTHCARE</a>
            <a className="center-button-with-boundaries" href="/#">
              DOCTORS
            </a>
            <a className="right-button-with-boundaries" href="/#">
              PATIENTS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
