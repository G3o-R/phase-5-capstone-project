import { useState } from "react"

function Login(){
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })
    const {username, password} = loginData

    function handleChange(e){
        let name = e.target.name
        let value = e.target.value
        setLoginData({...loginData,[name]: value})
    }

    function handleLoginSubmit(e){
        e.preventDefault()
        console.log(loginData)
    }
    return(
        <div className="login-page">
            <div className="login-container">
                <form className="login-form" onSubmit={handleLoginSubmit}>
                    <label>Username</label>
                    <input type="text" name="username" value={username} placeholder="Username..." onChange={handleChange} />
                    <label>Password</label>               
                    <input type="text" name="password" value={password} placeholder="Password..." onChange={handleChange} />
                    <button type="submit">login</button>                
                </form>
            </div>
        </div>
    )
}

export default Login