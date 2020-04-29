import React from 'react';

const PaymentIcons = (props) => {

    return <a href={props.href}>
        <div className="payment-icon">
            <img src={props.image} alt={props.title} />
        </div>
    </a>;
}

export default PaymentIcons;