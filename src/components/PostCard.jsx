

// import React from 'react';
// import appwriteService from "../appwrite/conf";
// import { Link } from 'react-router-dom';

// function PostCard({ $id, title, featuredImage }) {
//     return (
//         <Link to={`/post/${$id}`} className="w-full">
//             <div className='bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg'>
//                 <div className='w-full h-48 relative'>
//                     <img 
//                         src={appwriteService.getFilePreview(featuredImage)} 
//                         alt={title} 
//                         className='w-full h-full object-cover'
//                     />
//                 </div>
//                 <div className='p-4'>
//                     <h2 className='text-lg font-semibold text-gray-800 line-clamp-2'>{title}</h2>
//                 </div>
//             </div>
//         </Link>
//     );
// }

// export default PostCard;



// import React from 'react';
// import appwriteService from "../appwrite/conf";
// import { Link } from 'react-router-dom';

// function PostCard({ $id, title, featuredImage }) {
//     return (
//         <Link to={`/post/${$id}`} className="w-full">
//             <div className='bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg'>
//                 <div className='w-full h-48 relative'>
//                     <img 
//                         src={appwriteService.getFilePreview(featuredImage)} 
//                         alt={title} 
//                         className='w-full h-full object-cover p-2 rounded-2xl' 
//                     />
//                 </div>
//                 <div className='p-4'>
//                     <h2 className='text-lg font-semibold text-gray-800 line-clamp-2'>{title}</h2>
//                 </div>
//             </div>
//         </Link>
//     );
// }

// export default PostCard;

import React from 'react';
import appwriteService from "../appwrite/conf";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`} className="w-full">
            <div className='bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg active:scale-100 active:shadow-none'>
                <div className='w-full h-48 relative'>
                    <img 
                        src={appwriteService.getFilePreview(featuredImage)} 
                        alt={title} 
                        className='w-full h-full object-cover p-2 rounded-2xl' 
                    />
                </div>
                <div className='p-4'>
                    <h2 className='text-lg font-semibold text-gray-800 line-clamp-2'>{title}</h2>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;




