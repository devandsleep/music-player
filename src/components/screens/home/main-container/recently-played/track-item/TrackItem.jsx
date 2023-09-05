import styles from './TrackItem.module.scss'
import PlayButton from '../../../../../ui/buttons/PlayButton'
import { formatTime } from '../../../../../utils/format';

const TrackItem = ({ track }) => {
    return (
        <div className={styles.track_item}>
            <img src={track.preview ? 'http://localhost:3001/images/' + track.preview : "/src/assets/images/anime_girl.jpg"} alt="" />
            <div className={styles.info}>
                <div className={styles.name}>{track.title}</div>
                <div className='small_text'>{track.author}</div>
            </div>
            <div className={styles.time}>{formatTime(track.len)}</div>
            <div style={{ width: '30px', display: 'flex' }}>
                <PlayButton />
            </div>
        </div>
    );
}

export default TrackItem;