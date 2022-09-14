import React from 'react'
import { Item, ItemB } from './Data'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { GlobalCartState } from './CartContextApi/CartContext'

function Items() {
  const { state:{cart}, dispatch, } = GlobalCartState()


  return (
    <div className='w-full bg-slate-100 -z-30 pb-10'>
      <div className='pt-20'>
      <div>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
<h1 className='type'>Man & Woman Fashion</h1></div>
    <div class="carousel-item">
<h1 className='type'>Man & Woman Fashion</h1></div>
    <div className="carousel-item">
<h1 className='type'>Man & Woman Fashion</h1></div>
  </div>
</div>
      </div>

     
<div className=" w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-center px-[8%]">
          {
            Item.map((elem,index) => {
              return (
                
                <div key={elem.id} className="w-full bg-white lg:w-full lg:h-full text-center py-8 flex justify-center items-center relative shadow shadow-slate-200">
                  <div className='text-center '>
                  <h1 className='text-lg font-bold'>{elem.name}</h1>
                    <h1 className='my-1'><span></span> Price $ {elem.price}</h1>
                    <img src={elem.imageSrc} className='object-cover object-center py-14'/>
                    </div>
                    <div className='flex absolute bottom-4 justify-betwee gap-20'>
                    <div>
                      {
                        cart.some((cart) => cart.id === elem.id) ? (<h1>Remove</h1>) :
                          ( <button
                            onClick={(e) => { e.preventDefault()
                             dispatch({ type: 'ADD_TO_CART', payload: elem },
                               // showAlert(true, "success", 'item Added')
                             )
                           }}
                             >Buy Now</button>)
                    }
                   
                    </div>
                    <div><button>See More</button></div>
                  </div>
                  </div>
                  
                
              )
            })
          }
        </div>

        <div className='text-center'>
          <h1 className='type py-10'>Electronic</h1>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-center px-[8%]">
          {
            ItemB.map((elem, index) => {
              return ( 
              
                <div key={elem.id} className="w-full bg-white lg:w-full lg:h-full text-center py-8 flex justify-center items-center relative shadow shadow-slate-200">
                  <div className='text-center '>
                  <h1 className='text-lg font-bold'>{elem.name}</h1>
                    <h1 className='my-1'><span></span> Price $ {elem.price}</h1>
                    <img src={elem.imageSrc} className='object-cover object-center py-14' />
                  </div>
                    <div className='flex absolute bottom-4 justify-around gap-20'>
                    <div>
                    {
                     cart.some((cart) => cart.id === elem.id) ? (<h1>Remove</h1>) :
                       ( <button
                         onClick={(e) => { e.preventDefault()
                          dispatch({ type: 'ADD_TO_CART', payload: elem },
                           // showAlert(true, "success", 'item Added')
                          )
                       }}
                         >Buy Now</button>)
                    }
                    </div>
                    <button>See More</button>
                  </div>
                  </div>
                  
              
              )
            })
          }
        </div>
        </div>
        
  </div>
      </div>

  )
}

export default Items