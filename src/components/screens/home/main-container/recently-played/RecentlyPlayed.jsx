import { useContext } from 'react';
import styles from './RecentlyPlayed.module.scss'
import TrackItem from './track-item/TrackItem';
import { PlayListsContext } from '../../../../../context';

const RecentlyPlayed = () => {

    const {recent_tracks} = useContext(PlayListsContext)

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