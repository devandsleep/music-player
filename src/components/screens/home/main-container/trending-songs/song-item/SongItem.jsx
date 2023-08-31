import { useState } from 'react';
import styles from './SongItem.module.scss'
import { useEffect } from 'react';
import MusicService from '../../../../../../API/MusicService';

const SongItem = ({ song }) => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        async function getAuthors() {
            const release = await MusicService.getRelease(song.release);
            const newAuthors = release.tracks.reduce((accumulator, element) => {
                return [...accumulator, ...element.authors];
            }, []);
            setAuthors(newAuthors);
        }
        getAuthors();
    }, [song.release]);

    return (
        <div className={styles.song}>
            <img src={'http://localhost:3001/images/' + song.preview} alt="" />
            <div className={styles.info}>
                <div className={styles.title}>{song.title}</div>
                <div className='small_text'>
                    {authors.map(author => (
                        <span key={author.author_id}>{author.name}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SongItem;
