import React from 'react'
import MainInput from '../inputs/MainInput';

const RegForm = ({ authData, setAuthData }) => {
    const handleEmailChange = (event) => {
        setAuthData({ ...authData, email: event.target.value });
    };

    const handlePasswordChange = (event) => {
        setAuthData({ ...authData, password: event.target.value });
    };

    const handleConfirmChange = (event) => {
        setAuthData({ ...authData, confirm: event.target.value });
    };

    return (
        <>
            <MainInput value={authData.email} onChange={handleEmailChange} type="email" placeholder='username' />
            <MainInput value={authData.password} onChange={handlePasswordChange} type="password" placeholder='password' />
            <MainInput value={authData.confirm} onChange={handleConfirmChange} type="password" placeholder='confirm' />
        </>
    );
}

export default RegForm;