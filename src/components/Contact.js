import Navbar from "./Navbar"
import "./Contact.css"
function Contact(){
    return (
        <>
        <Navbar/>
        <div className="contactBody">
            <h1 className="contactTitle">Contact us!</h1>
            <p className="contactTitle">Gmail: thequad@gmail.com</p>
            <p className="contactTitle">Twitter: @TheQuad</p>
        </div>
        </>
    )
}

export default Contact