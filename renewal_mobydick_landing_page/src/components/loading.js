import styles from '@/styles/globals.module.css';
export default function Loading() {
    return (
        <body className={styles.body}>
            <div className={styles.jebal}>
                <img src='/images/log.png' className={styles.loging}></img>
                <div className={styles.globalLoader}>
                    <div className={styles.loader}>
                        <div />
                    </div>
                </div>
            </div>
            <Main />
            <NextScript />
        </body>
    );
}