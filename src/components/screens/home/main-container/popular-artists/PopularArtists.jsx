import { useState } from 'react';
import styles from './PopularArtists.module.scss'
import ArtistItem from './artist-item/ArtistItem';

const PopularArtists = () => {

    const [artists, setArtists] = useState([
        {
            id: 1,
            name: 'Eminem',
            avatar: 'eminem.jpg',
        },
        {
            id: 2,
            name: 'Eminem',
            avatar: 'eminem.jpg',
        },
        {
            id: 3,
            name: 'Eminem',
            avatar: 'eminem.jpg',
        },
        {
            id: 4,
            name: 'Eminem',
            avatar: 'eminem.jpg',
        },
        {
            id: 5,
            name: 'Eminem',
            avatar: 'eminem.jpg',
        },
    ])

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