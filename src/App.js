import Navigation from "./customer/components/Navigation/Navigation"
import HomePage from "./customer/pages/HomePage"
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product.jsx"
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Carts/Cart"
import Checkout from "./customer/components/Checkout/Checkout";
import DeliveryAddressForm from "./customer/components/Checkout/DeliveryAddressForm"
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import './App.css';
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./customer/Routers/CustomerRouters";

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
      </Routes>
      
    </div>
    <div>
      
    </div>
    <Footer />
    </>
  );
}

export default App;
