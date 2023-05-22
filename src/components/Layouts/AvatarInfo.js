import React from "react";
import { useHistory } from "react-router-dom";

const AvatarInfo = () => {
  const history = useHistory();

  const goToCustomerProfile = () => {
    history.push("/profile/information");
  };

  const goToCustomerOrder = () => {
    history.push("/profile/order");
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("persist:user");
    localStorage.removeItem("persist:root");
    localStorage.removeItem("persist:Payment");
    localStorage.removeItem("persist:Auth");
    localStorage.removeItem("mode");
    localStorage.removeItem("persist:layout");
    window.location.href = "/";
  };

  return (
    <div className="avatar-info-content">
      <div onClick={() => goToCustomerProfile()}>Customer's Profile</div>
      <div onClick={() => goToCustomerOrder()}>Customer's Order</div>
      <div onClick={() => logout()}>Log out</div>
    </div>
  );
};

export default AvatarInfo;
