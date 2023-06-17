import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import LinkedInIcon from "@/assets/images/linkedin-icon-blue.svg";
import Image from "next/image";

interface ILinkedInSignInButton {
    className?: string
}

export default function LinkedInSignInButton({className}: ILinkedInSignInButton) {
  const router = useRouter();

  return (
    <Button
      href={
        process.env.NEXT_PUBLIC_BACKEND_URL +
        "/users/login/google?returnTo=" +
        router.asPath
      }
      variant="light"
      className={`d-flex align-items-center justify-content-center gap-1 ${className}`}
    >
      <Image src={LinkedInIcon} alt="linkedin-icon" />
      &nbsp;&nbsp;Sign in with LinkedIn
    </Button>
  );
}
