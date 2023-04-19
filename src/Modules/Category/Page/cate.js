import React from "react";
import "../bootstrap.scss";
import Thumbnail1 from '@src/assets/images/gallery-1.jpg';
import Thumbnail2 from '@src/assets/images/gallery-2.jpg';
import Thumbnail3 from '@src/assets/images/gallery-3.jpg';
import Thumbnail4 from '@src/assets/images/gallery-4.jpg';
import Thumbnail5 from '@src/assets/images/ball.png';
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

const Cate = () => {
    return (
        <div className="Category">
            <div className="banner">
                <div className="breadcrumbs">
                    <a href="#">Home</a>
                    <a href="#">Dog</a>
                    <a href="#">Large Dog</a>
                </div>

                <div className="banner-background">
                    <div className="banner-content">
                        <h1>One More Friend</h1>
                        <h2>Thousands More Fun!</h2>
                        <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                        <div className="nut">
                            <button className="view">View Intro<i className='bx bx-play-circle'></i></button>
                            <button className="explore">Explore Now</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="filterproduct">
                <div className="filter">
                    <h3>Filter</h3>
                    <div className="filter-box">
                        <div className="gender">
                            <h4>Gender</h4>
                            <div className="gender-box">
                                <div className="male">
                                    <input type="checkbox" id="male" name="male" value="Male" />
                                    <label for="male"> Male</label>
                                </div>
                                <div className="female">
                                    <input type="checkbox" id="female" name="female" value="Female" />
                                    <label for="female"> Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="color">
                            <h4>Color</h4>
                            <div className="color-box">
                                <div className="red">
                                    <input type="checkbox" id="red" name="red" value="Red" />
                                    <div className="redcircle"></div>
                                    <label for="red"> Red</label>
                                </div>
                                <div className="apricot">
                                    <input type="checkbox" id="apricot" name="apricot" value="Apricot" />
                                    <div className="apricotcircle"></div>
                                    <label for="apricot"> Apricot</label>
                                </div>
                                <div className="black">
                                    <input type="checkbox" id="black" name="black" value="Black" />
                                    <div className="blackcircle"></div>
                                    <label for="black"> Black</label>
                                </div>
                                <div className="blackwhite">
                                    <input type="checkbox" id="blackwhite" name="blackwhite" value="BlackWhite" />
                                    <div className="halfcircle"></div>
                                    <label for="blackwhite"> Black & White</label>
                                </div>
                                <div className="silver">
                                    <input type="checkbox" id="silver" name="silver" value="Silver" />
                                    <div className="silvercircle"></div>
                                    <label for="silver"> Silver</label>
                                </div>
                                <div className="tan">
                                    <input type="checkbox" id="tan" name="tan" value="Tan" />
                                    <div className="tancircle"></div>
                                    <label for="tan"> Tan</label>
                                </div>
                            </div>
                        </div>
                        <div className="price">
                            <h4>Price</h4>
                            <datalist id="allowed-prices">
                                <option value="500.000 VND" />
                                <option value="1.000.000 VND" />
                                <option value="5.000.000 VND" />
                                <option value="10.000.000 VND" />
                                <option value="20.000.000 VND" />
                                <option value="50.000.000 VND" />
                            </datalist>

                            <div className="minmax">
                                <div className="min">
                                    <input type="text" placeholder="Min" list="allowed-prices" />
                                </div>
                                <div className="max">
                                    <input type="text" placeholder="Max" list="allowed-prices" />
                                </div>
                            </div>
                        </div>
                        <div className="breed">
                            <h4>Breed</h4>
                            <div className="breed-box">
                                <div className="small">
                                    <input type="checkbox" id="small" name="small" value="S" />
                                    <label for="small"> Small</label>
                                </div>
                                <div className="medium">
                                    <input type="checkbox" id="medium" name="medium" value="M" />
                                    <label for="medium"> Medium</label>
                                </div>
                                <div className="large">
                                    <input type="checkbox" id="large" name="large" value="L" />
                                    <label for="large"> Large</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-category">
                    <div className="small-container">
                        <div className="container">
                            <div className="title"><h3>Small Dog</h3></div>
                            <div className="list"><h5>52 puppies</h5></div>
                        </div>
                        <div className="sort">
                            <select>
                                <option>Sort by: Popular</option>
                                <option>Sort by: Lastest</option>
                                <option>Sort by: Top Sales</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                    <div className="frames-container">
                        <div className="frame">
                            <div className="col-4">
                                <img src={Thumbnail1}></img>
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
                                <img src={Thumbnail2}></img>
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
                                <img src={Thumbnail3}></img>
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
                                <img src={Thumbnail4}></img>
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
                                <img src={Thumbnail5}></img>
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
                                <img src={Product1}></img>
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
                                <img src={Product2}></img>
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
                                <img src={Product3}></img>
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
                                <img src={Product4}></img>
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
                                <img src={Product5}></img>
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
                                <img src={Product6}></img>
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
                                <img src={Product7}></img>
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
                                <img src={Product8}></img>
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
                                <img src={Product9}></img>
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
                                <img src={Product10}></img>
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
                    </div>
                    <div className="fullpage">
                        <div className="pagination">
                            <a href="#" className="prev">�</a>
                            <span className="page active">1</span>
                            <span className="page">2</span>
                            <span className="page">3</span>
                            <span className="page">4</span>
                            <span className="ellipsis">...</span>
                            <span className="page">28</span>
                            <a href="#" className="next">�</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cate;