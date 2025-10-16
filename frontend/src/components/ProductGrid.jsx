import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductGrid = ({ searchTerm }) => {
    const allProducts = [
        {
            id: 1,
            code: "530-06N",
            name: 'Escalera tipo tijera "doble" 5 peldaños naranja (carga 225 kg)',
            price: "5,614.12",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=200&fit=crop"
        },
        {
            id: 2,
            code: "534-24N",
            name: "Escalera de extensión 24 peldaños naranja (carga 225 kg)",
            price: "9,613.30",
            image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=300&h=200&fit=crop"
        },
        {
            id: 3,
            code: "52000-200X",
            name: 'Guía de jalado estándar 3/16" x 200\' (sin ruedas)',
            price: "17,224.43",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop"
        },
        {
            id: 4,
            code: "100-DUTAZ-MLS",
            name: "Cable UTP Cat 6A LSZH azul (305 m)",
            price: "8,887.97",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop"
        },
        {
            id: 5,
            code: "M210-AC",
            name: "Adaptador AC para M210",
            price: "1,624.32",
            image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=300&h=200&fit=crop"
        },
        {
            id: 6,
            code: "65397",
            name: "Dispositivo de bloqueo de abrazadera para interruptores automáticos",
            price: "328.60",
            image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=300&h=200&fit=crop"
        },
        {
            id: 7,
            code: "608-07N",
            name: "Escalera tipo tijera de aluminio 6 peldaños (carga 150 kg)",
            price: "2,095.57",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=200&fit=crop"
        },
        {
            id: 8,
            code: "BBP85",
            name: "Impresora de escritorio industrial",
            price: "117,960.21",
            image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=300&h=200&fit=crop"
        }
    ]; 

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