import "./navbar.scss";
import "./responsive.scss";

import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// @components
import CustomLogo from "../CustomLogo";
import CartInfo from "./CartInfo";
// import SideDrawer from "./SideDrawer";

// @svg
import { CartSvg } from "./svg";

// @selector
import { getUserData } from "@store/user/selector";
import { getDataCart } from "../../Modules/ProductDetail/Store/selectors";

// @antd
import { Popover } from "antd";

const Navbar = ({ router = {}, products = [] }) => {
  const history = useHistory();
  const cartInfo = useSelector(getDataCart);
  const { listCart } = cartInfo || {};
  // console.log("cartInfo", cartInfo);
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
                <div
                  className="log-nav-text"
                  onClick={() => history.push("/login")}
                >
                  Login
                </div>
              </button>
              <Popover
                className="cart-wrapper"
                content={<CartInfo cartInfo={cartInfo} />}
                title="Cart Information"
                trigger={"click"}
              >
                <button className="cart-navbar btn" onClick="">
                  <CartSvg />
                  {!!listCart
                    ? listCart?.length > 0 && (
                        <span className="tag-cart">{listCart?.length}</span>
                      )
                    : undefined}
                </button>
              </Popover>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
