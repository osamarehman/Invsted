import { Button } from "react-bootstrap"
import styles from "@/styles/StudentQualification.module.css";

interface ICartBtnList {
    title: string,
    amount: number,
}

const CartBtnList = ({ title, amount }: ICartBtnList) => {
    return (
        <div className={styles.cartItem}>
            <p>{title}</p>
            <p>{`$ ${amount} USD`}</p>
            <Button className={styles.itemBtn}>Add to Cart</Button>
        </div>
    )
}

export default CartBtnList;
