import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Initiatives from "./pages/Initiatives";
import EventDetails from "./pages/EventDetails";
import OurTeam from "./pages/OurTeam";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Initiatives" element={<Initiatives />}/>

        
        <Route path="/events/:id" element={<EventDetails/>} />
          <Route path="/ourteam" element={<OurTeam/>} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
