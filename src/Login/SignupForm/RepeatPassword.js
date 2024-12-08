import React from "react";

function RepeatPassword({ password, setrPassword, rpassword, setIsSame }) {
    return (
        <div>
            <input
                className="Input"
                placeholder="Confirm password"
                type="password"
                value={rpassword}
                onChange={(e) => {
                    const newRPassword = e.target.value;
                    setrPassword(newRPassword);
                    setIsSame(password === newRPassword);
                }}
                required
            />
        </div>  
    );
}

export default RepeatPassword;
