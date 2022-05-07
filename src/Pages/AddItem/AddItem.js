import React from 'react';
import { useForm } from 'react-hook-form';
import './AddItem.css'

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        console.log(data);
        const url="http://localhost:5000/items"
        fetch(url,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            
        })
            .then(res=>res.json())
            .then(result=>{
                console.log(result)
            })

    } 
    return (
        <div className='w-50 mx-auto'>
            <h1 className='add-title'>Add Your New Item</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Item name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value='Add Item'/>
            </form>
        </div>
    );
};

export default AddItem;