import React, { useContext, useState } from "react"

const SideBarContext = React.createContext()

const SidebarProvider = ({ children }) => {
    const [sidebar, setsidebar] = useState(false)
    function closeSidebar() {
        setsidebar(false)
    }
    function OpenSideBar() {
        setsidebar(!sidebar)
    }





    return <SideBarContext.Provider value={{
        sidebar,
        closeSidebar,
        OpenSideBar,
        setsidebar
    }}>
        {children}
    </SideBarContext.Provider>
}

export const useSidebarGlobalContext = () => {
    return useContext(SideBarContext)
}
export {SideBarContext, SidebarProvider}  