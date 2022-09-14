import React from 'react'
import { Link } from 'react-router-dom'

function Errorpage() {
  return (
    <div className='my-20'>
      <div className='container mx-auto'>
        <h1 className='text-5xl text-center text-red-500 tracking-widest font-extrabold'>Error !!</h1>
        <p className='capitalize text-center my-10 font-extrabold'>You just enter a wrong url</p>
        {/* <p className='capitalize text-center'></p> */}
        <div className='flex items-center justify-center'>
       <Link to='/'><button className='btn btn-success '>Go back to home page</button></Link>
        </div>
        
      </div>
    </div>
  )
}

export default Errorpage