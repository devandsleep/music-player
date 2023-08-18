import styles from './Buttons.module.scss'

const PauseButton = ({ ...props }) => {
    return (
        <button {...props}>
            <img src="/src/assets/icons/pause.svg" alt="" />
        </button>
    );
}

export default PauseButton