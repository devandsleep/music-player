import styles from './MainContainer.module.scss'
import CurrentTrack from './current-track/CurrentTrack';
import Header from './header/Header';
import Player from './player/Player';
import SideBar from './side-bar/SideBar';
import TrendingSongs from './trending-songs/TrendingSongs';

const MainContainer = () => {
    return (
        <div className={styles.screen_wrapper}>
            <div className={styles.switcher}></div>
            <div className={styles.container}>
                <div className={styles.screen}>
                    <SideBar />
                    <div style={{ width: '100%' }}>
                        <Header />
                        <div style={{display: 'flex', width: '100%', height: '100%'}}>
                            <div style={{width: '100%'}}>
                                <TrendingSongs />
                            </div>
                            <CurrentTrack />
                        </div>
                    </div>
                </div>
                <Player />
            </div>
        </div>
    );
}

export default MainContainer;