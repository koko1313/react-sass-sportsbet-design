import React from 'react';

const Logo = (props) => {
    
    return <a href={props.href}>
        <div className="partner-logo d-flex">
            <div className="partner-logo-image">
                <props.image />
            </div>
            <div className="partner-logo-label">
                {props.label}
            </div>
        </div>
    </a>;
}

export default Logo;