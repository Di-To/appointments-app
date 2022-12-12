import React from "react";
import { Link } from "react-router-dom";
import "../styles/success.css";

export default function Succes() {
  return (
    <div className="success-grid-container">
      <div className="success-flex-container">
        <div className="elements-container">
          <div>
            <h2> Thank you for booking your Appointment </h2>
            <p>You will receive a confirmation email shortly</p>
          </div>
          <div className="success-buttons">
            <Link to={"/"} className="link">
              <button className="button success-button">
                Book a new Appointment
              </button>
            </Link>
            <Link to={"/"} className="link">
              <button className="button homepage-button">
                Back to homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
