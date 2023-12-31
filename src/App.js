import "./App.css";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Products from "./components/Home/Products";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from 'react-router-dom';
import Orders from "./components/Orders/Orders";
import OrderDetails from "./components/Orders/OrderDetails";

function App() {
 
  
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Products/>} />
      <Route path='/cart' element={<Cart/>  } />
      <Route path='/orders' element={<Orders/>  } />
      <Route path='/orderDetails' element={<OrderDetails/>  } />

    </Routes>
 
   <Footer/>
    </>
   
  );
}

export default App;
