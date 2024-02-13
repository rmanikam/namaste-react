import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  console.log("Header Render");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="img-logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us </li>
          <li>Cart</li>
        </ul>
        <button
          onClick={() => {
            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
          }}
        >
          {loginBtn}
        </button>
      </div>
    </div>
  );
};

export default Header;
