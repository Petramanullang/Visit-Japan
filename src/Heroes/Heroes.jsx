import React from "react";
import HeaderMenu from "./Header-menu";
import "./Heroes.css";

const Heroes = () => {
  return (
    <div className="heroes-wrapper">
      <div className="wrapper">
        <span className="heroes-text">
          VISIT <br />
          JAPAN
        </span>
        <div className="heroes-bottom">
          <HeaderMenu />
          <HeaderMenu />
          <HeaderMenu />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
