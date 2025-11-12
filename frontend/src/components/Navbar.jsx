import React from "react";
import { SearchBar } from "./SearchBar";
import { CartIcon } from "./CartIcon";
import { Link } from "react-router-dom";

export const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#2c5aa0'}}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/" style={{fontSize: '1.5rem'}}>
          INCOM MX
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#productos">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#marcas">Marcas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <SearchBar onSearch={onSearch} />
            <CartIcon />
          </div>

        </div>
      </div>
    </nav>
  );
};