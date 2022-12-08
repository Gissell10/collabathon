import React from "react";
import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <div className="Nav">
      <div>
        <Icon icon="icon-park:hamburger-button" />
      </div>
      <h1>
        GIVE ME <br /> THE TEA
      </h1>
      <button>SUSCRIBE</button>
      <div>
        <Icon icon="mdi:user-circle-outline" />
      </div>
    </div>
  );
};

export default Nav;
