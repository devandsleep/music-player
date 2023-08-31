import { useEffect, useState } from 'react';
import styles from './TrendingSongs.module.scss'
import SongItem from './song-item/SongItem';
import MusicService from '../../../../../API/MusicService';

const TrendingSongs = () => {
    const [songs, setSongs] = useState([])

    useEffect(() => {
        async function fetchTrendingSongs() {
            try {
                const response = await MusicService.getTrending();
                setSongs(response);
            } catch (error) {
                console.error('Error on fetching trending tracks', error);
            }
        }

        fetchTrendingSongs();
    }, []);

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