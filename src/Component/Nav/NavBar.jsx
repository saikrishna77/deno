import React from "react";
import "../../App.css";
const NavBar = ({setType}) => {
  return (
    <div class="topnav">
      <a
        onClick={(e) => {
          setType("deno");
        }}
      >
        Denominator
      </a>
      <a
        onClick={(e) => {
          setType("IDMaker");
        }}
      >
        ID Maker
      </a>
      <a>About</a>
    </div>
  );
};
export default NavBar;
