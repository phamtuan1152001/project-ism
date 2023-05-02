import React from "react";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";

// @components
import ImageGallery from "@src/Modules/ProductDetail/components/SingleProduct/ImageGallery.js";
import NumberInput from "../Input/NumberInput";

// @utility
import { formatToCurrencyVND } from "@utility/common";

// @actions
import { createCart, getListCart } from "../../Store/actions";

// @selector
import { getUserData } from "@store/user/selector";
import { getDataCart } from "../../Store/selectors";

const SinglePro = ({ detailProduct }) => {
  const dispatch = useDispatch();

  const {
    age,
    description,
    dob,
    gender,
    image,
    location,
    name,
    price,
    weight,
  } = detailProduct || {};
  const userInfo = useSelector(getUserData);
  const cart = useSelector(getDataCart);
  // console.log("userInfo", cart);

  const handleAddCart = () => {
    dispatch(
      createCart({
        userId: userInfo?.id,
        cartProduct: {
          ...detailProduct,
          totalItem: 1,
          totalPrice: price,
        },
      })
    );
  };

  return (
    <div className="single-product">
      <ImageGallery imageList={image} />
      <div className="col-22">
        {/* <div className="breadcrumbs">
          <a href="#">Home</a>
          <a href="#">Dog</a>
          <a href="#">Large Dog</a>
          <a href="#">Shiba Inu Sepia</a>
        </div>
        <h5>SKU #1000078</h5> */}
        <h1>{name}</h1>
        <h4>{formatToCurrencyVND(price)}</h4>
        <div className="button-group">
          <button type="button" onClick={() => handleAddCart()}>
            Add to Cart
          </button>
          <NumberInput />
        </div>
        <table className="product-description">
          <tbody>
            {/* <tr>
              <td>SKU</td>
              <td>: #1000078</td>
            </tr> */}
            <tr>
              <td>Gender</td>
              <td>: {gender}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>: {age}</td>
            </tr>
            <tr>
              <td>Size</td>
              <td>: {weight}</td>
            </tr>
            {/* <tr>
              <td>Color</td>
              <td>: Appricot & Tan</td>
            </tr> */}
            {/* <tr>
              <td>Vaccinated</td>
              <td>: Yes</td>
            </tr> */}
            {/* <tr>
              <td>Dewormed</td>
              <td>: Yes</td>
            </tr> */}
            <tr>
              <td>Location</td>
              <td>: {location}</td>
            </tr>
            <tr>
              <td>Published Date</td>
              <td>
                :{" "}
                {moment(dob).isValid()
                  ? moment(dob).format("DD/MM/YYYY")
                  : "--"}
              </td>
            </tr>
            <tr>
              <td>Additional Information</td>
              <td>: {description}.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default SinglePro;
