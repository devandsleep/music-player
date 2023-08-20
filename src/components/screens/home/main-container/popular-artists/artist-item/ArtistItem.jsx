import styles from './ArtistItem.module.scss'

const ArtistItem = ({ artist }) => {
    return (
        <div className={styles.artist_item}>
            <img src={'/src/assets/images/' + artist.avatar} alt="" />
            <h3>{artist.name}</h3>
        </div>
    );
}

export default ArtistItem;