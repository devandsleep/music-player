import { useContext } from 'react';
import styles from './MainContainer.module.scss'
import CurrentTrack from './current-track/CurrentTrack';
import Header from './header/Header';
import Player from './player/Player';
import SideBar from './side-bar/SideBar';
import TrendingSongs from './trending-songs/TrendingSongs';
import { PlayListsContext } from '../../../../context';

const MainContainer = () => {

    const {tracks} = useContext(PlayListsContext)

    return (
        <div className={styles.screen_wrapper}>
            <div className={styles.switcher}></div>
            <div className={styles.container}>
                <div className={styles.screen}>
                    <SideBar />
                    <div style={{ maxWidth: '85%' }}>
                        <Header />
                        <div style={{display: 'flex', height: '100%'}}>
                            <div style={{maxWidth: '65%'}}>
                                <TrendingSongs />
                            </div>
                            <CurrentTrack track={tracks[0]}/>
                        </div>
                    </div>
                </div>
                <Player />
            </div>
        </div>
    );
}

export default MainContainer;