import {useContext} from "react";
import{IShopContext,ShopContext} from "../context/shopcontext";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{faShoppingCart} from "@fortawesome/free-solid-svg-icons";

export const Navbar=()=>{

     const{availableMoney}=useContext<IShopContext>(ShopContext);   
    return <div className="navbar">
        
        <div className="navbar-title">
         
         <h1>Shoppers Stop</h1>   

        </div>

        <div className="navbar-links">
         <Link to="/shop">Shop</Link>
         <Link to="/">Auth</Link>
         <Link to="/checkout">
         {" "}
         <FontAwesomeIcon icon={faShoppingCart}/>{""}
         </Link>
         <Link to="/purchased-items">Purchases</Link>
        <Link to="/about">AboutUs</Link>
        <span>${availableMoney.toFixed(2)}</span>

          
        </div>
         
    </div>
}