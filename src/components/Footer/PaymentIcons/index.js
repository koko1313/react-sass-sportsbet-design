import React from 'react';
import PaymentIcon from './PaymentIcon';
import eighteenIcon from '../../../assets/images/paymen-icons/18.png';
import bitcoinIcon from '../../../assets/images/paymen-icons/bitcoin.png';
import ethereumIcon from '../../../assets/images/paymen-icons/ethereum.png';
import litecoinIcon from '../../../assets/images/paymen-icons/litecoin.png';
import tron1Icon from '../../../assets/images/paymen-icons/tron1.png';
import xrpIcon from '../../../assets/images/paymen-icons/xrp.png';
import tetherIcon from '../../../assets/images/paymen-icons/tether.png';
import logowatIcon from '../../../assets/images/paymen-icons/logowat.png';
import flamengoFooterIcon from '../../../assets/images/paymen-icons/flamengo-footer.png';
import conifaIcon from '../../../assets/images/paymen-icons/conifa.png';

const PaymentIcons = () => {

    return <div className="payment-icons horizontal-scrollable-container d-flex align-items-center">
        <PaymentIcon 
            image = {flamengoFooterIcon}
            title = "Flamengo footer"
            href = "/#" />
            
        <PaymentIcon 
            image = {eighteenIcon}
            title = "18 icon"
            href = "/#" />

        <PaymentIcon 
            image = {bitcoinIcon}
            title = "Bitcoin"
            href = "/#" />

        <PaymentIcon 
            image = {ethereumIcon}
            title = "Ethereum"
            href = "/#" />

        <PaymentIcon 
            image = {litecoinIcon}
            title = "Litecoin"
            href = "/#" />

        <PaymentIcon 
            image = {tron1Icon}
            title = "Tron1"
            href = "/#" />

        <PaymentIcon 
            image = {xrpIcon}
            title = "Xrp"
            href = "/#" />

        <PaymentIcon 
            image = {tetherIcon}
            title = "Tether"
            href = "/#" />

        <PaymentIcon 
            image = {logowatIcon}
            title = "Logowat"
            href = "/#" />

        <PaymentIcon 
            image = {flamengoFooterIcon}
            title = "Flamengo footer"
            href = "/#" />

        <PaymentIcon 
            image = {conifaIcon}
            title = "Conifa"
            href = "/#" />
    </div>;
}

export default PaymentIcons;