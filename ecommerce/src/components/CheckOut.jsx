import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { Link } from "react-router-dom";
const CheckOut = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();
    const {cart, clear, CartTotalProductos, sumaTotalProductos } = useContext(CartContext);


    const generateOrder = () => {
       if (nombre.length === 0) {
        return false;       
    }

    if (email.length === 0) {
        return false;
       }

       if (telefono.length === 0) {
        return false;
       }
       
    const buyer = {name:nombre, email:email, phone:telefono}; 
    const items = cart.map(item => ({id:item.id, title:item.title, price:item.price}));  
    const fecha = new Date();
    const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes}}`;
    const total = sumaTotalProductos();
    const order = {buyer:buyer, items:items, date:date, total:total};

    //Insertar documento al Firestore   

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection,order).then(resultado => {
        clear();
        setOrderId(resultado.id);
    });

    }   

    return(
        <div className="container my-3">
            <div className="row">
                <div className="col text-center">
                     <h1>Checkout</h1>                                
                </div>                
            </div>
            <div className="row">
                <div className="col md-6 my-3">
                    <form>
                    <div className="mb-3">
                        <label className="form-label">Nombre Completo</label>
                        <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                       
                    </div>
                    <div className="mb-3">
                        <label className="form-label">E-mail</label>
                        <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}}/>
                       
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Telefono</label>
                        <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}}/>
                       
                    </div>
                 
                        <button type="button" className="btn btn-actions" onClick={generateOrder}>Generar Orden</button>
                    </form>
                </div>
                <div className="col md-6 text-center my-5">
                    <table className="table table-hover">
                        <tbody>
                           
                            {cart.map(product =>
                            <tr key={product.id}>
                                <td className="align-middle"> <img src={product.image} alt={product.title} width={80} /></td>
                                <td className="text-start align-middle">{product.title}</td>
                                <td className="text-start align-middle">${product.price}</td>
                                <td className="text-start align-middle">{product.quantity}</td>
                                <td className="text-start align-middle">${product.quantity * product.price}</td> 
                                
                            </tr>
                            )}                            
                            <tr>
                               <td className="text-center align-middle" colSpan={4}>Suma Total</td>
                               <td className="text-start align-middle"> ${sumaTotalProductos()} </td>
                             
                            </tr>
                        </tbody>
                    </table>                               
                </div>                
            </div>
            <div className="row-my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-primary p-3 text-center" role="alert">
                                    <h1>Gracias por tu Compra!</h1>
                                    <h3>Tu ID de Compra es: <b>{orderId}</b></h3>                                
                               </div> : ""}                
                </div>
            </div>
        </div>
    )
}
export default CheckOut;