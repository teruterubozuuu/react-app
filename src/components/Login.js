import "./Login.css"
import { useNavigate} from 'react-router-dom'
import {useState} from 'react'

function Login(){
    const navigate = useNavigate()
    const user = [{username:"jane", password:"1234"}, {username:"hatdog", password:"ketchup"}]
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")




    const validate= () =>{
       const userFound = user.find((usernameArray)=> usernameArray.username === username)

       if (userFound && userFound.password === password){
        navigate('/home')
       }
       else{
        alert("Invalid credentials.")
       }
    }

    return(
        <>
            <div className="wrapper">
                <div>
                    <form>
                        <h1 className="loginTxt">Login</h1>
                        <div>
                            <p className="txtLabels">Username</p>
                            <input type="text" className="txtInput" value={username} onChange={(e) => setUsername(e.target.value)}></input>                                          
                        </div>
                        <div>
                            <p className="txtLabels">Password</p>
                            <input type="text" className="txtInput" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                            
                        <div>
                            <button className="loginBtn" onClick={validate}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login