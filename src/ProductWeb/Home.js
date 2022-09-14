import React, { useEffect, useMemo, useState, } from 'react'
// import {useNavigate} from 'react-router-dom'
import About from './About'
// import { useGlobalContext } from './ContextApi'
import Footer from './Footer'
import Items from './Items'
import Sidebar from './Sidebar'
import PriceTag from './PriceTag'
import { Component } from 'react'
import { auth } from './Config/Config'
import PromoSection from './PromoSection'
import { Link, useNavigate } from 'react-router-dom'
import {products} from './Data'
import { useSidebarGlobalContext } from '../Context-For-Sidebar/Context'
import CategoryButton from './CategoryButton'
import SearchBox from './SearchBox'

function Home() {
    
    const {OpenSideBar}=useSidebarGlobalContext()
   
   
    const [Copy, setCopy] = useState()
    

    
    useEffect(() => {
        setCopy([products, ...products])
    }, [])
   
  
  return (
      <div>
        
           <Sidebar/>
        <div className='w-full bg-[#284bdf] overflow-hidden h-[650px] testso'>
        <div className='w-full h-[full] mt-10'>
            <div className='absolute h=[1000px] top=[50%] left-[50%] transform translate-x-[-50%]'>
            </div>
        <div  className='w-full py-6'>
        <h1 className='text-center  text-lg md:2xl text-white  py-2 capitalize'>when quality wears matter...</h1>
        </div>
            <div className='mx-3'>
                <div className='md:flex justify-center items-center gap-3  border-gray-300 flex-wrap'>
            <div className='flex justify-between items-center'>
                {/* Category button */}
           <CategoryButton />
            <div className='text-white flex gap-2 font-bold font-serif  text-lg'>
                <p className='border-xl cursor-pointer mr-2'><i className="bi bi-cart3 mr-1 "></i>Cart</p>
            </div>
            
            </div>
            
            <div className='md:flex justify-between'>
                <div className='flex items-center justify-center'>
                  <div className='md:flex item-start bar'>
                      <div onClick={OpenSideBar} className='p-3 pt-6'>
                        <span className='h-0 w-6 bg-white py-1 px-4 flex rounded-sm mt-1'></span>
                        <span className='h-0 w-6 bg-white py-1 px-4 flex rounded-sm mt-1'></span>
                        <span className='h-0 w-6 bg-white py-1 px-4 flex rounded-sm mt-1'></span>
                    </div>
                  </div>
                <SearchBox/>
                    </div>
                </div>
        
            
                </div>
                
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='mt-10 py-2'>        
            {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel"> */}
                {/* <div class="carousel-inner w-full">
                <div class="carousel-item active"> */}                                              {/* SHAFIB */}
                <h1 className='text-7xl sm:text-left text-center md:text-8xl text-white drop-shadow-300 shadown-black font-extrabold mb-10'> Luxirious Cloth <h1 className='mt-10 text-lg border-t border-b border-gray-400 text-center md:tracking-[1rem] font-serif font-thin tracking-[6px]'>Home of luxury</h1></h1>
                {/* </div> */}
                <div className="carousel-item">
                <h1 className='font-bold  text-3xlsearch sm:text-left text-center md:text-4xl lg:text-6xl xl:text-6xl text-white hover:tracking-[5rem]'>GET STARTED <h1 className='mt-10 py-6 w-24 my-8'>YOUR FAVORITE SHOPPING</h1></h1></div>
            {/* </div>
            </div> */}
                    <div className='text-center sm:text-left mt-6'>
                        <Link to='/itemize'><button className='black px-9 py-3  font-bold rounded bg-black text-white sticky hover:shadow-2xl shadow-gray-900'>Get Started</button></Link>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner w-full">
                <div className="carousel-item active">
                <img src="/pic/tshirt-img-removebg-preview.png" alt="" /> </div>
                <div className="carousel-item">
                <img src="/pic/dress-shirt-img-removebg-preview.png" alt="" /></div>
                <div className="carousel-item">
                <img src="/pic/tshirt-img-removebg-preview.png" alt="" /> </div>
                </div>
                </div>
                </div>
            </div>
                
                      
            
            
        </div>
        </div>
          </div>
          <About/>
          <PriceTag/>
          <Items />
          <PromoSection/>
         {/* Modal */}
          <div className="absolute w-screen">
            <div className="modal fade w-screen" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog w-full">
            <div className="modal-content w-full">
            <div className="modal-header w-full">
            <h5 className="modal-title" id="staticBackdropLabel">Cool Items For you</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-black">
            <div className="input-group">
                    <input className='w-[270px] form-control md:w-[350px]' type="text form-control" placeholder='Search Products, Brand and Categories'  aria-label="placeholder='Search Products, Brand and Categories' " aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-search text-white bg-white"></i></button>
            </div>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary text-black" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary text-black">Search</button>
            </div>
            </div>
            </div>
            </div>
          </div>
    </div>
  )
}

export default Home