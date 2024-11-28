import {useState,useEffect,useContext} from "react";
import axios from 'axios'
import { useGetToken } from "./useGetToken";
import { IProduct } from "../models/interfaces";
import { ShopContext,IShopContext} from "../context/shopcontext";
export const useGetProducts=()=>{

    const[products,setProducts]=useState<IProduct[]>([]);
    const{headers}=useGetToken();
    const{isAuthenticated}=useContext<IShopContext>(ShopContext);
     const fetchProducts=async()=>{
        try{
        const fetchProducts=await axios.get("http://localhost:3002/product/"
           ,{
            headers
              }
            
    );
        setProducts(fetchProducts.data.products);
    }catch(err)
    {
        alert("Something went wrong");
    }
        
     };

    useEffect(()=>{
        if(isAuthenticated)
        {     
        fetchProducts();
        }
    },[isAuthenticated]);

    return{products};
}