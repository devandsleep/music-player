import { useContext, useEffect, useState } from 'react';
import styles from './CurrentTrack.module.scss'
import QueueMusic from './queue-music/QueueMusic';
import MusicService from '../../../../../API/MusicService';
import { PlayListsContext } from '../../../../../context';

const CurrentTrack = () => {
    const [authors, setAuthors] = useState([])
    const {track, setCurrentTrack, loadCurrentTrackFromLocalStorage} = useContext(PlayListsContext)

    useEffect(() => {
        const lastSelectedTrack = loadCurrentTrackFromLocalStorage()
        if (lastSelectedTrack) {
            setCurrentTrack(lastSelectedTrack);
        } else {
            setCurrentTrack(songs[0])
        }
    }, []);

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
        <div className={styles.current_track}>
            <div className={styles.top}>
                <img src="/src/assets/icons/equalizer.svg" alt="" />
                <div>Now Playing</div>
            </div>
            <div className={styles.preview_wrapper}>
                <img src={"http://localhost:3001/images/" + track.preview} alt="" />
                <div className={styles.track_info}>
                    <div className={styles.title}>{track.title}</div>
                    <div className={styles.author}>{authors.map(author => (
                        <span key={author.author_id}>{author.name}</span>
                    ))}</div>
                </div>
            </div>
            <QueueMusic />
        </div>
    );
}

export default CurrentTrack;