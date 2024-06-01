import React from 'react';
import styles from './Info.module.css'

 const Info = ({text,visible}) => {
    return (
        <span className={styles.info + " " + (visible && styles.visible)}>
            {text}
        </span>
    )
}

export default Info;


