import React from "react";
import Main from "./Main";
import Doctors from "./Doctors";
import Mission from "./Mission";

export default function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Main />
      </header>
      <body className="app-body">
        <div className="history-container">
          <Mission />
        </div>
        <div className="full-bleed treat-section">
          <Doctors />
        </div>
      </body>
    </div>
  );
}
