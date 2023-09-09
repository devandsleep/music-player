import { useContext, useEffect, useRef, useState } from 'react';
import styles from './AudioPlayer.module.scss'
import PauseButton from '../buttons/PauseButton';
import PlayButton from '../buttons/PlayButton';
import { MusicContext } from '../../../context';
import { formatTime } from '../../../utils/format';


const AudioPlayer = ({ track, authors, nextTrack, previousTrack }) => {
    const audioRef = useRef(null);
    const {isPlaying, setIsPlaying} = useContext(MusicContext);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        const audio = audioRef.current;
        const handleTimeUpdate = () => {
            setCurrentTime(Math.ceil(audio.currentTime));
        };
        const handleLoadedMetadata = () => {
            setDuration(Math.ceil(audio.duration));
        };
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, []);

    const addToRecentTracks = (track) => {
        let recentTracks = JSON.parse(localStorage.getItem('recentTracks2')) || [];
        const isDuplicate = recentTracks.some((recentTrack) => recentTrack.id === track.id);

        if (isDuplicate) {
            const index = recentTracks.findIndex(obj => obj.id === track.id);
            if (index !== -1) {
                recentTracks.splice(index, 1);
            }
        }
        
        recentTracks.unshift(track);
        if (recentTracks.length > 10) {
            recentTracks = recentTracks.slice(0, 10);
        }
        localStorage.setItem('recentTracks2', JSON.stringify(recentTracks));
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = 'http://localhost:3001/audio/' + track.audio;
            if (isPlaying) {
                audioRef.current.play();
                addToRecentTracks(track)
            }
        }
    }, [track.audio]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();

        }

    }, [isPlaying]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
            addToRecentTracks(track)
        }
        setIsPlaying(!isPlaying);
    };

    const handleProgressClick = (e) => {
        const progressBar = e.target;
        const clickPosition = e.nativeEvent.offsetX;
        const progressBarWidth = progressBar.offsetWidth;
        const newTime = (clickPosition / progressBarWidth) * duration;

        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    return (
        <div className={styles.player}>
            <audio ref={audioRef} src={'http://localhost:3001/audio/' + track.audio} />
            <div className={styles.preview}>
                <img src={track.preview ? 'http://localhost:3001/images/' + track.preview : "/src/assets/images/anime_girl.jpg"} alt="" />
                <div className={styles.track_info}>
                    <div className={styles.title}>{track.title}</div>
                    <div className={styles.author}>{authors.map(author => (
                        <span key={author.author_id}>{author.name}</span>
                    ))}</div>
                </div>
            </div>
            <div className={styles.menu}>
                <div className={styles.player_buttons}>
                    <button onClick={previousTrack}><img src="/src/assets/icons/previous.svg" alt="" /></button>
                    <div style={{ width: '80px' }}>
                        {isPlaying ? <PauseButton onClick={togglePlay} /> : <PlayButton onClick={togglePlay} />}
                    </div>
                    <button onClick={nextTrack}><img src="/src/assets/icons/next.svg" alt="" /></button>
                </div>
                <div className={styles.progress_bar}>
                    <div className={styles.numbers}>{formatTime(currentTime)}</div>
                    <progress onClick={handleProgressClick} value={currentTime} max={duration} />
                    <div className={styles.numbers}>{formatTime(duration)}</div>
                    <input className={styles.audio_volume} type="range" min="0" max="1" step="0.01" value={volume} onChange={(e) => {
                        const newVolume = parseFloat(e.target.value);
                        setVolume(newVolume);
                        if (audioRef.current) {
                            audioRef.current.volume = newVolume;
                        }
                    }}
                    />
                </div>
            </div>
        </div>
    );
}

export default AudioPlayer;