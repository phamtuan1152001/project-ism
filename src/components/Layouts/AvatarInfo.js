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

  return (
    <div className="avatar-info-content">
      <div onClick={() => goToCustomerProfile()}>Customer's Profile</div>
      <div onClick={() => goToCustomerOrder()}>Customer's Order</div>
    </div>
  );
};

export default AvatarInfo;
