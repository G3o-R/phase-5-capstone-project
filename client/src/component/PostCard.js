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

function PostCard({ post }) {
    const { comments, description, image, likes, user } = post;
  
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
            <AddCommentText onClick={() => console.log("display comments")}>
              Add a comment...
            </AddCommentText>
          </SeeCommentsButton>
        </BottomPostSection>
      </PostCardContainer>
    );
  }
  
  export default PostCard;