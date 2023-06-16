import Link from "next/link";
import styles from "@/styles/NotificationBar.module.css";
import { ReactNode } from "react";

interface INotificationBar {
    text: ReactNode,
    linkText: string
}

const NotificationBar = ({ text, linkText }:INotificationBar) => {

    return (
        <div className={styles.notificationBarContainer}>
            {linkText 
                ? <Link href={"/"} className={styles.link}>{linkText}</Link>
                : <></>
            }
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default NotificationBar;
