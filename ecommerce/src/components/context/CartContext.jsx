import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setcart] = useState([]);

    const addItem = (item, quantity) => {
        if (isIncart(item.id)) {
           let pos = cart.findIndex(product => product.id === id); 
           cart[pos].quantity += quantity;
           setcart([...cart]);    
        } else {
          setcart([...cart, {...item, quantity:quantity}]);      
        }

    }

    const removeItem = (id) => {
        const items = cart.filter(product => product.id != id);
        setcart([...items]);
    }

    const clear = () => {
        setcart([]);
    }

    const isIncart = (id) => {
        return cart.some(product => product.id === id);
    }

    const CartTotalProductos = () => {
        return cart.reduce((acum, product) => acum += product.quantity, 0);
    }

    const sumaTotalProductos = () => {
        return cart.reduce((acum, product) => acum += product.quantity * product.price, 0);
    
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, CartTotalProductos, sumaTotalProductos}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;
