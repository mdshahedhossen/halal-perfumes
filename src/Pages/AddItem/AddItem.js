import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddItem.css'

const AddItem = () => {
    const [user] = useAuthState(auth)

    const imgRef = useRef('')
    const nameRef = useRef('')
    const priceRef = useRef('')
    const quantityRef = useRef('')
    const supplierRef = useRef('')
    const descriptionRef = useRef('')

    const handleAddItems = (e) => {
        e.preventDefault();
        const img = imgRef.current.value
        const name = nameRef.current.value
        const price = priceRef.current.value
        const quantity = quantityRef.current.value
        const supplier = supplierRef.current.value
        const description = descriptionRef.current.value
        const email = e.target.email.value

        const myItems = { img, name, price, quantity, supplier, description, email }

        fetch('http://localhost:5000/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Items added successfully!!!');
                e.target.reset();
            })

            fetch('http://localhost:5000/myItems', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(myItems)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    e.target.reset();
                })
        
    } 
    return (
        <div className=''>
            <h3 className=' text-success margin-text text-center'>Please!! Add a New Items</h3>
            <div className=' d-flex justify-content-center'>
                <form onSubmit={handleAddItems} className='mt-3 p-3- shadow w-50 mx-auto'>
                    <div className='d-flex justify-content-center flex-column line mt-4 p-3'>
                        <label className='fw-bold' htmlFor="email">UserEmail*</label><br />
                        <input className='fw-bold text-secondary' type="email" value={user.email} name="email" id="1" required readOnly />
                    </div>
                    <div className='d-flex justify-content-center flex-column line mt-4 p-3'>
                        <label className='fw-bold' htmlFor="img">Image URL*</label><br />
                        <input ref={imgRef} type="text" name="img" id="1" required />
                    </div>
                    <div className='d-flex justify-content-center flex-column line mt-4 p-3'>
                        <label className='fw-bold' htmlFor="">Item Name*</label><br />
                        <input ref={nameRef} type="text" name="name" id="2" required />
                    </div>
                    <div className='d-flex justify-content-center flex-column line mt-4 p-3'>
                        <label className='fw-bold' htmlFor="">Price*</label><br />
                        <input ref={priceRef} type="number" name="number" id="2" required />
                    </div>
                    <div className='d-flex justify-content-center flex-column line mt-4 p-3'>
                        <label className='fw-bold' htmlFor="">Description*</label><br />
                        <textarea ref={descriptionRef} type="text" name="description" id="2" required />
                    </div>

                    <div className='d-flex justify-content-center flex-column line mt-4 p-3'>
                        <label className='fw-bold' htmlFor="">Quantity*</label><br />
                        <input ref={quantityRef} type="number" name="quantity" id="2" required />
                    </div>

                    <div className='d-flex justify-content-center flex-column line  p-3'>
                        <label className='fw-bold' htmlFor="">supplier*</label><br />
                        <input ref={supplierRef} type="text" name="supplier" id="2" required />
                    </div> 

                    <div className='d-flex justify-content-center'>
                        <input className='login-btn px-4 py-3' type="submit" value="Add Item" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;