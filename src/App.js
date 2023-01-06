import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Cart from './Cart';
import Singleproduct from './Singleproduct';
import ErrorPage from './ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';


const App =()=> {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route path = "/products" element={<Products/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/cart" element={<Cart/>}/>
        <Route path = "/*" element={<ErrorPage/>}/>
        <Route path = "/singleproduct/:id" element={<Singleproduct/>}/>
      </Routes>
      <Footer/>

    </Router>
    
  );
}

export default App;
