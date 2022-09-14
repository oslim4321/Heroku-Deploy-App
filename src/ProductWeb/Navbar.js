import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { List } from './Data'
import { auth,db } from './Config/Config'
import { useGlobalContext } from './ContextApi'
import { GlobalCartState } from './CartContextApi/CartContext'
// import {auth, } from './Config/Config'
/* 73, 140 */
function Navbar() {
  const { state:{cart}  } = GlobalCartState()
  const { user } = useGlobalContext()
  let arr=[]
  arr.push(user)
  // console.log(arr)

//  console.log(user)




   

  let navigate=useNavigate()
  // (user)
  // const [user, setuser] = useState(false)
  const [subscribe, setsubscribe] = useState(false)
  const [Nav, setNav] = useState(false)
  const [Admin, setAdmin] = useState(false)




  function setSub() {
    setsubscribe(!subscribe)
    setNav(false)
  }
  function setNaving() {
    setNav(true)
    setsubscribe(false)
  }
  function closingNav() {
    setNav(false)
  }
  window.onscroll =()=>{
    setsubscribe(false)
    setNav(false)

  }
  function Logout() {
    auth.signOut().then(() => {
      navigate('/login')
     window.location.reload()
    })
  }

  return (
    <div>
        <nav className="bg-gray-800  sm:flex fixed w-screen z-20 top-0 items-center justify-center">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
      
          <svg onClick={setNaving} className={Nav ? 'hidden h-6 w-6' : 'block h-6 w-6'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          
          <svg onClick={closingNav} className={Nav ? 'block h-6 w-6' : 'hidden'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
      </div>
      
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
      {
              user && arr.map((elem, i) => {
                return(
                  <h1 key={i} className='text-blue-600 md:hidden'><Link to='/'>{elem.user.name}</Link></h1>
                )
              })
          }
        {/* <div className="flex-shrink-0 flex items-center">
          <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
          <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
        </div> */}
              
              
        <div className="hidden sm:block sm:ml-6">
        <div className="flex space-x-4 items-center justify-center">
         {
            List.map((elem,index)=>{
              return(
                    <ul key={elem.id} className='flex'>
                        <Link to={elem.url}><li className={elem.class}>{elem.list}</li></Link>
                    </ul>
              )
            })
         }
         </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       {
        user &&
        <button onClick={setSub} type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        <span className="sr-only">View notifications</span>
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </button>
       }

        <div className="ml-3 relative">
          <div>
            <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              {/* <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
            </button>
          </div>

        
        
        <div className={subscribe ? 'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none' : 'hidden'} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
          <a href="#" onClick={Logout} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
        </div>
        
          {
            user && arr.map((elem, i)=>{
              if (elem.user.admin) {
                return (
                  <>
                  {/* {console.log(elem.user)} */}
                  <Link key={i} to='/Admin'><button className='text-white'><i key={elem.user.id} class="bi bi-person-workspace"></i></button></Link>
                </>
               )
              }
              
            })
           
          }
        </div>
        <div className=" items-center relative px-1 rounded-md">
        <button className='text-white p-1 carting'><Link to='/cart'><p><i className="bi bi-cart-dash-fill text-white text-2xl ml-4 text-center"></i></p><span className='absolute bottom-3 text-red-500 font-bold text-2xl'>
          {cart.length}</span></Link></button>
      </div>
      </div>
    </div>
  </div>
        <div className='mr-20'>
          {
          // useEffect(() => {
            user && arr.map((elem, i) => {
              return(
                <h1 key={i} className='text-blue-600 hidden md:block'><Link to='/'>{elem.user.name}</Link></h1>
              )
            })
          // }, [])
          }
  
         
        
        </div>  
  <div className='hidden md:block'>
  {
    !user && <div className='mr-40'>
      <Link to='/signup'><button className='text-white mr-3'>Signup</button></Link>
      <Link to='/login'><button className='text-white'>Login</button></Link>
    </div>
          }
  </div>


  
  <div  className={Nav ? 'sm:hidden h-600px  bg-black w-[100%]' : 'hidden'} id="mobile-menu  transition-transform duration-100">
    <div className="px-2 pt-2 pb-3 space-y-1">
         {
            List.map((elem,index)=>{
              return(
                  <div key={elem.id} >
                  <ul className=' transition-transform duration-100'>
                    <Link to={elem.url} onClick={()=>setNav(false)}><li className={elem.class && 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full '}>{elem.list}</li></Link>
                    </ul>
                 
                  </div>

              )
            })
            }
              <div className='hidden md:block'>
  {
    !user && <div className='mr-40'>
      <Link to='/signup'><button className='text-white mr-3'>Signup</button></Link>
      <Link to='/login'><button className='text-white'>Login</button></Link>
    </div>
          }
  </div>

             
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar