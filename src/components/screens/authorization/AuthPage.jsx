import React, { useContext, useState } from 'react'
import styles from './AuthPage.module.scss'
import RegForm from '../../ui/forms/RegForm';
import AuthForm from '../../ui/forms/AuthForm';
import AuthService from '../../../API/AuthService';
import { AuthContext } from '../../../context';

const AuthPage = () => {
    const [authData, setAuthData] = useState({
        email: '',
        password: '',
        confirm: '',
    })
    const [formType, setFormType] = useState('login')
    const {setIsAuth} = useContext(AuthContext)


    async function authorization() {
        if (formType === 'login') {
            const user = await AuthService.logIn(authData)
            localStorage.setItem('user', user)
            console.log(user)
            setIsAuth(true)
        } else {
            if (authData.password === authData.confirm) {
                const user = await AuthService.signIn(authData)
                localStorage.setItem('user', user)
                console.log(user)
                setIsAuth(true)
            }
        }
    }

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
                <div className={styles.btn_container}><button onClick={authorization}>Continue</button></div>
            </div>
        </div>
    );
}

export default AuthPage;