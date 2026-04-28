import { Link } from 'react-router-dom';
import "./FirstPage.css"; // Import the CSS file

export default function FirstPage() {
    return (
        <div className="first-page">
            <h1>Welcome to Weather App</h1>
            <Link to="/LoginPage" className="link">Login</Link>
            <br/><br/>
            <Link to="/SignUpPage" className="link">Sign Up</Link>
            
            
        </div>
    );
}
