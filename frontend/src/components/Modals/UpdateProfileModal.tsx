
import ModalContainer from "../Containers/ModalContainer";
import styles from "@/styles/Modal.module.css";
import { Dispatch, SetStateAction } from "react";
import { Button } from "react-bootstrap";

interface IModal {
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>,
    setModalType: Dispatch<SetStateAction<string>>,
}

const UpdateProfileModal = ({ showModal, setShowModal, setModalType }: IModal) => {

  return (
    <ModalContainer
      show={showModal}
      handleClose={() => setShowModal(false)}
      modalTitle="Update Profile"
      modalBody={
        <div className={styles.modalBody}>
          <p className={styles.msg}>Are you sure you&#39;re profile will be deactivated?</p>
        </div>
      }
      modalFooter={
        <div className={styles.marginRightAuto}>
            <Button onClick={() => setShowModal(false)} className={styles.formBtn}>Confirm</Button>
            <Button onClick={() => setShowModal(false)} className={styles.formBtn}>Cancel</Button>
        </div>
      }
    />
  );
};

export default UpdateProfileModal;
