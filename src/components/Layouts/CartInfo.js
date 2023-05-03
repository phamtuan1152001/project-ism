import React from "react";

// @utility
import { formatToCurrencyVND } from "@utility/common";

// @antd
import { Button } from "antd";

const CartInfo = ({ cartInfo }) => {
  const { listCart } = cartInfo || {};

  console.log("cartInfo", cartInfo);

  return (
    <React.Fragment>
      <div className="cart-content">
        {listCart.map((item) => {
          return (
            <div className="cart-content__item">
              <div className="row">
                <div className="col-6">
                  <div className="cart-content__item-image">
                    <img
                      src={item.image[0].url}
                      className="image-cart"
                      alt="image-cart"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <h3 className="cart-content__item-title">
                    {item.name} <span>x{item.totalItem}</span>
                  </h3>
                  <p className="cart-content__item-description">
                    {item.description}
                  </p>
                  <p className="cart-content__item-price">
                    {formatToCurrencyVND(item.price)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-total">
        <div className="cart-total__item">
          <h4 className="cart-total__item-title">Total item</h4>
          <p className="cart-total__item-price">x{cartInfo.totalProduct}</p>
        </div>

        <div className="cart-total__item">
          <h4 className="cart-total__item-title">Total price</h4>
          <p className="cart-total__item-price">
            {formatToCurrencyVND(cartInfo.totalPrice)}
          </p>
        </div>
      </div>
      <div className="cart-payment">
        <Button className="btn-payment">Payment</Button>
      </div>
    </React.Fragment>
  );
};

export default CartInfo;
