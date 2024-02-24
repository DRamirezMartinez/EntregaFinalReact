import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import trashIcon from "../assets/trash.svg"


const Cart = () => {
    const {cart, removeItem, clear, CartTotalProductos, sumaTotalProductos } = useContext(CartContext);

    if (CartTotalProductos() == 0) {
        return(
          <div className="container text-center">
            <div className="row">
                <div className="col my-5">
                <div className="alert alert-primary d-flex align-items-center justify-content-center" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    <div >
                        No se encontraron productos en el carrito!
                    </div>
                                        
                </div>
                <Link to={"/"} className="btn btn-primary  ">Volver a la Pagina Principal</Link>
                </div>
            </div>
          </div>  
        )
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                     <h1>Productos Seleccionados</h1>                                
                </div>                
            </div>
            <div className="row">
                <div className="col text-center">
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                            <td className="text-end align-middle" colSpan={8}><a href="#" onClick={clear} 
                            className="btn btn-actions" >Vaciar Carrito <img src={trashIcon} alt="Eliminar del Carrito" title="Eliminar producto" />
                                    </a></td>
                            </tr>
                            {cart.map(product =>
                            <tr key={product.id}>
                                <td className="align-middle"> <img src={product.image} alt={product.title} width={80} /></td>
                                <td className="text-start align-middle">{product.title}</td>
                                <td className="text-start align-middle">${product.price}</td>
                                <td className="text-start align-middle">{product.quantity}</td>
                                <td className="text-start align-middle">${product.quantity * product.price}</td> 
                                <td className="text-end align-middle"><a href="#" onClick={() => {removeItem(product.id)}}><img src={trashIcon} alt="Eliminar del Carrito" title="Eliminar producto" />
                                    </a></td>
                            </tr>
                            )}                            
                            <tr>
                               <td className="text-center align-middle" colSpan={4}>Suma Total</td>
                               <td className="text-start align-middle"> ${sumaTotalProductos()} </td>
                               <td className="text-end align-middle"> <Link to={"/checkout"} className="btn btn-actions"> Checkout </Link> </td> 
                            </tr>
                        </tbody>
                    </table>                               
                </div>                
            </div>
        </div>
    )
}
export default Cart; 