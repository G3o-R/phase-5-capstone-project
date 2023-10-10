import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  ProfilePageContainer,
  PostRow,
  Post,
  PostsContainer,
  ImageContainer,
  ProfileHeader,
  ProfileInfo,
  EditProfileButton,
  SmallText,
  InlineFlex,
  BioText,
  BioSection,
} from "../styles/ProfilePageStyles";

import ProfileIcon from "../component/ProfileIcon";
import ProfileImage from "../images/ProfileImage.jpg";
import PostDisplay from "../component/PostDisplay";

function ProfilePage() {
  const { user } = useSelector((state) => state.user);
  const [showPostDisplay, setShowPostDisplay] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const displayUserPosts = user.user_posts.map((post) => (
    <Post key={post.id} onClick={() => handlePostClick(post)}>
      <ImageContainer>
        <img src={post.image} alt="content" />
      </ImageContainer>
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

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setShowPostDisplay(true);
  };

  return (
    <>
      <ProfilePageContainer>
        <ProfileHeader>
          <ProfileIcon size={"big"} profilePicture={ProfileImage} />
          <ProfileInfo>
            <InlineFlex className="buttons-sections">
              <h1>{user.username}</h1>
              <EditProfileButton>Edit profile</EditProfileButton>
            </InlineFlex>
            <InlineFlex className="user-info-section">
              <SmallText>## posts</SmallText>
              <SmallText>## followers</SmallText>
              <SmallText>## following</SmallText>
            </InlineFlex>
            <BioSection>
              <SmallText>{user.username}</SmallText>
              <BioText>{user.biography}</BioText>
            </BioSection>
          </ProfileInfo>
        </ProfileHeader>
        <PostsContainer>{renderedRows}</PostsContainer>
      </ProfilePageContainer>
      {showPostDisplay && selectedPost ? (
        <PostDisplay
          onClose={() => setShowPostDisplay(false)}
          showPostDisplay={showPostDisplay}
          post={selectedPost} // Pass the selected post to PostDisplay
        />
      ) : null}
    </>
  );
}

export default ProfilePage;
