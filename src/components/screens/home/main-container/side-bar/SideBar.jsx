import { useContext } from 'react';
import { PlayListsContext } from '../../../../../context';
import MainButton from '../../../../ui/buttons/MainButton';
import PlayListBtn from '../../playlists/PlayListBtn';
import styles from './SideBar.module.scss'

const SideBar = () => {

    const { playlists } = useContext(PlayListsContext)


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
                {playlists.map((playlist) =>
                    <PlayListBtn key={playlist.id} playlist={playlist} />
                )}
                {/* <PlayListBtn title='Eminem' /> */}
            </div>
        </div>
    );
}

export default SideBar;