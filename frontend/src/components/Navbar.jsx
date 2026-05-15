import React from "react";
import { SearchBar } from "./SearchBar";
import { CartIcon } from "./CartIcon";
import { Link } from "react-router-dom";

export const Navbar = ({ onSearch, onClearSearch }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#2c5aa0'}}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" 
          to="/" 
          style={{fontSize: '1.5rem'}}
          onClick={onClearSearch}
          >
          INCOM MX
        </Link>

        <div className="d-flex align-items-center gap-2 d-lg-none">
          <CartIcon />
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#marcas">Marcas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">
                <i className="fas fa-heart me-1"></i>
                Favoritos
              </Link>
            </li>
            {/* SearchBar mobile dentro de los nav-items */}
            <li className="nav-item d-lg-none mt-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar productos..."
                  onChange={(e) => onSearch(e.target.value)}
                />
                <button className="btn btn-outline-light" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </li>
          </ul>

          {/* SearchBar + CartIcon desktop */}
          <div className="d-none d-lg-flex gap-2 align-items-center">
            <SearchBar onSearch={onSearch} />
            <CartIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};