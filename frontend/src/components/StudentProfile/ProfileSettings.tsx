import styles from "@/styles/ProfileSetting.module.css";
import { Button, Container } from "react-bootstrap";
import Tabs from "@/components/Tabs/Tabs";
import { useState } from "react";
import LogoutIcon from "@/assets/images/logoutIcon.svg";
import Image from "next/image";
import ProfileForm from "@/components/StudentProfile/ProfileForm";
import PreferenceForm from "@/components/StudentProfile/PreferenceForm";
import BankForm from "@/components/StudentProfile/BankForm";

interface IRenderTab {
  [key: string]: JSX.Element;
}

const RenderTab = ({ tab = "" }) => {
  const tabs: IRenderTab = {
    Profile: <ProfileForm />,
    Preferences: <PreferenceForm />,
    "Bank Info": <BankForm />,
  };
  return tabs[tab];
};

const ProfileSettings = ({ profileStyles = "" }) => {
  const [tabs, setTabs] = useState("Profile");

  return (
    <section
      id="profile-setting"
      className={`${styles.settingSection} ${profileStyles}`}
    >
      <Container className={styles.settingContainer}>
        <div className={styles.settingsHeader}>
          <h1 className={styles.settingsTitle}>Profile Settings</h1>
        </div>
        <div className={styles.settingsContent}>
          <div className={styles.tabsHeader}>
            {["Profile", "Preferences", "Bank Info"].map((tab) => (
              <Tabs
                key={tab}
                tab={tab}
                activeTab={tabs}
                handleClick={setTabs}
              />
            ))}
            <Button className={styles.logOutBtn}>
              <Image
                className={styles.logOutIcon}
                src={LogoutIcon}
                alt="logout icon"
              />
              <span>Log out</span>
            </Button>
          </div>
          <div className={styles.tabsContent}>
            <RenderTab tab={tabs} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProfileSettings;
