import React from "react";
import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <div>
      <div className="Nav">
        <h1>
          GIVE ME <br /> THE TEA
          <span>
            <Icon className="ttileIcon" icon="icon-park-outline:tea-drink" />
          </span>
        </h1>
        <button className="btn-suscribe">SUSCRIBE</button>
        <p>My Account</p>
        <div>
          <Icon className="Burger" icon="icon-park:hamburger-button" />
        </div>
      </div>

      <div>
        <ul className="bar">
          <li>Trending News</li>
          <li className="btn-secret">Secret Toilet</li>
          <li>Nasty Fab</li>
          <li>Hood ups</li>
          <li>More</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
