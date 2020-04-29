import React from 'react';
import { ReactComponent as SporsbetLogo } from '../../assets/images/sportsbet-logo.svg';

const LogoSection = () => {

    return <div className="footer-logo-section footer-category">
        <div className="footer-category-title">
            <SporsbetLogo />
        </div>
        <div className="footer-description">
            <span>
                Sportsbet.io is owned and operated by mBet Solutions NV (Kaya Richard J. Beaujon Z/N Landhuis Joonchi II Curaçao). 
                It is licensed and regulated by the Government of Curaçao under the gaming license 1668/JAZ. The site is powered by the 
                Coingaming.io Bitcoin Sports and Casino Gaming platform, and allows players to play with EUR and Bitcoins. 
                The site is not an exchange and funds can not be converted from euros to bitcoins.
            </span>
        </div>
    </div>;
}

export default LogoSection;