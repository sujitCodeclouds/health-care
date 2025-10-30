import { Routes, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ContactData from "./services/ContactData";
import Blogs from "./pages/Blogs";
import BlogSingle from "./components/BlogSingle";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogSingle />} />
        <Route path="/contact-data" element={<ContactData />} />
      </Routes>
    </>
  );
}

export default App;
