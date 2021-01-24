import React, {useState} from "react";
import "./App.css";
import Denominator from "./Component/Denominator/Denominator";
import IDMaker from "./Component/ID/ID_Start";
import NavBar from "./Component/Nav/NavBar";

const App = () => {
  const [type, setType] = useState("deno");
  const displayFunction = () => {
    switch (type) {
      case "deno":
        return <Denominator />;
      case "IDMaker":
        return <IDMaker />;
      default:
        break;
    }
  };
  return (
    <div className="main-div">
      <NavBar setType={setType} />
      <br></br>
      <div>{displayFunction()}</div>
    </div>
  );
};

export default App;
