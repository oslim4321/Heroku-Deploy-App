import React, { useEffect } from 'react'

function Alert({ type, msg,removeAlert }) {
    useEffect(() => {
       const timeout=setTimeout(() => {
        removeAlert()
       }, 4000);
        return ()=> clearTimeout(timeout)
    }, [removeAlert])

  return (
    <div className='w-screen'>
         <div className='flex items-center justify-center w-screen fixed z-40'>
                <div className={`alert alert-${type} absolute top-14`}>
                <strong></strong>{msg}
                </div>
            </div> 
    </div>
  )
}

export default Alert