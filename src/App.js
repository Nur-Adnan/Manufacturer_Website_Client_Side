import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AllTools from './Components/AllTools/AllTools';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import AddReview from './Components/Dashboard/AddReview';
import AddTools from './Components/Dashboard/Admin/AddTools';
import AllUser from './Components/Dashboard/Admin/AllUser';
import ManageOrder from './Components/Dashboard/Admin/ManageOrder';
import ManageTools from './Components/Dashboard/Admin/ManageTools';
import UpdateTool from './Components/Dashboard/Admin/UpdateTool';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrder from './Components/Dashboard/MyOrder';
import MyProfile from './Components/Dashboard/MyProfile';
import Payment from './Components/Dashboard/Payment';
import UpdateProfile from './Components/Dashboard/UpdateProfile';
import Welcome from './Components/Dashboard/Welcome';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Portfolio from './Components/Portfolio/Portfolio';
import Purchase from './Components/Purchase/Purchase';
import Register from './Components/Register/Register';
import RequireAdmin from './Components/RequiredAuth/RequireAdmin';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/tools' element={<AllTools></AllTools>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/contact-us' element={<Contact></Contact>}></Route>
        <Route path="dashboard" element={<RequiredAuth>
          <Dashboard />
        </RequiredAuth>} >
          <Route index element={<Welcome></Welcome>}></Route>
          <Route path='/dashboard/myorder' element={<MyOrder></MyOrder>}></Route>
          <Route path="add-review" element={<AddReview></AddReview>}></Route>
          <Route path="manageTools" element={
            <RequireAdmin>
              <ManageTools></ManageTools>
            </RequireAdmin>
          }></Route>
          <Route path="my-profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="my-profile/edit-profile" element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path="user" element={
            <RequireAdmin>
              <AllUser></AllUser>
            </RequireAdmin>
          }></Route>
          <Route path="manageOrder" element={
            <RequireAdmin>
              <ManageOrder></ManageOrder>
            </RequireAdmin>
          }></Route>
          <Route path="add" element={
            <RequireAdmin>
              <AddTools></AddTools>
            </RequireAdmin>
          }></Route>
          <Route path="tools/:id" element={
            <RequireAdmin>
              <UpdateTool></UpdateTool>
            </RequireAdmin>
          }></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
        </Route>
        <Route path='/tools/:id' element={
          <RequiredAuth>
            <Purchase></Purchase>
          </RequiredAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
