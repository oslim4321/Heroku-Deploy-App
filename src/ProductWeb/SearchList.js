import { products } from './Data'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalCartState } from './CartContextApi/CartContext'
import { useEffect, useState } from 'react'
import { useGlobalContext } from './ContextApi'
import { v3 } from 'uuid'
import SearchBoxSecond from './SearchBoxSecond'
import { GlobalSearchState } from './CartContextApi/Search'



export default function SearchList() {
  const { resultSeach, setresultSeach } = GlobalSearchState()
  let arr=[]
  const { user,randommingId } = useGlobalContext()
  arr.push(user)

// console.log(v3(), 'me')
  const { state:{cart}, dispatch, } = GlobalCartState()  
  const { showAlert, producItem } = useGlobalContext()

  let navigate=useNavigate()
    function BuyItem(product){
      // (product)
      navigate(`/ReviewBuy/${product}`)
     
  }  
  function aler(e,product) {
    
    e.preventDefault()
    console.log('good')
    alert()
  }
    return (
      <div className="bg-white">
        <div className="max-w-2xl min-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Search List</h2>
  
          <SearchBoxSecond/>
  
          <form className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            
            {
              resultSeach ? 
            
            (resultSeach.map((product, index) => (
              <form className='relative' key={product.id}>              
                <div className="group relative ">
      
                  <div className="relative w-full md:h-[450px] h-[350px] min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-2xl group-hover:opacity-75 lg:h-150 lg:aspect-none flex items-center justify-center px-2 overflow-hidden">
                  <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center py-14 h-full absolute"/>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                      </h3>
                      {/* <h1>{product.category}</h1> */}
                   
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                    <div>

                      <div className='relative z-10'>
                      {
                        cart.some((cart) => cart.id === product.id) ?
                          ( <button
                            onClick={(e) => { e.preventDefault()
                              dispatch({ type: 'REMOVE_FROM_CART', payload: product },
                                showAlert(true, "success", 'item Added'))
                            }}
                            className='border py-2 px-9 relative text-red-300'>Remove in Cart
                          </button> ) 
                          :
                          (<button
                            onClick={(e) => { e.preventDefault()
                              dispatch({ type: 'ADD_TO_CART', payload: product },
                                showAlert(true, "success", 'item Added'))
                            }}
                            className='border py-2 px-9 relative '>Add To Cart
                          </button> 
    )
                      }  
                      </div>
                      
                    </div>
                    <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        <p className="text-sm font-medium text-gray-900"> <span></span> N{product.price}</p>                      </a>
                      </h3>
                      {/* <h1>{product.category}</h1> */}
                   
                      <p className="mt-1 text-sm text-gray-500 underline absolute cursor-pointer"
                      onClick={()=> navigate(`/ReviewBuy/${product.id}`)}
                      >more</p>
                  </div>
                  
                </div>
               
                </div>
                
             </form>
            )))
             : (<div className='text-center text-red-600'>No Items to Fetch</div>)}

          </form>
        </div>
      </div>
    )
  }
  /* onClick={() => { dispatch({ type: 'ADD_TO_CART', id: product.id.productID, product }) }} */