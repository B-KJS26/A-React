
import styles from '@/styles/One.module.scss'

export default function Onemain() {
    return (
        <>
            <div className={styles.onemain}>
                <h1 className={styles.dp1}><span className={styles.blueing}>꼬꼬막</span>은 누구에게 필요한가요?</h1>
                <span className={styles.testing5}>
                    <div className={styles.testing1}>
                        <div className={styles.testone}></div>
                        <div className={styles.h1}><text className={styles.wos}>유행에 민감한</text> 조수현씨</div>
                        <div className={styles.pone}>
                            <p>10대 여학생은 친구들 사이에 유행하는 각종 아이템을 입어보고 싶지만 빠듯한 돈 때문에 고민입니다.</p>
                        </div>
                    </div>
                </span>
                <div className={styles.testing2}>
                    <div className={styles.testtwo}></div>
                    <div className={styles.h2}><text className={styles.wos}>어린 자식을 둔</text> 강미래씨</div>
                    <div className={styles.pone}>
                        <p>젊은 엄마인 강미래씨는 금방 크는 아이들탓에 몇번 입지 않고 버려지는 옷 때문에 고민이 큽니다.</p>
                    </div>
                </div>
                <div className={styles.testing3}>
                    <div className={styles.testthree}></div>
                    <div className={styles.h3}><text className={styles.wos}>첫 데이트를 앞두고 있는</text> 정종진씨</div>
                    <div className={styles.pones}>
                        <p>종진씨는 아직 자신의 스타일을 못 찾아 고민입니다. 옷을 사기엔 새로운 스타일에 대한 부담이 큽니다.</p>
                    </div>
                </div>
            </div>
        </>
    )
}