


import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/conf";
import Loading from '../components/Loading/Loading'; // Import your loading component

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // Initialize loading state

    useEffect(() => {
        setLoading(true); // Set loading to true at the start of fetch
        appwriteService.getPosts()
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            }).catch((error) => {
                console.error('Error fetching posts:', error);
            }).finally(() => {
                setLoading(false); // Set loading to false once done
            });
    }, []);

    return (
        <div className='w-full py-8'>
            <Container>
                {loading ? (
                    <Loading /> // Display loading component when fetching
                ) : (
                   
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {posts.map((post) => (
                            <PostCard key={post.$id} {...post} />
                        ))}
                    </div>
                )}
            </Container>
        </div>
    );
}

export default AllPosts;
