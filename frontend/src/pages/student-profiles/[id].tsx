import StudentProfileNavbar from "@/components/Layout/StudentProfileNavbar";
import NotificationBar from "@/components/Sections/NotificationBar";
import Profile from "@/components/StudentProfile/StudentProfile";

export default function StudentProfile() {
  return (
    <div>
      <NotificationBar
        text={
          <>
            Not sure who to donate to?{" "}
            <strong>Donate to our Equity Fund</strong>
          </>
        }
        linkText="Learn More"
      />
      <StudentProfileNavbar />
      <Profile />
    </div>
  );
}
