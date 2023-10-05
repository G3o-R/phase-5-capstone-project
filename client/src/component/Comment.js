import { ReactComponent as LikeSVG } from "../images/Like.svg"
import { 
    CommentContainer,
    ProfileName,
    CommentText,
    LikeButtonContainer,
    LikesDisplay
} from "../styles/CommentStyles";

function Comment({commentData}){
    const { comment, likes, username } = commentData

    return (<>
        <CommentContainer>
          <ProfileName>{username}</ProfileName>
          <CommentText>{comment}</CommentText>
          <LikeButtonContainer>
            <LikeSVG />
          </LikeButtonContainer>
        </CommentContainer>
          <LikesDisplay>{likes} likes</LikesDisplay>
    </>
      );
    }

export default Comment