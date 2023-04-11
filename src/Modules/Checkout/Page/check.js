import React from "react"

const check = () => {
    return
    <>
        <h2>Checkout</h2>
        <div class="container">
            <div class="cart-top-wrap">
                <div class="cart-top">
                    <div class="cart-top-cart cart-top-item">
                        <i class='bx bxs-cart'></i>
                    </div>
                    <div class="cart-top-payment cart-top-item">
                        <i class='bx bx-credit-card-front'></i>
                    </div>
                </div>
            </div>

            <div class="checkout">
                <div class="payship">
                    <div class="paymentmethod">
                        <h4>Payment Method</h4><br />
                        <form>
                            <label class="credit-card-inputs">
                                <input type="radio" name="payment_method" value="credit_card"></input>
                                Credit Card
                            </label>
                            <div class="payment_info credit_card">
                                <div class="creditinfo">
                                    <h5>CARD DETAIL</h5>
                                    <input class="cardnum" type="text" id="card-number" name="card-number" placeholder="Card Number*"></input>
                                    <input class="expired" type="text" id="exp-date" name="exp-date" placeholder="Expiration*"></input>
                                    <input class="cvv" type="text" id="cvv" name="cvv" placeholder="CVV*"></input>
                                </div>
                            </div>
                            <label class="momo-qr-code">
                                <input type="radio" name="payment_method" value="momo"></input>
                                Momo
                            </label>
                            <div class="payment_info momo">
                                <img src="TEST/images/qr.png"></img>
                            </div>
                        </form>
                    </div>

                    <div class="delivery">
                        <h4>Delivery</h4>
                        <div class="address">
                            <p>Khu phố 6, Phường Linh Trung, Quận Thủ Đức, Thành phố Hồ Chí Minh</p>
                            <div class="changeaddress">
                                <input type="text" id="address" placeholder="Type another address"></input>
                                <button>Change</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="placeorder">
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
                            <td><p style="color: #000000; font-weight: bold;">Merchandise Subtotal</p></td>
                            <td></td>
                            <td></td>
                            <td><p style="color: #000000; font-weight: bold;">7.560.000 VND</p></td>
                        </tr>
                        <tr>
                            <td><p style="color: #000000; font-weight: bold;">Shipping Total</p></td>
                            <td></td>
                            <td></td>
                            <td><p style="color: #000000; font-weight: bold;">500.000 VND</p></td>
                        </tr>
                        <tr>
                            <td><p style="color: #000000; font-weight: bold;">Total Payment</p></td>
                            <td></td>
                            <td></td>
                            <td><p style="color: #000000; font-weight: bold;">8.060.000 VND</p></td>
                        </tr>

                    </table>
                    <div class="placeorder-button">
                        <button type="submit">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </>
        ;
};

export default check;