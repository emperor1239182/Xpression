// eslint-disable-next-line no-unused-vars
import { useCart } from "../Cartitems/Cart";
// eslint-disable-next-line react/prop-types
const AddToCartButton = ({ onClick, children }) => {
  const bot = {
    border: '5px  transparent',
    backgroundColor: 'rgb(129, 140, 150)',
    borderRadius: '5px',
    padding:'6px 14px',
    color: 'white'
  }
  return (
    <button onClick={onClick} style={bot}>
        {children}
    </button>
  );
};

export default AddToCartButton;
 

