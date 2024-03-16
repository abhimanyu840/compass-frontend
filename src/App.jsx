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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        {/* sales page  */}
        <Route path='/admin/dashboard/sales' element={<><Dashboard /><SalesPage /></>} />
        <Route path='/admin/dashboard/orders' element={<><Dashboard /><OrdersPage /></>} />

        {/* all product page    buttons for update and delete product*/}
        <Route path='/admin/dashboard/allproducts' element={<><Dashboard /><ProductListPage /></>} />
        {/* add product  */}
        <Route path='/admin/dashboard/addproducts' element={<><Dashboard /><AddProductPage /></>} />
        {/* update product  */}
        <Route path='/admin/dashboard/updateproducts/:id' element={<><UpdateProduct /></>} />
      </Routes>
    </>
  )
}

export default App
