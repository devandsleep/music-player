import { useContext } from 'react';
import SearchInput from '../../../../ui/inputs/SearchInput';
import styles from './Header.module.scss'
import Search from './Search';
import { AuthContext } from '../../../../../context';

const Header = () => {
    const {setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('user')
    }

    return (
        <div className={styles.header}>
            <div className={styles.header_title}>
                <h3>Welcome back, Alex!</h3>
                <div className='small_text'>112 new playlist for you</div>
            </div>
            <Search />
            <div className={styles.profile} onClick={logout}>
                <img className={styles.avatar} src="/src/assets/images/anime_girl.jpg" alt="" />
            </div>
        </div>
    );
}

export default Header;