import { useContext, useEffect, useState } from 'react';
import PlayButton from '../../../../../../ui/buttons/PlayButton';
import styles from './QueueItem.module.scss'
import MusicService from '../../../../../../../API/MusicService';
import { MusicContext } from '../../../../../../../context';
import PauseButton from '../../../../../../ui/buttons/PauseButton';

const QueueItem = ({ trackData }) => {
    const [authors, setAuthors] = useState([])
    const {track, changeTrack, setIsPlaying, isPlaying} = useContext(MusicContext)

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
    }, [trackData.release]);

    return (
        <div className={styles.queue_item}>
            <img src={"http://localhost:3001/images/" + trackData.preview} alt="" />
            <div className={styles.info}>
                <div>{trackData.title}</div>
                <div className={styles.author}>{authors.map(author => (
                        <span key={author.author_id}>{author.name}</span>
                    ))}</div>
            </div>
            <div style={{ width: '20px', margin: 'auto 0 auto auto' }}>
            {trackData.id === track.id && isPlaying 
                ? <PauseButton onClick={() => setIsPlaying(false)} /> 
                : <PlayButton onClick={() => changeTrack(trackData)} />}
            </div>
        </div>
    );
}

export default QueueItem;