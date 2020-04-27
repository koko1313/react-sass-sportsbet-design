import React from 'react';

const Button = (props) => {

    return <a href={props.href} className={`btn ${props.className}`}>{props.label}</a>;
}

export default Button;