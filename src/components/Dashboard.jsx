import React, { useState } from "react";
import "../Dashboard.css";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const _handleClick = async () => {
    try {
      const userDocs = await getDocs(collection(db, "users"));
      const userArray = [];

      userDocs.forEach((doc) => {
        userArray.push(doc.data());
      });
      setUsers([...userArray]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-dash">
      <h1>Current Subscribers</h1>
      <button onClick={_handleClick}>Get Subscribers</button>
      {users?.length > 0 ? (
        users.map((user) => {
          return (
            <div className="single-user">
              <p>{user.email}</p>
              <p>{user.firstname}</p>
              <p>{user.lastname}</p>
            </div>
          );
        })
      ) : (
        <div> NO USERS YET</div>
      )}
    </div>
  );
};

export default Dashboard;
