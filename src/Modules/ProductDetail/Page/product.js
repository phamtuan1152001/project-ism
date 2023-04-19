import React from "react";
import "../bootstrap.scss";
import Thumbnail1 from '@src/assets/images/gallery-1.jpg';
import Thumbnail2 from '@src/assets/images/gallery-2.jpg';
import Thumbnail3 from '@src/assets/images/gallery-3.jpg';
import Thumbnail4 from '@src/assets/images/gallery-4.jpg';
import Thumbnail5 from '@src/assets/images/ball.png';
import Thumbnail6 from '@src/assets/images/book.png';
import Thumbnail7 from '@src/assets/images/child.png';
import Product1 from '@src/assets/images/product-1.jpg';
import Product2 from '@src/assets/images/product-2.jpg';
import Product3 from '@src/assets/images/product-3.jpg';
import Product4 from '@src/assets/images/product-4.jpg';
import Product5 from '@src/assets/images/product-5.jpg';
import Product6 from '@src/assets/images/product-6.jpg';
import Product7 from '@src/assets/images/product-7.jpg';
import Product8 from '@src/assets/images/product-8.jpg';
import Product9 from '@src/assets/images/product-9.jpg';
import Product10 from '@src/assets/images/product-10.jpg';

const Product = () => {
    return (
        <div className="productdetail">
            <div className="single-product">
                <div className="col-2">
                    <div className="container">
                        <div className="main-image">
                            <img src={Thumbnail1} width="100%" id="ProductImg" alt="Large Image"></img>
                        </div>
                        <div className="button-container">
                            <button id="prev-btn"><i className='bx bxs-chevron-left'></i></button>
                            <button id="next-btn"><i className='bx bxs-chevron-right'></i></button>
                        </div>
                    </div>
                    <div className="small-img-row">
                        <img src={Thumbnail1} width="100%" alt="Thumbnail 1"></img>
                        <img src={Thumbnail2} width="100%" alt="Thumbnail 2"></img>
                        <img src={Thumbnail3} width="100%" alt="Thumbnail 3"></img>
                        <img src={Thumbnail4} width="100%" alt="Thumbnail 4"></img>
                        <img src={Thumbnail5} width="100%" alt="Thumbnail 5"></img>
                        <img src={Thumbnail6} width="100%" alt="Thumbnail 6"></img>
                        <img src={Thumbnail7} width="100%" alt="Thumbnail 7"></img>
                    </div>
                    <div className="certification">
                        <p><i className='bx bxs-heart'></i>100% health guarantee for pets</p>
                        <p><i className='bx bxs-dog'></i>100% guarantee of pet identification</p>
                    </div>
                    <div className="contact-box">
                        <div className="share-box" style={{ display: "inline-flex" }}>
                            <p style={{ display: "inline-flex" }}>
                                <i className="bx bx-share-alt" style={{ display: "inline-flex" }}></i>
                                Share:
                            </p>
                        </div>
                        <div className="social" style={{ display: "inline-flex" }}>
                            <a href="#"><i className="bx bxl-facebook"></i></a>
                            <a href="#"><i className="bx bxl-instagram"></i></a>
                            <a href="#"><i className="bx bxl-twitter"></i></a>
                            <a href="#"><i className="bx bxl-youtube"></i></a>
                        </div>

                    </div>
                </div>
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
                        <button>Add to Cart</button>
                        <input type="number" value="1" min="1" />
                    </div>
                    <table className="product-description">
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
                    </table>
                </div>
            </div>
            <div className="Gallery">
                <div className="slider">
                    <h1>Our lovely customer</h1>
                    <div className="image-list">
                        <a><img src={Product1} alt="" className="active"></img></a>
                        <a><img src={Product2} alt=""></img></a>
                        <a><img src={Product3} alt=""></img></a>
                        <a><img src={Product4} alt=""></img></a>
                        <a><img src={Product5} alt=""></img></a>
                        <a><img src={Product6} alt=""></img></a>
                    </div>
                </div>
                <div className="image-navigation">
                    <a href="#" className="active"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>
            </div>
            <div className="offer">
                <div className="small-container">
                    <h3>Whats new?</h3>
                    <h1>See More Puppies</h1>
                    <div className="frames-container">
                        <div className="frame">
                            <div className="col-4">
                                <img src={Product7}></img>
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
                                <img src={Product8}></img>
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
                                <img src={Product9}></img>
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
                                <img src={Product10}></img>
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