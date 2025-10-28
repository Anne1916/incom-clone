import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { BrandSection } from '../components/BrandSection';

export const Home = ({ searchTerm }) => {
    return (
        <>
            <ProductGrid searchTerm={searchTerm} />
            <BrandSection />
        </>
    );
};