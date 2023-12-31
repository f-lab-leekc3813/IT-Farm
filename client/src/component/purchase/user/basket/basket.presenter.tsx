import styles from './basket.module.css'
import Link from 'next/link'
import { IUserBasketPageUIProps } from './basket.types'

export default function UserBasketPageUI(props: IUserBasketPageUIProps): JSX.Element {
    return (
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
                    {props.data?.map((data, index) => {
                        return (
                            <div key={index} className={styles.contentBox}>
                                <div className={styles.listInfo}>{data.product_name}</div>
                                <div className={styles.listInfo}>{data.count} kg</div>
                                <div className={styles.selectBox}>
                                    <Link className={styles.link} href={`/purchase/list/${data.product_name}/order`}>
                                        <span className={`${styles.select} ${styles.blueColor}`}>
                                            구매
                                        </span>
                                    </Link>
                                    <span onClick={() => props.onClickCancle(data.cart_id)} className={`${styles.select} ${styles.redColor}`}>
                                        취소
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}