import{createContext,useState,useEffect} from "react";
import { useGetProducts } from "../hooks/useGetProducts";
import { IProduct } from "../models/interfaces";
import axios from "axios";
import { useGetToken } from "../hooks/useGetToken";
import { useNavigate } from "react-router-dom";
export interface IShopContext{
    addToCart:(itemId:string)=>void;
    removeFromCart:(itemId:string)=>void;
    updateCartItemCount:(newAmount:number,itemId:string)=>void;
    getCartItemCount:(itemId:string)=>number;
    getTotalCartAmount:()=>number;
    checkout:()=>void;
    availableMoney:number;
    purchasedItems:IProduct[];
}

const defaultVal:IShopContext={
  addToCart:()=>null,
  removeFromCart:()=>null,
  updateCartItemCount:()=>null,
  getCartItemCount:()=>0,
  getTotalCartAmount:()=>0,
  checkout:()=>null,
  availableMoney:0,
  purchasedItems:[]

} 
  
export const ShopContext=createContext<IShopContext>(defaultVal);
export const ShopContextProvider=(props)=>{
 const[cartItems,setCartItems]=useState<{string:number} | {}>({}); 
 const[availableMoney,setAvailableMoney]=useState<number>(0);
 const[purchasedItems,setPurchasedItems]=useState<IProduct[]>([]); 
 const{products}=useGetProducts();
 const{headers}=useGetToken(); 
 const navigate=useNavigate();

    const fetchAvailableMoney=async()=>{
        try{ 
        const res=await axios.get(`http://localhost:3002/user/available-money/${localStorage.getItem(
          "userID"
        
        )}`,
        {headers}
         );
         setAvailableMoney(res.data.availableMoney);
         

        }catch(err){

          alert("ERROR:something went wrong.");
        }   

    }



    
    const fetchPurchasedItems=async()=>{
      try{ 
      const res=await axios.get(`http://localhost:3002/product/purchased-items/${localStorage.getItem(
        "userID"
      
      )}`,
      {headers}
       );
       setPurchasedItems(res.data.purchasedItems);
       

      }catch(err){

        alert("ERROR:something went wrong.");
      }   

  }


  const getCartItemCount=(itemId:string):number=>{
    if(itemId in cartItems){
        return cartItems[itemId]
    }
    return 0;
  }
  const addToCart = (itemId: string) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

 const removeFromCart=(itemId:string)=>{
   if(!cartItems[itemId]) return;
   if(cartItems[itemId]==0) return;
   setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));

   
 }
 const updateCartItemCount=(newAmount:number,itemId:string)=>{
  if(newAmount<0) return;
  setCartItems((prev)=>({...prev,[itemId]:newAmount}))

 } 

 const getTotalCartAmount=()=>{
  let totalAmount=0;
  for(const item in cartItems){
    if(cartItems[item]>0){
        let itemInfo:IProduct=products.find((product)=>product._id===item)
        totalAmount += cartItems[item]*itemInfo.price;

       
    }
  }
   return totalAmount;
 }

 const checkout=async()=>{
  const body={customerID:localStorage.getItem("userID"),cartItems};
  try{
    await axios.post("http://localhost:3002/product/checkout",body,{
      headers,
    });

   setCartItems({}); 
   fetchAvailableMoney();

    navigate("/shop");
  }catch(err){
    console.log(err);
  }

 }

 useEffect(()=>{
   fetchAvailableMoney(); 
   fetchPurchasedItems();
 },[]);



 const contextValue:IShopContext={

    addToCart,
    removeFromCart,
    updateCartItemCount,
    getCartItemCount,
    getTotalCartAmount,
    checkout,
    availableMoney,
    purchasedItems
 };   
return <ShopContext.Provider value={contextValue}>
    {props.children}
    </ShopContext.Provider>

}

 