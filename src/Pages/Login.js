import './Css/Login.css'
import Navbar from './../Intro/Navbar'
import LoginForm from "../Login/LoginForm";
import Message from "../Login/Message";


const Login = () => {
  return (
    <div className="Login">
      <Navbar />
      <LoginForm />
      <Message />
    </div>
  );
};

export default Login;