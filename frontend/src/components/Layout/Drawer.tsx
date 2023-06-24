import styles from "@/styles/Drawer.module.css";
import Link from "next/link";
import StudentImage from "@/assets/images/Jezz.png";
import { FaHome } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import DashBoardIcon from "@/assets/images/dashboardIcon.svg";
import HamBurgerIcon from "@/assets/images/hamburger.svg";
import Image from "next/image";
import { useState } from "react";

interface IDrawer {
  setScreen: (screen: string) => void,
  setDrawerOpenStyle: (drawerOpen: boolean) => void,
}

const Drawer = ({ setScreen, setDrawerOpenStyle }: IDrawer) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const handleDrawerToggle = () => {
    setIsDrawerOpen((prev) => {
      let newValue = !prev;
      setDrawerOpenStyle(newValue);
      return newValue;
    });
  }
  return (
    <div
      className={`${styles.drawerContainer} ${
        isDrawerOpen ? `${styles.drawerOpen}` : ""
      }`}
    >
      <div className={styles.navHeader}>
        <div className={styles.navbar}>
          {isDrawerOpen && <span className={styles.headerTitle}>{"Dashboard"}</span>}
          <span className={styles.headerMobile}>{"Dashboard"}</span>
          <Image
            onClick={handleDrawerToggle}
            className={`${styles.icon} ${styles.hamburgerIcon} ${
              isDrawerOpen ? `${styles.iconOpen}` : ""
            }`}
            src={HamBurgerIcon}
            alt="hamburger icon"
          />
        </div>
        <div className={styles.separator}></div>
      </div>
      <div
        className={`${styles.navLinks} ${
          isDrawerOpen ? `${styles.navLinksOpen}` : ""
        }`}
      >
        <Link className={styles.link} href={"/students"}>
          <FaHome size={24} color={"#808082"} />
          {isDrawerOpen ? " Home" : ""}
        </Link>
        <p className={styles.link} onClick={() => setScreen("profile")}>
          <Image
            className={styles.icon}
            src={DashBoardIcon}
            alt="dashboard icon"
          />
          {isDrawerOpen ? " Dashboard" : ""}
        </p>
        <p className={styles.link} onClick={() => setScreen("settings")}>
          <FcSettings size={24} color={"#808082"} />
          {isDrawerOpen ? " Settings" : ""}
        </p>
      </div>
      <div className={styles.navFooter}>
        <div className={styles.navbar}>
          {isDrawerOpen && <span className={styles.name}>{"Jezz"}</span>}
          <Image
            className={`${styles.icon} ${styles.profileImg} ${
              isDrawerOpen ? `${styles.iconOpen}` : ""
            }`}
            src={StudentImage}
            alt="profile image"
          />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
