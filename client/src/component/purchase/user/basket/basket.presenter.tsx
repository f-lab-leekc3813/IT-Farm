import styles from './basket.module.css'

export default function UserBasketPageUI():JSX.Element{
    return(
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    장바구니
                </div>
                <div className={styles.listContainer}>
                    <div className={styles.listInfoBox}>
                        <div className={styles.listInfo}>상품명</div>
                        <div className={styles.listInfo}>수량</div>
                        <div className={styles.listInfo}>비고</div>
                    </div>
                    <div className={styles.contentBox}>
                        <div className={styles.listInfo}>유기농 청고추</div>
                        <div className={styles.listInfo}>8근</div>
                        <div className={styles.selectBox}>
                            <span className={styles.selct}>
                                구매하기
                            </span>
                            <span className={styles.selct}>
                                취소하기
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}