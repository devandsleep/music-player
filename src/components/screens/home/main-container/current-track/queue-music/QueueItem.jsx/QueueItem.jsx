import { useEffect, useState } from 'react';
import PlayButton from '../../../../../../ui/buttons/PlayButton';
import styles from './QueueItem.module.scss'
import MusicService from '../../../../../../../API/MusicService';

const QueueItem = ({ track }) => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        async function getAuthors() {
            if (track.release) {
                try {
                    const release = await MusicService.getRelease(track.release);
                    const newAuthors = release.tracks.reduce((accumulator, element) => {
                        return [...accumulator, ...element.authors];
                    }, []);
                    setAuthors(newAuthors);
                } catch (error) {
                    console.error('Error on fetching release', error);
                }
            }
        }
        getAuthors();
    }, [track.release]);

    return (
        <div className={styles.queue_item}>
            <img src={"http://localhost:3001/images/" + track.preview} alt="" />
            <div className={styles.info}>
                <div>{track.title}</div>
                <div className={styles.author}>{authors.map(author => (
                        <span key={author.author_id}>{author.name}</span>
                    ))}</div>
            </div>
            <div style={{ width: '20px', margin: 'auto 0 auto auto' }}>
                <PlayButton />
            </div>
        </div>
    );
}

export default QueueItem;