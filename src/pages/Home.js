import React from 'react';
import PartnersLogoList from '../components/PartnersLogoList';
import LoginRegisterButtons from '../components/LoginRegisterButtons';
import PromoBanners from '../components/PromoBanners';
import SportsCategories from '../components/SportsCategories';
import PopularThemes from '../components/PopularThemes';
import PromotionsBanners from '../components/PromotionsBanners';
import GameProviders from '../components/GameProviders';

const Home = () => {

    return <>
        <div className="row">
            <div className="col">
                <div className="d-flex justify-content-between header">
                    <PartnersLogoList />
                    <LoginRegisterButtons />
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <PromoBanners />
            </div>
        </div>

        <div className="row">
            <div className="col">
                <SportsCategories />
            </div>
        </div>

        <div className="row">
            <div className="col">
                <PopularThemes />
            </div>
        </div>

        <div className="row">
            <div className="col">
                <PromotionsBanners />
            </div>
        </div>

        <div className="row">
            <div className="col">
                <GameProviders />
            </div>
        </div>
    </>
}



export default Home;


 