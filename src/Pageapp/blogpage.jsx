import React, { useState, useEffect } from 'react';
import IMAGES from '../Allfiles/image';
import { Link } from 'react-router-dom';
function Blogpage() {


    const [posts, setPosts] = useState([]);
    const fetchPosts = async () => {
        try {
            const response = await fetch('https://ecombithub-database.onrender.com/posts?status=published');
            if (response.ok) {
                const data = await response.json();
                console.log('Posts:', data);
                setPosts(data);


            } else {
                console.error('Error fetching posts:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className='app-blog-section'>
            <div className='wrapper'>
                <div className="container">
                    <div className="app-blog-section-h2">
                        <h2>Blog</h2>

                        <div className='app-blog-show'>


                            <div className='blog-section-all-target'>
                                {posts.slice(0,6).map((post) => (
                                    <Link key={post.id} to={`/shopify/app/${post.handle}`}> <div className='blog-section-all-data'>
                                        <div className='blog-section-all-images'>
                                            <img src={`https://ecombithub-database.onrender.com/image/${post.image}`} alt={post.title} />
                                            <div className='blog-section-all-elements'>
                                                <h2>{post.title}</h2>
                                                <p>{post.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                ))}

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogpage
