import styles from '../styles/Home.module.css';
export default function Maintwo() {
    return (
        <>
            <div className={styles.maintwo}>
                <img src='images/phones.png' className={styles.imaging5}></img>
                <h1 className={styles.maintexts}>우리 동네 의류 렌탈 서비스</h1>
                <p className={styles.subtexts}>같은 동네에서 저렴하게 다양한 옷을 대여해보아요!!</p>
                <img src="images/home.png" className={styles.home}></img>
                <img src="images/chat.png" className={styles.chat}></img>
                <h1 className={styles.homes}>홈</h1>
                <p className={styles.minihomes}>동네 사용자들의 게시물을 볼 수 있어요</p>
                <h1 className={styles.chats}>채팅</h1>
                <p className={styles.minichats}>동네 사용자들과 소통할 수 있어요</p>
            </div>
        </>
    )
}