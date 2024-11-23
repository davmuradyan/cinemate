import './Navbar.css'
import Buttons from './Navbar/Buttons'
import Logo from './Navbar/Logo'

function Navbar() {
    return (
        <div className="navbar">
            <Logo />
            <Buttons />
        </div>
    )
}

export default Navbar