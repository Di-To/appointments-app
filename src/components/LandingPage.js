import React from "react";
import Main from "./Main";
import Doctors from "./Doctors";
import Mission from "./Mission";

export default function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Main here is the top section where the get started button is */}
        <Main />
      </header>
      <div className="app-body">
        <div className="history-container">
          <Mission />
        </div>
        {/* Doctos is the section that renders the cards with treatments */}
        <div className="full-bleed treat-section">
          <Doctors />
        </div>
      </div>
    </div>
  );
}
