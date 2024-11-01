import {Toaster} from "sonner";
import { Routes,Route } from 'react-router-dom'
import AddProduct from './pages/AddProduct/AddProduct.jsx'
import ProductsList from './pages/ProductsList/ProductsList.jsx'
import Orders from './pages/Orders/Orders'
import Login from "./pages/Login/Login.jsx";
import Layout from "./pages/Layout/Layout.jsx";
import Register from "./pages/Register/Register.jsx";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct.jsx";
import CategoriesList from "./pages/CategoriesList/CategoriesList.jsx";
import AddCategory from "./pages/AddCategory/AddCategory.jsx";
import UpdateCategory from "./pages/UpdateCategory/UpdateCategory.jsx";
import DetailOrder from "./pages/DetailOrder/DetailOrder.jsx";

const App = () => {

  return (
    <>
      <Toaster
        richColors={true}
        position={"top-right"}
        expand={true}
        closeButton={true}
      />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/products" element={<ProductsList/>}/>
          <Route path="/products/add" element={<AddProduct/>}/>
          <Route path="/products/:id/update" element={<UpdateProduct/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/orders/:id" element={<DetailOrder/>}/>
          <Route path="/categories" element={<CategoriesList/>}/>
          <Route path="/categories/add" element={<AddCategory/>}/>
          <Route path="/categories/:id/update" element={<UpdateCategory/>}/>
        </Route>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/auth/register" element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
