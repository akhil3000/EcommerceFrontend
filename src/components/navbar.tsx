
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{faShoppingCart} from "@fortawesome/free-solid-svg-icons";

export const Navbar=()=>{
    return <div className="navbar">
        
        <div className="navbar-title">
         
         <h1>Shoppers Stop</h1>   

        </div>

        <div className="navbar-links">
         <Link to="/">Shop</Link>
         <Link to="/auth">Auth</Link>
         <Link to="/checkout">
         {" "}
         <FontAwesomeIcon icon={faShoppingCart}/>{""}
         </Link>
         <Link to="/purchased-items">Purchases</Link>
        <Link to="/about">AboutUs</Link>
         
        </div>
         
    </div>
}