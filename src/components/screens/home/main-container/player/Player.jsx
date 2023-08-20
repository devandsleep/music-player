import { useContext, useState } from 'react';
import AudioPlayer from '../../../../ui/audioplayer/AudioPlayer';
import styles from './Player.module.scss'
import { PlayListsContext } from '../../../../../context';

const Player = () => {
    const {tracks} = useContext(PlayListsContext)

    return (
        <div className={styles.player}>
            <AudioPlayer
                preview={'/src/assets/images/' + tracks[0].img}
                src={'/src/assets/music/' + tracks[0].src}
                title={tracks[0].title}
                author={tracks[0].author}
            />
        </div>
    );
}

export default Player;