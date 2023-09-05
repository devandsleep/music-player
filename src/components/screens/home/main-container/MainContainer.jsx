import { useContext, useEffect } from 'react';
import styles from './MainContainer.module.scss'
import CurrentTrack from './current-track/CurrentTrack';
import Header from './header/Header';
import Player from './player/Player';
import SideBar from './side-bar/SideBar';
import TrendingSongs from './trending-songs/TrendingSongs';
import { PlayListsContext } from '../../../../context';
import PopularArtists from './popular-artists/PopularArtists';
import RecentlyPlayed from './recently-played/RecentlyPlayed';
import Switcher from './switcher/Switcher';

const MainContainer = () => {
    return (
        <div className={styles.screen_wrapper}>
            <Switcher />
            <div className={styles.container}>
                <div className={styles.screen}>
                    <SideBar />
                    <div style={{ maxWidth: '85%' }}>
                        <Header />
                        <div style={{display: 'flex', height: '100%'}}>
                            <div style={{maxWidth: '65%', overflowY: 'scroll'}}>
                                <TrendingSongs />
                                <PopularArtists />
                                <RecentlyPlayed />
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