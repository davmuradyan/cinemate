import React, { useState } from "react";

function PasswordField({password, setPassword}) {
    return (
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
    )
}

export default PasswordField