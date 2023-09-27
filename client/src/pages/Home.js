import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function Home(){
    const {user} = useSelector((state) => state.user)
    const naviagte = useNavigate()

    return (

        <div>
            Home is here
        </div>
    )
}

export default Home