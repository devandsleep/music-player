import { useEffect } from 'react';
import styles from './ArtistItem.module.scss'

const ArtistItem = ({ artist }) => {

    return (
        <div className={styles.artist_item}>
            <div className={styles.img_container}>
                <img src={artist.avatar ? 'http://localhost:3001/images/' + artist.avatar : '/src/assets/images/anime_girl.jpg'} alt='img' />
            </div>
            <h3>{artist.username}</h3>
        </div>
    );
}

export default ArtistItem;