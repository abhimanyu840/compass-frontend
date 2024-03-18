import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/consumer/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/admin/Dashboard'
import SalesPage from './components/admin/Salespage'
import OrdersPage from './components/admin/Orderspage'
import ProductListPage from './components/admin/ProductEventlistpage'
import AddProductPage from './components/admin/Addproduct'
import UpdateProduct from './components/admin/Updateproductevent'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfilePage from './components/consumer/Profilepage'
import Products from './components/consumer/Products'
import Productpage from './components/consumer/Productpage'
import Paymentsuccess from './components/consumer/Paymentsuccess'
import { useEffect, useState, useContext } from 'react'
import apiContext from './components/context/apiContext'
import axios from 'axios'

function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  const token = localStorage.accessToken



  useEffect(() => {

    (async () => {
      const config = {
        headers: {
          'x-access-token': token
        }
      }
      let res = await axios.get(`${process.env.REACT_APP_BACKEND_HOST}/compass/api/v1/auth/profile`, config)
      res.data.userType == 'ADMIN' && setIsAdmin(true)

    })()
  }, [])


  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home admin={isAdmin} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {isAdmin && <Route path='/admin/dashboard' element={<Dashboard />} />}
        {/* sales page  */}
        {isAdmin && <Route path='/admin/dashboard/sales' element={<><Dashboard /><SalesPage /></>} />}
        {isAdmin && <Route path='/admin/dashboard/orders' element={<><Dashboard /><OrdersPage /></>} />}

        {/* all product page    buttons for update and delete product*/}
        {isAdmin && <Route path='/admin/dashboard/allproducts' element={<><Dashboard /><ProductListPage /></>} />}
        {/* add product  */}
        {isAdmin && <Route path='/admin/dashboard/addproducts' element={<><Dashboard /><AddProductPage /></>} />}
        {/* update product  */}
        {isAdmin && <Route path='/admin/dashboard/updateproducts/:id' element={<><UpdateProduct /></>} />}
        <Route path='/profile' element={<><ProfilePage /></>} />
        <Route path='/allproducts' element={<Products />} />
        <Route path='/product/:id' element={<Productpage />} />
        <Route path='/paymentsuccess' element={<Paymentsuccess />} />
      </Routes>
    </>
  )
}

export default App
