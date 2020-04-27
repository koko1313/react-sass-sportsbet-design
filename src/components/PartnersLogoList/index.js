import React from 'react';
import SVGLogo from './SVGLogo';
import { ReactComponent as mainClubParenrLogo }  from '../../assets/images/main-club-partner-logo.svg';
import { ReactComponent as officialShirtSponsor }  from '../../assets/images/official-shirt-sponsor-logo.svg';

const PartnersLogoList = () => {

    return <div className="partners-logo-list d-flex align-items-center">
        <SVGLogo 
            image = {mainClubParenrLogo}
            label = "Main Club Partner"
            href = "/#" />

        <SVGLogo 
            image = {officialShirtSponsor}
            label = "Official Shirt Sponsor"
            href = "/#" />
    </div>;
}

export default PartnersLogoList;