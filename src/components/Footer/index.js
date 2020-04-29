import React from 'react';
import LogoSection from './LogoSection';
import LinksSection from './LinksSection';
import FollowUsSection from './FollowUsSection';
import PaymentIcons from './PaymentIcons';

const Footer = () => {

    return <footer> 
        <div className="container footer">
            <div className="row">
                <div className="col-lg-2">
                    <LogoSection />
                </div>
                <div className="col-lg">
                    <LinksSection />
                </div>
                <div className="col-lg-3">
                    <FollowUsSection />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <PaymentIcons />
                </div>
            </div>
        </div>
    </footer>;
}

export default Footer;