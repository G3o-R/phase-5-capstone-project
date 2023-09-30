import styled from "styled-components";

export const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px; /* Adjust the gap between elements as needed */

  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

export const PostRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px; /* Adjust the gap between posts as needed */
  align-items: center;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction:column;
`

export const PostContainer = styled.div`
  width: 100%;
  max-width: 300px; /* Adjust the maximum width as needed */
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
  }
`;

