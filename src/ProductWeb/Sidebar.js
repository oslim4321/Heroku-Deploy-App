import React from 'react'
import { Link } from 'react-router-dom'
import { useSidebarGlobalContext } from '../Context-For-Sidebar/Context'

function Sidebar() {
  const {sidebar, closeSidebar}=useSidebarGlobalContext()

  return (
    // <div className={sidebar ? 'absolute w-screen left-0 ' : 'left-[-70%]'}>
    <div className='absolute'>
       <div className={sidebar ? 'absolute  transition-transform duration-100 z-40' : 'none top-0 '}>
      <div className='w-[250px] h-[100vh] bg-black'>
        <div className='flex item-end justify-end pt-10 pr-6'>
          <p onClick={closeSidebar} className='text-white mt-10 text-2xl font-bold cursor-pointer'>X</p>
        </div>
            <ul className='pt-5 px-5'>
              <Link to=''><li className='text-xl text-white font-serif font-bold py-2 hover:text-orange-400  transition ease-in-out duration-500'>Home</li></Link>
              <Link to=''><li className='text-xl text-white font-serif font-bold py-2 hover:text-orange-400  transition ease-in-out duration-500'>Fashion</li></Link>
              <Link to=''><li className='text-xl text-white font-serif font-bold py-2 hover:text-orange-400  transition ease-in-out duration-500'>Dresses</li></Link>
              <Link to=''><li className='text-xl text-white font-serif font-bold py-2 hover:text-orange-400  transition ease-in-out duration-500'>Snikers</li></Link>
              <Link to=''><li className='text-xl text-white font-serif font-bold py-2 hover:text-orange-400  transition ease-in-out duration-500'>Shoes</li></Link>
              
          </ul>
          {/* </div> */}
        </div>
    </div>
   </div>
  )
}

export default Sidebar