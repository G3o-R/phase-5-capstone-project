import styled from "styled-components";

// Define styled components for different sizes
export const IconContainer = styled.div`
  display: inline-block;
  width: 150px;
`;

export const IconImage = styled.img`
  border-radius: 50%;
  width: ${(props) => {
    switch (props.size) {
      case "small":
        return "32px"; // Define your small size here
      case "medium":
        return "64px"; // Define your medium size here
      case "big":
        return "128px"; // Define your big size here
      default:
        return "64px"; // Default size
    }
  }};
  height: auto;
`;