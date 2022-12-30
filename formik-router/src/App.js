import { BrowserRouter, Routes ,Route } from "react-router-dom";
import About from "./Main/About/About";
import Contact from "./Main/Contact/Contact";
import Home from "./Main/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
