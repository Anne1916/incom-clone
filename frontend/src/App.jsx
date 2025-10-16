import { Navbar } from './components/Navbar';
import './index.css'
import { ProductGrid } from './components/ProductGrid';
import { BrandSection } from './components/BrandSection';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1>INCOM MX - E-commerce Industrial</h1>
        <p>Proyecto en construcción...</p>
      </div>
      <ProductGrid />
      <BrandSection />
    </>
  );
}

export default App;
