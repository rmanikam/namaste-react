import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  // console.log("Header Render");

  function ExampleComponent() {
    console.log(useState()); // Logging the initial state and update function

    const [count, setCount] = useState(0);

    // Rest of the component code...
  }
  ExampleComponent();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="img-logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
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
