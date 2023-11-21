import './App.css';
import Home from './pages/home/home';
import Product_display from './pages/product_display/product_display';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home/>}/> */}
        <Route index element={<Home/>}/>
        <Route element={<Home/>} path="/home"/>
        <Route element={<Product_display/>} path="/product"/>
        <Route element={<About/>} path="/About"/>
        <Route element={<Contact/>} path="/Contact"/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
