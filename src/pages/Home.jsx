// import React, { useEffect, useState } from 'react';
// import appwriteService from "../appwrite/conf";
// import { Container, PostCard } from '../components/index';

// function Home() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         appwriteService.getPosts().then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents);
//             }
//         });
//     }, []);

//     if (posts.length === 0) {
//         return (
//             <div className="w-full py-8 mt-4 text-center">
//                 <Container>
//                     <div className="flex justify-center">
//                         <h1 className="text-2xl font-bold hover:text-gray-500">
//                             Login to read posts
//                         </h1>
//                     </div>


//                 </Container>
//             </div>
//         );
//     }

//     return (
//         <div className="w-full py-8">
//             <Container>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                     {posts.map((post) => (
//                         <div key={post.$id}>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     );
// }

// export default Home;

import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/auth";
import Service from '../appwrite/conf';
import { Container, PostCard } from '../components/index';

function Home() {
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // Fetch the current user
        appwriteService.getCurrentUser().then((user) => {
            if (user) {
                setUserId(user.$id);

                // Get posts and filter by current user ID
                Service.getPosts().then((posts) => {
                    if (posts) {
                        const userPosts = posts.documents.filter(post => post.userId === user.$id);
                        setPosts(userPosts);
                    }
                });
            }
        });
    }, []);

    if (!userId) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex justify-center">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            Login to read posts
                        </h1>
                    </div>
                </Container>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex justify-center">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            You have nothing posted yet
                        </h1>
                    </div>


                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {posts.map((post) => (
                        <div key={post.$id}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
