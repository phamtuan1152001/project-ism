import React from "react";
import Pagination from '@src/Modules/Category/components/Pagigation/Pagination.js';
import CategoryProduct from "./Product/CategoryProduct";
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

const CatePro = () => {
    const products = [
        {
            imgSrc: Product1,
            name: 'MO231 - Pomeranian White',
            gender: 'Male',
            age: '02 months',
            price: '6.900.000 VND'
        },
        {
            imgSrc: Product2,
            name: 'MO502 - Poodle Tiny Yellow',
            gender: 'Female',
            age: '02 months',
            price: '3.900.000 VND'
        },
        {
            imgSrc: Product3,
            name: 'MO102 - Poodle Tiny Sepia',
            gender: 'Male',
            age: '02 months',
            price: '4.000.000 VND'
        },
        {
            imgSrc: Product4,
            name: 'MO512 - Alaskan Malamute Grey',
            gender: 'Male',
            age: '02 months',
            price: '8.900.000 VND'
        },
        {
            imgSrc: Product5,
            name: 'MO231 - Pomeranian White',
            gender: 'Male',
            age: '02 months',
            price: '6.900.000 VND'
        },
        {
            imgSrc: Product6,
            name: 'MO502 - Poodle Tiny Yellow',
            gender: 'Female',
            age: '02 months',
            price: '3.900.000 VND'
        },
        {
            imgSrc: Product7,
            name: 'MO102 - Poodle Tiny Sepia',
            gender: 'Male',
            age: '02 months',
            price: '4.000.000 VND'
        },
        {
            imgSrc: Product8,
            name: 'MO512 - Alaskan Malamute Grey',
            gender: 'Male',
            age: '02 months',
            price: '8.900.000 VND'
        },
        {
            imgSrc: Product9,
            name: 'MO231 - Pomeranian White',
            gender: 'Male',
            age: '02 months',
            price: '6.900.000 VND'
        },
        {
            imgSrc: Product10,
            name: 'MO502 - Poodle Tiny Yellow',
            gender: 'Female',
            age: '02 months',
            price: '3.900.000 VND'
        },
        {
            imgSrc: Thumbnail1,
            name: 'MO102 - Poodle Tiny Sepia',
            gender: 'Male',
            age: '02 months',
            price: '4.000.000 VND'
        },
        {
            imgSrc: Thumbnail2,
            name: 'MO512 - Alaskan Malamute Grey',
            gender: 'Male',
            age: '02 months',
            price: '8.900.000 VND'
        },
        {
            imgSrc: Thumbnail3,
            name: 'MO502 - Poodle Tiny Yellow',
            gender: 'Female',
            age: '02 months',
            price: '3.900.000 VND'
        },
        {
            imgSrc: Thumbnail4,
            name: 'MO102 - Poodle Tiny Sepia',
            gender: 'Male',
            age: '02 months',
            price: '4.000.000 VND'
        },
        {
            imgSrc: Thumbnail5,
            name: 'MO512 - Alaskan Malamute Grey',
            gender: 'Male',
            age: '02 months',
            price: '8.900.000 VND'
        }
    ];

    return (
        <div className="product-category">
                    <div className="containery">
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
                    <div className="framescontainer">
                        {products.map((product, index) => (
                                <CategoryProduct key={index} {...product} />
                            ))}
                    </div>
                    <Pagination />
                </div>
    );
};

export default CatePro;