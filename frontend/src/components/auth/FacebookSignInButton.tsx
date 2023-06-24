import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";

interface IFacebookSignInButton {
  className?: string;
}

export default function FacebookSignInButton({ className }: IFacebookSignInButton) {
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
      <BsFacebook color="#4267b2" size={20} />
      &nbsp;&nbsp;Sign in with Google
    </Button>
  );
}
