import Drawer from "@/components/Layout/Drawer";
import Footer from "@/components/Layout/Footer";
import Profile from "@/components/StudentProfile/StudentProfile";
import { useState } from "react";
import styles from "@/styles/StudentProfile.module.css";
import ProfileSettings from "@/components/StudentProfile/ProfileSettings";

export default function StudentProfile() {
  const [screen, setScreen] = useState("profie");
  const [drawerOpenStyle, setDrawerOpenStyle] = useState(false);
  return (
    <div>
      <div className={styles.profileContainer}>
        <Drawer setScreen={setScreen} setDrawerOpenStyle={setDrawerOpenStyle} />
        {screen === "profile" ? (
          <Profile
            profileStyles={`${styles.customProfileStyle} ${
              drawerOpenStyle ? `${styles.drawerOpen}` : ""
            }`}
          />
        ) : (
          <ProfileSettings
            profileStyles={`${styles.customProfileStyle} ${
              drawerOpenStyle ? `${styles.drawerOpen}` : ""
            }`}
          />
        )}
      </div>
      <Footer
        footerStyle={`${styles.customFooterStyle}  ${
          drawerOpenStyle ? `${styles.drawerOpen}` : ""
        }`}
      />
    </div>
  );
}
