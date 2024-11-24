import './Buttons.css';
import { useNavigate } from 'react-router-dom';

function Buttons() {
    const navigate = useNavigate(); // Move useNavigate here

    const goToLogin = () => {
        navigate("/login"); // Navigate to login page
    };

    return (
        <div className='buttonsDiv'>
            <button className='buttons' onClick={goToLogin}>Login</button>
            <button className='buttons'>Sign Up</button>
        </div>
    );
}

export default Buttons;
