import React from "react";
import styles from '../loading/loading.module.css'


function Loading () {
    return(
        <div className={styles.container}>
            <div className={styles.loaderWrapper}>
                <div className={styles.loader}>
                    <div className={`${styles.loader} ${styles.loaderInner}`}></div>
                </div>
            </div>
        </div>
        
    )
}

export {Loading};