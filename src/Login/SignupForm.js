import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Import Auth functions
import { app } from './../firebase'; // Named import for app
import React, { useState } from "react";
import EmailField from "./LoginForm/EmailField";
import PasswordField from "./LoginForm/PasswordField";
import RepeatPassword from "./SignupForm/RepeatPassword";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setrPassword] = useState("");
  const [error, setError] = useState("");
  const [isSame, setIsSame] = useState(false);

  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault();
    const auth = getAuth(app); // Get the Auth instance
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password); // Use createUserWithEmailAndPassword
      console.log("User signed up:", userCredential.user);
      // Redirect to another page or update the UI
      navigate("/Dashboard")
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="Form" onSubmit={handleSignup}>
      <div className="titleDiv">
        <h1 className="title">Sign Up</h1>
      </div>
      <EmailField email={email} setEmail={setEmail} />
      <PasswordField password={password} setPassword={setPassword}/>
      <RepeatPassword password={password} rpassword={rpassword} setrPassword={setrPassword} setIsSame={setIsSame}/>
      <div className="buttonDiv">
        <button type="submit" className="button" disabled={!isSame}>Sign Up</button>
      </div>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default Signup;
