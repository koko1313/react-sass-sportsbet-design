import React from 'react';
import GameProvider from './GameProvider';
import evolutionGamingLogo from '../../assets/images/game-providers/evolution-gaming.png';
import asiaGamingLogo from '../../assets/images/game-providers/asia-gaming.png';
import pragmaticPlayLogo from '../../assets/images/game-providers/pragmatic-play.png';
import gameArtLogo from '../../assets/images/game-providers/game-art.png';
import betsoftLogo from '../../assets/images/game-providers/betsoft.png';
import boomingGamesLogo from '../../assets/images/game-providers/booming-games.png';
import playngoLogo from '../../assets/images/game-providers/play-n-go.png';
import microgamingLogo from '../../assets/images/game-providers/microgaming.png';
import yggdrasilLogo from '../../assets/images/game-providers/yggdrasil.png';
import booongoLogo from '../../assets/images/game-providers/booongo.png';

const GameProviders = () => {

    return <div className="game-providers">
        <h3 className="d-none d-lg-block">Game Providers</h3>

        <div className="game-providers-buttons horizontal-scrollable-container d-flex">
            <GameProvider 
                title = "Evolution Gaming"
                href = "/#"
                image = {evolutionGamingLogo}
                />

            <GameProvider 
                title = "Asia Gaming"
                href = "/#"
                image = {asiaGamingLogo}
                />

            <GameProvider 
                title = "Pragmatic Play"
                href = "/#"
                image = {pragmaticPlayLogo}
                />

            <GameProvider 
                title = "Game Art"
                href = "/#"
                image = {gameArtLogo}
                />

            <GameProvider 
                title = "Bet Soft"
                href = "/#"
                image = {betsoftLogo}
                />

            <GameProvider 
                title = "Booming Games"
                href = "/#"
                image = {boomingGamesLogo}
                />
            
            <GameProvider 
                title = "Play n Go"
                href = "/#"
                image = {playngoLogo}
                />
            
            <GameProvider 
                title = "Microgaming"
                href = "/#"
                image = {microgamingLogo}
                />
            
            <GameProvider 
                title = "Yggdrasil"
                href = "/#"
                image = {yggdrasilLogo}
                />
            
            <GameProvider 
                title = "Booongo"
                href = "/#"
                image = {booongoLogo}
                />
        </div>
    </div>
}

export default GameProviders;