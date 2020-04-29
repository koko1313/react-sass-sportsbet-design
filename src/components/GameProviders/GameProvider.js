import React from 'react';

const GameProvider = (props) => {

    return <div className="game-provider">
        <a href={props.href}>
            <div className="game-provider-content d-flex justify-content-center">
                <img src={props.image} alt={props.title} />
            </div>
        </a>
    </div>;
}

export default GameProvider;