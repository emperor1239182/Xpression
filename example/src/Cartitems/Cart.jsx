import { useContext, createContext, useState} from "react";
import { useLocalStorage } from "usehooks-ts";
const CartContent = createContext();


// eslint-disable-next-line react/prop-types
export const  Cart = ({children}) => {
    const [cartItems, setItems] = useLocalStorage('carts', []);
    const [showNotification, setShowNotification] = useState(false);
    
    
    const addToCart = (items) =>{
        setItems([...cartItems, items]);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    const clear = (index) =>{
        setItems(cartItems.filter((_, i) => i !== index));
    }

    


    return (
        
        <CartContent.Provider value ={{cartItems, addToCart, clear, showNotification}}>
            {children}
        </CartContent.Provider>
    
    );
};

export const useCart = () => {
    return useContext(CartContent);
  };
