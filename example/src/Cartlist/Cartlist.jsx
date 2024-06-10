import { useCart } from "../Cartitems/Cart";
import {FaTrash} from 'react-icons/fa'
const Cartlist = () => {
  const { cartItems } = useCart();
  const empty ={
    width: '30vw',
    height: '30vh',
    margin: 'auto auto',
    display: 'block'
  }
  
  const { clear } = useCart();

  return (
    <div id="cartDisplay">
      <h2 style={{textAlign:'center', color:'Highlight', margin:'40px'}}>Cart Items</h2>
      {cartItems.length === 0 ? (
        <div>
        <img src="/public/emptybox.jpeg" style={empty}/>
        <p style={{textAlign:'center'}}>Your cart is empty!</p>
        </div>
      ) : (
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item} alt={`Cart item ${index}`}  className="cartImage"/> 
            <div style={{marginBottom:'15px', marginTop:'-10px'}}>
            <button onClick={()=> clear(index)} className="cartBot">Remove item <FaTrash /></button>
            
            </div>
            </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default Cartlist;
