import { useEffect, useState } from 'react';
import styles from './Switcher.module.scss'

const Switcher = () => {

    const [currentBtn, setCurrentBtn] = useState('menu')

    useEffect(() => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            if (button.id === currentBtn) {
                button.classList.add(styles.selected);
            } else {
                button.classList.remove(styles.selected);
            }
        });
    }, [currentBtn]);

    return (
        <div className={styles.switcher}>
            <button onClick={() => setCurrentBtn('menu')} id='menu'><img src="/src/assets/icons/menu.svg" alt="" /></button>
            <button onClick={() => setCurrentBtn('search')} id='search'><img src="/src/assets/icons/search.svg" alt="" /></button>
            <button onClick={() => setCurrentBtn('notifications')} id='notifications'><img src="/src/assets/icons/bell.svg" alt="" /></button>
            <button onClick={() => setCurrentBtn('settings')} id='settings'><img src="/src/assets/icons/gear.svg" alt="" /></button>
            <button onClick={() => setCurrentBtn('profile')} id='profile'><img src="/src/assets/icons/profile.svg" alt="" /></button>
        </div>
    );
}

export default Switcher;