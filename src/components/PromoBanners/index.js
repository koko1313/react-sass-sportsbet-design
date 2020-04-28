import React from 'react';
import PromoBanner from './PromoBanner';
import sportsBanner from '../../assets/images/promo-banners/sports-banner.png';
import casinoBanner from '../../assets/images/promo-banners/casino-banner.png';

const PromoBanners = () => {

    return <div className="promo-banners">
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <PromoBanner 
                        image = {sportsBanner}
                        title = "SPORTS"
                        description = "Price Boost every day on all sports"
                        buttonHref = "/#"
                        buttonLabel = "Go to Sports"
                        />
                </div>
                <div className="col-md">
                    <PromoBanner 
                        image = {casinoBanner}
                        title = "CASINO"
                        description = "Offering the best slots and live dealer games"
                        buttonHref = "/#"
                        buttonLabel = "Go to Casino"
                        />
                </div>
            </div>
        </div>
    </div>;
}

export default PromoBanners;