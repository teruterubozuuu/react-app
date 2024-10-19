import "./Login.css"


function Login(){
    return(
        <>
            <div className="wrapper">
                <div>
                    <form>
                        <h1 className="loginTxt">Login</h1>
                        <div>
                            <p className="txtLabels">Username</p>
                            <input type="text" className="txtInput"></input>                                          
                        </div>
                        <div>
                            <p className="txtLabels">Password</p>
                            <input type="text" className="txtInput"></input>
                        </div>
                            
                        <div>
                            <button type="submit" className="loginBtn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login