import React from 'react';
import PopularTheme from './PopularTheme';
import liveDealerImage from '../../assets/images/popular-themes/live-dealer.jpg';
import pokerImage from '../../assets/images/popular-themes/poker.jpg';
import bombaiClubImage from '../../assets/images/popular-themes/bombay-club.png';
import promotionsImage from '../../assets/images/popular-themes/promotions.jpg';
import supportImage from '../../assets/images/popular-themes/support.jpg';

const PopularThemes = () => {
    
    return <div className="popular-themes">
        <h3>Popular</h3>

        <div className="popular-themes-buttons horizontal-scrollable-container d-flex">
            <PopularTheme 
                image = {liveDealerImage}
                title = "Live dealer"
                href = "/#" />

            <PopularTheme 
                image = {pokerImage}
                title = "Poker"
                href = "/#" />

            <PopularTheme 
                image = {bombaiClubImage}
                title = "Bombay Club"
                href = "/#" />
            
            <PopularTheme 
                image = {promotionsImage}
                title = "Promotions"
                href = "/#" />

            <PopularTheme 
                image = {supportImage}
                title = "Support"
                href = "/#" />
        </div>
    </div>
}

export default PopularThemes;