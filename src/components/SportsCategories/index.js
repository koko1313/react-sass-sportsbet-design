import React from 'react';
import { ReactComponent as esportsIcon }  from '../../assets/images/sports-icons/esports-icon.svg';
import { ReactComponent as basketballIcon }  from '../../assets/images/sports-icons/basketball-icon.svg';
import { ReactComponent as footballIcon }  from '../../assets/images/sports-icons/football-icon.svg';
import { ReactComponent as tableTennisIcon }  from '../../assets/images/sports-icons/table-tennis-icon.svg';
import { ReactComponent as tennisIcon }  from '../../assets/images/sports-icons/tennis-icon.svg';
import { ReactComponent as baseballIcon }  from '../../assets/images/sports-icons/baseball-icon.svg';
import { ReactComponent as dartsIcon }  from '../../assets/images/sports-icons/darts-icon.svg';
import { ReactComponent as iceHockeyIcon }  from '../../assets/images/sports-icons/ice-hockey-icon.svg';
import { ReactComponent as volleyballIcon }  from '../../assets/images/sports-icons/volleyball-icon.svg';
import { ReactComponent as americanFootballIcon }  from '../../assets/images/sports-icons/american-football-icon.svg';
import { ReactComponent as popularSportsIcon }  from '../../assets/images/sports-icons/popular-sports-icon.svg';
import { ReactComponent as golfIcon }  from '../../assets/images/sports-icons/golf-icon.svg';
import { ReactComponent as mmaIcon }  from '../../assets/images/sports-icons/mma-icon.svg';
import { ReactComponent as specialSportsIcon }  from '../../assets/images/sports-icons/special-sports-icon.svg';
import SportCategory from './SportCategory';

const SportsCategories = () => {
    
    return <div className="sports-categories">
        <h3>Sports categories</h3>
        
        <div className="sports-categories-buttons horizontal-scrollable-container d-flex">
            <SportCategory 
                image = {esportsIcon}
                title = "eSoccer"
                href = "/#" />

            <SportCategory 
                image = {basketballIcon}
                title = "eNBA"
                href = "/#" />

            <SportCategory 
                image = {footballIcon}
                title = "Soccer"
                href = "/#" />

            <SportCategory 
                image = {tableTennisIcon}
                title = "Table tennis"
                href = "/#" />

            <SportCategory 
                image = {tableTennisIcon}
                title = "TT Setka Cup"
                href = "/#" />

            <SportCategory 
                image = {basketballIcon}
                title = "Basketball"
                href = "/#" />
                
            <SportCategory 
                image = {tennisIcon}
                title = "Tennis"
                href = "/#" />
            
            <SportCategory 
                image = {esportsIcon}
                title = "CS:GO"
                href = "/#" />

            <SportCategory 
                image = {esportsIcon}
                title = "Dota 2"
                href = "/#" />

            <SportCategory 
                image = {esportsIcon}
                title = "LoL"
                href = "/#" />
            
            <SportCategory 
                image = {esportsIcon}
                title = "King of Glory"
                href = "/#" />

            <SportCategory 
                image = {esportsIcon}
                title = "Rainbow Six"
                href = "/#" />
            
            <SportCategory 
                image = {esportsIcon}
                title = "StarCraft"
                href = "/#" />

            <SportCategory 
                image = {baseballIcon}
                title = "Baseball"
                href = "/#" />

            <SportCategory 
                image = {dartsIcon}
                title = "Darts"
                href = "/#" />

            <SportCategory 
                image = {iceHockeyIcon}
                title = "Ice Hockey"
                href = "/#" />

            <SportCategory 
                image = {volleyballIcon}
                title = "Volleyball"
                href = "/#" />

            <SportCategory 
                image = {americanFootballIcon}
                title = "American Football"
                href = "/#" />

            <SportCategory 
                image = {popularSportsIcon}
                title = "Chess"
                href = "/#" />

            <SportCategory 
                image = {golfIcon}
                title = "Golf"
                href = "/#" />

            <SportCategory 
                image = {mmaIcon}
                title = "MMA"
                href = "/#" />

            <SportCategory 
                image = {popularSportsIcon}
                title = "Specials"
                href = "/#" />

            <SportCategory 
                image = {specialSportsIcon}
                title = "Sportsbet Specials"
                href = "/#" />
        </div>
    </div>
}

export default SportsCategories;