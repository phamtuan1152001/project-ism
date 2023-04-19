import React from "react";
import "../bootstrap.scss";
import ImageGallery from "@src/Modules/ProductDetail/components/ImageGallery.js";
import Gallery from "@src/Modules/ProductDetail/components/Gallery.js";
import Product7 from '@src/assets/images/product-7.jpg';
import Product8 from '@src/assets/images/product-8.jpg';
import Product9 from '@src/assets/images/product-9.jpg';
import Product10 from '@src/assets/images/product-10.jpg';

const Product = () => {
    return (
        <div className="productdetail">
            <div className="single-product">
                <ImageGallery/>
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
            <Gallery/>
            <div className="offer">
                <div className="small-container">
                    <h3>Whats new?</h3>
                    <h1>See More Puppies</h1>
                    <div className="frames-container">
                        <div className="frame">
                            <div className="col-4">
                                <img src={Product7}/>
                            </div>
                            <div className="row">
                                <div className="row-text">
                                    <h1 className="name">MO231 - Pomeranian White</h1>
                                    <div className="row-description">
                                        <div className="first-des">
                                            <p className="thh">Gene:</p>
                                            <p className="tdd">Male  </p>
                                        </div>
                                        <div className="dot"></div>
                                        <div className="second-des">
                                            <p className="thh">Age:</p>
                                            <p className="tdd">02 months</p>
                                        </div>
                                    </div>
                                    <h1 className="price">6.900.000 VND</h1>
                                </div>
                            </div>
                        </div>

                        <div className="frame">
                            <div className="col-4">
                                <img src={Product8}/>
                            </div>
                            <div className="row">
                                <div className="row-text">
                                    <h1 className="name">MO502 - Poodle Tiny Yellow</h1>
                                    <div className="row-description">
                                        <div className="first-des">
                                            <p className="thh">Gene:</p>
                                            <p className="tdd">Female</p>
                                        </div>
                                        <div className="dot"></div>
                                        <div className="second-des">
                                            <p className="thh">Age:</p>
                                            <p className="tdd">02 months</p>
                                        </div>
                                    </div>
                                    <h1 className="price">3.900.000 VND</h1>
                                </div>
                            </div>
                        </div>

                        <div className="frame">
                            <div className="col-4">
                                <img src={Product9}/>
                            </div>
                            <div className="row">
                                <div className="row-text">
                                    <h1 className="name">MO102 - Poodle Tiny Sepia</h1>
                                    <div className="row-description">
                                        <div className="first-des">
                                            <p className="thh">Gene:</p>
                                            <p className="tdd">Male  </p>
                                        </div>
                                        <div className="dot"></div>
                                        <div className="second-des">
                                            <p className="thh">Age:</p>
                                            <p className="tdd">02 months</p>
                                        </div>
                                    </div>
                                    <h1 className="price">4.000.000 VND</h1>
                                </div>
                            </div>
                        </div>

                        <div className="frame">
                            <div className="col-4">
                                <img src={Product10}/>
                            </div>
                            <div className="row">
                                <div className="row-text">
                                    <h1 className="name">MO512 - Alaskan Malamute Grey</h1>
                                    <div className="row-description">
                                        <div className="first-des">
                                            <p className="thh">Gene:</p>
                                            <p className="tdd">Male  </p>
                                        </div>
                                        <div className="dot"></div>
                                        <div className="second-des">
                                            <p className="thh">Age:</p>
                                            <p className="tdd">02 months</p>
                                        </div>
                                    </div>
                                    <h1 className="price">8.900.000 VND</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#" className="scroll-top"><i className='bx bxl-messenger'></i></a>

            <div className="end-text">
                <p>� late 2022 Tahmid Ahmed. All Rights Reserved.</p>
            </div>
        </div>
    );
};
export default Product;