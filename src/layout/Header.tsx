import { FC } from 'react';
import { Link } from "react-router-dom";
import { logout } from "../services/auth/auth";
import styled from "styled-components";

const Header: FC = () => {
    return (<div>
        <nav >
            <_ul>
                <_li><_Link to="/catalog">Catálogo</_Link></_li>
                <_li><_Link to="/cart">Carrito</_Link></_li>
                <_li><_Link to='/login' onClick={logout}>Cerrar sesión</_Link></_li>
            </_ul>
        </nav>
    </div>);
};

const _ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
`

const _li = styled.li`
  display: inline-block;
  margin-right: 20px;
`

const _Link = styled(Link)`
  text-decoration: none;
  color: #000;
`

export default Header;
