import { useEffect, useState } from 'react';

const useMyitems = () => {
    const[myItems,setMyItems]=useState([])
    useEffect(()=>{
        const url= `http://localhost:5000/myItems`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyItems(data)) 
    },[myItems])
    return [myItems,setMyItems]
};

export default useMyitems;