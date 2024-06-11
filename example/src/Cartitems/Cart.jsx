import { useContext, createContext } from "react";
import { useLocalStorage } from "usehooks-ts";
const CartContent = createContext();


// eslint-disable-next-line react/prop-types
export const  Cart = ({children}) => {
    const [cartItems, setItems] = useLocalStorage('carts', [])
      
    

    const addToCart = (items) =>{
        setItems([...cartItems, items]);
    };

    const clear = (index) =>{
        setItems(cartItems.filter((_, i) => i !== index));
    }

    return (
        
        <CartContent.Provider value ={{cartItems, addToCart, clear}}>
            {children}
        </CartContent.Provider>
    
    );
};

export const useCart = () => {
    return useContext(CartContent);
  };
