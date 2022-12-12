import React, { useState, useEffect } from "react";
import "../styles/doctors.css";
import CardComponent from "./CardComponent";
import TextComponent from "./TextComponent";

export default function Doctors() {
  const [selected, setSelected] = useState(0);
  const upperTitle = "Our services";
  const midTitle = "Superior. Fast. Secure";
  const lowerTitle =
    "Officia minim ipsum ad deserunt reprehenderit aute exercitation qui. Sit irure nisi non anim labore amet aute in et amet incididunt.";
  const subtitle = "How can we help you?";
  const secondLowerTitle =
    "Dolore reprehenderit anim in magna cupidatat nisi est aliqua consequat sunt anim.";

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div className="second-section-container">
      <div className="upper-text-container">
        {/* Because I saw the same structure over and over H1, H2, p.. I made it into a component */}
        <TextComponent
          overHeader={upperTitle}
          mainHeader={midTitle}
          description={lowerTitle}
        />
        <div className="how-can-we-help">
          <TextComponent subHeader={subtitle} description={secondLowerTitle} />
        </div>
      </div>
      {/* Renders the actual treatment cards */}
      <div className="body-container">
        <CardComponent setSelected={setSelected} />
      </div>
    </div>
  );
}
