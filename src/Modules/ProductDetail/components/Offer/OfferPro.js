import React from "react";
import OfferProduct from "./Product/OfferProduct";
import Product7 from '@src/assets/images/product-7.jpg';
import Product8 from '@src/assets/images/product-8.jpg';
import Product9 from '@src/assets/images/product-9.jpg';
import Product10 from '@src/assets/images/product-10.jpg';

const OfferPro = () => {
    const products = [
        {
            imgSrc: Product7,
            name: 'MO231 - Pomeranian White',
            gender: 'Male',
            age: '02 months',
            price: '6.900.000 VND'
        },
        {
            imgSrc: Product8,
            name: 'MO502 - Poodle Tiny Yellow',
            gender: 'Female',
            age: '02 months',
            price: '3.900.000 VND'
        },
        {
            imgSrc: Product9,
            name: 'MO102 - Poodle Tiny Sepia',
            gender: 'Male',
            age: '02 months',
            price: '4.000.000 VND'
        },
        {
            imgSrc: Product10,
            name: 'MO512 - Alaskan Malamute Grey',
            gender: 'Male',
            age: '02 months',
            price: '8.900.000 VND'
        }
    ];


    return(
        <div className="offer">
                <div className="small-container">
                    <h3>Whats new?</h3>
                    <h1>See More Puppies</h1>
                    <div className="frames-container">
                        {products.map((product, index) => (
                            <OfferProduct key={index} {...product} />
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default OfferPro;