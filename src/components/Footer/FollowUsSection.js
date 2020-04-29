import React from 'react';
import { ReactComponent as TwitterLogo } from '../../assets/images/social-icons/twitter-logo.svg';
import { ReactComponent as FacebookLogo } from '../../assets/images/social-icons/facebook-logo.svg';
import { ReactComponent as YoutubeLogo } from '../../assets/images/social-icons/youtube-logo.svg';
import { ReactComponent as BitcoinsLogo } from '../../assets/images/social-icons/bitcoins-logo.svg';
import { ReactComponent as InstagramLogo } from '../../assets/images/social-icons/instagram-logo.svg';

const FollowUsSection = () => {

    return <div className="footer-follow-us-section footer-category">
        <div className="footer-category-title">
            Follow us
        </div>
        <div className="footer-category-content">
            <a href="/#">
                <TwitterLogo />
            </a>

            <a href="/#">
                <FacebookLogo />
            </a>

            <a href="/#">
                <YoutubeLogo />
            </a>

            <a href="/#">
                <BitcoinsLogo />
            </a>

            <a href="/#">
                <InstagramLogo />
            </a>
        </div>
    </div>;
}

export default FollowUsSection;