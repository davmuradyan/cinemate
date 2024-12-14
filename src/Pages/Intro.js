import Navbar from "../Intro/Navbar";
import './Css/Intro.css'
import './../Intro/Paragraph'
import Paragraph from "./../Intro/Paragraph";

function Intro() {
    return (
      <div className="Intro">
        <Navbar />
        <Paragraph />
      </div>
    );
}

export default Intro