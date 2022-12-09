import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../Signup.css";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const Signin = (props) => {
  const regNoNumbers = /[0-9]/;
  const regLonger2 = /[a-zA-Z]{2,}/;
  const regNoSpecialChar = /[/^[A-Za-z]+$/;
  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [validLast, setValidLast] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validFirst, setValidFirst] = useState(false);

  const [messageFirst, setMessageFirst] = useState("");
  const [messageLast, setMessageLast] = useState("");
  const [messageEmail, setMessageEmail] = useState("");

  const testEmail = (email) => {
    if (reg.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };
  const testLast = (lastName) => {
    if (regNoNumbers.test(lastName)) {
      setValidLast(false);
    } else if (!regLonger2.test(lastName)) {
      setValidLast(false);
    } else if (!regNoSpecialChar.test(lastName)) {
      setValidLast(false);
    } else {
      setValidLast(true);
    }
  };
  const testFirst = (firstName) => {
    if (regNoNumbers.test(firstName)) {
      setValidFirst(false);
    } else if (!regLonger2.test(firstName)) {
      setValidFirst(false);
    } else if (!regNoSpecialChar.test(firstName)) {
      setValidFirst(false);
    } else {
      setValidFirst(true);
    }
  };

  const addToMailingList = async function () {
    try {
      await addDoc(collection(db, "users"), {
        email: email,
        firstname: firstName,
        lastname: lastName,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const _handleSumbit = (e) => {
    e.preventDefault();
    if (regNoNumbers.test(firstName)) {
      setMessageFirst("First name cannot contain numbers");
    } else if (!regLonger2.test(firstName)) {
      setMessageFirst("First name has to be at least 2 characters");
    } else if (!regNoSpecialChar.test(firstName)) {
      setMessageFirst("First name cannot contain special characters");
    }

    if (regNoNumbers.test(lastName)) {
      setMessageLast("Last name cannot contain numbers");
    } else if (!regLonger2.test(lastName)) {
      setMessageLast("Last name has to be at least 2 characters");
    } else if (!regNoSpecialChar.test(lastName)) {
      setMessageLast("Last name cannot contain special characters");
    }
    if (!reg.test(email)) {
      setMessageEmail("Invalid Email Address");
    }

    if (!validFirst || !validLast || !validEmail) {
      return;
    }

    console.log(firstName, validFirst, lastName, email);
    addToMailingList();
  };

  return (
    <div className={props.isVisable ? "container" : "container is-visable"}>
      {!validFirst && <p>{messageFirst}</p>}
      {!validLast && <p>{messageLast}</p>}
      {!validEmail && <p>{messageEmail}</p>}
      <div className="cross-icon">
        <Icon
          onClick={() => props.onClick(false)}
          icon="gridicons:cross-circle"
          color="#0026ad"
        />
      </div>
      <div className="headings">
        <div className="heading-wrap">
          <h1 className="heading">Submit to Tea's newsletter</h1>
        </div>
        <h2 className="sub-heading">Get More Exclusive More Unlocked</h2>
      </div>

      <p>
        <span>
          <Icon
            icon="icon-park-outline:tea-drink"
            color="white"
            width="21"
            height="21"
          />
        </span>
        Unlimited Access to top secret tea
      </p>
      <p>
        <span>
          <Icon
            icon="icon-park-outline:tea-drink"
            color="white"
            width="21"
            height="21"
          />
        </span>
        Unlimited Access to top secret tea
      </p>
      <p>
        <span>
          <Icon
            icon="icon-park-outline:tea-drink"
            color="white"
            width="21"
            height="21"
          />
        </span>
        Unlimited Access to top secret tea
      </p>
      <p>
        <span>
          <Icon
            icon="icon-park-outline:tea-drink"
            color="white"
            width="21"
            height="21"
          />
        </span>
        Unlimited Access to top secret tea
      </p>
      <p>
        <span>
          <Icon
            icon="icon-park-outline:tea-drink"
            color="white"
            width="21"
            height="21"
          />
        </span>
        Unlimited Access to top secret tea
      </p>
      <form onSubmit={_handleSumbit}>
        <h3>Have More Tea!</h3>
        <ul>
          <li>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
                testEmail(e.target.value);
              }}
              type="text"
              placeholder="Email"
              className="email"
              required
            />
          </li>
          <li>
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
                testFirst(e.target.value);
              }}
              type="text"
              placeholder="First Name"
              className="first-name"
              required
            />
            <input
              onChange={(e) => {
                setLastName(e.target.value);
                testLast(e.target.value);
              }}
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
        <a onClick={() => props.onClick(false)} href="#">
          No Thanks
        </a>
      </p>
    </div>
  );
};

export default Signin;
