import React, { useState } from 'react';
import QRcode from '@src/assets/images/qr.png';

const PaymentForm = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="paymentmethod">
            <h4>Payment Method</h4><br />
            <div className="form">
                <div className="credit-card-inputs">
                <input type="radio" name="payment_method" value="credit_card" checked={selectedOption === 'credit_card'} onChange={handleOptionChange} />
                    Credit Card
                </div>
                <div className={`payment_info-credit_card ${selectedOption === 'credit_card' ? 'show' : ''}`}>
                    <div className="creditinfo">
                        <h5>CARD DETAIL</h5>
                        <input className="cardnum" type="text" placeholder="Card Number*" />
                        <input className="expired" type="text" placeholder="Expiration*" />
                        <input className="cvv" type="text" placeholder="CVV*" />
                    </div>
                </div>
                <div className="momo-qr-code">
                <input type="radio" name="payment_method" value="momo" checked={selectedOption === 'momo'} onChange={handleOptionChange} />
                    Momo
                </div>
                <div className={`payment_info-momo ${selectedOption === 'momo' ? 'show' : ''}`}>
                    <img src={QRcode} alt="momo qr code" />
                </div >
            </div>
        </div >
    );
};

export default PaymentForm;