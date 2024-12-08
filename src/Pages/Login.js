import './Css/Login.css'
import Navbar from './../Intro/Navbar'
import LoginForm from "../Login/LoginForm";


const Login = () => {
  return (
    <div className="Login">
      <Navbar />
      <LoginForm />
    </div>
  );
};

export default Login;