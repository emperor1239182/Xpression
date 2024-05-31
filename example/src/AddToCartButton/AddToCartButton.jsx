// eslint-disable-next-line no-unused-vars
import { useCart } from "../Cartitems/Cart";
// eslint-disable-next-line react/prop-types
const AddToCartButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
        {children}
    </button>
  );
};

export default AddToCartButton;
 

