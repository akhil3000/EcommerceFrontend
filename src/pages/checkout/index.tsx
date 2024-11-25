import { useGetProducts } from "../../hooks/useGetProducts";
import{IShopContext,ShopContext} from "../../context/shopcontext";
 import { useContext } from "react";
 import { IProduct } from "../../models/interfaces";
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


            if(getCartItemCount)
            return <div></div>    
        }

        )}

     
     </div>

    </div>;
 };