import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import Experiences from './pages/Experiences';
import './styles/index.css';
import './styles/tailwind.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="services" element={<Services />} />
      <Route path="portfolio" element={<Experiences />} />
    </Routes>
  );
}

export default App;
