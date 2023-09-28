import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logOutUser } from "../redux/features/userSlice"
function NavBar(){
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.user)

    function handleLogOut(){
        dispatch(logOutUser())
    }

    return (
        <div name="nav-bar" style={
            {display: "flex",
            justifyContent:"space-between"}
        }>
            <NavLink to="/" name="link">Home</NavLink>
            <NavLink to="/profile" name="link">Profile</NavLink>
            <NavLink to="/sign-up" name="link">SignUp</NavLink>
            {user ? <NavLink onClick={handleLogOut}>log Out</NavLink>:<NavLink to="/login" name="link">Login</NavLink>}
        </div>
    )
}

export default NavBar