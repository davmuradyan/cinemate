import './Logo.css'
import { useNavigate } from 'react-router-dom';

function Logo({goTo}) {
    const navigate = useNavigate();

    const GoTo = () => {
        navigate(goTo);
    };

    return (
        <button className='LogoDiv' onClick={GoTo}>CineMate</button>
    )
}

export default Logo