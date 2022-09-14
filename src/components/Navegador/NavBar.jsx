import React from "react";
import "../Navegador/NavBar.css"
import logo from "../../assets/images/logo.png"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <ul className="col-logo  nav justify-content-center">
                <img src={logo} className="nav-logo img-fluid" alt="logo"/>
            </ul>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Invierno</a></li>
                        <li><a className="dropdown-item" href="#">Verano </a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                </li>
            </ul>
            <ul className="nav justify-content-center">
                <a href=""><CartWidget /></a>
            </ul>
            <hr />
        </div>
    )
};

export default NavBar;