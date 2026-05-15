import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { productsData } from "../products";

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  

  const product = productsData.find(p => p.id === parseInt(id)) || productsData[0];
  const productIsFavorite = isFavorite(product.id);

  return (
    <div className="container py-5">
      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => navigate(-1)}
      >
        <i className="fas fa-arrow-left me-2"></i>
        Volver
      </button>

      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <p className="text-muted">{product.code}</p>
          <h1 className="mb-3">{product.name}</h1>
          <h2 className="text-primary mb-4">
            ${product.price} MXN
            <small className="text-muted fs-6"> / IVA incluido</small>
          </h2>

          <p className="lead mb-4">{product.description}</p>

          <h5 className="mb-3">Características:</h5>
          <ul className="list-unstyled">
            {product.features.map((feature, index) => (
              <li key={index} className="mb-2">
                <i className="fas fa-check-circle text-success me-2"></i>
                {feature}
              </li>
            ))}
          </ul>

          <div className="d-grid gap-2 mt-4">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => {
                addToCart(product);
                alert("¡Producto agregado con éxito!");
              }}
            >
              <i className="fas fa-shopping-cart me-2"></i>
              Agregar al carrito
            </button>
            <button
              className={`btn ${
                productIsFavorite ? "btn-danger" : "btn-outline-primary"
              }`}
              onClick={() => toggleFavorite(product)}
            >
              <i className={`fas fa-heart me-2`}></i>
              {productIsFavorite ? "En favoritos" : "Agregar a favoritos"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
