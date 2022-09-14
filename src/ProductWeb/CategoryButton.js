import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './ContextApi'
import {products} from './Data'


function CategoryButton() {
    const {producItem,setproducItem} = useGlobalContext()
    const allCategory = ['All', ...new Set(producItem.map(elem => elem.category))]
    const [categories, setcategories] = useState(allCategory)
   

    const filterItem = (category) => {
        if (category === 'All') {
            setproducItem(products);
            return;
        }
        const newProduct = products.filter((elem) => elem.category === category)
        setproducItem(newProduct)
        // console.log(Copy, 'it Copy')
    }

  return (
    <div>
         <div className="dropdown">
                <button className="md:flex py-2 px-6 mr-3 rounded-lg bg-black text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                </button>
                <ul className="dropdown-menu px-2">
                    {/* {
                        categories.map((category,index)=>{
                            return (
                                <Link key={index} to='/list' ><li onClick={()=>filterItem(category)}><a className="dropdown-item" href="#">{category}</a></li></Link>
                            )
                        })
                    } */}
                  <Link to='/list'><button onClick={()=>filterItem('All')}>All</button></Link> <br />
                  <Link to='/list'><button onClick={()=>filterItem('men')}>Men</button></Link><br />
                  <Link to='/list'><button onClick={()=>filterItem('women')}>women</button></Link>
                </ul>
            </div>
    </div>
  )
}

export default CategoryButton