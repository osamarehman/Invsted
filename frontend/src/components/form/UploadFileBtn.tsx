import Image from "next/image";
import FileIcon from "@/assets/images/file-icon.png";
import styles from "@/styles/UploadFileBtn.module.css";
import { Button } from "react-bootstrap";

interface IUploadFileBtn {
  onClick: () => void;
  file?: string;
}

const UploadFileBtn = ({ onClick, file }: IUploadFileBtn) => {
  return (
    <div className={styles.uploadContainer}>
      <Image
        className={styles.uploadIcon}
        src={FileIcon}
        width={25}
        alt="Upload file icon"
      />
      {file ? (
        <p className={styles.fileName}>{file}</p>
      ) : (
        <Button onClick={onClick} className={styles.uploadBtn}>
          Choose a file
        </Button>
      )}
    </div>
  );
};

export default UploadFileBtn;
