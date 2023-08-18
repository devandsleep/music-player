import styles from './PlayListBtn.module.scss'

const PlayListBtn = ({playlist}) => {
    return ( 
        <div className={styles.card}>
            <img src={'/src/assets/images/' + playlist.img} alt="" />
            <div className={styles.info}>
                <span className={styles.playlist_title}>{playlist.title}</span>
                <span className={styles.subtitle}>Playlist</span>
            </div>
        </div>
     );
}
 
export default PlayListBtn;