import { useGetProducts } from "../../hooks/useGetProducts";
import{IShopContext,ShopContext} from "../../context/shopcontext";
 import { useContext } from "react";
 import { IProduct } from "../../models/interfaces";
 import {CartItem} from "./cartitem";
 import { useNavigate } from "react-router-dom";
 import "./styles.css"
export const CheckoutPage=()=>{
    const{getCartItemCount,getTotalCartAmount,checkout}=useContext<IShopContext>(ShopContext);
    const{products}=useGetProducts();
    const navigate=useNavigate();
    const totalAmount=getTotalCartAmount();
    
    return <div className="cart">
    {" "}
    <div>
        <h1>Your Cart Items</h1>
    </div>
     <div className="cart">
         
        {products.map((product:IProduct)=>{


            if(getCartItemCount(product._id)!==0)
            {
                return <CartItem product={product} />
            }
          
        }


        )}

     
     </div>

     
      <div className="checkout">
      <p>Subtotal: ${totalAmount.toFixed(2)}</p>
      <button  onClick={()=>navigate("/shop")}>Continue Shopping</button>  
      <button onClick={checkout}>Checkout</button>
      </div>
     


    </div>;
 };