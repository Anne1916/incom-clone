import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './index.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { CartProvider } from './context/CartContext';
import { Cart } from './pages/Cart';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log('Buscando...', term)
  };

  return (
    <FavoritesProvider>
      <CartProvider>
        <Router>
            <Navbar onSearch={handleSearch}/>
            <Routes>
                <Route path="/" element={<Home searchTerm={searchTerm} />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </Router>
      </CartProvider>
    </FavoritesProvider>
    
);
}

export default App;
