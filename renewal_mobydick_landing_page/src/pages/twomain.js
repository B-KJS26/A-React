import styles from '@/styles/Two.module.css'
export default function Twomain() {
    return (
        <>
            <div className={styles.twomains}>
                <div className={styles.firsting}>
                    <div className={styles.texting}>
                        <h1 className={styles.text}>저렴하게 다양한 옷을 입어보고 싶나요?</h1>
                        <p className={styles.texts}>각종 유행하는 옷들을 입고 싶지만 부담되는 금액에 포기하게 돼요 그마저들도 몇 번 입지 못하고 옷장에...</p>
                    </div>
                    <div className={styles.textingbox}></div>
                </div>
                <div className={styles.seconding}>
                    <div className={styles.firstext}>
                        <h1 className={styles.firsthone}>주위 사용자들의 게시물을 보고 채팅할 수 있어요!</h1>
                        <p className={styles.firstpone}>근처 5km 이내 사용자들의 게시물을 보고 쨈을 하고,  채팅을 통해 거래할 수 있어요.</p>
                    </div>
                    <div className={styles.firstimage}></div>
                    <div className={styles.secondimage}></div>
                    <div className={styles.secondtext}>
                        <h1 className={styles.secondhone}>후기를 통해 꼬막을 받을 수 있어요!</h1>
                        <p className={styles.secondpone}>후기 작성을 하거나 상대방이 거래에 만족했을 경우 꼬막을 통해 거래할 수 있어요.</p>
                    </div>
                </div>
            </div>
        </>
    )
}