import React from "react";
import ContentMenu from "./Content-menu";
import "./Content.css";

const Content = () => {
  return (
    <div className="content-wrapper">
      <div className="content-1">
        <h3>Lorem ipsum dolor sit amet consectetur</h3>
        <h1>Lorem, ipsum dolor.</h1>
      </div>
      <ContentMenu />
    </div>
  );
};

export default Content;
