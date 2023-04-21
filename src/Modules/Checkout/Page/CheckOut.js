import React from "react"
import "../bootstrap.scss";
import PaymentForm from '@src/Modules/Checkout/components/PaymentForm.js';

const CheckOut = () => {
    return (
        <div className="PayMoney">
            <h3>Checkout</h3>
            <div className="container">
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

                <div className="checkout">
                    <div className="payship">
                        <PaymentForm />
                        <div className="delivery">
                            <h4>Delivery</h4>
                            <div className="address">
                                <p>Khu phố 6, Phường Linh Trung, Quận Thủ Đức, Thành phố Hồ Chí Minh</p>
                                <div className="changeaddress">
                                    <input type="text" id="address" placeholder="Type another address" />
                                    <button>Change</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="placeorder">
                        <h3>CHECK OUT</h3>
                        <table>
                            <tr>
                                <th>Product</th>
                                <th>Discount</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                            <tr>
                                <td>MO231 - Pomeranian White</td>
                                <td>30%</td>
                                <td>1</td>
                                <td>6.900.000 VND</td>
                            </tr>
                            <tr>
                                <td>MO502 - Poodle Tiny Yellow</td>
                                <td>30%</td>
                                <td>1</td>
                                <td>3.900.000 VND</td>
                            </tr>
                            <tr>
                                <td>
                                    <p style={{ color: '#000000', fontWeight: 'bold' }}>Merchandise Subtotal</p>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p style={{ color: '#000000', fontWeight: 'bold' }}>7.560.000 VND</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style={{ color: '#000000', fontWeight: 'bold' }}>Shipping Total</p>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p style={{ color: '#000000', fontWeight: 'bold' }}>500.000 VND</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style={{ color: '#000000', fontWeight: 'bold' }}>Total Payment</p>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p style={{ color: '#000000', fontWeight: 'bold' }}>8.060.000 VND</p>
                                </td>
                            </tr>
                        </table>

                        <div className="placeorder-button">
                            <button type="submit">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;