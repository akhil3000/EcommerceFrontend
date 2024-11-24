import {IProduct} from "../../models/interfaces";
import './styles.css';
interface Props{
    product:IProduct;
}

export const Product=(props:Props)=>{
    const{_id,productName,description,price,stockQuantity,imageURL}=props.product;

    return <div className="product">
        <img src={imageURL}/>
        <div className="description">
            <h3>{productName}</h3>
            <p>{description}</p>
            <p>${price}</p>
        </div>
        <button className="add-to-cart-bttn" >Add To Cart</button>
        {stockQuantity===0 && <h1>Out OF STOCK</h1>}
    </div>
}