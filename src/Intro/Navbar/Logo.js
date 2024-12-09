import './Logo.css'
import { useNavigate } from 'react-router-dom';

function Logo() {
    const navigate = useNavigate();

    const goToIntro = () => {
        navigate("/");
    };

    return (
        <button className='LogoDiv' onClick={goToIntro}>CineMate</button>
    )
}

export default Logo