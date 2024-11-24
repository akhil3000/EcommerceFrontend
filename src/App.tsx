import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { AuthPage } from './pages/auth';
import { ShopPage } from './pages/shop';
import { CheckoutPage } from './pages/checkout';
import { PurchasedItemsPage } from './pages/purchaseditems';
import { About } from './pages/about/About';
import './App.css';

function App() {
  return (
   
  <div className="App">
    <Router>
       <Navbar/>
       <Routes>
          <Route path="/" element={<ShopPage/>}/>
          <Route path="/auth" element={<AuthPage/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
          <Route path="/purchased-items" element={<PurchasedItemsPage/>}/>
          <Route path="/about" element={<About/>}/>
       </Routes>
       
    </Router>


  </div>
  );
}

export default App;
