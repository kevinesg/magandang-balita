import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Article from "./pages/Article";
import Subscribe from "./pages/Subscribe";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./MainRouter.css"; // Import the CSS file

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
// Analytics Component to track page views
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.gtag &&
      window.location.hostname !== "localhost"
    ) {
      window.gtag("config", "G-JFQ7LZPHPD", { page_path: location.pathname });
    }
  }, [location]);

  return null;
};

const MainRouter: React.FC = () => {
  return (
    <Router>
      <Analytics />
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
