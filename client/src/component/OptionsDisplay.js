import { 
    OptionsDisplayContainer,
    OptionsDialogContent
 } from "../styles/OptionsDisplayStyles";

function OptionsDisplay({ commentData }) {
    console.log(commentData);
  
    return (
      <OptionsDisplayContainer className="active">
        <OptionsDialogContent>
          optionsDisplay
        </OptionsDialogContent>
      </OptionsDisplayContainer>
    );
  }
  
  export default OptionsDisplay