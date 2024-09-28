import React from "react";
import "./PlansButton.css"
function PlansButton({ heading, quality, button_text = "Subscribe", className}) {
  return (
    <div className="PlansButton">
      <div classname="PlansButton__details">
        <h2 className="PlansButton__heading">{heading}</h2>
        <h3 className="PlansButton__quality">{quality}</h3>
      </div>
      <button className={`PlansButton__buttons ${className}`}>{button_text}</button>
    </div>
  );
}

export default PlansButton;
