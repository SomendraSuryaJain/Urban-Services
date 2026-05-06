import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Offer from './components/Offer';
import TopBar from './components/homesection/TopBar';
import Home from './pages/Home';
import About from './components/AboutSection.jsx/About';

import MainServices from './pages/MainServices';
import Services_Page_Details from './components/Main_Services_Page/Services_Page_Details';
import ServicesPage from './components/homesection/home_Service_Section/ServicesPage';
import Home_Services_Page_Details from './components/homesection/home_Service_Section/Home_Services_Page_Details';
import Footer from './components/Footer';
import QuickConnect from './components/QuickConnect';
import ScrollToTop from './components/ScrollToTop';
import ContactUs from './pages/ContactUs';



function App() {
  return (
    <Router>
    <ScrollToTop/>
    <TopBar/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        // App.js mein path exactly aisa hona chahiye:
        <Route path="/services/:slug" element={<Services_Page_Details />} />
        <Route path="/" element={<ServicesPage />} />
        <Route path="/service/:serviceId" element={<Home_Services_Page_Details />} />
        <Route path="/services" element={<MainServices />} />
      
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <QuickConnect/>
      <Footer/>
    </Router>
  );
}

export default App;