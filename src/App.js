import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './home';
import Menu from './Menu';
import Cart from './Cart';
import Reservation from './Reservation';
import Contact from './Contact';
import Login from './Login';
import './App.css';
import { CartProvider } from './cartContext';
//import Profile from './Profile';

function App() {
  return (
    <CartProvider> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="cart" element={<Cart />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider> 
  );
}

export default App;
