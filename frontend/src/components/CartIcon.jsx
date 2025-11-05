import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const CartIcon = () => {
    const { getItemCount } = useCart();
    const navigate = useNavigate();
    const itemCount = getItemCount();

    return (
        <button 
            className="btn btn-outline-light position-relative"
            onClick={() => navigate('/cart')}
        >
            <i className="fas fa-shopping-cart"></i>
            {itemCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {itemCount}
                    <span className="visually-hidden">productos en carrito</span>
                </span>
            )}
        </button>
    );
};