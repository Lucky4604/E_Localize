import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Home from './pages/home/Home'
import Dashboard from './pages/admin/dashboard/Dashboard'
import Carts from './pages/cart/Carts'
import Login from './pages/register/Login'
import SignUp from './pages/register/SignUp'
import ProductInfo from './pages/productInfo/ProductInfo'
import AddProduct from './pages/admin/pages/AddProduct'
import UpdateProduct from './pages/admin/pages/UpdateProduct'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 
import MyState from './components/contextApi/myState'
import Order from './pages/order/Order'
import AllProduct from './pages/products/AllProduct'




const App = () => {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={
            <Order/>  
          } />
        <Route path='/cart' element={<Carts/>} />
        <Route path='/allproducts' element={<AllProduct/>}/>
        <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>
          } />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/productinfo/:id" element={<ProductInfo/>} />
        <Route path="/addproduct" element={
            <ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>} />
          <Route path="/updateproduct" element={
            <ProtectedRoutesForAdmin><UpdateProduct /></ProtectedRoutesForAdmin>} />
      </Routes>
      <ToastContainer/>
    </Router>
    </MyState>
    
   

    
  )
}

export default App
//user
// User
export const ProtectedRoutes = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser && currentUser.role === 'user') {
    // Assuming you have a role property in your user data to differentiate between users and admins
    return children;
  } else {
    alert("You don't have access.");
    return <Navigate to="/" />;
  }
};
//admin
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'luckygovindrao182@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}