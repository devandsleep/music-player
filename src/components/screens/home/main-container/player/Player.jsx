import { useEffect, useState } from 'react';
import AudioPlayer from '../../../../ui/audioplayer/AudioPlayer';
import styles from './Player.module.scss'
import MusicService from '../../../../../API/MusicService';

const Player = () => {
    const [songs, setSongs] = useState([])
    const [currentTrack, setCurrentTrack] = useState({})
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        async function fetchTrendingSongs() {
            try {
                const response = await MusicService.getTrending();
                setSongs(response);
                setCurrentTrack(response[0])
            } catch (error) {
                console.error('Error on fetching tracks for player', error);
            }
        }
        fetchTrendingSongs();
    }, []);

    useEffect(() => {
        async function getAuthors() {
            if (currentTrack.release) {
                try {
                    const release = await MusicService.getRelease(currentTrack.release);
                    const newAuthors = release.tracks.reduce((accumulator, element) => {
                        return [...accumulator, ...element.authors];
                    }, []);
                    setAuthors(newAuthors);
                    console.log(authors)
                } catch (error) {
                    console.error('Error on fetching release', error);
                }
            }
        }
        getAuthors();
    }, [currentTrack.release]);

    return (
        <div className={styles.player}>
            {currentTrack && (
                <AudioPlayer
                    preview={currentTrack.preview ? 'http://localhost:3001/images/' + currentTrack.preview : "/src/assets/images/anime_girl.jpg"}
                    src={'http://localhost:3001/audio/' + currentTrack.audio}
                    title={currentTrack.title}
                    authors={authors}
                />
            )}
        </div>
    );
}

export default Player;
