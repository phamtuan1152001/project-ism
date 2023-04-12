import React from "react"

const Cart = () => {
    return(
    <div className="cart">
        <div className="cart-top-wrap">
            <div className="cart-top">
                <div className="cart-top-cart cart-top-item">
                    <i className='bx bxs-cart'></i>
                </div>
                <div className="cart-top-payment cart-top-item">
                    <i className='bx bx-credit-card-front'></i>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="cart-content-left">
                <table>
                    <tr>
                        <th><input type="checkbox"></input></th>
                        <th></th>
                        <th>Product</th>
                        <th>Color</th>
                        <th>Gene</th>
                        <th>Age</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>

                    </tr>
                    <tr>
                        <td><input type="checkbox" checked></input></td>
                        <td><img src="TEST/images/product-1.jpg" alt="" /></td>
                        <td><p>MO231 - Pomeranian White</p></td>
                        <td><img src="TEST/images/color.png" alt="" /></td>
                        <td><p>Male</p></td>
                        <td><p>02 months</p></td>
                        <td><input type="number" value="1" min="1" /></td>
                        <td><p>6.900.000 VND</p></td>
                        <td><p>Delete</p></td>

                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td><img src="TEST/images/product-2.jpg" alt="" /></td>
                        <td><p>MO502 - Poodle Tiny Yellow</p></td>
                        <td><img src="TEST/images/color.png" alt="" /></td>
                        <td><p>Female</p></td>
                        <td><p>02 months</p></td>
                        <td><input type="number" value="1" min="1" /></td>
                        <td><p>3.900.000 VND</p></td>
                        <td><p>Delete</p></td>
                    </tr>
                </table>
            </div>
            <div className="cart-content-right">
                <table>
                    <tr>
                        <th colspan="2">SHOPPING CART</th>
                    </tr>
                    <tr>
                        <td>QUANTITY</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>UNIT PRICE</td>
                        <td><p>6.900.000 VND</p></td>
                    </tr>
                    <tr>
                        <td>TOTAL PRICE</td>
                        <td><p style="color: #000000; font-weight: bold;">6.900.000 VND</p></td>
                    </tr>
                </table>
                <div className="voucher">
                    <input type="text" placeholder="Voucher" />
                </div>
                <div className="cart-content-right-button">
                    <button className="continue">CONTINUE</button>
                    <button className="checkout">CHECKOUT</button>
                </div>
                <div className="cart-content-right-login">
                    <p>Please <a href="">Login</a> to your account to earn membership points</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Cart;