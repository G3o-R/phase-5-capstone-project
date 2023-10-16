import {
    ErrorsContainer,
    Error
} from "../styles/DisplayErrorsStyles"

function DisplayErrors({errors}){

    return(
        <ErrorsContainer>
        {errors.map((error) => <Error key={error}>{error}</Error>)}
        </ErrorsContainer>
    )
}

export default DisplayErrors