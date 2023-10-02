import { ReactComponent as LikeSVG } from "../images/Like.svg"
import { ReactComponent as CommentSVG } from "../images/Comment.svg"

function PostCard({post}){
    const {comments, description, image, likes, user} = post
    return (
        <div name="post-card">
            <h3 name="users-name">{user}</h3>
            <div name="post-container">
                <img src={image} alt={`${user}'s post`} name="post"/>
            </div>
            <div name="bottom-post-section">
                <div name="like-and-comment-btns">
                    <button onClick={()=>console.log("click like btn")}><LikeSVG/></button>
                    <button onClick={()=>console.log("click comment btn")}><CommentSVG/></button>
                </div>
            <h4 name="likes">{likes}</h4>
            <h4 name="decription">{description}</h4>
            <div name="see-comments-button">
                <p onClick={()=>console.log("display comments")}>View all {CommentSVG.length} comments</p>
                <p onClick={()=>console.log("display comments")}>Add a comment...</p>
            </div>
            </div>
        </div>
    )

}

export default PostCard