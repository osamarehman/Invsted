import styles from "@/styles/IFrameContainer.module.css";

interface IIFrameContainer {
    IframeSrc: string,
    maxWidth?: "unset" | number | string
}

const IFrameContainer = ({ IframeSrc, maxWidth = 824 }: IIFrameContainer) => {
  return (
    <div className={styles.iframeSection}>
      <div className={styles.iframeContainer} style={{ maxWidth }}>
        <iframe
          src={IframeSrc}
          scrolling="no"
          title="Invsted Demo"
          allowFullScreen
          className={styles.iframe}
        ></iframe>
      </div>
    </div>
  );
};

export default IFrameContainer;
