import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <header className="header">
       <CartWidget/>
      <Link to="/" className="nav__link">
        <h1 className="header_titulo">The Game Store</h1>
      </Link>
      <nav className="nav">
        <Link to="/catalogo/estrenos" className="nav__link">
          Estrenos
        </Link>

        <Link to="/catalogo/losmaspedidos" className="nav__link">
          Los mas pedidos
        </Link>

        <Link to="/catalogo/retro" className="nav__link">
          Retro
        </Link>
        <>
          <CartWidget />
        </>
      </nav>
    </header>
  );
};

export default NavBar;
