import styles from './MainContainer.module.scss'
import SideBar from './side-bar/SideBar';

const MainContainer = () => {
    return (
        <div className={styles.screen_wrapper}>
            <div className={styles.switcher}></div>
            <div className={styles.screen}>
                <SideBar />
            </div>
        </div>
    );
}

export default MainContainer;