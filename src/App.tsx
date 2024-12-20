import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { AuthPage } from './pages/auth';
import { ShopPage } from './pages/shop';
import { CheckoutPage } from './pages/checkout';
import { PurchasedItemsPage } from './pages/purchaseditems';
import { About } from './pages/about/About';
import { ShopContextProvider } from './context/shopcontext';
import './App.css';

function App() {
  return (
   
  <div className="App">
    <Router>
      <ShopContextProvider>
       <Navbar/>
       <Routes>
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/" element={<AuthPage/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
          <Route path="/purchased-items" element={<PurchasedItemsPage/>}/>
          <Route path="/about" element={<About/>}/>
       </Routes>
       </ShopContextProvider>
    </Router>


  </div>
  );
}

export default App;
