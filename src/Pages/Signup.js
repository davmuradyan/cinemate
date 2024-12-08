import Navbar from "../Intro/Navbar"
import './Css/Login.css'
import SignupForm from "../Login/SignupForm"

function Signup() {
    return (
      <div className="Login">
        <Navbar />
        <SignupForm />
      </div>
    )
}

export default Signup