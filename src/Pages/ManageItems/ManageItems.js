import React from 'react';
import useItems from '../hooks/useItems';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [items,setItems]=useItems()
    
    return (
        <div>
            <h2 className='text-center text-danger mb-5 mt-4 text-decoration-underline'>Manage Your Items</h2>
            {
                items.map(item=><ManageItem key={item._id}
                    item={item}
                ></ManageItem>)
            }
        </div>
    );
};

export default ManageItems;