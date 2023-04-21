import React from "react";
import "../bootstrap.scss";
import SinglePro from "@src/Modules/ProductDetail/components/SingleProduct/SinglePro.js";
import Gallery from "@src/Modules/ProductDetail/components/Customer/Gallery.js";
import OfferPro from "../components/Offer/OfferPro";

const ProductDetails = () => {
    return (
        <div className="productdetail">
            <SinglePro/>
            <Gallery />
            <OfferPro/>

            <a href="#" className="scroll-top"><i className='bx bxl-messenger'></i></a>

            <div className="end-text">
                <p>© late 2022 Tahmid Ahmed. All Rights Reserved.</p>
            </div>
        </div>
    );
};
export default ProductDetails;