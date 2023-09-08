import React from 'react'
import styles from './Inputs.module.scss'

const MainInput = React.forwardRef((props, options) => {
    return ( 
        <input className={styles.main_input} {...props}/>
     );
})
 
export default MainInput;