// import ItemCount from "./ItemCount";
// import arrayProductos from "../components/json/productos.json"
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Carrousel from "./Carrousel";
import { useParams } from "react-router-dom";
import {addDoc, collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import Loading from "./Loading";
// import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    // useEffect(() =>{
    //     const promesa = new Promise(resolve =>{
    //         setTimeout(() =>{
    //            resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos); 
    //         }, 2000)
    //     })
    //     promesa.then (data =>{
    //         setItems(data);
            
    //     })
    // }, [id]);

    // useEffect(()=>{
    //    const db = getFirestore();
    //    const itemsCollection = collection(db, "items");
            
    //     arrayProductos.forEach(producto =>{
    //         addDoc(itemsCollection,producto);
    //     });
    //     console.log("Productos agregados correctamente")
    // }, []);

    useEffect(() =>{
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})))
        })



        
    }, [id]);    

    return(
        <>
        {id ? "" : <Carrousel/> }
         {loading ? <Loading/> : <ItemList items={items} />}
             
        </>
        
        

    )
}
export default ItemListContainer;