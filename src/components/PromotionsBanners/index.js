import React from 'react';
import PromotionBanner from './PromotionBanner';
import tigerPicture from '../../assets/images/promotions-banners/tiger.jpg';
import blackjackPicture from '../../assets/images/promotions-banners/blackjack.jpg';
import booongodailyPicture from '../../assets/images/promotions-banners/booongodaily.jpg';
import casinoSlotsPicture from '../../assets/images/promotions-banners/casino-slots.jpg';
import whatBitcoinDid from '../../assets/images/promotions-banners/what-bitcoin-did.jpg';

const PromotionsBanners = () => {
    return <div className="promotions-banners">
        <h3>Exciting promotions start here</h3>

        <div className="promotions-banners-buttons horizontal-scrollable-container d-flex">
            <PromotionBanner
                title = "Grab the win with a 500 free spin payout"
                description = "Compete in the Wazdan leaderboard and take home the top spot"
                href = "/#"
                image = {tigerPicture} />

            <PromotionBanner
                title = "Compete in Evolution gaming’s ultimate golden week"
                description = "Strike gold in a 2000 mBTC total prize pool tournament"
                href = "/#"
                image = {blackjackPicture} />

            <PromotionBanner
                title = "🤑 Daily Rewards by Booongo"
                description = "Play your favourite games by Booongo and win daily tournaments"
                href = "/#"
                image = {booongodailyPicture} />

            <PromotionBanner
                title = "Casino and Virtual Sports Cashback"
                description = "This week, Sportsbet.io has got you covered with up to 400 mBTC cashback on your net Casino and Virtual Sports losses."
                href = "/#"
                image = {casinoSlotsPicture} />

            <PromotionBanner
                title = {"Sportsbet.io sponsors the \"What Bitcoin Did\" podcast!"}
                description = {"Sportsbet.io partners with the No.1 Bitcoin podcast \"What Bitcoin Did\""}
                href = "/#"
                image = {whatBitcoinDid} />
        </div>
    </div>;
}

export default PromotionsBanners;