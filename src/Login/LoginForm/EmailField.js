import React from "react";

function EmailField({ email, setEmail }) {
  return (
    <div>
      <input
        className="Input"
        placeholder="E-mail"
        type="email"
        value={email} // Use the email passed from the parent
        onChange={(e) => setEmail(e.target.value)} // Update the parent state using setEmail
        required
      />
    </div>
  );
}

export default EmailField;
