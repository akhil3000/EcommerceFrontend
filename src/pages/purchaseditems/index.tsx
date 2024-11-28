import{useContext} from "react";
import {IShopContext,ShopContext} from "../../context/shopcontext";
import "./styles.css"
export const PurchasedItemsPage=()=>{
   const{purchasedItems,addToCart,getCartItemCount}=useContext<IShopContext>(ShopContext);
    return <div className="purchased-items-page">
    {" "}
    <h1>Previously Purchased Items</h1>{""}
    <div className="purchased-items">
     {purchasedItems.map((item)=>{
        const count=getCartItemCount(item._id);
      return(
        <div className="item">
        <h3>{item.productName}</h3>
        <img src={item.imageURL}/>
        <p>${item.price}</p>
        <button  
        onClick={()=>addToCart(item._id)}
        >
            purchase again
        </button>
        </div>    
      )

     })


     }
    </div>
    </div>;
 };