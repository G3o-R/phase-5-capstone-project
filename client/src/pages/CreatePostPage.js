import { useState } from "react";
import {
     CreatePostContainer,
     FormContainer,
     Form,
     Label,
     Input,
     SubmitButton,
     Error
     } from "../styles/CreatePostPageStyles";

import PreviewPostCard from "../component/PreviewPostCard";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/features/allPostsSlice";
import { Navigate, useNavigate } from "react-router-dom";

function CreatePostPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {errors} = useSelector((state) => state.allPosts)

    const [postData, setPostData] = useState({
      image: "",
      description: "",
    });
  
    const { image, description } = postData;
  
    function createPostSubmit(e) {
      e.preventDefault();
      dispatch(createPost(postData))
        .then((result) => {
          if (createPost.fulfilled.match(result)) {
            navigate("/");
          } else {
            console.error("Post creation failed");
          }
        })
        .catch((error) => {
          console.error("Dispatch error:", error);
        });
    
      setPostData({
        image: "",
        description: "",
      });
    }
    
    
  
    function handleChange(e) {
      let name = e.target.name;
      let value = e.target.value;
      setPostData({ ...postData, [name]: value });
    }
  
    return (
      <CreatePostContainer>
        <FormContainer>
          <Form onSubmit={(e) => createPostSubmit(e)}>
            <Label htmlFor="image">Image Link</Label>
            <Input
              type="text"
              value={image}
              name="image"
              id="image"
              placeholder="Image Link..."
              onChange={handleChange}
            />
            <Label htmlFor="description">Description</Label>
            <Input
              type="text"
              value={description}
              name="description"
              id="description"
              placeholder="Description..."
              onChange={handleChange}
            />
            <SubmitButton type="submit">Create Post</SubmitButton>
          </Form>
          {errors.map((error)=> <Error key={error}>{error}</Error>)}
        </FormContainer>
        {image.length > 0 || description.length > 0 ? <PreviewPostCard postData={postData} /> : null }
      </CreatePostContainer>
    );
  }
  
  export default CreatePostPage;