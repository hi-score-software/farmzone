import React from "react";

import "./loading.styles.css";

// const Spinner = require("./spinner.svg");

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="la-ball-scale-multiple la-dark la-3x">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loading;
