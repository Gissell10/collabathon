import Home from "./Home";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import "../App.css";
import { useState } from "react";
import Congrats from "./Congrats";

function App() {
  const [focusSignUp, setFocusSignUp] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  // if (showCongrats) {
  //   setTimeout(() => {
  //     setShowCongrats(false);
  //   }, 3000);
  // }

  const focus = (value) => {
    setFocusSignUp(value);
  };

  const showCon = (value) => {
    setFocusSignUp(value);
  };

  return (
    <div className="App">
      <div className={focusSignUp ? "blur" : ""}>
        <Home onClick={focus}></Home>
      </div>
      <Signin
        onClick={focus}
        isVisable={focusSignUp}
        // isVisableCon={showCon}
      ></Signin>
      <Congrats visable={showCongrats}></Congrats>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
