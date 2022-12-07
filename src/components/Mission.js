import React from "react";
import TextComponent from "./TextComponent";
import "../styles/mission.css";

export default function Mission() {
  let upperTitle = "Our Mission";
  let midTitle = "Superior. Healthcare. All-in-one";
  let lowerTitle =
    "Exercitation officia nulla minim enim laborum minim ullamco sint. Reprehenderit elit aliquip adipisicing dolor incididunt velit. Exesse sit in culpa voluptate commodo voluptate duis id deserunt sint reprehenderit duis duis. Proident Lorem occaecat excepteur consectetur velit voluptate duis non consectetur est aliqua.";

  return (
    <div className="mission-container">
      <TextComponent
        overHeader={upperTitle}
        mainHeader={midTitle}
        description={lowerTitle}
      />
    </div>
  );
}
