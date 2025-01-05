import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("Use_Effect Called");
  }, []);

  return (
    <div className="flex justify-between bg-sky-200 shadow-2xl">
      <div>
        <Link to="/">
          <img className="w-52" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-6">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-6">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-6">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-6">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-6">Cart</li>
          <li>
            <button
              className="bg-green-300 px-6 py-2 rounded-md"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
