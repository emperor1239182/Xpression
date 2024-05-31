import { useState, useContext, createContext } from "react";
const CartContent = createContext();


// eslint-disable-next-line react/prop-types
export const  Cart = ({children}) => {
    const [cartItems, setItems] = useState([]);

    const addToCart = (items) =>{
        setItems([...cartItems, items]);
    };
    
    return (
        
        <CartContent.Provider value ={{cartItems, addToCart}}>
            {children}
        </CartContent.Provider>
    
    );
};

export const useCart = () => {
    return useContext(CartContent);
  };
