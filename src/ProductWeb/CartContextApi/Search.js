import React, {useContext, createContext, useReducer, useState} from "react";
import {products} from '../Data'
import { CartReducer } from "./CartReducer";



const Search = React.createContext()

const Searchcontext = ({ children }) => {
    const [resultSeach, setresultSeach] = useState()

return <Search.Provider value={{resultSeach, setresultSeach}}>{children}</Search.Provider>
    }

export default Searchcontext;

export const GlobalSearchState = () => {
    return useContext(Search)
}