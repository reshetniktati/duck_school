import { Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            header
            <ul>
                <li><Link to="/">HOME</Link>home</li>
                <li><Link to="/auth">Auth</Link>info</li>
                <li>contact</li>
            </ul>
        </div>
    );
}

export default Header;