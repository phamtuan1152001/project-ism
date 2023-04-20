import React, { useState } from 'react';
import QRcode from '@src/assets/images/qr.png';

const PaymentForm = () => {
    const [selectedOption, setSelectedOption] = useState('credit_card');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="paymentmethod">
            <h4>Payment Method</h4><br />
            <form>
                <label className="credit-card-inputs">
                    <input type="radio" name="payment_method" value="credit_card" checked={selectedOption === 'credit_card'} onChange={handleOptionChange} />
                    Credit Card
                </label>
                <div className={`payment_info credit_card ${selectedOption === 'credit_card' ? 'show' : ''}`}>
                    <div className="creditinfo">
                        <h5>CARD DETAIL</h5>
                        <input className="cardnum" type="text" id="card-number" name="card-number" placeholder="Card Number*" />
                        <input className="expired" type="text" id="exp-date" name="exp-date" placeholder="Expiration*" />
                        <input className="cvv" type="text" id="cvv" name="cvv" placeholder="CVV*" />
                    </div>
                </div>
                <label className="momo-qr-code">
                    <input type="radio" name="payment_method" value="momo" checked={selectedOption === 'momo'} onChange={handleOptionChange} />
                    Momo
                </label>
                <div className={`payment_info ${selectedOption === 'momo' ? 'show' : ''}`}>
                    <img src={QRcode} alt="momo qr code" />
                </div >
            </form >
        </div >
    );
};

export default PaymentForm;