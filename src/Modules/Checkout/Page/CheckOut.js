import "../bootstrap.scss";
import React, { useState } from "react";
import { useSelector } from "react-redux";

// @components
import PaymentForm from "../components/Payship/PaymentForm";
import Placeorder from "../components/Placeorder/Placeorder";
import Ship from "../components/Payship/Ship";
import CheckTop from "../components/CheckTop/CheckTop";

// @selector
import { getUserData } from "@store/user/selector";
import { getDataCart } from "../../ProductDetail/Store/selectors";

const CheckOut = () => {
  const cartInfo = useSelector(getDataCart);
  const userInfo = useSelector(getUserData);

  const [infoUser, setInfoUser] = useState({});
  const [isDisable, setIsDisable] = useState(true);

  const fetchCreateOrder = () => {
    console.log("infoUser", infoUser);
  };
  return (
    <div className="PayMoney">
      <div className="container">
        <CheckTop />
        <div className="checkout">
          <div className="payship">
            <PaymentForm
              setIsDisable={setIsDisable}
              setInfoUser={setInfoUser}
              fetchCreateOrder={fetchCreateOrder}
            />
            {/* <Ship /> */}
          </div>
          <Placeorder
            cartInfo={cartInfo}
            isDisable={isDisable}
            fetchCreateOrder={fetchCreateOrder}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
