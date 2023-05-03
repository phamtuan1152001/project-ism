import React, { useEffect, useState } from "react";
import "../bootstrap.scss";

// @components
import SinglePro from "@src/Modules/ProductDetail/components/SingleProduct/SinglePro.js";
import Gallery from "@src/Modules/ProductDetail/components/Customer/Gallery.js";
import OfferPro from "../components/Offer/OfferPro";

// @service
import { getDetailProduct } from "../Store/service";

// @antd
import { Spin } from "antd";

const ProductDetails = () => {
  const [detailProduct, setDetailProduct] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchDetailProduct();
  }, []);

  const fetchDetailProduct = async () => {
    try {
      setLoading(true);
      const { data } = await getDetailProduct({
        id: "643905b0e2f9d51f3740b64e",
      });
      if (data.retCode === 0) {
        setDetailProduct(data?.retData);
      }
    } catch (err) {
      console.log("FETCH FAIL!", err);
    } finally {
      setLoading(false);
    }
  };

  // console.log("detailProduct", detailProduct);

  return (
    <div className="productdetail">
      <Spin spinning={loading}>
        <SinglePro detailProduct={detailProduct} />
      </Spin>
      <Gallery />
      <OfferPro />

      <a href="#" className="scroll-top">
        <i className="bx bxl-messenger"></i>
      </a>

      <div className="end-text">
        <p>© late 2022 Tahmid Ahmed. All Rights Reserved.</p>
      </div>
    </div>
  );
};
export default ProductDetails;
