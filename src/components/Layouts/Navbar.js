import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomLogo from "../CustomLogo";
// import SideDrawer from "./SideDrawer";
import "./navbar.scss";
import "./responsive.scss";
const Navbar = ({ router = {}, products = [] }) => {
  return (
    <>
      <header className="header-desktop">
        <div className="nav-contain">
          <div className="frame47">
            <Link to="/" className="logo-brand">
              <CustomLogo fill="#103559" />
            </Link>
            <div className="frame2">
              <ul className="ultest">
                <li className="frame-text">
                  <a href="/">Home</a>
                </li>
                <li className="frame-text">
                  <a href="/">Category</a>
                </li>
                <li className="frame-text">
                  <a href="/">About</a>
                </li>
                <li className="frame-text">
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="frame46">
            <div className="frame3">
              <div className="search-navbar">
                <input
                  type="text"
                  name="navbar-search-input"
                  className="nav-search-text"
                  placeholder="Search Something Here!!!"
                />
              </div>

              <button className="log-navbar btn" onClick="">
                <div className="log-nav-text">Login</div>
              </button>
              <button className="cart-navbar btn" onClick="">
                <svg
                  width="40"
                  height="45"
                  viewBox="0 0 32 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10H7.26835C7.74213 10 7.97922 10 8.17246 10.0855C8.34283 10.1608 8.48871 10.2823 8.59375 10.4362C8.71289 10.6107 8.75578 10.8437 8.8418 11.3096L11 23L21.4195 23C21.8739 23 22.1016 23 22.2896 22.9198C22.4554 22.8491 22.5989 22.7348 22.7051 22.5891C22.8255 22.424 22.8763 22.2025 22.9785 21.7597L24.5477 14.9597C24.7022 14.2902 24.7796 13.9556 24.6946 13.6926C24.6201 13.4621 24.4639 13.2663 24.256 13.1419C24.0189 13 23.6758 13 22.9887 13H9.5M22 28C21.4477 28 21 27.5523 21 27C21 26.4477 21.4477 26 22 26C22.5523 26 23 26.4477 23 27C23 27.5523 22.5523 28 22 28ZM12 28C11.4477 28 11 27.5523 11 27C11 26.4477 11.4477 26 12 26C12.5523 26 13 26.4477 13 27C13 27.5523 12.5523 28 12 28Z"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
