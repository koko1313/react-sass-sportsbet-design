import React from 'react';
import Button from '../Button';

const PromoBanner = (props) => {

    return <div className="promo-banner d-flex">
        <img className="img-fluid" src={props.image} alt={props.title} />

        <div className="promo-banner-content d-flex flex-column justify-content-between">
            <h2 className="promo-banner-title">{props.title}</h2>

            <div className="promo-banner-description">{props.description}</div>

            <Button 
                href = {props.buttonHref}
                className = "btn-primary"
                label = {props.buttonLabel} />
        </div>
    </div>;
}

export default PromoBanner;