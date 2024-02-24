import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


//funciionalidad del Contador
const ItemCount = ({stock, onAdd}) => {

    
    const [counter, setCounter] = useState(0);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);


    const incrementar = () => {
        if(counter < itemStock){
            setCounter(counter + 1)
        }
    }

    const decrementar = () => {
        if(counter > 1) {
            setCounter(counter - 1);
        }
    }

    const addToCart = () => {
        if (counter <= itemStock){
            setItemStock(itemStock - counter);
            setCounter(1);
            onAdd(counter);
            setItemAdded(true);
            // console.log("Agregaste " + counter + " Productos al Carrito. " + (itemStock - counter) + " productos disponibles.")
        }    
    }

    useEffect(() =>{
        setItemStock(stock)
    },[stock]);

    return(
        <>
        <div className="row my-1">
            <div className="col">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-actions" onClick={decrementar} >-</button>
                    <button type="button" className="btn btn-actions">{counter}</button>
                    <button type="button" className="btn btn-actions" onClick={incrementar}>+</button>
                </div>
            </div>
        </div>

        <div className="row my-1">
            <div className="col">                
                    {itemAdded ? <Link to={"/cart"} type="button" className="btn btn-actions">Terminar Mi compra</Link> 
                    : <button type="button" className="btn btn-actions" onClick={addToCart} >Agregar al Carrito</button>}
                </div>
            </div>
        
        </>
    )
}
export default ItemCount;