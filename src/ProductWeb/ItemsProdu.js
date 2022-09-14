import {db} from './Config/Config'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './ContextApi'



function ItemsProdu() {
    const { posts } = useGlobalContext()
   
    // console.log(posts)
  return (
    <div>

<div class="bg-white">
  <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Products</h2>

    <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        { posts < 1 ? (<>Loading...<div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
            </div>
            </>) :
         (
            posts.map(elem => {
                // console.log(elem.data)
                return (
                    <a href="#" class="group">
                <div className="relative w-full md:h-[450px] h-[350px] min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-2xl group-hover:opacity-75 lg:h-150 lg:aspect-none flex items-center justify-center px-2">
                  
                      <img src={elem.data.ProductImg} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className=" object-center object-cover group-hover:opacity-75" />
                    </div>
                        <h3 class="mt-4 text-sm text-gray-700">{elem.data.ProductCategory}</h3>
                        <p class="mt-1 text-lg font-medium text-gray-900">${elem.data.ProductPrice}</p>
                  </a>
                )
            }) )
        }
     
    </div>
  </div>
</div>

    </div>
  )
}

export default ItemsProdu


/*  <a href="#" class="group">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="w-full h-full object-center object-cover group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
      </a>

      <a href="#" class="group">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="w-full h-full object-center object-cover group-hover:opacity-75"/>
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$89</p>
      </a>

      <a href="#" class="group">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="w-full h-full object-center object-cover group-hover:opacity-75"/>
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
      </a>
 */