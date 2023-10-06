import { 
    OptionsDisplayContainer,
    OptionsContent,
    CloseButton,
    Option
 } from "../styles/OptionsDisplayStyles";

 import { useDispatch } from "react-redux"
 import { deleteComment } from "../redux/features/commentsSlice";

function OptionsDisplay({ commentData, onClose }) {
    // console.log(commentData);
    const dispatch = useDispatch()
    function handleDeleteComment(){
        console.log(commentData)
        dispatch(deleteComment(commentData))
        onClose()
    }

    function handleEditComment(){
        console.log("edit")
    }
  
    return (
      <OptionsDisplayContainer className="active">
        <CloseButton onClick={onClose}>x</CloseButton>
        <OptionsContent>
          <Option onClick={handleEditComment} className="edit">Edit Comment</Option>
          <Option onClick={handleDeleteComment} className="delete">Delete</Option>
          <Option onClick={onClose} className="cancel">Cancel</Option>
        </OptionsContent>
      </OptionsDisplayContainer>
    );
  }
  
  export default OptionsDisplay