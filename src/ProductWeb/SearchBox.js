import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalSearchState } from './CartContextApi/Search'
import { useGlobalContext } from './ContextApi'

function SearchBox() {
  const { producItem } = useGlobalContext()
  const { resultSeach, setresultSeach } = GlobalSearchState()
  
    
  const [searchItems, setsearchItems] = useState()
  
    let navigate=useNavigate()
    /* Search items in input category */
  function search() {
    let res = producItem.filter((item) => ((item.category).toLowerCase()) === (searchItems.toLowerCase()))
    setresultSeach(res)
    console.log(res)
 
        console.log(searchItems)
        navigate('/list')
    }
  return (
    <div>
        <div className="input-group flex-1 w-full">
        <input type="text" placeholder="Search Items By Name Category" class="form-control input-bordered w-full pr-16" 
        value={searchItems} onChange={(e)=> setsearchItems(e.target.value)}
        /> 
    <button onClick={search} className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
    </div>
    </div>
  )
}

export default SearchBox