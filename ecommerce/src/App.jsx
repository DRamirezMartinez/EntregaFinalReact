import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error4041 from "./components/Error4041";
import Cart from "./components/Cart";
import CartContextProvider from "./components/context/CartContext";
import CheckOut from "./components/CheckOut";


const App = () => {
  return(
    <CartContextProvider>
    <BrowserRouter>
      <Header/>     
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
        <Route path={"/category/:id"} element={<ItemListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
        <Route path={"/cart/"} element={<Cart/>}/>
        <Route path={"/Checkout/"} element={<CheckOut/>}/>
        <Route path={"*"} element={<Error4041/>}/>
      </Routes>
      <Banner/> 
      <Footer/>
    </BrowserRouter>
    </CartContextProvider>
    
  )
}
export default App;
 