import React from "react";

export const BrandCard = ({ icon, title, description, features}) => {
    return (
        <div className="col-md mb-4">
            <div className="card h-100 brand-card">
                <div className="card-body">
                    <div className="brand-icon text-center mb-3">
                        {icon}
                    </div>
                    <h3 className="brand-title text-center">{title}</h3>
                    <p className="brand-subtitle text-center text-muted mb-4">
                        {description}
                    </p>
                    {features && (
                        <ul className="brand-features">
                            {features.map((feature,index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
