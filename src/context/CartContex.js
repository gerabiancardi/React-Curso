import { createContext, useState} from "react";

export const CartContex = createContext(0)

export const CartProvider = ({children}) => {
    const [items, setItems] = useState(0) 
    const addItem = ()=> setItems(items + 1)
    return (
        <CartContex.Provider value={{items, addItem}}>
        {children}
        </CartContex.Provider>
    )
}

