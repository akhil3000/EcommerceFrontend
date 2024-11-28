import {useContext} from "react";
import{IShopContext,ShopContext} from "../context/shopcontext";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import{useCookies} from "react-cookie";

export const Navbar=()=>{

     const{availableMoney,isAuthenticated,setIsAuthenticated}=useContext<IShopContext>(ShopContext);  
      const[_,setCookies]=useCookies(["access_token"])
     const logout=()=>{
        setIsAuthenticated(false);

     }
    return <div className="navbar">
        
        <div className="navbar-title">
         
         <h1>Shoppers Stop</h1>   

        </div>

        <div className="navbar-links">
         {isAuthenticated&& (  
         <>    
         <Link to="/shop">Shop</Link>
         <Link to="/" onClick={logout}>Logout</Link>
         <Link to="/checkout">
         {" "}
         <FontAwesomeIcon icon={faShoppingCart}/>{""}
         </Link>
         <Link to="/purchased-items">Purchases</Link>
        <Link to="/about">AboutUs</Link>
        <span>${availableMoney.toFixed(2)}</span>
        </>
         )} 
        </div>
         
    </div>
}