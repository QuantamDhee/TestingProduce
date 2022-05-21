import "./App.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from "./components/Header"
import Navigation from "./components/Navigation";
import Home from "./paths/Home"
import About from "./paths/About";
import Contact from "./paths/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Navigation />
        <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
