import React, { useContext, useEffect, useState } from 'react'
import styles from './FoundTrack.module.scss'
import MusicService from '../../../../../../API/MusicService';
import { MusicContext } from '../../../../../../context';

const FoundTrack = ({ track }) => {
    const [authors, setAuthors] = useState([])
    const {changeTrack} = useContext(MusicContext)

    useEffect(() => {
        async function getAuthors() {
            if (track.release) {
                try {
                    const release = await MusicService.getRelease(track.release);
                    const newAuthors = release.tracks.reduce((accumulator, element) => {
                        return [...accumulator, ...element.authors];
                    }, []);
                    setAuthors(newAuthors);
                } catch (error) {
                    console.error('Error on fetching release', error);
                }
            }
        }
        getAuthors();
    }, [track.release]);

    return (
        <div className={styles.track_item} onClick={() => changeTrack(track)}>
            <div className={styles.img_container}>
                <img src={"http://localhost:3001/images/" + track.preview} alt="" />
            </div>
            <div className={styles.info}>
                <div className={styles.title}>{track.title}</div>
                <div className={styles.authors_list}>{authors.map(author => (
                    <span key={author.author_id}>{author.name}</span>
                ))}</div>
            </div>
        </div>
    );
}

export default FoundTrack;