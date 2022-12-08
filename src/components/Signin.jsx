import React from "react";
import { Icon } from "@iconify/react";
import "../Signup.css";

const Signin = () => {
  return (
    <div className="container">
      <p className="cross-icon">
        <Icon icon="gridicons:cross-circle" color="#0026ad" />
      </p>
      <h1 className="center">Submit to Tea's newsletter</h1>
      <h2>Get More Exclusive More Unlocked</h2>
      <p>
        <span>
          <Icon icon="icon-park-outline:tea-drink" />
        </span>
        Unlimited Access to top secret tea
      </p>
      <p>
        <span>
          <Icon icon="icon-park-outline:tea-drink" />
        </span>
        Unlimited Access to top secret tea
      </p>
      <p>
        <span>
          <Icon icon="icon-park-outline:tea-drink" />
        </span>
        Unlimited Access to top secret tea
      </p>
      <p>
        <span>
          <Icon icon="icon-park-outline:tea-drink" />
        </span>
        Unlimited Access to top secret tea
      </p>
      <p>
        <span>
          <Icon icon="icon-park-outline:tea-drink" />
        </span>
        Unlimited Access to top secret tea
      </p>
      <h3>Have More Tea!</h3>
      <ul>
        <li>
          <input type="email" placeholder="Email" className="email" />
        </li>
        <li>
          <input type="text" placeholder="First Name" className="first-name" />
          <input type="text" placeholder="Last Name" className="last-name" />
        </li>
      </ul>

      <p className="disclaimer">
        Your information is used to personalize our monthly newsletter to you.
        You can use the unsubscribe link integrated in the newsletter at any
        time.
        <a className="disclaimer link" href="#">
          Learn more about managing your data and your rights.
        </a>
      </p>
      <div className="submit-button">
        <button className="submit" type="submit">
          I Want More TEA
        </button>
      </div>

      <p className="close">
        <a href="#">No Thanks</a>
      </p>
    </div>
  );
};

export default Signin;
