import { useEffect, useState } from 'react'
import './App.css'
import authService from "./appwrite/auth"
import { useDispatch } from 'react-redux'
import { login, logout } from "./store/authSlice"
import { Header, Footer } from "./components/index"
import { Outlet } from 'react-router-dom'
import Loading from './components/Loading/Loading'
import { RenderSpinner } from './components/Loading/Loading'

function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .catch()
      .finally(() => setloading(false))
  }, [])


  // return !loading ? (
  //   <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
  //     <div className='w-full block'>
  //       <Header />
  //       <main>
  //         <Outlet /> 
  //       </main>
  //       <Footer />
  //     </div>
  //   </div>
  // ) : null
  return (
    <>
      {loading ? (
       <RenderSpinner/> // Show the loader while loading
      ) : (
        <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
          <div className='w-full block'>
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );

}

export default App

// src/App.js
