import { ReactNode } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "@/styles/ModalContainer.module.css";
import { IoIosClose } from "react-icons/io"

interface IModalContainer {
  show: boolean;
  handleClose: () => void;
  modalTitle?: string;
  modalBody?: ReactNode;
  modalFooter?: ReactNode;
}

const ModalContainer = ({
  show,
  handleClose,
  modalTitle,
  modalBody,
  modalFooter,
}: IModalContainer) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop={true}
      keyboard={false}
      className={styles.modalContainer}
    >
      <Modal.Header className={styles.modalHeader}>
        {modalTitle && (
          <Modal.Title className={styles.modalTitle}>{modalTitle}</Modal.Title>
        )}
        <Button onClick={handleClose} className={styles.closeBtn}><IoIosClose size={40} /></Button>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>{modalBody}</Modal.Body>
      <Modal.Footer className={styles.modalFooter}>{modalFooter}</Modal.Footer>
    </Modal>
  );
};

export default ModalContainer;
