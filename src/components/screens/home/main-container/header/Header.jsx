import SearchInput from '../../../../ui/inputs/SearchInput';
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_title}>
                <h3>Welcome back, Alex!</h3>
                <div className='small_text'>112 new playlist for you</div>
            </div>
            <div className={styles.search}>
                <SearchInput />
            </div>
            <div className={styles.profile}>
                <img className={styles.avatar} src="/src/assets/images/anime_girl.jpg" alt="" />
            </div>
        </div>
    );
}

export default Header;