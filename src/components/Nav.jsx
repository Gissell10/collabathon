import React from "react";
import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <div className="Nav">
      <h1>
        GIVE ME <br /> THE TEA
      </h1>
      <button>SUSCRIBE</button>
      <p>My Account</p>
      <div>
        <Icon icon="icon-park:hamburger-button" />
      </div>
    </div>
  );
};

export default Nav;
