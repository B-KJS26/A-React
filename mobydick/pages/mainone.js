import styles from '../styles/Home.module.css'
export default function Mainone() {
    return (
        <>
            <div className={styles.mainone}>
                <h1 className={styles.maintext}>특별한 날 입을 옷이 필요할 땐 꼬꼬막!</h1>
                <p className={styles.subtext}>동네친구들의 옷을 구경하고 <span className={styles.spans}>대여/교환할 수 있는</span> 의류 대여 어플 입니다.</p>
                <img src='images/phone.png' className={styles.imaging2}></img>
                <img src='images/apple.png' className={styles.imaging3}></img>
                <img src='images/google.png' className={styles.imaging4}></img>
            </div>
        </>
    )
}