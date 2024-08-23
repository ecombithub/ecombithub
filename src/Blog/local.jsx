import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IMAGES from '../Allfiles/image';


function Local() {

    const [posts, setPosts] = useState([]);
    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:5000/posts?status=published');
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
        <>
            <div className="blogs-section">
                <div className="wrapper">
                    <div className="container">
                        <div className='blogging-section'>
                            <Link to='/shopify/app/build'> <div className="blog-section-app">
                                <div className="blog-section-title">
                                    <h1>How To Build Shopify App?</h1>
                                    <div className='blog-discription'>
                                        <p>Building a Shopify app is developing software that integrates with the Shopify platform. This development enables the creation of functionalities that interact with the Shopify API, extending its capabilities or providing additional features for Shopify merchants. Apps can range from simple tools that enhance store management to complex applications that provide effective e-commerce solutions...</p>
                                    </div>
                                </div>
                                <div className="blog-section-image">
                                    <img src={IMAGES.build102} alt="Build Shopify App" />
                                </div>
                            </div>
                            </Link>
                        </div>

                        <div className='blogging-section'>
                            <div className='blogging-section-show'>
                                <div className='blogging-section-sides'>
                                    <div className='blog-section-build'>
                                        {posts.map((post) => (
                                            <Link key={post.id} to={`/shopify/app/${post.handle}`}>
                                                <div className='blogging-section-sides-link'>
                                                    <div className='blogging-section-image'>
                                                        <img src={`http://localhost:5000/image/${post.image}`} alt={post.title} />
                                                    </div>
                                                    <div className="blogging-section-title">
                                                        <h2>{post.title}</h2>
                                                        <div className='blog-discription'>
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
            </div>
        </>
    );
}

export default Local;