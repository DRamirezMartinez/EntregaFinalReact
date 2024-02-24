import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4 d-flex align-items-start justify-content-center">
                            <img src={item.image} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text"><b className="text-body-dark">${item.price}</b></p>
                                <ItemCount stock={item.stock}  onAdd={onAdd} />                                
                            </div>
                            
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="col">
                
                </div>               
            </div>
        </div>
    )
}
export default ItemDetail;