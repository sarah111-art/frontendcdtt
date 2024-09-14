import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import bannermens from './Components/images/banners/bannermens.png'
import bannerwomens from './Components/images/banners/bannerwomens.png'
import bannerkids from './Components/images/banners/bannerkids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path="/" element={<Shop />}/>
        <Route path="/mens" element={<ShopCategory banner={bannermens} category="men" />}/>
        <Route path="/womens" element={<ShopCategory banner={bannerwomens} category="women" />}/>
        <Route path="/kids" element={<ShopCategory banner={bannerkids} category="kid" />}/>

        <Route path="product" element={<Product/>}>  
              <Route path=":productId" element={<Product/>}/>
        </Route>

        <Route path="/cart" element={<Cart />}/>
        
        <Route path="/login" element={<LoginSignup />}/>

        </Routes>  
        <Footer/>   
      </BrowserRouter>
    </div>
  );
}

export default App;
