
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import Menu from './components/menu';
import Contact from './components/contact';
import Review from './components/reviews';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>} />
           
      
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/reviews" element={<Review/>}/>
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
