import React from 'react';

const Product = ({ checked, imgSrc, name, colorSrc, gender, age, quantity, price }) => {
    return (
        <tr>
            <td><input type="checkbox" checked={checked} /></td>
            <td><img src={imgSrc} alt="" /></td>
            <td><p>{name}</p></td>
            <td><img src={colorSrc} alt="" /></td>
            <td><p>{gender}</p></td>
            <td><p>{age}</p></td>
            <td><input type="number" value={quantity} min="1" /></td>
            <td><p>{price}</p></td>
            <td><p>Delete</p></td>
        </tr>
    );
};

export default Product;