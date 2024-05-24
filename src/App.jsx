import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/Place Order/PlaceOrder";
import Footer from "./components/Footer/Footer.jsx";
import { useState } from "react";
import Login from "./components/LoginPopup/Login.jsx";
function App() {
  const [showlogin, setShowlogin] = useState(false);
  return (
    <>
      {showlogin ? <Login setShowlogin={setShowlogin} /> : <></>}
      <div className="w-[80%] m-auto p-5">
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
