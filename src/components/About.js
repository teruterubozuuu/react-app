import Navbar from "./Navbar"
import "./About.css"
function About(){
    return(
        <>
        <Navbar/>
        <h1 className="aboutTitle">About Us</h1>
        <p className="aboutBody">The Quad is a social media platform for cool and fun people.</p>
        </>
    )
}

export default About