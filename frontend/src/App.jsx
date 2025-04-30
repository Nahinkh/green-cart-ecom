
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Footer from "./component/Footer";
import { useAppContext } from "./context/AppContext";
import Login from "./component/Login";
import AllProduct from "./pages/AllProduct";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import AddAddress from "./pages/AddAddress";
import MyOrders from "./pages/MyOrders";
import AdminLogin from "./component/admin/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import AddProduct from "./pages/admin/AddProduct";
import ProductList from "./pages/admin/ProductList";
import Orders from "./pages/admin/Orders";

function App() {
  const isAdminPath = useLocation().pathname.includes("admin");
  const{showUserLogin,isAdmin} =useAppContext();
  return (
    <>
        {isAdminPath ? "" : <Navbar />}
        {showUserLogin ? <Login />:null}

        <Toaster/>
        <div className={`{isAdmin ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-product" element={<AllProduct />} />
            <Route path="/all-product/:category" element={<ProductCategory />} />
            <Route path="/all-product/:category/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add-address" element={<AddAddress />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/admin" element={isAdmin? <AdminLayout/> :<AdminLogin/>} >
            <Route index element={isAdmin?<AddProduct/>:null}/>
            <Route path="product-list" element={<ProductList/>}/>
            <Route path="orders" element={<Orders/>}/>
            
            </Route>
          </Routes>
        </div>
        {isAdminPath ? "" : <Footer className="mt-10">Footer</Footer>}
    </>
  );
}

export default App;
