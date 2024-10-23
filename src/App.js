import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import kidbg from './Components/images/background/kidbg.jpg';
import menbg from './Components/images/background/menbg.jpg';
import womenbg from './Components/images/background/womenbg.jpg';
import Navbar from './Components/Navbar/Navbar';
import Blog from './Pages/Blog';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import LoginSignup from './Pages/LoginSignup';
import Payment from './Pages/Payment';
import Product from './Pages/Product';
import SearchResults from './Pages/SearchResults';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';

function App() {
  return (
    <div>
           
      <BrowserRouter>
      <Navbar/>
      <Toaster />
      <Routes>

        <Route path="/" element={<Shop />}/>
 
        <Route path="/mens" element={<ShopCategory banner={menbg} category="men" />}/>
        <Route path="/payment" element={<Payment />}/>
        <Route path="/womens" element={<ShopCategory banner={womenbg} category="women" />}/>
        <Route path="/kids" element={<ShopCategory banner={kidbg} category="kid" />}/>

        <Route path="product" element={<Product/>}>  
              <Route path=":productId" element={<Product/>}/>
        </Route>

        <Route path="/cart" element={<Cart />}/>
        
        <Route path="/login" element={<LoginSignup />}/>
        <Route path="/search" element={<SearchResults />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        </Routes>  
        <Footer/>   
      </BrowserRouter>
    </div>
  );
}

export default App;
