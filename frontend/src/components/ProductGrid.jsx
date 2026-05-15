import React from "react";
import { ProductCard } from "./ProductCard";
import { productsData } from "../products";

export const ProductGrid = ({ searchTerm }) => {
    const allProducts = productsData; 

    const filteredProducts = searchTerm
        ? allProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.code.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : allProducts;

    return (
        <section className="py-5" id="productos">
            <div className="container">
                <h2 className="text-center mb-4 fw-bold">
                    {searchTerm ? `Resultados para: "${searchTerm}"` : 'Productos Destacados'}
                </h2>
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-5">
                        <p className="text-muted">No se encontraron productos que coincidan con tu búsqueda.</p>
                    </div>
                ) : (
                    <div className="row">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};