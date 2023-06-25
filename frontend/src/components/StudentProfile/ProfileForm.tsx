import styles from "@/styles/ProfileSetting.module.css";
import FormHeader from "@/components/StudentProfile/FormHeader";
import FormRow from "@/components/StudentProfile/FormRow";
import FormInputField from "@/components/form/FormInputField";
import { Button } from "react-bootstrap";
import GoogleSignInButton from "@/components/auth/GoogleSignInButton";
import LinkedInSignInButton from "@/components/auth/LinkedinSignInButton";
import FacebookSignInButton from "@/components/auth/FacebookSignInButton";
import PasswordIcon from "@/assets/images/PasswordIcon.svg";
import AvatarIcon from "@/assets/images/AvatarIcon.svg";
import Image from "next/image";
import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import ChangeEmailModal from "@/components/Modals/ChangeEmailModal";
import UpdatePasswordModal from "@/components/Modals/UpdatePasswordModal";
import UpdateProfileModal from "@/components/Modals/UpdateProfileModal";

interface IRenderModal {
  [key: string]: JSX.Element;
}

interface IModal {
  type: string
  showModal: boolean,
  setShowModal: Dispatch<SetStateAction<boolean>>,
  setModalType: Dispatch<SetStateAction<string>>,
}

const RenderModal = ({ type, showModal, setShowModal, setModalType}:IModal) => {
  const modalType: IRenderModal = {
    email: <ChangeEmailModal showModal={showModal} setShowModal={setShowModal} setModalType={setModalType} />,
    password: <UpdatePasswordModal showModal={showModal} setShowModal={setShowModal} setModalType={setModalType} />,
    profile: <UpdateProfileModal showModal={showModal} setShowModal={setShowModal} setModalType={setModalType} />,
  };

  return modalType[type];
};

const ProfileForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  const handleModalOpen = (type:string) => {
    setModalType(type);
    setShowModal(true);
  }

  return (
    <div>
      <FormHeader
        title="Profile information"
        description="Please make sure your information is up to date."
        // onClick={() => {}}
        btnBackground={styles.bgGreen}
      />
      <FormRow label="Your Name">
        <div className={styles.rowContent}>
          <FormInputField
            register={{
              name: "FirstName",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            formContainerClass={styles.formContainerClass}
            placeholder="First Name"
            className={`${styles.formInput} ${styles.customBorders1}`}
          />
          <FormInputField
            register={{
              name: "Last Name",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            formContainerClass={styles.formContainerClass}
            placeholder="Last Name"
            className={`${styles.formInput} ${styles.customBorders2}`}
          />
        </div>
      </FormRow>
      <FormRow
        label={
          <>
            Phone <br />
            <span>We&#39;ll only call you in an emergency</span>
          </>
        }
      >
        <FormInputField
          register={{
            name: "phone",
            required: true,
            onChange: async (e) => console.log(e.target.value),
            onBlur: async (e) => console.log(e.target.value),
            ref: () => {},
          }}
          formContainerClass={styles.formContainerClass}
          placeholder="e.g. 333-333-4444"
          className={`${styles.formInput}`}
        />
      </FormRow>
      <FormRow label="Address">
        <div className={`${styles.rowContent} flex-column`}>
          <FormInputField
            register={{
              name: "address",
              required: true,
              onChange: async (e) => console.log(e.target.value),
              onBlur: async (e) => console.log(e.target.value),
              ref: () => {},
            }}
            formContainerClass={styles.formContainerClass}
            placeholder="Street Address"
            className={`${styles.formInput}`}
          />
          <div className={`d-flex mt-3 ${styles.flexDirectionColumn}`}>
            <FormInputField
              register={{
                name: "city",
                required: true,
                onChange: async (e) => console.log(e.target.value),
                onBlur: async (e) => console.log(e.target.value),
                ref: () => {},
              }}
              formContainerClass={styles.formContainerClass}
              placeholder="City"
              className={`${styles.formInput}  ${styles.customBorders1}`}
            />
            <FormInputField
              register={{
                name: "state",
                required: true,
                onChange: async (e) => console.log(e.target.value),
                onBlur: async (e) => console.log(e.target.value),
                ref: () => {},
              }}
              formContainerClass={styles.formContainerClass}
              placeholder="State"
              className={`${styles.formInput}  ${styles.customBorders3}`}
            />
            <FormInputField
              register={{
                name: "zip",
                required: true,
                onChange: async (e) => console.log(e.target.value),
                onBlur: async (e) => console.log(e.target.value),
                ref: () => {},
              }}
              formContainerClass={styles.formContainerClass}
              placeholder="ZIP"
              className={`${styles.formInput}  ${styles.customBorders2}`}
            />
          </div>
        </div>
      </FormRow>
      <FormRow label="Email">
        <div className={styles.changeEmailContainer}>
          <p className={styles.email}>howard.thurman@gmail.com</p>
          <Button className={styles.emailBtn} onClick={() => handleModalOpen("email")}>@ Change Email Address</Button>
        </div>
      </FormRow>
      <FormRow label="Social Accounts">
        <div className={`${styles.rowContent} flex-column`}>
          <GoogleSignInButton className={styles.socialBtns} />
          <FacebookSignInButton className={styles.socialBtns} />
          <LinkedInSignInButton className={styles.socialBtns} />
        </div>
      </FormRow>
      <FormRow label="Password">
        <div className={styles.changeEmailContainer}>
          <p className={styles.email}>*********</p>
          <Button className={styles.emailBtn}  onClick={() => handleModalOpen("password")}>
            <Image src={PasswordIcon} width={18} alt="password icon" /> Update
            Password
          </Button>
        </div>
      </FormRow>
      <FormRow label="Profile Visibility">
        <div className={styles.changeEmailContainer}>
          <p className={styles.email}>Active</p>
          <Button className={styles.emailBtn}  onClick={() => handleModalOpen("profile")}>
            <Image src={AvatarIcon} alt="avatar icon" /> Update Profile
          </Button>
        </div>
      </FormRow>
      {mounted &&
        ref?.current &&
        createPortal(
          <RenderModal
            type={modalType}
            showModal={showModal}
            setShowModal={setShowModal}
            setModalType={setModalType}
          />,
          ref.current
        )}
    </div>
  );
};

export default ProfileForm;
