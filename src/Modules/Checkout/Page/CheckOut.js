import React from "react"
import "../bootstrap.scss";
import PaymentForm from "../components/Payship/PaymentForm";
import Placeorder from "../components/Placeorder/Placeorder";
import Ship from "../components/Payship/Ship";
import CheckTop from "../components/CheckTop/CheckTop";

const CheckOut = () => {
    return (
        <div className="PayMoney">
            <div className="container">
                <CheckTop/>
                <div className="checkout">
                    <div className="payship">
                        <PaymentForm />
                        <Ship/>
                    </div>
                    <Placeorder/>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;