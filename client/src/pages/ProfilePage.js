import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; // Import useParams
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
import { getUser } from "../redux/features/allUsersSlice";

function ProfilePage() {
  const [showPostDisplay, setShowPostDisplay] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const dispatch = useDispatch();

  const { singleUser, loading } = useSelector((state) => state.allUsers);
  const { username } = useParams();
  useEffect(() => {
    if (selectedPost) {
        const updatedPost = singleUser.user_posts.find((post) => post.id === selectedPost.id);
        setSelectedPost(updatedPost);
    }
}, [singleUser, selectedPost]);

  useEffect(() => {
    dispatch(getUser(username));
  }, [dispatch, username]);
  
  if (loading || singleUser === null) {
    return <h1>Loading...</h1>;
  }

  const displayUserPosts = singleUser.user_posts.map((post) => (
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
              <h1>{singleUser.username}</h1>
              <EditProfileButton>Edit profile</EditProfileButton>
            </InlineFlex>
            <InlineFlex className="user-info-section">
              <SmallText>## posts</SmallText>
              <SmallText>## followers</SmallText>
              <SmallText>## following</SmallText>
            </InlineFlex>
            <BioSection>
              <SmallText>{singleUser.username}</SmallText>
              <BioText>{singleUser.biography}</BioText>
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
