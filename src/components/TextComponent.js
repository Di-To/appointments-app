import React from "react";
import "../styles/text-component.css";

export default function TextComponent({
  overHeader,
  mainHeader,
  subHeader,
  description,
}) {
  return (
    <div className="text-container">
      {overHeader ? <p>{overHeader}</p> : null}

      {mainHeader ? <h1 className="landing-page-title">{mainHeader}</h1> : null}

      {subHeader ? (
        <h2 className="landing-page-subtitle">{subHeader}</h2>
      ) : null}

      {description ? (
        <p className="landing-page-description">{description}</p>
      ) : null}
    </div>
  );
}
