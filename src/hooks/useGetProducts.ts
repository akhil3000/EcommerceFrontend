import {useState,useEffect} from "react";
import axios from 'axios'
import { useGetToken } from "./useGetToken";
import { IProduct } from "../models/interfaces";
export const useGetProducts=()=>{

    const[products,setProducts]=useState<IProduct[]>([]);
    const{headers}=useGetToken();
     const fetchProducts=async()=>{
        try{
        const fetchProducts=await axios.get("http://localhost:3002/product",{
            headers

        });
        setProducts(fetchProducts.data.products);
        } catch(err){
            alert("ERROR:Something went wrong");
        }  
     };

    useEffect(()=>{
        fetchProducts();
    },[]);

    return{products};
}