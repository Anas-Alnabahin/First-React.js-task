import React from "react";
import "./style.css";

export default function DRMcard(props) {
  return (
    <div className="DRMcard-div">
      <img src={props.src} id={props.id} />
      <div>
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
      </div>
    </div>
  );
}
