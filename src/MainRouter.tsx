import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Article from "./pages/Article";
import Subscribe from "./pages/Subscribe";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./MainRouter.css"; // Import the CSS file

const MainRouter: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/:article" element={<Article />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default MainRouter;
