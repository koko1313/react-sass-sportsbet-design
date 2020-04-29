import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarText,
} from 'reactstrap';
import LanguageSelect from './LanguageSelect';
import { ReactComponent as SporsbetLogo } from '../assets/images/sportsbet-logo.svg';

const HeaderNavbar = (props) => {

  return (
    <Navbar dark expand="md">
        <div className="container">
          <div className="d-flex justify-content-between w-100">
            <NavbarBrand href="/#">
              <SporsbetLogo />
            </NavbarBrand>
              
            <NavbarText>
              <LanguageSelect />
            </NavbarText>
          </div>
        </div>
    </Navbar>
  );
}

export default HeaderNavbar;