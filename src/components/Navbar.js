import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Images/Logo.png";
import { MdAddShoppingCart } from "react-icons/md";
function Navbar() {
  return (
    <div className="nav-container">
      <div className="left_nav">
        <img src={Logo} alt="" />
      </div>
      <div className="right-nav">
        <ul>
          <li>
            <NavLink to="/" className="right_nav_li">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="right_nav_li">
              Contact Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="right_nav_li">
              About Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="right_nav_li">
              Product Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="right_nav_li">
              <MdAddShoppingCart className="cart_icon"/>
              <span className="cart_icon_span"> 10</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
