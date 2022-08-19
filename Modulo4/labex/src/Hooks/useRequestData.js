import React, {useEffect, useState} from "react";
import axios from 'axios'

export const useRequestData=(url)=>{
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [erro, setErro] = useState(undefined)
    const token = localStorage.getItem("token")
     useEffect(()=>{
        setIsLoading(true);
        axios.get(url) 
        .then((response)=>{
            setIsLoading(false);
            setData(response.data);
        }).catch(error =>{
            setIsLoading(false);
            setErro(error);
        })
     },[])

      return [data, isLoading, erro];
  
  }
  