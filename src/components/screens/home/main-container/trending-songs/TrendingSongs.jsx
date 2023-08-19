import { useState } from 'react';
import styles from './TrendingSongs.module.scss'
import SongItem from './song-item/SongItem';

const TrendingSongs = () => {
    const [songs, setSongs] = useState([
        {
            id: 1,
            image: 'anime_lofi.jpg',
            title: 'Yoru ni Kakeru',
            author: 'Yoasobi',
            len: 281
        },
        {
            id: 2,
            image: 'anime_lofi.jpg',
            title: 'Yoru ni Kakeru',
            author: 'Yoasobi',
            len: 281
        },
        {
            id: 3,
            image: 'anime_lofi.jpg',
            title: 'Yoru ni Kakeru',
            author: 'Yoasobi',
            len: 281
        },
        {
            id: 4,
            image: 'anime_lofi.jpg',
            title: 'Yoru ni Kakeru',
            author: 'Yoasobi',
            len: 281
        },
        {
            id: 5,
            image: 'anime_lofi.jpg',
            title: 'Yoru ni Kakeru',
            author: 'Yoasobi',
            len: 281
        },
    ])

    return (
        <div className={styles.trend_row}>
            <h3>Trending song this week</h3>
            <div className={styles.row}>
            {songs.map(song =>
                <SongItem key={song.id} song={song} />
            )}
            </div>
        </div>
    );
}

export default TrendingSongs;