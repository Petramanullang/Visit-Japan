import React from "react";
import "./Heroes.css";

const HeaderMenu = () => {
  return (
    <div className="header-menu">
      <div className="menu">
        <div className="menu-1">
          <a href="">
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                dignissimos!
              </p>
            </div>
            <div className="link-btn">
              <h2>Lorem ipsum </h2>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
