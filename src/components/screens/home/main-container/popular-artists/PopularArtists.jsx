import { useEffect, useState } from 'react';
import styles from './PopularArtists.module.scss'
import ArtistItem from './artist-item/ArtistItem';
import MusicService from '../../../../../API/MusicService';

const PopularArtists = () => {

    const [artists, setArtists] = useState([])

    useEffect(() => {
        async function fetchPopularArtists() {
            try {
                const response = await MusicService.getPopularArtists();
                setArtists(response);
            } catch (error) {
                console.error('Error on fetching popular artists', error);
            }
        }

        fetchPopularArtists();
    }, []);

    return (
        <div className={styles.artists_row}>
            <h3>Popular Artists</h3>
            <div className={styles.row}>
            {artists.map(artist => <ArtistItem key={artist.id} artist={artist} />)}
            </div>
        </div>
    );
}

export default PopularArtists;