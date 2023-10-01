import DefaultPFP from "../images/Default_pfp.jpg"
import { IconContainer, IconImage } from "../styles/ProfileIconStyles"


function ProfileIcon({ profilePicture, size }) {
    const image = profilePicture ? profilePicture : DefaultPFP;
  
    return (
      <IconContainer>
        <IconImage src={image} alt="profile icon" size={size} />
      </IconContainer>
    );
  }
  
  export default ProfileIcon;