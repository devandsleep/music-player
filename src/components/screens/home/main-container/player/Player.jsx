import { useState } from 'react';
import AudioPlayer from '../../../../ui/audioplayer/AudioPlayer';
import styles from './Player.module.scss'

const Player = () => {
    const [track, setTrack] = useState({
        id: 1,
        img: 'eminem.jpg',
        src: 'Eminem_-_Without_Me.mp3',
        title: 'Without Me',
        author: 'Eminem'
    })

    return (
        <div className={styles.player}>
            <AudioPlayer
                preview={'/src/assets/images/' + track.img}
                src={'/src/assets/music/' + track.src}
                title={track.title}
                author={track.author}
            />
        </div>
    );
}

export default Player;