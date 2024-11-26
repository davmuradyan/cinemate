import './Buttons.css';
import { useNavigate } from 'react-router-dom';

function Buttons() {
    const navigate = useNavigate(); // Move useNavigate here

    const goToLogin = () => {
        navigate("/Login"); // Navigate to login page
    };

    const goToSignUp = () => {
        navigate("/Signup"); // Navigate to login page
    };

    return (
        <div className='buttonsDiv'>
            <button className='buttons' onClick={goToLogin}>Login</button>
            <button className='buttons' onClick={goToSignUp}>Sign Up</button>
        </div>
    );
}

export default Buttons;
