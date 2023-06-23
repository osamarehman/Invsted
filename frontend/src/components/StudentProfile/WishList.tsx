import styles from "@/styles/StudentQualification.module.css";
import CartBtnList from "./CartBtnList";

const WishList = () => {
  return (
    <>
      <h1 className={`${styles.name} ${styles.wishListTitle}`}>Wish List</h1>
      <p className={styles.wishListText}>
        <strong>You can make a donation using one of the buttons below.</strong>
        <br />
        You are signing up for a subscription donation, which you can cancel at
        any time.
      </p>
      <div>
        <CartBtnList title="Coffee/Tea" amount={5.50} />
        <CartBtnList title="Lunch" amount={11} />
        <CartBtnList title="1 Hour Work" amount={16.50} />
        <CartBtnList title="Dinner" amount={22} />
        <CartBtnList title="Gym" amount={33} />
        <CartBtnList title="Shoes" amount={55} />
        <CartBtnList title="Clothes" amount={82.50} />
        <CartBtnList title="Books" amount={110} />
        <CartBtnList title="Technology" amount={220} />
        <CartBtnList title="Tuition Help" amount={550} />
      </div>
    </>
  );
};

export default WishList;
