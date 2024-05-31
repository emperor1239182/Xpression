import { useCart } from "../Cartitems/Cart";

const Cartlist = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item} alt={`Cart item ${index}`} style={{ width: '100px', height: '100px' }} />
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Cartlist;
