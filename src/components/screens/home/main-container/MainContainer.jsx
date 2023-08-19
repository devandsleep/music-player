import styles from './MainContainer.module.scss'
import Header from './header/Header';
import Player from './player/Player';
import SideBar from './side-bar/SideBar';

const MainContainer = () => {
    return (
        <div className={styles.screen_wrapper}>
            <div className={styles.switcher}></div>
            <div className={styles.container}>
                <div className={styles.screen}>
                    <SideBar />
                    <div style={{width: '100%'}}>
                        <Header />
                        <div>
                            
                        </div>
                        {/* Current track */}
                    </div>
                </div>
                <Player />
            </div>
        </div>
    );
}

export default MainContainer;