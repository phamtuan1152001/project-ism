import React from "react";

// @svg and img
import imageText from "../assets/images/image-2-9@2x.png";

// @utility
import { formatToCurrencyVND } from "@utility/common";

const ProductItem = ({ detail }) => {
  // console.log("detail", detail);
  const { name, image, gender, age, price } = detail || {};
  return (
    <div className="homepage-wrapper__content-body-product">
      <div className="homepage-wrapper__content-body-product-img">
        <img src={image[0]?.url} alt="image-item" className="image-item" />
      </div>
      <h2 className="homepage-wrapper__content-body-product-name">{name}</h2>
      <div className="homepage-wrapper__content-body-product-des">
        <div>
          <p>
            Gene: <span>{gender}</span>
          </p>
        </div>
        <div>
          <p>-</p>
        </div>
        <div>
          <p>
            Age: <span>{age}</span>
          </p>
        </div>
      </div>
      <h3 className="homepage-wrapper__content-body-product-price">
        {formatToCurrencyVND(price)}
      </h3>
    </div>
  );
};

export default ProductItem;
