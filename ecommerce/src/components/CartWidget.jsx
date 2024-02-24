import { useContext } from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/cartwhite.svg"
import { CartContext } from "./context/CartContext";
const CartWidget = () => {

    const {CartTotalProductos} = useContext(CartContext);
    return(
        CartTotalProductos() > 0 ? <Link to={"/cart"} className="btn btn-actions position-relative ">
            <img src={iconCart} alt="Icon-cart" width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {CartTotalProductos()}                
            </span>
        </Link> : "" 
        
    )
}
export default CartWidget;