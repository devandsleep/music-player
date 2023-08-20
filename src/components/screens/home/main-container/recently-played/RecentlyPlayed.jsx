import { useState } from 'react';
import styles from './RecentlyPlayed.module.scss'
import TrackItem from './track-item/TrackItem';

const RecentlyPlayed = () => {

    const [recent_tracks, setRecentTracks] = useState([
        {
            id: 1,
            title: 'Without Me',
            author: 'Eminem',
            preview: 'eminem.jpg',
            len: 292
        },{
            id: 2,
            title: 'Without Me',
            author: 'Eminem',
            preview: 'eminem.jpg',
            len: 292
        },{
            id: 3,
            title: 'Without Me',
            author: 'Eminem',
            preview: 'eminem.jpg',
            len: 292
        },{
            id: 4,
            title: 'Without Me',
            author: 'Eminem',
            preview: 'eminem.jpg',
            len: 292
        },{
            id: 5,
            title: 'Without Me',
            author: 'Eminem',
            preview: 'eminem.jpg',
            len: 292
        },
    ])

    return ( 
        <div className={styles.recently_played}>
            <h3>Recently Played</h3>
            <div>
                {recent_tracks.map(track => <TrackItem key={track.id} track={track} />)}
            </div>
        </div>
     );
}
 
export default RecentlyPlayed;