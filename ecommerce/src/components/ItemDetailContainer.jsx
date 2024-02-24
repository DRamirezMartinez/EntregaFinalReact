import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
// import arrayProductos from "./json/productos.json"


const ItemDetailContainer = () => {
    const[item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    
    // useEffect(() =>{
    //     const promesa = new Promise(resolve =>{
    //         setTimeout(() =>{
    //             let producto = arrayProductos.find(item => item.id === parseInt(id)); //capturador de parametro de array
    //            resolve(producto); 
    //         }, 2000)
    //     })
    //     promesa.then (data =>{
    //         setItem(data);
            
    //     })

    // }, [id]);

    useEffect(() =>{
       const db = getFirestore();
       const producto = doc(db, "items", id); 
       getDoc(producto).then(resultado => {
        setLoading(false);
        setItem({id:resultado.id, ...resultado.data()});
       });

    },[id]);

    return(
        <>
        {loading ? <Loading/> : <ItemDetail item={item}/>}
        </>
    )
}
export default ItemDetailContainer;