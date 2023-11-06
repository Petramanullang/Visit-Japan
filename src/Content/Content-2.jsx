import React from "react";
import "./Content-2.css";

const Content2 = () => {
  return (
    <div className="content-wrapper-2">
      <span className="content-text">TRAVEL AND INSIPIRE YOURSELF</span>
      <div className="videos">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CxuiFNYnEr4?si=-SBzl9q9vSenl_bM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/F0AT_7uVbeo?si=c6ufD9OqE7g5Y9tN"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
          
      </div>
    </div>
  );
};

export default Content2;
