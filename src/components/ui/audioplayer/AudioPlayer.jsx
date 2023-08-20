import { useEffect, useRef, useState } from 'react';
import styles from './AudioPlayer.module.scss'
import PauseButton from '../buttons/PauseButton';
import PlayButton from '../buttons/PlayButton';
import { formatTime } from '../../utils/format';


const AudioPlayer = ({ src, title, preview, author }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
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

    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
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

    // const formatTime = (timeInSeconds) => {
    //     const minutes = Math.floor(timeInSeconds / 60);
    //     const seconds = Math.floor(timeInSeconds % 60);
    //     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    // };

    return (
        <div className={styles.player}>
            <audio ref={audioRef} src={src} />
            <div className={styles.preview}>
                <img src={preview} alt="" />
                <div className={styles.track_info}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.author}>{author}</div>
                </div>
            </div>
            <div className={styles.menu}>
                <div className={styles.player_buttons}>
                    <button><img src="/src/assets/icons/previous.svg" alt="" /></button>
                    {isPlaying ? <PauseButton onClick={togglePlay} /> : <PlayButton onClick={togglePlay} />}
                    <button><img src="/src/assets/icons/next.svg" alt="" /></button>
                </div>
                <div className={styles.progress_bar}>
                    <div className={styles.numbers}>{formatTime(currentTime)}</div>
                    <progress onClick={handleProgressClick} value={currentTime} max={duration} />
                    <div className={styles.numbers}>{formatTime(duration)}</div>
                    <input
                        className={styles.audio_volume}
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={(e) => {
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