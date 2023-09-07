import { useContext, useEffect, useState } from 'react';
import styles from './RecentlyPlayed.module.scss'
import TrackItem from './track-item/TrackItem';
import { MusicContext } from '../../../../../context';

const RecentlyPlayed = () => {
    const [recent_tracks, setRecentTracks] = useState([])
    const {track} = useContext(MusicContext)

    useEffect(() => {
        const recentTracks = JSON.parse(localStorage.getItem('recentTracks2')) || []
        setRecentTracks(recentTracks)
    }, [track])

    return ( 
        <div className={styles.recently_played}>
            <h3>Recently Played</h3>
            <div>
                {recent_tracks.map(track => <TrackItem key={track.id} trackData={track} />)}
            </div>
        </div>
     );
}
 
export default RecentlyPlayed;