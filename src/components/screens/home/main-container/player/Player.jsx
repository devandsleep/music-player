import { useContext, useEffect, useState } from 'react';
import AudioPlayer from '../../../../ui/audioplayer/AudioPlayer';
import styles from './Player.module.scss'
import MusicService from '../../../../../API/MusicService';
import { MusicContext } from '../../../../../context';

const Player = () => {
    const [authors, setAuthors] = useState([])
    const {track, setCurrentTrack, songs, loadCurrentTrackFromLocalStorage, 
        saveCurrentTrackToLocalStorage} = useContext(MusicContext)

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

    const setNextTrack = () => {
        const currentIndex = songs.findIndex((song) => song.id === track.id);
        const nextIndex = (currentIndex + 1) % songs.length;
        setCurrentTrack(songs[nextIndex]);
        saveCurrentTrackToLocalStorage(songs[nextIndex]);
    };

    const setPreviousTrack = () => {
        const currentIndex = songs.findIndex((song) => song.id === track.id);
        const previousIndex =
            currentIndex === -1 || currentIndex === 0
                ? songs.length - 1
                : currentIndex - 1;
        setCurrentTrack(songs[previousIndex]);
        saveCurrentTrackToLocalStorage(songs[previousIndex]);
    };

    return (
        <div className={styles.player}>
            {track && (
                <AudioPlayer
                    track={track}
                    authors={authors}
                    nextTrack={setNextTrack}
                    previousTrack={setPreviousTrack}
                />
            )}
        </div>
    );
}

export default Player;
