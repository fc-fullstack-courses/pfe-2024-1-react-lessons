import { useParams } from "react-router";

const ProfilePage = () => {
  const { profileName } = useParams();
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Profile name is {profileName}</p>
    </div>
  );
}

export default ProfilePage;
