import styles from '@/styles/header.module.css';
export default function Header() {
    return (
        <>
            <div className={styles.headering}>
                <img src='/images/header.png' className={styles.headers}></img>
                <button className={styles.buttons}><text>로그인</text></button>
            </div>
        </>
    )
}