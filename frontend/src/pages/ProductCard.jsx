import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleViewDetail = () => {
        navigate(`/product/${product.id}`)
    }

    return (
        <div className="col-lg-3ccol-md-4 col-sm6 mb-4">
            <div className="card h-100 shadow-sm product-card">
                <img 
                src={product.image} 
                alt={product.name} 
                className="card-img-top product-image"
                onError={(e) => {
                    if(!e.target.dataset.errorHandled){
                        e.target.dataset.errorHandled = "true";
                        e.target.src = "https://via.placeholder.com/300x200?text=Sin+Imagen";
                    }
                }}
                />
                <div className="card-body d-flex flex-column">
                    <p className="product-code text-muted small">{product.code}</p>
                    <h6 className="product-title">{product.name}</h6>
                    <p className="product-price mt-auto">
                        {product.price} MXN / IVA incluido
                    </p>
                    <button
                        className="btn btn-outline-primary btn-sm w-100"
                        onClick={handleViewDetail}
                    >
                        Vista rápida
                    </button>
                </div>
            </div>
        </div>
    )
}