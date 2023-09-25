import React from "react";
import { Link } from "react-router-dom";
import CustomLogo from "../CustomLogo";
import "./footer.scss";
import {
  InstagramIcon,
  VideoIcon,
  FacebookIcon,
  TwisterIcon,
} from "../../assets/svg";
const Footer = () => {
  return (
    <>
      {/* <footer id="footer-contain"> */}
      <div className="footer-contain">
        <div className="test">
          <div className="frame28 ">
            <div className="frame23 ">
              <div className="text-register-footer">
                {" "}
                Register Now So You Don't Miss Our Programs
              </div>
              <div className="enter-button">
                <input
                  type="text"
                  name="input-email"
                  placeholder="Enter your Email"
                  className="enter-email"
                ></input>
                <button className="sub-button btn" onClick="">
                  <div className="sub-butt-text">Subcribe Now</div>
                </button>
              </div>
            </div>
            <div className="frame27">
              <div className="frame2">
                <div className="frame-text">
                  <a href="/">Home</a>
                </div>
                <div className="frame-text">
                  <a href="/">Category</a>
                </div>
                <div className="frame-text">
                  <a href="/">About</a>
                </div>
                <div className="frame-text">
                  <a href="/">Contact</a>
                </div>
              </div>
              <div className="frame25">
                <Link className="icon-link" to="/">
                  <FacebookIcon />
                </Link>

                <Link className="icon-link" to="/">
                  <TwisterIcon />
                </Link>

                <Link className="icon-link" to="/">
                  <InstagramIcon />
                </Link>
                <Link className="icon-link" to="/">
                  <VideoIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className="frame26">
            <div className="frame">
              <div className="group-logo">
                <CustomLogo fill="#103559" className="vector" />
              </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center">
              <div className="text-footer-right">
                Terms of Service Privacy Policy
              </div>
              <div className="text-footer-left">
                © 2022 Monito. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </footer> */}
    </>
  );
};

export default Footer;
