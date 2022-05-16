import "./App.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from "./components/Header"
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
    </div>
  );
}

export default App;
