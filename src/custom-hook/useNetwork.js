import { useEffect, useState } from "react"

function useNetwork(url){
    const [data, setData]= useState([])
    const [isLoading, setIsLoading]= useState(false)
    const [error, setError]= useState(null);

    async function getData(){
        setIsLoading(true)
        try{
            const res= await fetch(url);
            const result= await res.json();
            setData(result.data || result)
        }catch(err){
            setError(err.message || 'Something went wrong');
        }finally{
            setIsLoading(false)
        }  
    }
    useEffect(()=>{
        getData();
    },[url])
    return { data, isLoading, error};
}

export default useNetwork