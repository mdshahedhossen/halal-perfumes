import { useEffect, useState } from 'react';

const useMyitems = () => {
    const[myItems,setMyItems]=useState([])
    useEffect(()=>{
        const url= `https://warm-wildwood-52542.herokuapp.com/myItems`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyItems(data)) 
    },[myItems])
    return [myItems,setMyItems]
};

export default useMyitems;