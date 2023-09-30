import React from "react";
import { useSelector } from "react-redux";
import { ProfilePageContainer } from "../styles/ProfilePageStyles"; // Import the updated style

function ProfilePage() {
  const { user, loading } = useSelector((state) => state.user);
  console.log(user)

  return (
    <ProfilePageContainer>
      <div name="profile-page">
        <h1>{user.username}</h1>
      </div>
    </ProfilePageContainer>
  );
}

export default ProfilePage;