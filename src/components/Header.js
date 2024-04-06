import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // console.log("Header Render");

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a selector

  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems);
  // function ExampleComponent() {
  //   // console.log(useState()); // Logging the initial state and update function

  //   const [count, setCount] = useState(0);

  //   // Rest of the component code...
  // }
  // ExampleComponent();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 ">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="img-logo"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4"> Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
        </ul>
        <button
          onClick={() => {
            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
          }}
        >
          {loginBtn}
        </button>

        <li className="px-4 font-bold ">{loggedInUser}</li>
      </div>
    </div>
  );
};

export default Header;
