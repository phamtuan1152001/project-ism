import React from "react";
import Product from "./Product/Product.js";
import Product1 from '@src/assets/images/product-1.jpg';
import Product2 from '@src/assets/images/product-2.jpg';
import colorProduct from '@src/assets/images/color.png';

const CartContentLeft = () => {
    const products = [
        {
            imgSrc: Product1,
            name: 'MO231 - Pomeranian White',
            colorSrc: colorProduct,
            gender: 'Male',
            age: '02 months',
            quantity: 1,
            price: '6.900.000 VND'
        },
        {
            imgSrc: Product2,
            name: 'MO502 - Poodle Tiny Yellow',
            colorSrc: colorProduct,
            gender: 'Female',
            age: '02 months',
            quantity: 1,
            price: '3.900.000 VND'
        }
    ];

    return (
        <div className="cart-content-left">
            <table>
                <tbody>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th></th>
                        <th>Product</th>
                        <th>Color</th>
                        <th>Gene</th>
                        <th>Age</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>

                    </tr>
                    {products.map((product, index) => (
                        <Product key={index} {...product} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartContentLeft;       