import React from 'react';
import Button from './Button';

const LoginRegisterButtons = () => {

    return <div className="login-register-buttons">
        <Button href="/#" className="btn-lg btn-secondary" label="Sign In" />
        <Button href="/#" className="btn-lg btn-primary" label="Register" />
    </div>;
}

export default LoginRegisterButtons;