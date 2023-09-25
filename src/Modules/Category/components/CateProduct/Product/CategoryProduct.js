import React from "react";
import { useHistory } from "react-router-dom";

// @utility
import { formatToCurrencyVND } from "@utility/common";

const CategoryProduct = ({ _id, name, gender, age, price, image }) => {
  const history = useHistory();

  const goToProductDetail = () => {
    history.push({
      pathname: "/product-detail",
      state: {
        productId: _id,
      },
    });
  };

  return (
    <div className="frame" onClick={() => goToProductDetail()}>
      <div className="col-4">
        <img src={image[0].url} />
      </div>
      <div className="row">
        <div className="row-text">
          <h1 className="name">{name}</h1>
          <div className="row-description">
            <div className="first-des">
              <p className="thh">Gene:</p>
              <p className="tdd">{gender}</p>
            </div>
            <div className="dot"></div>
            <div className="second-des">
              <p className="thh">Age:</p>
              <p className="tdd">{age}</p>
            </div>
          </div>
          <h1 className="price">{formatToCurrencyVND(price)}</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
