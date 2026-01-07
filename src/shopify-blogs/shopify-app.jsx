import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Cursor from '../Cursor';
import Bar from '../Blog/bar';
import Mark from '../Blog/Mark';
import ScrollTo from '../Blog/scroll';
import Footer from '../Footer';
import Loader from '../Blog/Loader'; 
function Shopifyapp() {
    const { handle } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://ecombithub-server-1.onrender.com/posts?handle=${handle}`);
                if (response.ok) {
                    const data = await response.json();
                    setPost(data[0]);
                } else {
                    console.error('Error fetching post:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching post:', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchPost();
    }, [handle]);

    if (loading) return <Loader />;

    if (!post) return <p>No post found.</p>; 

    return (
        <>  
            <Bar />
            <Mark />
            <Helmet>
                <title>{post.pagetitle || 'Default Title'}</title>
                <meta name="description" content={post.pagedescription || 'Default Description'} />
                <link rel="canonical" href={`https://ecombithub.com/shopify/app/${post.handle}`} />
            </Helmet>
            <div className='blogdata-section-app'>
                <div className="blogdata">
                    <div className="wrapper">
                        <div className="container">
                            <div className='blog-sectiondata'>
                                <div className='blog-section-build'>
                                    <div key={post.id}>
                                        <div className='blog-section-h1'>
                                            <h1>{post.title}</h1>
                                        </div>
                                        <div className='blog-image'>
                                            <img src={`https://ecombithub-server-1.onrender.com/image/${post.image}`} alt={post.title} />
                                        </div>
                                        <div className='blog-content' dangerouslySetInnerHTML={{ __html: post.content }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollTo />
            <Cursor />
            <Footer/>
        </>
    );
}

export default Shopifyapp;
