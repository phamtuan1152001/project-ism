import React from "react";
import Pagination from '@src/Modules/Category/components/Pagigation/Pagination.js';
import CategoryProduct from "./Product/CategoryProduct";

import Product1 from '@src/assets/images/Product/Product1-Gallery1.png';
import Product2 from '@src/assets/images/Product/Product2-Gallery1.png';
import Product3 from '@src/assets/images/Product/Product3-Gallery1.png';
import Product4 from '@src/assets/images/Product/Product4-Gallery1.png';
import Product5 from '@src/assets/images/Product/Product5-Gallery1.png';
import Product6 from '@src/assets/images/Product/Product6-Gallery1.png';
import Product7 from '@src/assets/images/Product/Product7-Gallery1.png';
import Product8 from '@src/assets/images/Product/Product8-Gallery1.png';
import Product9 from '@src/assets/images/Product/Product9-Gallery1.png';
import Product10 from '@src/assets/images/Product/Product10-Gallery1.png';
import Product11 from '@src/assets/images/Product/Product11-Gallery1.png';
import Product12 from '@src/assets/images/Product/Product12-Gallery1.png';
import Product13 from '@src/assets/images/Product/Product13-Gallery1.png';
import Product14 from '@src/assets/images/Product/Product14-Gallery1.png';
import Product15 from '@src/assets/images/Product/Product15-Gallery1.png';

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
            imgSrc: Product11,
            name: 'MO102 - Poodle Tiny Sepia',
            gender: 'Male',
            age: '02 months',
            price: '4.000.000 VND'
        },
        {
            imgSrc: Product12,
            name: 'MO512 - Alaskan Malamute Grey',
            gender: 'Male',
            age: '02 months',
            price: '8.900.000 VND'
        },
        {
            imgSrc: Product13,
            name: 'MO502 - Poodle Tiny Yellow',
            gender: 'Female',
            age: '02 months',
            price: '3.900.000 VND'
        },
        {
            imgSrc: Product14,
            name: 'MO102 - Poodle Tiny Sepia',
            gender: 'Male',
            age: '02 months',
            price: '4.000.000 VND'
        },
        {
            imgSrc: Product15,
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