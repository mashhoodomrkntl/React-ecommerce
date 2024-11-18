import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link className="txt-decorator" to="/">
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link className="txt-decorator" to="/mens">
            Men
          </Link>{" "}
          {menu === "mens" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          {" "}
          <Link className="txt-decorator" to="womens">
            Women
          </Link>{" "}
          {menu === "womens" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link className="txt-decorator" to="kids">
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link className="txt-decorator" to="/login">
          <button>Login</button>
        </Link>

        <Link className="txt-decorator" to="/cart">
          {" "}
          <img src={cartIcon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
