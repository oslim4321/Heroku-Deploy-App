import React, { useState, useContext, useEffect } from "react";
import { auth, db } from './Config/Config'
import { onSnapshot, query } from 'firebase/firestore';
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { products } from "./Data";

// import { useNavigate } from "react-router-dom";

const AppContext = React.createContext()
// let navigate=useNavigate()

const AppProvider = ({ children }) => {
    const [Product, setProduct] = useState([])
   
    const [alert, setalert] = useState({ show: true, msg: '', type: '' })
    const [producItem, setproducItem] = useState(products)

    const showAlert =(show =true, type='', msg='')=>{
        setalert({show, type,msg})
    }

   
    useEffect(() => {
        const timeout=setTimeout(() => {
        showAlert()
        }, 200);
         return ()=> clearTimeout(timeout)
     }, [])

     const [user, setuser] = useState()
   
    /* Checking Account thats online */
      useEffect(() => {
        
        auth.onAuthStateChanged(user => {
            db.collection('UserData').doc(user.uid).get().then(snapshot => {
                setuser({ user: snapshot.data() })
                throw new Error("oh, no!")
            })
                .catch((Error) => {
                // showAlert(true, 'danger', {Error})
                console.log(Error)
            })
        })
      }, [])
    
    
          /* Post */
    const [posts, setposts] = useState([]);
    const [User, setUser] = useState([])
    
    useEffect(() => {
     const q = query(collection(db, 'PRODUCT-ITEMS'))
     onSnapshot(q, (querySnapshot) => {
       setposts(querySnapshot.docs.map(doc => ({
         data: doc.data()
       })))  .catch((err) => {
        showAlert(true, 'danger', {err})
    })
         
     })
    }, []); 
     //
    //  useEffect(() => {
    //      console.log(posts)
    //  }, [])
    
    /* Users */
    useEffect(() => {
     const q = query(collection(db, 'UserData'))
     onSnapshot(q, (querySnapshot) => {
        setUser(querySnapshot.docs.map(doc => ({
         data: doc.data()
       })))
         
     })
    }, []); 
    
    /*  GETTING RANDOM ID START*/
    let randommingId
     const uid =() => {
        const head = Date.now().toString(36);
         const tail = Math.random().toString(36).substr(2);
         return head + tail;
    }
     randommingId = uid()
        // console.log(randommingId)

  /*  GETTING RANDOM ID ENF*/
    
    
      
  
  


return <AppContext.Provider value={{
   
    alert,
    showAlert,
    Product,
    user,
    setProduct,
    posts,
    User,
    producItem,
    setproducItem,
    randommingId
    }}

    >{children}</AppContext.Provider>
    }
export const useGlobalContext=() => {
    return useContext(AppContext)
        
    }
export {AppContext, AppProvider}