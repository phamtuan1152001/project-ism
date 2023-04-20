import React from "react";
import "../bootstrap.scss";
import CartTop from "../components/CartTop";
import CartContentLeft from "../components/CartContentLeft/CartContentLeft.js";
import CartContentRight from "../components/CartContentRight";

const Cart = () => {
    return (
        <div className="cartfull">
            <CartTop />
            <div className="container">
                <CartContentLeft />
                <CartContentRight />
            </div>
        </div>
    );
};

export default Cart;