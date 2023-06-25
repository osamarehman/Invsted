
import ModalContainer from "../Containers/ModalContainer";
import styles from "@/styles/Modal.module.css";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IFileUploadModal {
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>,
    setFile: Dispatch<SetStateAction<string>>
}

const FileUploadModal = ({ showModal, setShowModal, setFile }: IFileUploadModal) => {

    const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
        setShowModal(false);
    
        const input = event.target as HTMLInputElement;
        if (!input.files?.length) {
          return;
        }
        const file = input.files[0];
        setFile(file?.name)
      };
  return (
    <ModalContainer
      show={showModal}
      handleClose={() => setShowModal(false)}
      modalBody={
        <div>
          <h1 className={styles.fileUploadTitle}>
            drag & drop <br />
            any files
          </h1>
          <p className={styles.fileUploadText}>or</p>
          <label htmlFor="file-upload-btn" className={styles.fileUploadBtn}>
            Choose a local file
          </label>
          <input
            onChange={handleFileInput}
            type={"file"}
            id="file-upload-btn"
            className={styles.fileTypeInput}
          />
        </div>
      }
    />
  );
};

export default FileUploadModal;
