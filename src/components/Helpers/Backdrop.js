//Backdrop means effects on background while opening up popup component (here popup component is EditUserData.js)
import React from "react";

import "./Backdrop.css";

const Backdrop = (props) => {
  const cssClasses = [
    "Backdrop",
    props.show ? "BackdropOpen" : "BackdropClosed",
  ];

  return <div className={cssClasses.join(" ")}></div>;
};

export default Backdrop;
