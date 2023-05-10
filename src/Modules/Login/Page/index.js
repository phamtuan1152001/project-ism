import React, { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
// import "./newind.scss";
// @svg and img
import pet from "../assets/svg/PetAdoption.svg";
import welcome from "../assets/svg/Welcome.svg";

// @antd
import { Button, notification } from "antd";

// @service
import { signIn } from "../Store/service";

// @helpers
import { setAccessToken } from "../helpers";
import apiMethod from "@utility/ApiMethod";

// @constants
import { RETCODE_SUCCESS } from "@configs/contants";

// @actions
import { actions as ActionsUser } from "@store/user/reducer";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const fetchSignIn = async () => {
    try {
      setLoading(true);
      const { data } = await signIn({
        username,
        password,
      });
      if (data?.retCode === RETCODE_SUCCESS) {
        const accessToken = data?.retData?.accessToken;
        await setAccessToken(accessToken);
        apiMethod.defaults.headers.common["Authorization"] = accessToken;
        await dispatch(ActionsUser.setInfoData(data?.retData));
        notification.success({
          message: "Successfully",
          description: data?.retText,
          duration: 2,
        });
        setTimeout(() => {
          // window.location.reload();
          history.push("/");
        }, 2000);
      } else {
        notification.error({
          message: "Fail",
          description: "Login unsuccessfully!",
          duration: 2,
        });
      }
    } catch (err) {
      console.log("FETCH FAIL!", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="contain-wrapper">
        <div className="forms-container">
          <div className="login-signup">
            <form action="#" className="login-form">
              <h2 className="title">Log in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                loading={loading}
                className="btn solid"
                onClick={() => fetchSignIn()}
              >
                Login
              </Button>
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <Link href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <Link href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>Let's Create your new account, then join with us!!!</p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => {
                  const container = document.querySelector(".contain-wrapper");
                  container.classList.add("sign-up-mode");
                  // console.log("test", container);
                }}
              >
                Sign up
              </button>
            </div>
            <img src={pet} className="image" alt="Pet Adoption Picture" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>Then let's login and enjoy our services</p>
              <button
                className="btn transparent"
                id="login-btn"
                onClick={() => {
                  const container = document.querySelector(".contain-wrapper");
                  container.classList.remove("sign-up-mode");
                  // console.log("test", container);
                }}
              >
                Login
              </button>
            </div>
            <img src={welcome} className="image" alt="Welcome Picture" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
