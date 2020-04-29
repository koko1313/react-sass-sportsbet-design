import React from 'react';

const SportCategory = (props) => {
    
    return <div className="sport-category">
        <a href={props.href} className="sport-category">
            <div className="sport-category-image">
                <props.image />
            </div>

            <div className="sport-category-title">{props.title}</div>
        </a>
    </div>;
}

export default SportCategory;