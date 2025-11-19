import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Cart = () => {
    
    const {cart, removeFromCart, updateQuantity, getTotal, clearCart} = useCart()
    const navigate = useNavigate()
    
    if(cart.items.length === 0){
        return(
        <div className="container py-5 text-center">
            <i className="fas fa-shopping-cart fa-5x text-muted mb-4"></i>
            <h2>Carrito vacío</h2>
            <p className="text-muted mb-4">Agrega productos para comenzar tu compra</p>        
            <button className="btn btn-primary" onClick={() => navigate('/')} >
                Ver productos
            </button>
        </div>
        )
    }

    return ( 
        <div className="container py-5">
            <h1 className="mb-4">Carrito de compras</h1>

            <div className="row">
                <div className="col-lg-8">
                    {cart.items.map(item => (
                        <div key={item.id} className="card mb-3">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-2">
                                        <img src={item.image} alt={item.name} className="img-fluid rounded" />
                                    </div>
                                    <div className="col-md-4">
                                        <h5>{item.name}</h5>
                                        <p className="text-muted small mb-0"></p>
                                    </div>
                                    <div className="col-md-2">
                                        <p className="mb-0 fw-bold">{item.price} MXN</p>
                                    </div>
                                    <div className="col-md-2">
                                        <input  
                                            type="number"
                                            className="form-control"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                        />
                                    </div>
                                    <div className="col-md-2 text-en">
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => removeFromCart(item.d)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <button className="btn btn-outline-danger" onClick={clearCart}>
                        Vaciar carrito
                    </button>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Resumen de compras</h5>
                            <hr />
                            <div className="d-flex justify-content-between mb-2">
                                <span>Subtotal:</span>
                                <span>${getTotal().toFixed(2)} MXN</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>IVA (incluido):</span>
                                <span>-</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-3">
                                <strong>Total:</strong>
                                <strong>${getTotal().toFixed(2)} MXN</strong>
                            </div>
                            <button className="btn btn-primary w-100">
                                Proceder al pago
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}