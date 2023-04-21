import React from 'react';

const OfferProduct = ({imgSrc, name, gender, age, price }) => {
    return (
        <div className="frame">
            <div className="col-4">
                <img src={imgSrc} />
            </div>
            <div className="row">
                <div className="row-text">
                    <h1 className="name">{name}</h1>
                    <div className="row-description">
                        <div className="first-des">
                            <p className="thh">Gene:</p>
                            <p className="tdd">{gender}</p>
                        </div>
                        <div className="dot"></div>
                        <div className="second-des">
                            <p className="thh">Age:</p>
                            <p className="tdd">{age}</p>
                        </div>
                    </div>
                    <h1 className="price">{price}</h1>
                </div>
            </div>
        </div>
    );
};

export default OfferProduct;