import { useContext, useState } from 'react';
import styles from './QueueMusic.module.scss'
import QueueItem from './QueueItem.jsx/QueueItem';
import { PlayListsContext } from '../../../../../../context';


const QueueMusic = () => {

    const { recent_tracks } = useContext(PlayListsContext)
    const [queue, setQueue] = useState(recent_tracks)

    return (
        <div className={styles.queue}>
            <h3>Queue</h3>
            <div className={styles.row}>
                {queue.map(track => <QueueItem track={track} />)}
            </div>
        </div>
    );
}

export default QueueMusic;