import styles from './Buttons.module.scss'

const PlusButton = ({ ...props }) => {
    return (
        <button {...props}>
            <img src="/src/assets/icons/plus.svg" alt="" />
        </button>
    );
}

export default PlusButton