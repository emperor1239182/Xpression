import { useState, useContext, createContext, useEffect } from "react";
const CartContent = createContext();


// eslint-disable-next-line react/prop-types
export const  Cart = ({children}) => {
    const [cartItems, setItems] = useState([]);

    // Save cart items to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      }, [cartItems]);

    
    
      window.onload = () =>{
        const savedItems = localStorage.getItem('cartItems');
        if (savedItems) {
            setItems(JSON.parse(savedItems));
        }
      }
      
    

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
