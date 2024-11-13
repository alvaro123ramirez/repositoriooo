import { Link } from "react-router-dom"

const MainMenu = () => {
    return (
        <nav>
            <ul className="container-listas">
                <li><img src="src/images/imagen-menu.png" alt="menu" /></li>
                <li>
                    <input type="text" placeholder="Que estas buscando hoy?" className="input-busqueda"/>
                </li>
                <li className="ubicacion"><img src="src/images/imagen-ubicacion.png" alt="ubicacion" /></li>
                <li><Link to="/login" className="login"><img src="src/images/imagen-iniciar-sesion.png" alt="iniciar-sesion" /></Link></li>
                <li><Link to="/carrito" className="carrito"><img src="src/images/imagen-carrito.png" alt="carrito" /></Link></li>
            </ul>
        </nav>
    )
}
export default MainMenu