import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Loading from './Loading/Loading'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <Loading/> : <>{children}</>
}

// import React, {useEffect, useState} from 'react'
// import {useSelector} from 'react-redux'
// import {useNavigate} from 'react-router-dom'

// export default function Protected({children, authentication = true}) {

//     const navigate = useNavigate()
//     const [loader, setLoader] = useState(true)
//     const authStatus = useSelector(state => state.auth.status)

//     useEffect(() => {
//         // Check if authStatus is still undefined (i.e., loading)
//         if (authStatus === undefined) {
//             setLoader(true) // Still loading
//         } else if (authentication && authStatus !== authentication) {
//             navigate("/login")
//             setLoader(false) // No longer loading after redirect
//         } else if (!authentication && authStatus !== authentication) {
//             navigate("/")
//             setLoader(false) // No longer loading after redirect
//         } else {
//             setLoader(false) // Auth status matches, stop loading
//         }
//     }, [authStatus, navigate, authentication])

//     // Render loading component if loader is true
//     return loader ?  <h1 className='bg-red-600 text-3xl transition-opacity duration-500 ease-in-out opacity-0 animate-fade-in'>
//     Loading...
// </h1> : <>{children}</>
// }
