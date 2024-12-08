import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import Auth functions
import { app } from './../firebase'; // Named import for app
import Title from "./Title";
import React, { useState } from "react";
import EmailField from "./LoginForm/EmailField";
import PasswordField from "./LoginForm/PasswordField";
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login button clicked");
  
    const auth = getAuth(app); // Get the Auth instance
  
    if (!email || !password) {
      console.log("Email or password is missing");
      setError("Both fields are required!");
      return;
    }
  
    try {
      console.log('Attempting login...');
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
      // Redirect to another page or update the UI
      navigate("/Dashboard")
    } catch (err) {
      console.log("Error during login:", err.message);
      setError(err.message);
    }
  };    

  return (
    <form className="Form" onSubmit={handleLogin}>
      <div className="titleDiv">
       <h1 className="title">Login</h1>
      </div>
      <EmailField email={email} setEmail={setEmail} />
      <PasswordField password={password} setPassword={setPassword}/>
      <div className="buttonDiv">
        <button type="submit" className="button">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
