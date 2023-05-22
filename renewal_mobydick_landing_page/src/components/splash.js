import React from 'react';
import styles from '@/styles/global.module.css'
export default function Splashing() {
    return (
        <>
            <div className={styles.jebal}>
                <img src='/images/log.png' className={styles.loging}></img>
                <div className={styles.globalLoader}>
                    <div className={styles.loader}>
                    </div>
                </div>
            </div>
        </>
    )
}