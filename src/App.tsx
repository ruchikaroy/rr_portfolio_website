import Footer from "./Components/Footer";
import Content from "./Components/Content";
import { Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects";
import StickyNavBar from "./Components/StickyNavBar";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <>
      <StickyNavBar />
      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<ContactForm />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
