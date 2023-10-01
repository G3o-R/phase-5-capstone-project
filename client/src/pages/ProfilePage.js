import React from "react";
import { useSelector } from "react-redux";
import {
  ProfilePageContainer,
  PostRow,
  Post,
  PostsContainer,
  PostLink,
  ProfileHeader,
  ProfileInfo,
  EditProfileButton
} from "../styles/ProfilePageStyles";

import ProfileIcon from "../component/ProfileIcon";
import ProfileImage from "../images/ProfileImage.jpg"

function ProfilePage() {
  const { user } = useSelector((state) => state.user);

  const displayUserPosts = user.user_posts.map((post, index) => (
    <Post key={post.id}>
      <PostLink to={`/p/${post.id}`}>
        <img src={post.image} alt="content" />
      </PostLink>
    </Post>
  ));

  const numEmptyDivs = 3 - (displayUserPosts.length % 3);

  const emptyDivs = Array(numEmptyDivs)
    .fill(null)
    .map((_, index) => <Post key={`empty-${index}`} />);

  const postsWithEmptyDivs = displayUserPosts.concat(emptyDivs);

  const rows = [];
  for (let i = 0; i < postsWithEmptyDivs.length; i += 3) {
    const row = postsWithEmptyDivs.slice(i, i + 3);
    rows.push(row);
  }

  const renderedRows = rows.map((row, index) => (
    <PostRow key={index}>{row}</PostRow>
  ));

  return (
    <ProfilePageContainer>
      <ProfileHeader>
        <ProfileIcon size={"big"} profilePicture={ProfileImage}/>
        <ProfileInfo>
          <h1>{user.username}</h1>
          <EditProfileButton>Edit profile</EditProfileButton>
        </ProfileInfo>
      </ProfileHeader>
      <PostsContainer>{renderedRows}</PostsContainer>
    </ProfilePageContainer>
  );
}

export default ProfilePage;
