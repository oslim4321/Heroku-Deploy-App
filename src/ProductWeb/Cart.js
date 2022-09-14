import React, { useEffect, useState } from 'react'
import { GlobalCartState } from './CartContextApi/CartContext'
import { useGlobalContext } from './ContextApi'

function Cart() {
  const { user } = useGlobalContext()
  const { state: { cart, totoalPrice}, dispatch,} = GlobalCartState()
  const [total, settotal] = useState()
  const [qty, setqty] = useState(0)
  // console.log(totalQuantity) 
  useEffect(() => {
    console.log(totoalPrice)
  }, [])

useEffect(() => {
  settotal(cart.reduce((acc,cur)=>acc + Number(cur.price)* cur.qty, 0,))
}, [cart])
  
let count=10

  function checkout() {
    if (!user) {
      alert('you are not a user here pls signUp')

    } else {
      alert('you can checkout now')
      }
  }
  return (
    <>
{/* <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
  
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
         */}
        <div className="pointer-events-auto w-screen max-w-lg flex justify-center items-center mt-[45px]">
          <div className="flex h-full flex-col bg-white shadow-xl w-full">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                <div className="ml-3 flex h-7 items-center">
                  <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Close panel</span>
                   
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cart.length < 1 ? (
                    <>
                      <h1 className='text-3xl'>CART IS EMPTY ??</h1>
                  </>) : (
                    cart.map(elem => {
                      return (
                        <li className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img src={elem.imageSrc} alt={elem.imageAlt}  className="h-full w-full object-cover object-center"/>
                          </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href="#">{elem.name}</a>
                              </h3>
                              <p className="ml-4">{elem.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">Salmon</p>
                          </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              {/* {
                                cart.map(elem => {
                                  return (
                                    <p className="text-gray-500">Qty {elem.qty}</p>
                                  )
                                })
                              } */}
                             
                              {/* <button className='text-lg font-extrabold bg-primary rounded-[50%] px-1 text-white cursor-pointer hover:text-sm'>-</button>
                              
                              <button onClick={()=> dispatch({type:'Increase_Quantity'})} className='text-lg font-extrabold bg-primary rounded-[50%] px-1 text-white cursor-pointer hover:text-sm'>+</button> */}


                              <select onChange={(e) => dispatch({
                                type: 'Change_Quantity', payload: {
                                  id: elem.id,
                                  qty: e.target.value,
                                }})} className='w-20 border-2'>
                                  {/* <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option> */}
                                {[...Array(count)].map((x,i) => (
                                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                                  ))}
                              </select>
                              {/* <h1>Qut: <span>{totalQuantity}</span></h1> */}
                              
                            <div className="flex">
                              <button onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:elem })} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">X</button>
                            </div>
                          </div>
                        </div>
                      </li>
                        )
                      })
                    )
                    }
                    


                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                 <p>$ <span>{ total}</span></p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">You are buying {cart.length} Items</p>
              <div className="mt-6">
                <a onClick={checkout} href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
                </p>
              </div>
            </div>
          </div>
              </div>
              






      {/* </div>
    </div>
  </div>
</div> */}

    </>
  )
}

export default Cart