import React from 'react';

const PopularTheme = (props) => {

    return <a href={props.href} className="popular-theme">
        <div className="popular-theme d-flex align-items-center">
            <div className="popular-theme-image">
                <img className="img-fluid" src={props.image} alt={props.title} />
            </div>

            <h3 className="popular-theme-title">{props.title}</h3>
        </div>
    </a>
}

export default PopularTheme;