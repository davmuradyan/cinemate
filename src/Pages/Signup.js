import Navbar from "../Intro/Navbar"
import Message from "../Login/Message"
import './Css/Login.css'
import SignupForm from "../Login/SignupForm"

function Signup() {
    return (
      <div className="Login">
        <Navbar />
        <SignupForm />
        <Message />
      </div>
    )
}

export default Signup