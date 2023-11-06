import React from "react";
import "./Content.css";

const ContentMenu = () => {
  return (
    <div className="content-menu">
      <div className="cards">
        <div className="card">
          <img src="./src/assets/img/card-1.jpeg" alt="" />
          <span className="card-text">OSAKA</span>
          <span className="card-text">大阪 </span>
        </div>
        <div className="card">
          <img src="./src/assets/img/card-2.jpeg" alt="" />
          <span className="card-text">OKINAWA</span>
          <span className="card-text">沖縄</span>
        </div>
        <div className="card">
          <img src="./src/assets/img/card-3.webp" alt="" />
          <span className="card-text">KYOTO</span>
          <span className="card-text">京都</span>
        </div>
        <div className="card">
          <img src="./src/assets/img/card-4.jpeg" alt="" />
          <span className="card-text">SHIBUYA</span>
          <span className="card-text">渋谷</span>
        </div>
      </div>
    </div>
  );
};

export default ContentMenu;
