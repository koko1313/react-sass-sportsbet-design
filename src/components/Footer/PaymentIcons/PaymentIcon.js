import React from 'react';

const PaymentIcons = (props) => {

    return <div className="payment-icon">
        <a href={props.href}>
            <img src={props.image} alt={props.title} />   
        </a>
    </div>;
}

export default PaymentIcons;