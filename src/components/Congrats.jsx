import React from "react";
import group from "../assets/Group.png";
import "../App.css";

const Congrats = (props) => {
  return (
    <div
      className={
        !props.visable
          ? "congrats-message congrats-visable"
          : "congrats-message"
      }
    >
      <img src={group} alt="" />
    </div>
  );
};

export default Congrats;
