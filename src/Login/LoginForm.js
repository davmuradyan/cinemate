import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import Auth functions
import app from './../firebase'; // Correct the relative path
import Title from "./Title";
import React, { useState } from "react";


function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
            e.preventDefault();
            const auth = getAuth(app); // Get the Auth instance
            try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User signed in:", userCredential.user);
            // Redirect to another page or update the UI
        }   catch (err) {
                setError(err.message);
        }
    };
    return (
        <form className="Form" onSubmit={handleLogin}>
        
        <Title />
        <div>
          <input
            className="Input"
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            className="Input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="buttonDiv">
          <button type="submit" className="button">Login</button>
        </div>
      </form>
    )
}

export default LoginForm