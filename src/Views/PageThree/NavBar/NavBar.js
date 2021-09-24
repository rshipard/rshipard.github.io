import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar(props) {

    return (
        <div className="NavBarThree">
            <Link to="/" className="link">
                <div className="link">Home</div>
            </Link>
            <Link to="/about" className="about-button link">
                <div className="link">About Me</div>
            </Link>
            <Link to="/portfolio" className="portfolio-button link">
                <div className="link">Portfolio</div>
            </Link>
            <Link to="/hobbies" className="hobbies-button link">
                <div className="link">Hobbies</div>
            </Link>
            <Link to="/contact" className="contact-button link">
                <div className="link">Contact</div>
            </Link>
        </div>
    )

}

export { NavBar }