import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const[items,setItems]=useItems()
    const navigate=useNavigate()
    const hadleSeeAll=()=>{
        navigate('/manage')
    }
    return (
        <div className='item' id='item'>
            <h1 className='title'>Our Perpumes Items</h1>
           <div className='item-container'>
           {
                items.map(item=><Item
                key={item._id}
                item={item}
                ></Item>).slice(0,6)
            }
           </div>
           <div className='see-all'>
           <button onClick={hadleSeeAll}>See All Manage</button>
           </div>
        </div>
    );
};

export default Items;