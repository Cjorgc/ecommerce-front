import { FC } from 'react';
import { Link } from "react-router-dom";
import { logout } from "../services/auth/auth";

const Header: FC = () => {
    return (<div >
        <nav >
            <ul style={styles.container}>
                <li style={styles.item}><Link to="/cart" style={styles.link}>Carrito</Link></li>
                <li style={styles.item}><Link to='/login' onClick={logout} style={styles.link}>Cerrar sesión</Link></li>
            </ul>
        </nav>
    </div>);
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    item: {
        display: 'inline-block',
        marginRight: '20px',
    },
    link: {
        textDecoration: 'none',
        color: '#000'
    },
    label: {

    }
}
export default Header;
