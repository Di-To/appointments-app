import React from "react";
import "../styles/cell.css";

export default function Cell({ isActive, onClick, clName, children }) {
  return (
    <div
      onClick={onClick}
      className={`cell-style ${clName} ${isActive ? "active-style" : null}`}
    >
      {children}
    </div>
  );
}
