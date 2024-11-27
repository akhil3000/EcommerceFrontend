import{useContext} from "react";
import {IShopContext,ShopContext} from "../../context/shopcontext";
export const PurchasedItemsPage=()=>{
   const{purchasedItems}=useContext<IShopContext>(ShopContext);
    return <div className="purchased-items-page">
    {" "}
    <h1>Previously Purchased Items</h1>{""}
    <div className="purchased-items"></div>
     {purchasedItems.map((item)=>{
      return(
        <div>
        </div>    
      )

     })


     }

    </div>;
 };