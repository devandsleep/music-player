import PlayButton from '../../../../../../ui/buttons/PlayButton';
import styles from './QueueItem.module.scss'

const QueueItem = ({ track }) => {

    return (
        <div className={styles.queue_item}>
            <img src={"/src/assets/images/" + track.preview} alt="" />
            <div className={styles.info}>
                <div>{track.title}</div>
                <div className='small_text'>{track.author}</div>
            </div>
            <div style={{ width: '20px', margin: 'auto 0 auto auto' }}>
                <PlayButton />
            </div>
        </div>
    );
}

export default QueueItem;