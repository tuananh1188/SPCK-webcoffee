import { Link } from 'react-router';

function Menu({ content, href }) {
    return (
        <div>
            <Link to={href}>{content}</Link>
        </div>
    );
}

export default Menu;
