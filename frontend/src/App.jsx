import { Navbar } from './components/Navbar';
import './index.css'
import { useState } from 'react';
import { ProductGrid } from './components/ProductGrid';
import { BrandSection } from './components/BrandSection';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log('Buscando...', term)
  };

  return (
    <>
      <Navbar  onSearch={handleSearch}/>
      <div className="container mt-5">
        <h1>INCOM MX - E-commerce Industrial</h1>
        <p>Proyecto en construcción...</p>
      </div>
      <ProductGrid searchTerm={searchTerm} />
      <BrandSection />
    </>
  );
}

export default App;
