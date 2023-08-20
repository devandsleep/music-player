import styles from './Buttons.module.scss'

const PlayButton = ({ ...props }) => {
    return (
        <button {...props} className={styles.play_btn}>
            <img src="/src/assets/icons/play.svg" alt="" />
        </button>
    );
}

export default PlayButton