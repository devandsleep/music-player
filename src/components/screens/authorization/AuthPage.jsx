import React, { useState } from 'react'
import styles from './AuthPage.module.scss'
import RegForm from '../../ui/forms/RegForm';
import AuthForm from '../../ui/forms/AuthForm';

const AuthPage = () => {
    const [authData, setAuthData] = useState({
        email: '',
        password: '',
        confirm: '',
    })
    const [formType, setFormType] = useState('login')

    return (
        <div className={styles.auth_container}>
            <div className={styles.auth_win}>
                <div className={styles.form_switcher}>
                    <button
                        className={formType === 'login' ? `${styles.selected} ${styles.left}` : `${styles.left}`}
                        onClick={() => setFormType('login')}>Log In</button>
                    <button
                        className={formType === 'signin' ? `${styles.selected} ${styles.right}` : `${styles.right}`}
                        onClick={() => setFormType('signin')}>Sign In</button>
                </div>
                {formType === 'login'
                    ? <AuthForm authData={authData} setAuthData={setAuthData} />
                    : <RegForm authData={authData} setAuthData={setAuthData} />}
            </div>
        </div>
    );
}

export default AuthPage;