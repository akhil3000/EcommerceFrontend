import React,{useContext} from 'react'
import { IProduct } from '../../models/interfaces';
import "./styles.css"
import { ShopContext } from '../../context/shopcontext';
import { IShopContext } from '../../context/shopcontext';
interface Props{
    product:IProduct;
}

export const CartItem=(props:Props)=>{
    const{_id,imageURL,productName,price}=props.product;
    const{addToCart,removeFromCart,updateCartItemCount,getCartItemCount}=useContext<IShopContext>(ShopContext);
    const cartItemCount=getCartItemCount(_id);
    return(
        <div className="cartItem">
        <img src={imageURL} />
      <div className="description">
        <h3>{productName}</h3>
        
        <p> ${price}</p>
      </div>
      <div className="countHandler">
      <button onClick={()=>removeFromCart(_id)}>-</button>
      <input type="number" value={cartItemCount}
      onChange={(e)=>updateCartItemCount(Number(e.target.value),_id)}
      />
      <button  onClick={()=>addToCart(_id)} >+</button>
      </div>
       
        
      </div>
    )
}
