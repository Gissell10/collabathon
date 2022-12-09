import Home from "./Home";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import "../App.css";
import { useState } from "react";

function App() {
  const [focusSignUp, setFocusSignUp] = useState(false);

  const focus = (value) => {
    setFocusSignUp(value);
  };

  return (
    <div className="App">
      <div className={focusSignUp ? "blur" : ""}>
        <Home onClick={focus}></Home>
      </div>
      <Signin></Signin>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
