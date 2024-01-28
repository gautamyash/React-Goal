import React from "react";

import "./Button.css";

const Button = (props) => {
  let buttonColor = {
    background: props.buttonValid ? "#ac0e77" : "red",
  };

  return (
    <button
      type={props.type}
      style={buttonColor}
      className="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
