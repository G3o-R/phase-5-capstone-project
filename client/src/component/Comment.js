import { useState } from "react";
import { ReactComponent as LikeSVG } from "../images/Like.svg"
import { ReactComponent as Unlike } from "../images/Unlike.svg"
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

import { useDispatch, useSelector } from "react-redux"
import OptionsDisplay from "./OptionsDisplay";
import { likeComment } from "../redux/features/commentsSlice";

function Comment({commentData}){
    const { comment, likes, username, users_liked, id } = commentData
    const {user} = useSelector((state)=>state.user)
    const [showOptions, setShowOptions] = useState(false)
    console.log(commentData)

    const dispatch = useDispatch()

    function handleLikeComment(){
      dispatch(likeComment(commentData))
    }
    const likeOrUnLike = users_liked.includes(user.username) ? <Unlike /> : <LikeSVG /> 


    return (
      <>
    <Container>
        <CommentContainer>
          <ProfileName>{username}</ProfileName>
          <CommentText>{comment}</CommentText>
          <LikeButtonContainer onClick={handleLikeComment}>
            {likeOrUnLike}
          </LikeButtonContainer>
        </CommentContainer>
        <BottomOfCommentSection>
        <LikesDisplay>{likes} likes</LikesDisplay>
         { user.username === username? <CommentOptions className="OPTIONS"><ThreeDotsSVG onClick={()=>setShowOptions(!showOptions)} /></CommentOptions> : null }
        </BottomOfCommentSection>
        </Container>
        {showOptions ? <OptionsDisplay
         commentData={commentData} 
         onClose={() => { setShowOptions(false)}}/> : null}
      </>
      );
    }

export default Comment