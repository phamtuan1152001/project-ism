import React from "react";
import ImageGallery from "@src/Modules/ProductDetail/components/SingleProduct/ImageGallery.js";

const SinglePro = () => {
    return (
        <div className="single-product">
                <ImageGallery />
                <div className="col-22">
                    <div className="breadcrumbs">
                        <a href="#">Home</a>
                        <a href="#">Dog</a>
                        <a href="#">Large Dog</a>
                        <a href="#">Shiba Inu Sepia</a>
                    </div>
                    <h5>SKU #1000078</h5>
                    <h1>Shiba Inu Sepia</h1>
                    <h4>34.000.000 VND</h4>
                    <div className="button-group">
                        <button type="button">Add to Cart</button>
                        <input type="number" value="1" min="1" />
                    </div>
                    <table className="product-description">
                        <tbody>
                            <tr>
                                <td>SKU</td>
                                <td>: #1000078</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>: Female</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>: 2 Months</td>
                            </tr>
                            <tr>
                                <td>Size</td>
                                <td>: Small</td>
                            </tr>
                            <tr>
                                <td>Color</td>
                                <td>: Appricot & Tan</td>
                            </tr>
                            <tr>
                                <td>Vaccinated</td>
                                <td>: Yes</td>
                            </tr>
                            <tr>
                                <td>Dewormed</td>
                                <td>: Yes</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>: Vietnam</td>
                            </tr>
                            <tr>
                                <td>Published Date</td>
                                <td>: 12-OCt-2022</td>
                            </tr>
                            <tr>
                                <td>Additional Information</td>
                                <td>: Pure breed Shih Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    );
};
export default SinglePro;