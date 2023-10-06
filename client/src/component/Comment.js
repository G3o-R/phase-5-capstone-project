import { ReactComponent as LikeSVG } from "../images/Like.svg"
import { ReactComponent as ThreeDotsSVG } from "../images/ThreeDots.svg"
import { 
    CommentContainer,
    Container,
    ProfileName,
    CommentText,
    LikeButtonContainer,
    LikesDisplay,
    BottomOfCommentSection,
    CommentOptions

} from "../styles/CommentStyles";

import { useSelector } from "react-redux"

function Comment({commentData}){
    const { comment, likes, username } = commentData
    const {user} = useSelector((state)=>state.user)


    return (<Container>

        <CommentContainer>
          <ProfileName>{username}</ProfileName>
          <CommentText>{comment}</CommentText>
          <LikeButtonContainer>
            <LikeSVG />
          </LikeButtonContainer>
        </CommentContainer>
        <BottomOfCommentSection>
        <LikesDisplay>{likes} likes</LikesDisplay>
         { user.username === username? <CommentOptions className="OPTIONS"><ThreeDotsSVG /></CommentOptions> : null }
        </BottomOfCommentSection>
    </Container>
      );
    }

export default Comment