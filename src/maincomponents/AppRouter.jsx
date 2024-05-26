import Home from "../pages/home";
import Contact from "../pages/contact";
import About from '../pages/about';
import Chrono from '../pages/chrono';
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
      <>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/chrono" element={<Chrono />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </>
    );
  };

    



export default AppRouter;