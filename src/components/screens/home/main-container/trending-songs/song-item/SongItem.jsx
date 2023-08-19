import styles from './SongItem.module.scss'

const SongItem = ({ song }) => {
    return (
        <div className={styles.song}>
            <img src={'/src/assets/images/' + song.image} alt="" />
            <div className={styles.info}>
                <div className={styles.title}>{song.title}</div>
                <div className='small_text'>{song.author}</div>
            </div>
        </div>
    );
}

export default SongItem;