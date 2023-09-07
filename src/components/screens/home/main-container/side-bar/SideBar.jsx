import { useContext } from 'react';
import { MusicContext } from '../../../../../context';
import MainButton from '../../../../ui/buttons/MainButton';
import PlayListBtn from '../../playlists/PlayListBtn';
import styles from './SideBar.module.scss'
import PlusButton from '../../../../ui/buttons/PlusButton';
import CollectionsButton from '../../../../ui/buttons/CollectionsButton';

const SideBar = () => {

    const { playlists } = useContext(MusicContext)


    return (
        <div className={styles.side_bar}>
            <div className={styles.buttons}>
                <MainButton><img src="/src/assets/icons/home.svg" alt="" />Home</MainButton>
                <MainButton><img src="/src/assets/icons/song.svg" alt="" />Songs</MainButton>
                <MainButton><img src="/src/assets/icons/microphone.svg" alt="" />Artists</MainButton>
                <MainButton><img src="/src/assets/icons/albums.svg" alt="" />Albums</MainButton>
                <MainButton><img src="/src/assets/icons/podcast.svg" alt="" />Podcast</MainButton>
            </div>
            <div className={styles.collections}>
                <div className={styles.title}>
                    <div style={{ width: '13px' }}>
                        <CollectionsButton />
                    </div>
                    Your collections
                    <div style={{ width: '13px' }}>
                        <PlusButton />
                    </div>
                </div>
                {playlists.map((playlist) =>
                    <PlayListBtn key={playlist.id} playlist={playlist} />
                )}
            </div>
        </div>
    );
}

export default SideBar;