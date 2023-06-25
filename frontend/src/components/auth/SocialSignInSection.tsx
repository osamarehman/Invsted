import GitHubSignInButton from "@/components/auth/GitHubSignInButton";
import GoogleSignInButton from "@/components/auth/GoogleSignInButton";

export default function SocialSignInSection() {
    return (
        <div className="d-flex flex-column gap-2">
            <GoogleSignInButton />
            <GitHubSignInButton />
        </div>
    );
}