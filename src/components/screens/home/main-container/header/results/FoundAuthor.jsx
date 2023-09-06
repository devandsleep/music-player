import React from 'react'
import styles from './FoundAuthor.module.scss'

const FoundAuthor = ({ author }) => {
    return (
        <div className={styles.author_item}>
            <div className={styles.img_container}>
                <img src={"http://localhost:3001/images/" + author.avatar} alt="" />
            </div>
            <div className={styles.name}>
                {author.username}
            </div>
        </div>
    );
}

export default FoundAuthor;