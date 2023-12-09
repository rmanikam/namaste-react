import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
const HeaderComponent = () => {
  return (
    <div id="outerContainer">
  
        <img src="https://static.vecteezy.com/system/resources/previews/010/994/232/non_2x/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" alt="Logo"></img>
        <input placeholder="SearchBar"></input>
        <FontAwesomeIcon icon={faUser}/>
    
    </div>
  );
};

export default HeaderComponent;