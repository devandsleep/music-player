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
                const lastSelectedTrack = loadCurrentTrackFromLocalStorage();
                if (lastSelectedTrack) {
                    setCurrentTrack(lastSelectedTrack);
                } else {
                    setCurrentTrack(response[0])
                }
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
                } catch (error) {
                    console.error('Error on fetching release', error);
                }
            }
        }
        getAuthors();
    }, [currentTrack.release]);

    const setNextTrack = () => {
        const currentIndex = songs.findIndex((song) => song.id === currentTrack.id);
        const nextIndex = (currentIndex + 1) % songs.length;
        setCurrentTrack(songs[nextIndex]);
        saveCurrentTrackToLocalStorage(songs[nextIndex]);
    };

    const setPreviousTrack = () => {
        const currentIndex = songs.findIndex((song) => song.id === currentTrack.id);
        const previousIndex =
            currentIndex === -1 || currentIndex === 0
                ? songs.length - 1
                : currentIndex - 1;
        setCurrentTrack(songs[previousIndex]);
        saveCurrentTrackToLocalStorage(songs[previousIndex]);
    };

    const saveCurrentTrackToLocalStorage = (track) => {
        localStorage.setItem('currentTrack', JSON.stringify(track));
    };

    const loadCurrentTrackFromLocalStorage = () => {
        const trackJSON = localStorage.getItem('currentTrack');
        return trackJSON ? JSON.parse(trackJSON) : null;
    };

    return (
        <div className={styles.player}>
            {currentTrack && (
                <AudioPlayer
                    preview={currentTrack.preview ? 'http://localhost:3001/images/' + currentTrack.preview : "/src/assets/images/anime_girl.jpg"}
                    audio={'http://localhost:3001/audio/' + currentTrack.audio}
                    title={currentTrack.title}
                    authors={authors}
                    nextTrack={setNextTrack}
                    previousTrack={setPreviousTrack}
                />
            )}
        </div>
    );
}

export default Player;
