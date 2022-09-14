import {BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import ReviewBuy from './ReviewBuy'
import Navbar from './Navbar'
import Feature from './Feature'
import ProducList from './ProducList'
// import Home from './Home'
import Items from './Items'
import Home from './Home'
import Sidebar from './Sidebar'
import Modal from './Modal'
import AdminDasbo from './ADMIN-dashboard/AdminDasbo'
import AdminPost from './ADMIN-dashboard/AdminPost'
import Footer from './Footer'
import Login from './FORM/Login'
import Signup from './FORM/Signup'
import UserDashboard from '../UserDashboard'
import { useGlobalContext } from './ContextApi'
import Alert from './Alert'
import About from './About'
import PriceTag from './PriceTag'
import {auth, db} from './Config/Config'
import PromoSection from './PromoSection'
import {GlobalCartState} from './CartContextApi/CartContext'
import ItemsProdu from './ItemsProdu'
import UsersList from './ADMIN-dashboard/UsersList'
import Errorpage from './Errorpage'
import SearchList from './SearchList'
// import SearchList from './SearchList'


function AppRenderPro() {

    
    const { alert, showAlert } = useGlobalContext()
    const { state:{products}} = GlobalCartState()

   
    // 
    // useEffect(() => {
        // console.log(products    )
    // }, [])




    return (
        <>
            {
                alert.show && <Alert {...alert} removeAlert={showAlert} />
            }
    
        <Router>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='item' element={<Items />}></Route>
                    <Route path='/price' element={<PriceTag/>}></Route>
                    <Route path='/list' element={<ProducList/>}></Route>    
                    <Route path='/Feature' element={<Feature />}></Route>
                    <Route path='/Sidebar' element={<Sidebar />}></Route>
                    <Route path='/modal' element={<Modal />}></Route>
                    <Route path='/ReviewBuy/:id' element={<ReviewBuy/>}></Route>
                    <Route path='/cart' element={<Cart />}></Route>
                    <Route path='/Admin' element={<AdminDasbo />}></Route>
                    {/* <Route path=    '/Post' element={<AdminPost />}></Route> */}
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/UserDashboard' element={<UserDashboard />}></Route>
                    <Route path='/signup' element={<Signup />}></Route>
                    <Route path='/AdminPost' element={<AdminPost />}></Route>
                    <Route path='/promo' element={<PromoSection />}></Route>
                    <Route path='/userlist' element={<UsersList/>}></Route>
                    <Route path='/itemize' element={<ItemsProdu />}></Route>
                    <Route path='/SearchList' element={<SearchList />}></Route>
                    <Route path='*' element={<Errorpage/>}></Route>
                </Routes>
                <Footer/>
        </Router>
       
        
        
    </>
    )
}

export default AppRenderPro