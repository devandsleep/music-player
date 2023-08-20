import styles from './Buttons.module.scss'

const CollectionsButton = ({ ...props }) => {
    return (
        <button {...props}>
            <img src="/src/assets/icons/collections.svg" alt="" />
        </button>
    );
}

export default CollectionsButton