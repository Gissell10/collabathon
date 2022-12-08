import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../Signup.css";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const Signin = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const addToMailingList = async function () {
    try {
      await addDoc(collection(db, "users"), {
        email: email,
        firstname: firstName,
        lastName: lastName,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const _handleSumbit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email);
    addToMailingList();
  };

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
      <form onSubmit={_handleSumbit}>
        <h3>Have More Tea!</h3>
        <ul>
          <li>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="email"
              required
            />
          </li>
          <li>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              className="first-name"
              required
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
              className="last-name"
              required
            />
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
      </form>

      <p className="close">
        <a href="#">No Thanks</a>
      </p>
    </div>
  );
};

export default Signin;
