import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './index.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log('Buscando...', term)
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch}/>
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
