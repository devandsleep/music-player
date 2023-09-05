import styles from './TrackItem.module.scss'
import PlayButton from '../../../../../ui/buttons/PlayButton'
import { formatTime } from '../../../../../utils/format';
import { useEffect, useState } from 'react';

const TrackItem = ({ track }) => {
    const [duration, setDuration] = useState(null);

    useEffect(() => {
        const audio = new Audio(`http://localhost:3001/audio/${track.audio}`);
    
        const handleLoadedMetadata = () => {
          const trackDuration = Math.floor(audio.duration);
          setDuration(trackDuration);
        };
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    
        return () => {
          audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
      }, [track.audio]);

    return (
        <div className={styles.track_item}>
            <img src={track.preview ? 'http://localhost:3001/images/' + track.preview : "/src/assets/images/anime_girl.jpg"} alt="" />
            <div className={styles.info}>
                <div className={styles.name}>{track.title}</div>
                <div className='small_text'>{track.author}</div>
            </div>
            <div className={styles.time}>{formatTime(duration)}</div>
            <div style={{ width: '30px', display: 'flex' }}>
                <PlayButton />
            </div>
        </div>
    );
}

export default TrackItem;