import { useContext} from 'react';
import styles from './QueueMusic.module.scss'
import QueueItem from './QueueItem.jsx/QueueItem';
import { MusicContext } from '../../../../../../context';


const QueueMusic = () => {
    const {songs, track } = useContext(MusicContext)

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