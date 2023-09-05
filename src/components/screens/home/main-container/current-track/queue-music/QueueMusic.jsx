import { useContext} from 'react';
import styles from './QueueMusic.module.scss'
import QueueItem from './QueueItem.jsx/QueueItem';
import { PlayListsContext } from '../../../../../../context';


const QueueMusic = () => {
    const {songs, track, loadCurrentTrackFromLocalStorage} = useContext(PlayListsContext)

    return (
        <div className={styles.queue}>
            <h3>Queue</h3>
            <div className={styles.row}>
                {songs.map(song => 
                <div key={song.id} className={song.id === track.id ? styles.selected : ''}><QueueItem track={song} /></div>)}
            </div>
        </div>
    );
}

export default QueueMusic;