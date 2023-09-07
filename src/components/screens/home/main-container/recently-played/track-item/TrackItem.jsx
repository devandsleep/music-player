import styles from './TrackItem.module.scss'
import PlayButton from '../../../../../ui/buttons/PlayButton'
import { formatTime } from '../../../../../utils/format';
import { useContext, useEffect, useState } from 'react';
import { MusicContext } from '../../../../../../context';
import PauseButton from '../../../../../ui/buttons/PauseButton';

const TrackItem = ({ trackData }) => {
    const [duration, setDuration] = useState(null);
    const {changeTrack, track, isPlaying, setIsPlaying} = useContext(MusicContext)

    useEffect(() => {
        const audio = new Audio(`http://localhost:3001/audio/${trackData.audio}`);
    
        const handleLoadedMetadata = () => {
          const trackDuration = Math.floor(audio.duration);
          setDuration(trackDuration);
        };
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    
        return () => {
          audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
      }, [trackData.audio]);

    return (
        <div className={styles.track_item}>
            <img src={trackData.preview ? 'http://localhost:3001/images/' + trackData.preview : "/src/assets/images/anime_girl.jpg"} alt="" />
            <div className={styles.info}>
                <div className={styles.name}>{trackData.title}</div>
                <div className='small_text'>{trackData.author}</div>
            </div>
            <div className={styles.time}>{formatTime(duration)}</div>
            <div style={{ width: '30px', display: 'flex' }}>
                {trackData.id === track.id && isPlaying 
                ? <PauseButton onClick={() => setIsPlaying(false)} /> 
                : <PlayButton onClick={() => changeTrack(trackData)} />}
            </div>
        </div>
    );
}

export default TrackItem;