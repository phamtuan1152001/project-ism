import React from "react";

const Placeorder = () => {
    return (
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
    );
};

export default Placeorder;