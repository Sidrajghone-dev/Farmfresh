import './App.css';
import './Components/main.css';
import './Components/footer.css';
import './Components/header.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Sellwithus from './Pages/Sellwithus';
import Farmers from './Pages/Farmers';

import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Cart from './Pages/Cart';
import { CartProvider } from './Components/Cardcontext';
import Thankyou from './Components/Thankyou';


function App() {
  return (
    <div className="App">
     <CartProvider>
     <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Main" element={<Main/>} />
            <Route path="/Sell" element={<Sellwithus />} />
            <Route path="/farmers" element={<Farmers />} />
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/thankyou" element={<Thankyou/>}/>
        </Routes>

        <Footer/>
     </BrowserRouter>
     </CartProvider>
    </div>
  );
}

export default App;
