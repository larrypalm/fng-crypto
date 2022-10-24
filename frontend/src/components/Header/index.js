import {
    Link
} from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/terms">Terms</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
        </nav>
    )
}

export default Header;