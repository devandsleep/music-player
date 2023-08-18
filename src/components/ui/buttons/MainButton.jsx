import styles from './Buttons.module.scss'

const MainButton = ({ children, ...props }) => {
    return (
        <button {...props} className={styles.main_button}>
            {children}
        </button>
    );
}

export default MainButton;