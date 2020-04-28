import React from 'react';
import { ReactComponent as StarBadge } from '../../assets/images/promotions-banners/star-badge.svg';

const PromotionBanner = (props) => {

    return <div className="promotion-banner">
        <a href={props.href}>
            <div className="promotion-banner-content">
                <div className="promotion-banner-image">
                    <div className="promotion-banner-star-badge">
                        <StarBadge />
                    </div>
                    <img className="img-fluid" src={props.image} alt={props.title} />
                </div>

                <div className="promotion-banner-info d-flex flex-column justify-content-center">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </a>
    </div>;
}

export default PromotionBanner;