import ModalContainer from "../Containers/ModalContainer";
import styles from "@/styles/Modal.module.css";
import FormInputField from "../form/FormInputField";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Button } from "react-bootstrap";

interface IModal {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setModalType: Dispatch<SetStateAction<string>>;
}

const UpdatePasswordModal = ({
  showModal,
  setShowModal,
  setModalType,
}: IModal) => {
  return (
    <ModalContainer
      show={showModal}
      handleClose={() => setShowModal(false)}
      modalTitle="Update Password"
      modalBody={
        <div className={styles.modalBody}>
          <FormInputField
            register={{
              name: "currentPassword",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            type="password"
            formContainerClass="mb-3"
            label="Current Password"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
          <FormInputField
            register={{
              name: "newPassword",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            formContainerClass="mb-3"
            type="password"
            infoMsgElement={
              <p className={styles.infoMsg}>
                Minimum 8-characters.
              </p>
            }
            label="New Password"
            placeholder="howard.thurman@gmail.com"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
        </div>
      }
      modalFooter={
        <div className={styles.marginRightAuto}>
            <Button onClick={() => setShowModal(false)} className={styles.formBtn}>Set Password</Button>
        </div>
      }
    />
  );
};

export default UpdatePasswordModal;
