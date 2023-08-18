import styles from './Buttons.module.scss'

const PlayButton = ({ ...props }) => {
    return (
        <button {...props}>
            <img src="/src/assets/icons/play.svg" alt="" />
        </button>
    );
}

export default PlayButton