import styles from "@/styles/Tabs.module.css"

const Tabs = ({ activeTab = "", tab = "", handleClick = (tab: string) => {} }) => {
  return (
    <div className={`${styles.tabs} ${activeTab === tab ? `${styles.activeTab}` : ""}`} onClick={() => handleClick(tab)}>
      <p className={styles.tabContent}>{tab}</p>
    </div>
  );
};

export default Tabs;
