import React, { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            onSearch(searchTerm);
        }
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex w-100">
            <input
                type="text"
                className="form-control search-input"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn-outline-light ms-2 text-nowrap">
                <i className="fas fa-search me-1"></i>
                Buscar
            </button>
        </form>
    );
};