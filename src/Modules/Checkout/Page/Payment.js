import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  console.log("state", location.state);
  return (
    <div>
      <h1>pyament - pham le song tuan</h1>
    </div>
  );
};

export default Payment;
