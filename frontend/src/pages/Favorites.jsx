import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';

export const Favorites = () => {
    const { favorites, removeFavorite } = useFavorites();
    const { addToCart } = useCart();
    const navigate = useNavigate();

    if (favorites.items.length === 0) {
        return (
            <div className="container py-5 text-center">
                <i className="fas fa-heart fa-5x text-muted mb-4"></i>
                <h2>No tienes favoritos aún</h2>
                <p className="text-muted mb-4">Guarda productos que te gusten para encontrarlos más rápido</p>
                <button className="btn btn-primary" onClick={() => navigate('/')}>
                    Ver productos
                </button>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h1 className="mb-4">
                <i className="fas fa-heart text-danger me-2"></i>
                Mis Favoritos
            </h1>
            
            <div className="row">
                {favorites.items.map(item => (
                    <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img 
                                src={item.image} 
                                className="card-img-top product-image" 
                                alt={item.name}
                                style={{height: '200px', objectFit: 'cover'}}
                            />
                            <div className="card-body d-flex flex-column">
                                <p className="text-muted small mb-1">{item.code}</p>
                                <h6 className="card-title mb-2">{item.name}</h6>
                                <p className="text-primary fw-bold mb-3">
                                    ${item.price} MXN
                                </p>
                                
                                <div className="mt-auto d-flex flex-column gap-2">
                                    <button 
                                        className="btn btn-outline-primary btn-sm"
                                        onClick={() => navigate(`/product/${item.id}`)}
                                    >
                                        <i className="fas fa-eye me-2"></i>
                                        Ver detalle
                                    </button>
                                    <button 
                                        className="btn btn-primary btn-sm"
                                        onClick={() => {
                                            addToCart(item);
                                            alert('¡Producto agregado al carrito!');
                                        }}
                                    >
                                        <i className="fas fa-shopping-cart me-2"></i>
                                        Agregar al carrito
                                    </button>
                                    <button 
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => removeFavorite(item.id)}
                                    >
                                        <i className="fas fa-heart-broken me-2"></i>
                                        Quitar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};