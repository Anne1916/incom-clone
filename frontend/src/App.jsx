import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './index.css'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { CartProvider } from './context/CartContext';
import { Cart } from './pages/Cart';
import { FavoritesProvider } from './context/FavoritesContext';
import { Favorites } from './pages/Favorites';

const AppContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setSearchTerm('');
    }
  }, [location.pathname]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    navigate('/');
  };

  const handleClearSearch = () => {
    searchTerm('')
  }

  return (
    <>
      <Navbar onSearch={handleSearch} onClearSearch={handleClearSearch}/>
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </FavoritesProvider>
  );
}

export default App;