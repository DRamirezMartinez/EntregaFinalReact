import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container ">
              
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarNavDropdown">
                <ul className="navbar-nav ">
                  <li className="nav-item ">          
                    <NavLink className="nav-link active" aria-current="page" activeclassname="active" to={"/"}>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeclassname="active" to={"#"}>Seguridad</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeclassname="active" to={"#"}>Mobiliario</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" activeclassname="active" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Productos
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li><NavLink className="dropdown-item" activeclassname="active" to={"/category/iluminacion"}>Iluminacion</NavLink></li>
                      <li><NavLink className="dropdown-item" activeclassname="active" to={"/category/cerraduras"}>Cerraduras</NavLink></li>
                      <li><NavLink className="dropdown-item" activeclassname="active" to={"/category/enchufes"}>Enchufes</NavLink></li>
                      <li><NavLink className="dropdown-item" activeclassname="active" to={"/category/sonido"}>Sonido</NavLink></li>
                    </ul>
                  </li>
                </ul>
              
              </div>
              <div className="col">
              <CartWidget/>
              </div>
            </div>
        </nav>
    )
}
export default NavBar;