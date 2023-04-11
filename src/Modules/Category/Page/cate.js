import React from "react"

const cate = () => {
    return
    <>
        <div class="banner">
            <div class="breadcrumbs">
                <a href="#">Home</a>
                <a href="#">Dog</a>
                <a href="#">Large Dog</a>
            </div>

            <div class="banner-background">
                <div class="banner-content">
                    <h1>One More Friend</h1>
                    <h2>Thousands More Fun!</h2>
                    <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                    <div class="nut">
                        <button class="view">View Intro<i class='bx bx-play-circle'></i></button>
                        <button class="explore">Explore Now</button>
                    </div>

                </div>
            </div>
        </div>
        <div class="filterproduct">
            <div class="filter">
                <h3>Filter</h3>
                <div class="filter-box">
                    <div class="gender">
                        <h4>Gender</h4>
                        <div class="gender-box">
                            <div class="male">
                                <input type="checkbox" id="male" name="male" value="Male"></input>
                                <label for="male"> Male</label>
                            </div>
                            <div class="female">
                                <input type="checkbox" id="female" name="female" value="Female"></input>
                                <label for="female"> Female</label>
                            </div>
                        </div>
                    </div>
                    <div class="color">
                        <h4>Color</h4>
                        <div class="color-box">
                            <div class="red">
                                <input type="checkbox" id="red" name="red" value="Red"></input>
                                <div class="redcircle"></div>
                                <label for="red"> Red</label>
                            </div>
                            <div class="apricot">
                                <input type="checkbox" id="apricot" name="apricot" value="Apricot"></input>
                                <div class="apricotcircle"></div>
                                <label for="apricot"> Apricot</label>
                            </div>
                            <div class="black">
                                <input type="checkbox" id="black" name="black" value="Black"></input>
                                <div class="blackcircle"></div>
                                <label for="black"> Black</label>
                            </div>
                            <div class="blackwhite">
                                <input type="checkbox" id="blackwhite" name="blackwhite" value="BlackWhite"></input>
                                <div class="halfcircle"></div>
                                <label for="blackwhite"> Black & White</label>
                            </div>
                            <div class="silver">
                                <input type="checkbox" id="silver" name="silver" value="Silver"></input>
                                <div class="silvercircle"></div>
                                <label for="silver"> Silver</label>
                            </div>
                            <div class="tan">
                                <input type="checkbox" id="tan" name="tan" value="Tan"></input>
                                <div class="tancircle"></div>
                                <label for="tan"> Tan</label>
                            </div>
                        </div>
                    </div>
                    <div class="price">
                        <h4>Price</h4>
                        <datalist id="allowed-prices">
                            <option value="500.000 VND"></option>
                            <option value="1.000.000 VND"></option>
                            <option value="5.000.000 VND"></option>
                            <option value="10.000.000 VND"></option>
                            <option value="20.000.000 VND"></option>
                            <option value="50.000.000 VND"></option>
                        </datalist>
                        <div class="minmax">
                            <div class="min">
                                <input type="text" placeholder="Min" list="allowed-prices"></input>
                            </div>
                            <div class="max">
                                <input type="text" placeholder="Max" list="allowed-prices"></input>
                            </div>
                        </div>
                    </div>
                    <div class="breed">
                        <h4>Breed</h4>
                        <div class="breed-box">
                            <div class="small">
                                <input type="checkbox" id="small" name="small" value="S"></input>
                                <label for="small"> Small</label>
                            </div>
                            <div class="medium">
                                <input type="checkbox" id="medium" name="medium" value="M"></input>
                                <label for="medium"> Medium</label>
                            </div>
                            <div class="large">
                                <input type="checkbox" id="large" name="large" value="L"></input>
                                <label for="large"> Large</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="product-category">
                <div class="small-container">
                    <div class="container">
                        <div class="title"><h3>Small Dog</h3></div>
                        <div class="list"><h5>52 puppies</h5></div>
                    </div>
                    <div class="sort">
                        <select>
                            <option>Sort by: Popular</option>
                            <option>Sort by: Lastest</option>
                            <option>Sort by: Top Sales</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>
                <div class="frames-container">
                    <div class="frame">
                        <div class="col-4">
                            <img src="assets/images/ball.png"></img>
                        </div>
                        <div class="row">
                            <div class="row-text">
                                <h1 class="name">MO231 - Pomeranian White</h1>
                                <div class="row-description">
                                    <div class="first-des">
                                        <p class="thh">Gene:</p>
                                        <p class="tdd">Male  </p>
                                    </div>
                                    <div class="dot"></div>
                                    <div class="second-des">
                                        <p class="thh">Age:</p>
                                        <p class="tdd">02 months</p>
                                    </div>
                                </div>
                                <h1 class="price">6.900.000 VND</h1>
                            </div>
                        </div>
                    </div>

                    <div class="frame">
                        <div class="col-4">
                            <img src="assets/images/ball.png"></img>
                        </div>
                        <div class="row">
                            <div class="row-text">
                                <h1 class="name">MO502 - Poodle Tiny Yellow</h1>
                                <div class="row-description">
                                    <div class="first-des">
                                        <p class="thh">Gene:</p>
                                        <p class="tdd">Female</p>
                                    </div>
                                    <div class="dot"></div>
                                    <div class="second-des">
                                        <p class="thh">Age:</p>
                                        <p class="tdd">02 months</p>
                                    </div>
                                </div>
                                <h1 class="price">3.900.000 VND</h1>
                            </div>
                        </div>
                    </div>

                    <div class="frame">
                        <div class="col-4">
                            <img src="assets/images/ball.png"></img>
                        </div>
                        <div class="row">
                            <div class="row-text">
                                <h1 class="name">MO102 - Poodle Tiny Sepia</h1>
                                <div class="row-description">
                                    <div class="first-des">
                                        <p class="thh">Gene:</p>
                                        <p class="tdd">Male  </p>
                                    </div>
                                    <div class="dot"></div>
                                    <div class="second-des">
                                        <p class="thh">Age:</p>
                                        <p class="tdd">02 months</p>
                                    </div>
                                </div>
                                <h1 class="price">4.000.000 VND</h1>
                            </div>
                        </div>
                    </div>

                    <div class="frame">
                        <div class="col-4">
                            <img src="assets/images/ball.png"></img>
                        </div>
                        <div class="row">
                            <div class="row-text">
                                <h1 class="name">MO231 - Pomeranian White</h1>
                                <div class="row-description">
                                    <div class="first-des">
                                        <p class="thh">Gene:</p>
                                        <p class="tdd">Male  </p>
                                    </div>
                                    <div class="dot"></div>
                                    <div class="second-des">
                                        <p class="thh">Age:</p>
                                        <p class="tdd">02 months</p>
                                    </div>
                                </div>
                                <h1 class="price">6.900.000 VND</h1>
                            </div>
                        </div>
                    </div>

                    <div class="frame">
                        <div class="col-4">
                            <img src="assets/images/ball.png"></img>
                        </div>
                        <div class="row">
                            <div class="row-text">
                                <h1 class="name">MO502 - Poodle Tiny Yellow</h1>
                                <div class="row-description">
                                    <div class="first-des">
                                        <p class="thh">Gene:</p>
                                        <p class="tdd">Female</p>
                                    </div>
                                    <div class="dot"></div>
                                    <div class="second-des">
                                        <p class="thh">Age:</p>
                                        <p class="tdd">02 months</p>
                                    </div>
                                </div>
                                <h1 class="price">3.900.000 VND</h1>
                            </div>
                        </div>
                    </div>

                    <div class="frame">
                        <div class="col-4">
                            <img src="assets/images/ball.png"></img>
                        </div>
                        <div class="row">
                            <div class="row-text">
                                <h1 class="name">MO102 - Poodle Tiny Sepia</h1>
                                <div class="row-description">
                                    <div class="first-des">
                                        <p class="thh">Gene:</p>
                                        <p class="tdd">Male  </p>
                                    </div>
                                    <div class="dot"></div>
                                    <div class="second-des">
                                        <p class="thh">Age:</p>
                                        <p class="tdd">02 months</p>
                                    </div>
                                </div>
                                <h1 class="price">4.000.000 VND</h1>
                            </div>
                        </div>
                    </div>

                    <div class="frame">
                        <div class="col-4">
                            <img src="assets/images/ball.png"></img>
                        </div>
                        <div class="row">
                            <div class="row-text">
                                <h1 class="name">MO231 - Pomeranian White</h1>
                                <div class="row-description">
                                    <div class="first-des">
                                        <p class="thh">Gene:</p>
                                        <p class="tdd">Male  </p>
                                    </div>
                                    <div class="dot"></div>
                                    <div class="second-des">
                                        <p class="thh">Age:</p>
                                        <p class="tdd">02 months</p>
                                    </div>
                                </div>
                                <h1 class="price">6.900.000 VND</h1>
                            </div>
                        </div>
                    </div>

                    <div class="frame">
                        <div class="col-4">
                            <img src="assets/images/ball.png"></img>
                        </div>
                        <div class="row">
                            <div class="row-text">
                                <h1 class="name">MO502 - Poodle Tiny Yellow</h1>
                                <div class="row-description">
                                    <div class="first-des">
                                        <p class="thh">Gene:</p>
                                        <p class="tdd">Female</p>
                                    </div>
                                    <div class="dot"></div>
                                    <div class="second-des">
                                        <p class="thh">Age:</p>
                                        <p class="tdd">02 months</p>
                                    </div>
                                </div>
                                <h1 class="price">3.900.000 VND</h1>
                            </div>
                        </div>
                    </div>

                    <div class="frame">
                        <div class="col-4">
                            <img src="assets/images/ball.png"></img>
                        </div>
                        <div class="row">
                            <div class="row-text">
                                <h1 class="name">MO102 - Poodle Tiny Sepia</h1>
                                <div class="row-description">
                                    <div class="first-des">
                                        <p class="thh">Gene:</p>
                                        <p class="tdd">Male  </p>
                                    </div>
                                    <div class="dot"></div>
                                    <div class="second-des">
                                        <p class="thh">Age:</p>
                                        <p class="tdd">02 months</p>
                                    </div>
                                </div>
                                <h1 class="price">4.000.000 VND</h1>
                            </div>
                        </div>
                    </div>

                    <div class="frame">
                        <div class="col-4">
                            <img src="assets/images/ball.png"></img>
                        </div>
                        <div class="row">
                            <div class="row-text">
                                <h1 class="name">MO231 - Pomeranian White</h1>
                                <div class="row-description">
                                    <div class="first-des">
                                        <p class="thh">Gene:</p>
                                        <p class="tdd">Male  </p>
                                    </div>
                                    <div class="dot"></div>
                                    <div class="second-des">
                                        <p class="thh">Age:</p>
                                        <p class="tdd">02 months</p>
                                    </div>
                                </div>
                                <h1 class="price">6.900.000 VND</h1>
                            </div>
                        </div>
                    </div>

                    <div class="frame">
                        <div class="col-4">
                            <img src="assets/images/ball.png"></img>
                        </div>
                        <div class="row">
                            <div class="row-text">
                                <h1 class="name">MO502 - Poodle Tiny Yellow</h1>
                                <div class="row-description">
                                    <div class="first-des">
                                        <p class="thh">Gene:</p>
                                        <p class="tdd">Female</p>
                                    </div>
                                    <div class="dot"></div>
                                    <div class="second-des">
                                        <p class="thh">Age:</p>
                                        <p class="tdd">02 months</p>
                                    </div>
                                </div>
                                <h1 class="price">3.900.000 VND</h1>
                            </div>
                        </div>
                    </div>

                    <div class="frame">
                        <div class="col-4">
                            <img src="assets/images/ball.png"></img>
                        </div>
                        <div class="row">
                            <div class="row-text">
                                <h1 class="name">MO102 - Poodle Tiny Sepia</h1>
                                <div class="row-description">
                                    <div class="first-des">
                                        <p class="thh">Gene:</p>
                                        <p class="tdd">Male  </p>
                                    </div>
                                    <div class="dot"></div>
                                    <div class="second-des">
                                        <p class="thh">Age:</p>
                                        <p class="tdd">02 months</p>
                                    </div>
                                </div>
                                <h1 class="price">4.000.000 VND</h1>
                            </div>
                        </div>
                    </div>

                    <div class="frame">
                        <div class="col-4">
                            <img src="assets/images/ball.png"></img>
                        </div>
                        <div class="row">
                            <div class="row-text">
                                <h1 class="name">MO231 - Pomeranian White</h1>
                                <div class="row-description">
                                    <div class="first-des">
                                        <p class="thh">Gene:</p>
                                        <p class="tdd">Male  </p>
                                    </div>
                                    <div class="dot"></div>
                                    <div class="second-des">
                                        <p class="thh">Age:</p>
                                        <p class="tdd">02 months</p>
                                    </div>
                                </div>
                                <h1 class="price">6.900.000 VND</h1>
                            </div>
                        </div>
                    </div>

                    <div class="frame">
                        <div class="col-4">
                            <img src="assets/images/ball.png"></img>
                        </div>
                        <div class="row">
                            <div class="row-text">
                                <h1 class="name">MO502 - Poodle Tiny Yellow</h1>
                                <div class="row-description">
                                    <div class="first-des">
                                        <p class="thh">Gene:</p>
                                        <p class="tdd">Female</p>
                                    </div>
                                    <div class="dot"></div>
                                    <div class="second-des">
                                        <p class="thh">Age:</p>
                                        <p class="tdd">02 months</p>
                                    </div>
                                </div>
                                <h1 class="price">3.900.000 VND</h1>
                            </div>
                        </div>
                    </div>

                    <div class="frame">
                        <div class="col-4">
                            <img src="assets/images/ball.png"></img>
                        </div>
                        <div class="row">
                            <div class="row-text">
                                <h1 class="name">MO102 - Poodle Tiny Sepia</h1>
                                <div class="row-description">
                                    <div class="first-des">
                                        <p class="thh">Gene:</p>
                                        <p class="tdd">Male  </p>
                                    </div>
                                    <div class="dot"></div>
                                    <div class="second-des">
                                        <p class="thh">Age:</p>
                                        <p class="tdd">02 months</p>
                                    </div>
                                </div>
                                <h1 class="price">4.000.000 VND</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fullpage">
                    <div class="pagination">
                        <a href="#" class="prev">«</a>
                        <span class="page active">1</span>
                        <span class="page">2</span>
                        <span class="page">3</span>
                        <span class="page">4</span>
                        <span class="ellipsis">...</span>
                        <span class="page">28</span>
                        <a href="#" class="next">»</a>
                    </div>
                </div>
            </div>
        </div>
    </>
    ;
};

export default cate;