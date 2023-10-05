import { ReactComponent as LikeSVG } from "../images/Like.svg"
import { ReactComponent as ThreeDotsSVG } from "../images/ThreeDots.svg"
import { 
    CommentContainer,
    ProfileName,
    CommentText,
    LikeButtonContainer,
    LikesDisplay,
    CommentOptions

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
          <span><LikesDisplay>{likes} likes</LikesDisplay>
           <CommentOptions><ThreeDotsSVG /> </CommentOptions></span>
    </>
      );
    }

export default Comment