
import Item from "./Item";

const ItemList = ({items}) => {
    return (       
        <div className="container-fluid my-3 bg-light">
            <div className="container">
            <div className="row">                
                {items.map(item => (
                    <Item key={item.id} item={item}/>
                ))}
                
            </div>
            </div>
           
        </div>
       
       
    )
}
export default ItemList;