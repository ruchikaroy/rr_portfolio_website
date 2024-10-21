import Footer from "./Components/Footer";
import Content from "./Components/Content";
import { Routes, Route, useLocation } from "react-router-dom";
import Projects from "./Components/Projects";
import StickyNavBar from "./Components/StickyNavBar";

function App() {
  const location = useLocation();
  return (
    <>
      <StickyNavBar />
      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
      {location.pathname !== "/projects" && <Footer />}
    </>
  );
}

export default App;
