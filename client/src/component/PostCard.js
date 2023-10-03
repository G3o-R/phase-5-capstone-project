import { ReactComponent as LikeSVG } from "../images/Like.svg"
import { ReactComponent as CommentSVG } from "../images/Comment.svg"
import {
    PostCardContainer,
    UserName,
    PostContainer,
    BottomPostSection,
    LikeAndCommentButtons,
    LikeButton,
    CommentButton,
    Likes,
    Description,
    SeeCommentsButton,
    ViewComments,
    AddCommentText
} from "../styles/PostCardStyles.js"
import { useState } from "react";

function PostCard({ post }) {
    const { comments, description, image, likes, user } = post;
    const [commentData, setComment] = useState({
      comment: "",
      post_id: "",
      user_id: ""
    })
    const {comment, user_id, post_id} = commentData

    function handleChange(e){
      let name = e.target.name
      let value = e.target.value
      setComment({...commentData, [name]:value})
    }

    function handleCommentSubmit(e){
      e.preventDefault()
      console.log(comment)
    }



    return (
      <PostCardContainer name="post-card">
        <UserName name="users-name">{user}</UserName>
        <PostContainer name="post-container">
          <img src={image} alt={`${user}'s post`} name="post" />
        </PostContainer>
        <BottomPostSection name="bottom-post-section">
          <LikeAndCommentButtons name="like-and-comment-btns">
            <LikeButton onClick={() => console.log("click like btn")}>
              <LikeSVG />
            </LikeButton>
            <CommentButton onClick={() => console.log("click comment btn")}>
              <CommentSVG />
            </CommentButton>
          </LikeAndCommentButtons>
          <Likes name="likes">{likes} likes</Likes>
          <Description name="description">{description}</Description>
          <SeeCommentsButton name="see-comments-button">
            <ViewComments onClick={() => console.log("display comments")}>
              View all {comments.length} comments...
            </ViewComments>
            <AddCommentText onSubmit={handleCommentSubmit}>
              <input
               type="text" 
               value={comment} 
               name="comment" 
               placeholder="Add a comment.." 
               onChange={handleChange} 
               />
               {comment.length > 0 ? <button type="submit" name="post-comment">Post</button>:null}
            </AddCommentText>
          </SeeCommentsButton>
        </BottomPostSection>
      </PostCardContainer>
    );
  }
  
  export default PostCard;