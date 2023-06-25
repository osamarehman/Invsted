import ModalContainer from "../Containers/ModalContainer";
import styles from "@/styles/Modal.module.css";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import FormInputField from "../form/FormInputField";
import { Button } from "react-bootstrap";

interface IModal {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setModalType: Dispatch<SetStateAction<string>>;
}

const ChangeEmailModal = ({
  showModal,
  setShowModal,
  setModalType,
}: IModal) => {
  return (
    <ModalContainer
      show={showModal}
      handleClose={() => setShowModal(false)}
      modalTitle="Change your email"
      modalBody={
        <div className={styles.modalBody}>
          <FormInputField
            register={{
              name: "email",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            type="email"
            infoMsgElement={
                <p className={styles.infoMsg}>Any social login connections will be removed.</p>
              }
            label="Email Address"
            placeholder="howard.thurman@gmail.com"
            labelClass={styles.formLabel}
            className={styles.formInput}
          />
        </div>
      }
      modalFooter={
        <div className={styles.marginRightAuto}>
            <Button onClick={() => setShowModal(false)} className={styles.formBtn}>Confirm Email</Button>
        </div>
      }
    />
  );
};

export default ChangeEmailModal;
