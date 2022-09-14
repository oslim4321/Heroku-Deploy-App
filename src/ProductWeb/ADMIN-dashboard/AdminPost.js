import React, { useEffect, useState } from 'react'
import {db, storage} from '../Config/Config'
import { v2 } from "uuid"
import { useGlobalContext } from '../ContextApi'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import {addDoc, collection, getDocs} from 'firebase/firestore'


function AdminPost() {
  const {Product,setProduct} = useGlobalContext()

  const [productName, setproductName] = useState()
  const [productrice, setproductrice] = useState()
  const [color, setcolor] = useState()
  const [pproductSize, setpproductSize] = useState(null)
  const [ProductImg, setProductImg] = useState()
  const [error, seterror] = useState()
  const [category, setcategory] = useState()
  const { showAlert } = useGlobalContext()
  const [urlHold, seturlHold] = useState()

  // const [Product, setProduct] = useState([])

  let randomming = Math.floor(Math.random()*2000)
  // (randomming)
    const Productcollection=collection(db, 'PRODUCT-ITEMS')

  useEffect(() => {
   const getproduct= async ()=>{
     const data = await getDocs(Productcollection)
     setProduct(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
       
    }
    getproduct()
  }, [])

// (Product)

  function Upload(e) {
    e.preventDefault()

    if (!ProductImg) {
      alert("Please choose a file first!")
    }

    const ImageRef = ref(storage, `Images/${ProductImg.name + randomming}`);
    uploadBytesResumable(ImageRef, ProductImg).then((snapshot) => {
      ('uploaded');
      alert('uploaded');
      getDownloadURL(snapshot.ref).then(url => {
        
        addDoc(Productcollection, {
          ProductCategory: category,
          // ProductColor: color,
          ProductName: productName,
          ProductPrice: productrice,
          ProductSize:pproductSize,
          ProductImg :url
        })
        ('Aliamdullai')
    });
   
  });

      
  }







  



 
  return (
    <div className='mt-20 w-full h-screen'>
      <form action="" className='flex flex-column md:px-32'>
        <label className='mx-6 font-extrabold font-5xl'>Product Name</label>
        <input className='py-2 mt-4 mx-6 border' type="text" placeholder='Product Name' value={productName} onChange={(e) => setproductName(e.target.value)} />
        <label className='mx-6 font-extrabold font-5xl'>Product Price</label>
        <input className='py-2 mt-4 mx-6 border' type="text" placeholder='Product price' value={productrice} onChange={(e)=>setproductrice(e.target.value)} />
        {/* <input className='py-2 mt-4 mx-6 border' type="text" placeholder='color' value={color} onChange={(e)=> setcolor(e.target.value)} /> */}
        <label className='mx-6 font-extrabold font-5xl'>Product Size</label>
        <input className='py-2 mt-4 mx-6 border' type="text" placeholder='product sixe' value={pproductSize} onChange={(e) => setpproductSize(e.target.value)} />
        <label className='mx-6 font-extrabold font-5xl'>Product Img</label>
        <input className='py-2 mt-4 mx-6 border' type="file"  accept="image/*" onChange={(e)=> setProductImg(e.target.files[0])} />
        <p className='text-center text-2xl'>Category</p>
        <select onChange={(e) => setcategory(e.target.value)} value={category} className='border' name="" id="">
          <option disabled value="">Pick</option>
          <option value="shoe">Shoe</option>
          <option value="cloth">cloth</option>
          <option value="ladies Wear">ladies Wear</option>
          <option value="Men Wear">Men Wear</option>
        </select>
        <button onClick={Upload} className='btn btn primary'>Add</button>
        {/* <button onClick={ImgUplo}>Add img</button> */}
        {/*  */}
      </form>
      
      {
        Product.map(elem => {
          return (
            <>
              <h1>Name {elem.ProductName}</h1>
            <h1>{elem.ProductCategory}</h1>
            <h1>{elem.ProductPrice} me</h1>
            <h1>{elem.ProductColor} me</h1>
            <img src={elem.ProductImg} alt={elem.ProductName
} />
            </>
          )
        })
      }
    </div>
  )
}

export default AdminPost