// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import IMAGES from '../Allfiles/image';
// import Loader from './Loader';
// import LZString from 'lz-string';

// function Local({ setLoading }) {
//     const [posts, setPosts] = useState([]);
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(null);
//     const [localLoading, setLocalLoading] = useState(true);

//     useEffect(() => {
//         const fetchPosts = async () => {
//             try {
//                 const [response1, response2] = await Promise.all([
//                     fetch('https://ecombithub-server-1.onrender.com/posts?status=published'),
//                     fetch('https://ecombithub-server-1.onrender.com/blog/posts?status=published')
//                 ]);

//                 if (!response1.ok || !response2.ok) {
//                     throw new Error('Error fetching posts');
//                 }

//                 const data1 = await response1.json();
//                 const data2 = await response2.json();

//                 localStorage.setItem('posts', LZString.compress(JSON.stringify(data1)));
//                 localStorage.setItem('data', LZString.compress(JSON.stringify(data2)));

//                 setPosts(data1);
//                 setData(data2);

//                 setLocalLoading(false);
//                 setLoading(false); 
//             } catch (error) {
//                 console.error('Error fetching posts:', error);
//                 setError('Error fetching posts');
//                 setLocalLoading(false);
//                 setLoading(false);
//             }
//         };

//         const savedPosts = localStorage.getItem('posts');
//         const savedData = localStorage.getItem('data');

//         if (savedPosts && savedData) {
//             const decompressedPosts = JSON.parse(LZString.decompress(savedPosts));
//             const decompressedData = JSON.parse(LZString.decompress(savedData));

//             setPosts(decompressedPosts);
//             setData(decompressedData);

//             setLocalLoading(false);
//             setLoading(false); 
//         } else {
//             fetchPosts();
//         }
//     }, [setLoading]); 

//     const truncateText = (text, wordLimit) => {
//         const words = text.split(' ');
//         if (words.length > wordLimit) {
//             return words.slice(0, wordLimit).join(' ') + '...';
//         }
//         return text;
//     };

//     if (localLoading) {
//         return <Loader />;
//     }

//     return (
//         <div className="blogs-section">
//             <div className="wrapper">
//                 <div className="container">
//                     <div className='blogging-section'>
//                         <Link to='/shopify/app/build'>
//                             <div className="blog-section-app">
//                                 <div className="blog-section-title">
//                                     <h1>How To Build Shopify App?</h1>
//                                     <div className='blog-discription'>
//                                         <p>Building a Shopify app is developing software that integrates with the Shopify platform. This development enables the creation of functionalities that interact with the Shopify API, extending its capabilities or providing additional features for Shopify merchants...</p>
//                                     </div>
//                                 </div>
//                                 <div className="blog-section-image">
//                                     <img src={IMAGES.buildblog} alt="Build Shopify App" />
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>

//                     <div className='blogging-section'>
//                         <div className='blogging-section-show'>
//                             <div className='blogging-section-sides'>
//                                 <div className='blog-section-build'>
//                                     {posts.slice(0, 9).map((post) => (
//                                         <Link key={post.id} to={`/shopify/app/${post.handle}`}>
//                                             <div className='blogging-section-sides-link'>
//                                                 <div className='blogging-section-image'>
//                                                     <img src={`https://ecombithub-server-1.onrender.com/image/${post.image}`} alt={post.title} />
//                                                 </div>
//                                                 <div className="blogging-section-title">
//                                                     <h2>{post.title}</h2>
//                                                     <div className='blog-discription'>
//                                                         <p>{truncateText(post.description, 30)}</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </Link>
//                                     ))}
//                                     {data.slice(0, 1).map((post) => (
//                                         <Link key={post.id} to={`/shopify/${post.handle}`}>
//                                             <div className='blogging-section-sides-link'>
//                                                 <div className='blogging-section-image'>
//                                                     <img src={`https://ecombithub-server-1.onrender.com/image/${post.image}`} alt={post.title} />
//                                                 </div>
//                                                 <div className="blogging-section-title">
//                                                     <h2>{post.title}</h2>
//                                                     <div className='blog-discription'>
//                                                         <p>{truncateText(post.description, 30)}</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </Link>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Local;


































import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IMAGES from '../Allfiles/image';
import Loader from './Loader';

function Local({ setLoading }) {
    const [posts, setPosts] = useState([]);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [localLoading, setLocalLoading] = useState(true);

    const fetchPosts = async () => {
        try {
            const [response1, response2] = await Promise.all([
                fetch('http://localhost:5000/posts?status=published'),
                fetch('http://localhost:5000/blog/posts?status=published')
            ]);

            if (!response1.ok || !response2.ok) {
                throw new Error('Error fetching posts');
            }
          

            const data1 = await response1.json();
            const data2 = await response2.json();

            setPosts(data1);
            setData(data2);

            setTimeout(() => {
                setLocalLoading(false);
                setLoading(false);
            }, 500);
        } catch (error) {
            console.error('Error fetching posts:', error);
            setError('Error fetching posts');
            setLocalLoading(false);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };

    if (localLoading) {
        return <Loader />;
    }

    return (
        <div className="blogs-section">
            <div className="wrapper">
                <div className="container">
                    <div className='blogging-section'>
                        <Link to='/shopify/app/build'>
                            <div className="blog-section-app">
                                <div className="blog-section-title">
                                    <h1>How To Build Shopify App?</h1>
                                    <div className='blog-discription'>
                                        <p>Building a Shopify app is developing software that integrates with the Shopify platform. This development enables the creation of functionalities that interact with the Shopify API, extending its capabilities or providing additional features for Shopify merchants...</p>
                                    </div>
                                </div>
                                <div className="blog-section-image">
                                    <img src={IMAGES.buildblog} alt="Build Shopify App" />
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='blogging-section'>
                        <div className='blogging-section-show'>
                            <div className='blogging-section-sides'>
                                <div className='blog-section-build'>
                                    {posts.slice(0, 9).map((post) => (
                                        <Link key={post.id} to={`/shopify/app/${post.handle}`}>
                                            <div className='blogging-section-sides-link'>
                                                <div className='blogging-section-image'>
                                                    <img src={`https://ecombithub-server-1.onrender.com/image/${post.image}`} alt={post.title} />
                                                </div>
                                                <div className="blogging-section-title">
                                                    <h2>{post.title}</h2>
                                                    <div className='blog-discription'>
                                                        <p>{truncateText(post.description, 30)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                    {/* {data.slice(0, 1).map((post) => (
                                        <Link key={post.id} to={`/shopify/${post.handle}`}>
                                            <div className='blogging-section-sides-link'>
                                                <div className='blogging-section-image'>
                                                    <img src={`https://ecombithub-server-1.onrender.com/image/${post.image}`} alt={post.title} />
                                                </div>
                                                <div className="blogging-section-title">
                                                    <h2>{post.title}</h2>
                                                    <div className='blog-discription'>
                                                        <p>{truncateText(post.description, 30)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Local;
