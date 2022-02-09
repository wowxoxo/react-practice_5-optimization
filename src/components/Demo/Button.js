import React from "react";

const Button = (props) => {
  console.log("Button RUNNING");
  return (
    <button
      type={props.type | "text"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
