import { useGetProducts } from "../../hooks/useGetProducts";
import{IShopContext,ShopContext} from "../../context/shopcontext";
 import { useContext } from "react";
 import { IProduct } from "../../models/interfaces";
 import {CartItem} from "./cartitem";
 import "./styles.css"
export const CheckoutPage=()=>{
    const{getCartItemCount}=useContext<IShopContext>(ShopContext);
    const{products}=useGetProducts();
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

    </div>;
 };