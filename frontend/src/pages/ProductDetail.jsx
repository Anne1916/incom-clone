import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const products = {
        1: {
            code: "530-06N",
            name: 'Escalera tipo tijera "doble" 5 peldaños naranja (carga 225 kg)',
            price: "5,614.12",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
            description: "Escalera profesional de fibra de vidrio con 5 peldaños. Diseñada para trabajos eléctricos y de construcción.",
            features: [
                "Material: Fibra de vidrio",
                "Capacidad de carga: 225 kg",
                "Altura: 1.5 metros",
                "Certificación: NOM",
                "Antideslizante"
            ]
        },
        2: {
            code: "534-24N",
            name: "Escalera de extensión 24 peldaños naranja (carga 225 kg)",
            price: "9,613.30",
            image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=400&fit=crop",
            description: "Escalera de extensión profesional para trabajos en altura. Construcción robusta y segura.",
            features: [
                "Material: Fibra de vidrio",
                "Capacidad de carga: 225 kg",
                "24 peldaños",
                "Extensible",
                "Sistema de seguridad incluido"
            ]
        }
    };

    const product = products[id] || products[1]; // Default to product 1 if id not found
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
                        <button className="btn btn-primary btn-lg">
                            <i className="fas fa-shopping-cart me-2"></i>
                            Agregar al carrito
                        </button>
                        <button className="btn btn-outline-primary">
                            <i className="fas fa-heart me-2"></i>
                            Agregar a favoritos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}