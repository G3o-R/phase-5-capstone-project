import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ProfilePageContainer,
  PostRow,
  PostContainer,
  PostsContainer
} from "../styles/ProfilePageStyles"; // Import the updated styled components

// ... rest of your code ...

function ProfilePage() {
  const { user } = useSelector((state) => state.user);
  console.log(user);

  const displayUserPosts = user.user_posts.map((post, index) => (
    <PostContainer key={post.id}>
      <Link to={`/post/${post.id}`}>
        <img src={post.image} alt="content" />
      </Link>
    </PostContainer>
  ));

  // Calculate the number of empty divs needed to fill the row
  const numEmptyDivs = 3 - (displayUserPosts.length % 3);

  // Create an array to hold the empty divs
  const emptyDivs = Array(numEmptyDivs)
    .fill(null)
    .map((_, index) => <PostContainer key={`empty-${index}`} />);

  // Concatenate the empty divs to the posts
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
        <h1>{user.username}</h1>
        <PostsContainer>{renderedRows}</PostsContainer>
    </ProfilePageContainer>
  );
}

export default ProfilePage;
