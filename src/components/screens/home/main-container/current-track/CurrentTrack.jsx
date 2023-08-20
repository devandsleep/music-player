import styles from './CurrentTrack.module.scss'

const CurrentTrack = ({ track }) => {

    return (
        <div className={styles.current_track}>
            <div className={styles.top}>
                <img src="/src/assets/icons/equalizer.svg" alt="" />
                <div>Now Playing</div>
            </div>
            <div className={styles.preview_wrapper}>
                <img src={"/src/assets/images/" + track.img} alt="" />
                <div className={styles.track_info}>
                    <div className={styles.title}>{track.title}</div>
                    <div className={styles.author}>{track.author}</div>
                </div>
            </div>

            <div className={styles.queue}>
                <div>Queue</div>

            </div>
        </div>
    );
}

export default CurrentTrack;