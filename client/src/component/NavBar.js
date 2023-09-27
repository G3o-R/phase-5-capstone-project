import { NavLink } from "react-router-dom"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"

function NavBar(){
    const {user} = useSelector((state)=>state.user)
    function handleLogOut(){
        console.log(` logging out ${user.username}`)
    }
    return (
        <div name="nav-bar">
            <NavLink to="/" name="link">Home</NavLink>
            <NavLink to="/profile" name="link">Profile</NavLink>
            <NavLink to="/sign-up" name="link">SignUp</NavLink>
            {user ? <NavLink onClick={handleLogOut}>log Out</NavLink>:<NavLink to="/login" name="link">Login</NavLink>}

        </div>
    )
}

export default NavBar