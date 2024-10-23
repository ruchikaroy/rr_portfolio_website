import Footer from "./Components/Footer";
import Content from "./Components/Content";
import { Routes, Route, useLocation } from "react-router-dom";
import Projects from "./Components/Projects";
import StickyNavBar from "./Components/StickyNavBar";
import ContactForm from "./Components/ContactForm";

function App() {
  const location = useLocation();
  return (
    <>
      <StickyNavBar />
      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<ContactForm />}></Route>
      </Routes>
      {location.pathname === "/" && <Footer />}
    </>
  );
}

export default App;
