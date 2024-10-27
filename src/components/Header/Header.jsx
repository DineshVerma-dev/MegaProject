// import React, { useState } from 'react'
// import { Container, Logo, LogoutBtn } from "../index"
// import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { TopLoader } from '../Loading/Loading'

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status)
//   const navigate = useNavigate()
//   const [laoding, setLoading] = useState(false)

//   const navItems = [
//     {
//       name: 'Home',
//       slug: "/",
//       active: true
//     },
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//     },
//     {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus,
//     },
//     {
//       name: "All Posts",
//       slug: "/all-posts",
//       active: authStatus,
//     },
//     {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authStatus,
//     },
//   ]

//   const handleNavigation = (slug) => {
//     setLoading(true);
//     navigate(slug);
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   };


//   return (
//     <header className='py-3 shadow bg-gray-500'>
//       <TopLoader loading={laoding} />
//       <Container>
//         <nav className='flex'>
//           <div className='mr-4'>
//             <Link to='/'>
//               <Logo width='70px' />

//             </Link>
//           </div>
//           <ul className='flex ml-auto'>
//             {navItems.map((item) =>
//               item.active ? (
//                 <li key={item.name}>
//                   <button
//                     // onClick={() => navigate(item.slug)}
//                     onClick={() => handleNavigation(item.slug)}

//                     className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//                   >{item.name}</button>
//                 </li>
//               ) : null
//             )}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//       </Container>
//     </header>
//   )
// }

// export default Header


import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TopLoader } from '../Loading/Loading';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to handle mobile menu visibility

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ];

    const handleNavigation = (slug) => {
        setLoading(true);
        navigate(slug);
        setTimeout(() => {
            setLoading(false);
            setMobileMenuOpen(false); // Close the mobile menu after navigation
        }, 1000);
    };

    return (
        <header className='py-3 shadow bg-gray-500'>
            <TopLoader loading={loading} />
            <Container>
                <nav className='flex items-center justify-between'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width='70px' />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className='md:hidden text-white'
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {/* Hamburger Icon */}
                        <img src="./profile.svg" alt="Menu" className="h-6 w-6" />
                    </button>

                    {/* Desktop Navigation */}
                    <ul className='hidden md:flex ml-auto'>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => handleNavigation(item.slug)}
                                        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className='md:hidden bg-gray-600 mt-2 rounded-lg'>
                        <ul className='flex flex-col p-4'>
                            {navItems.map((item) =>
                                item.active ? (
                                    <li key={item.name}>
                                        <button
                                            onClick={() => handleNavigation(item.slug)}
                                            className='block px-4 py-2 text-white hover:bg-blue-100'
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                ) : null
                            )}
                            {authStatus && (
                                <li>
                                    <LogoutBtn />
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </Container>
        </header>
    );
}

export default Header;
