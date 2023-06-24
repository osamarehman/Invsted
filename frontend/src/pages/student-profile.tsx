import Drawer from "@/components/Layout/Drawer";
import Footer from "@/components/Layout/Footer";
import Profile from "@/components/StudentProfile/StudentProfile";
import { useState } from "react";
import styles from "@/styles/StudentProfile.module.css";

export default function StudentProfile () {

    const [screen, setScreen] = useState("profile")
    return (
        <div>
            <div className={styles.profileContainer}>
                <Drawer setScreen={setScreen} />
                { screen === "profile" ? <Profile profileStyles={styles.customProfileStyle} /> : <></> }
            </div>
            <Footer footerStyle={styles.customFooterStyle} />
        </div>
    )
}