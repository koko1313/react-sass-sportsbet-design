import React from 'react';
import PromoBanner from './PromoBanner';
import CardSportsImage from '../../assets/images/card-sports.png';
import CardCasinoImage from '../../assets/images/card-casino.png';

const PromoBanners = () => {

    return <div className="promo-banners">
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <PromoBanner 
                        image = {CardSportsImage}
                        title = "SPORTS"
                        description = "Price Boost every day on all sports"
                        buttonHref = "/#"
                        buttonLabel = "Go to Sports"
                        />
                </div>
                <div className="col-md">
                    <PromoBanner 
                        image = {CardCasinoImage}
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