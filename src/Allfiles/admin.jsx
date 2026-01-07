import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { format } from 'date-fns';
import Quill from 'quill';
import DOMPurify from 'dompurify';



const toolbarOptions = [
    [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }, { 'header': '4' }, { 'header': '5' }, { 'header': '6' }],
    ['bold', 'italic', 'underline'],
    ['link', 'image'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
    [{ 'size': ['small', 'medium', 'large', 'huge'] }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']
];

function Admin() {

    const [editorValue, setEditorValue] = useState('');
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [handle, setHandle] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [pagetitle, setPageTitle] = useState('');
    const [pagedescription, setPageDescription] = useState('');
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    
    useEffect(() => {
        setDate(format(new Date(), "yyyy-MM-dd"));
    }, []);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
        setImageUrl(URL.createObjectURL(file));
    };


    const sanitizeHtml = (html) => {
        const sanitizedHtml = DOMPurify.sanitize(html, {
            ALLOWED_TAGS: ['a', 'b', 'i', 'u', 'strong', 'em', 'ul', 'ol', 'li', 'p', 'img', 'br', 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'style'],
           
            FORBID_TAGS: ['script', 'style'],
            FORBID_ATTR: ['target', 'rel']
        });
        return sanitizedHtml;
    };
    

    const handleSubmit = async (status) => {
        if (!title || !description || !image || !author || !handle || !status) {
            setMessage('Please fill in all fields.');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('content', sanitizeHtml(editorValue));
        if (image) {
            formData.append('image', image);
        }
        formData.append('author', author);
        formData.append('date', date);
        formData.append('handle', handle);
        formData.append('pagetitle', pagetitle);
        formData.append('pagedescription', pagedescription);
        formData.append('category', category);
        formData.append('status', 'published');

        try {
            const response = await fetch('https://ecombithub-server-1.onrender.com/admin', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
            if (response.ok) {
                alert('Post published successfully!');
                resetForm();
            } else {
                setMessage(result.error || 'Error submitting form.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage('Error submitting form. Please try again.');
        }
    };

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://ecombithub-server-1.onrender.com/posts?status=published');
            if (response.ok) {
                const data = await response.json();
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

    const handleShowAdmin = async (post) => {
        setSelectedPost(post);
        setTitle(post.title);
        setDescription(post.description);
        setEditorValue(post.content);
        setAuthor(post.author);
        setDate(post.date);
        setPageTitle(post.pagetitle);
        setDescription(post.pagedescription)
        setHandle(post.handle);
        setCategory(post.category);
        setImageUrl(`https://ecombithub-server-1.onrender.com/image/${post.image}`);
        setShow(true);
        console.log(post.image)
    };

    const resetForm = () => {
        setEditorValue('');
        setImage(null);
        setImageUrl('');
        setTitle('');
        setDescription('');
        setAuthor('');
        setHandle('');
        setPageTitle('');
        setDescription('')
        setCategory('');
        setMessage('');
        setShow(false);
    };

    const handleCreateblog = () => {
        setShow(!show);
    }


    const handleUpdate = async () => {
        if (!selectedPost) {
            console.error('No post selected for update');
            return;
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('content', sanitizeHtml(editorValue));
        if (image) {
            formData.append('image', image);
        } else {
            formData.append('image', '');
        }
        formData.append('author', author);
        formData.append('date', date);
        formData.append('handle', handle);
        formData.append('pagetitle', pagetitle);
        formData.append('pagedescription', pagedescription);
        formData.append('category', category);
        formData.append('status', 'published');
    
        try {
            const response = await fetch(`https://ecombithub-server-1.onrender.com/admin/${selectedPost._id}`, {
                method: 'PUT',
                body: formData,
            });
    
            if (response.ok) {
                const result = await response.json();
                alert('Post updated successfully!');
                resetForm();
            } else {
                const result = await response.json();
                setMessage(result.error || 'Error updating post.');
            }
        } catch (error) {
            console.error('Error updating post:', error);
            setMessage('Error updating post. Please try again.');
        }
    };
    
 
    
    
    return (
        <>
            {show ? (
                <div className='admin-section'>
                    <div className='container'>
                        <div className="wrapper">
                            <div className='admin-section-wrap'>
                                <div className='admin-section-wrap-inputs'>
                                    <div className='admin-input-left'>
                                        <div className='admin-input'>
                                            <div className='admin-label'>
                                                <label htmlFor="title">Title</label>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Title"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </div>
                                        <div className='admin-input'>
                                            <div className='admin-label'>
                                                <label htmlFor="description">Description</label>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Description"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                            />
                                        </div>
                                        <div className='admin-input'>
                                            <div className='admin-label'>
                                                <label htmlFor="content">Content</label>
                                            </div>
                                            <ReactQuill
                                                value={editorValue}
                                                onChange={setEditorValue}
                                                modules={{ toolbar: toolbarOptions }}
                                            />
                                        </div>
                                    </div>
                                    <div className='admin-input-right'>
                                        <div className='admin-input-image'>
                                            <div>
                                                <div className='admin-label'>
                                                    <label htmlFor="Image">Featured Image</label>
                                                </div>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                />
                                            </div>
                                            {imageUrl && <img src={imageUrl} className='admin-image' alt="User" style={{ width: '300px', height: '200px' }} />}
                                        </div>
                                        <div className='admin-input-right-wrap'>
                                            <div className='admin-input'>
                                                <input
                                                    type="text"
                                                    placeholder="Author"
                                                    value={author}
                                                    onChange={(e) => setAuthor(e.target.value)}
                                                />
                                            </div>
                                            <div className='admin-input'>
                                                <div className='admin-label'>
                                                    <label htmlFor="Date">Date</label>
                                                </div>
                                                <input
                                                    type="date"
                                                    placeholder="Date"
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                />
                                            </div>
                                            <div className='admin-input'>
                                                <div className='admin-label'>
                                                    <label htmlFor="Handle">Handle</label>
                                                </div>
                                                <input
                                                    type="text"
                                                    placeholder="Handle"
                                                    value={handle}
                                                    onChange={(e) => setHandle(e.target.value)}
                                                />
                                            </div>
                                            <div className='admin-input'>
                                                <div className='admin-label'>
                                                    <label htmlFor="category">Category</label>
                                                </div>
                                                <select
                                                    value={category}
                                                    onChange={(e) => setCategory(e.target.value)}
                                                >
                                                    <option value="" disabled>Select Category</option>
                                                    <option value="option1">Option 1</option>
                                                    <option value="option2">Option 2</option>
                                                    <option value="option3">Option 3</option>
                                                </select>
                                            </div>
                                            <div className='admin-input'>
                                            <div className='admin-label'>
                                                    <label htmlFor="Pagetitle">Pagetitle</label>
                                                </div>
                                                <input
                                                    type="text"
                                                    placeholder="Pagetitle"
                                                    value={pagetitle}
                                                    onChange={(e) => setPageTitle(e.target.value)}
                                                />
                                            </div>
                                            <div className='admin-input'>
                                            <div className='admin-label'>
                                                    <label htmlFor="Pagedescription">Pagedescription</label>
                                                </div>
                                                <input
                                                    type="text"
                                                    placeholder="Pagedescription"
                                                    value={pagedescription}
                                                    onChange={(e) => setPageDescription(e.target.value)}
                                                />
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='bttn' onClick={handleCreateblog} >show blog</button>
                            {message && <p style={{ color: 'red' }}>{message}</p>}

                            <button className='bttn' onClick={() => handleSubmit('published')}>Publish</button>
                            <button className='bttn' onClick={handleUpdate}>Update</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='blog-admin-title'>
                    <div className="container">
                        <button className= 'bttn' onClick={handleCreateblog}>Create blog</button>
                        {posts.map((post) => (
                            <div key={post.id}>
                                <div className='blogging-section-sides-link'>
                                    <div className="blogging-section-title">
                                        <h3 onClick={() => handleShowAdmin(post)}>{post.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Admin;










// import React, { useState, useEffect } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import { format } from 'date-fns';
// import DOMPurify from 'dompurify';

// const toolbarOptions = [
//     [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }, { 'header': '4' }, { 'header': '5' }, { 'header': '6' }],
//     ['bold', 'italic', 'underline'],
//     ['link', 'image'],
//     [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//     [{ 'script': 'sub' }, { 'script': 'super' }],
//     [{ 'indent': '-1' }, { 'indent': '+1' }],
//     [{ 'direction': 'rtl' }],
//     [{ 'size': ['small', 'medium', 'large', 'huge'] }],
//     [{ 'color': [] }, { 'background': [] }],
//     [{ 'font': [] }],
//     [{ 'align': [] }],
//     ['clean']
// ];

// function Admin() {
//     const [editorValue, setEditorValue] = useState('');
//     const [image, setImage] = useState('');
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [author, setAuthor] = useState('');
//     const [date, setDate] = useState('');
//     const [handle, setHandle] = useState('');
//     const [category, setCategory] = useState('');
//     const [imageUrl, setImageUrl] = useState('');
//     const [pagetitle, setPageTitle] = useState('');
//     const [pagedescription, setPageDescription] = useState('');
//     const [message, setMessage] = useState('');
//     const [show, setShow] = useState(false);
//     const [posts, setPosts] = useState([]);
//     const [selectedPost, setSelectedPost] = useState(null);

//     useEffect(() => {
//         setDate(format(new Date(), "yyyy-MM-dd"));
//     }, []);

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         setImage(file);
//         setImageUrl(URL.createObjectURL(file));
//     };

//        const sanitizeHtml = (html) => {
//          const sanitizedHtml = DOMPurify.sanitize(html, {
//              ALLOWED_TAGS: ['a', 'b', 'i', 'u', 'strong', 'em', 'ul', 'ol', 'li', 'p', 'img', 'br', 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
//              ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'style'],
           
//              FORBID_TAGS: ['script', 'style'],
//              FORBID_ATTR: ['target', 'rel']
//          });
//          return sanitizedHtml;
//      };
    

//     const handleSubmit = async (status) => {
//         if (!title || !description || !image || !author || !handle || !status) {
//             setMessage('Please fill in all fields.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('title', title);
//         formData.append('description', description);
//        formData.append('content', sanitizeHtml(editorValue));
//         if (image) {
//             formData.append('image', image);
//         }
//         formData.append('author', author);
//         formData.append('date', date);
//         formData.append('handle', handle);
//         formData.append('pagetitle', pagetitle);
//         formData.append('pagedescription', pagedescription);
//         formData.append('category', category);
//         formData.append('status', 'published');

//         try {
//             const response = await fetch('https://ecombithub-server-1.onrender.com/blog/admin', {
//                 method: 'POST',
//                 body: formData,
//             });
//             const result = await response.json();
//             if (response.ok) {
//                 alert('Post published successfully!');
//                 resetForm();
//             } else {
//                 setMessage(result.error || 'Error submitting form.');
//             }
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             setMessage('Error submitting form. Please try again.');
//         }
//     };

//     const fetchPosts = async () => {
//         try {
//             const response = await fetch('https://ecombithub-server-1.onrender.com/blog/posts?status=published');
//             if (response.ok) {
//                 const data = await response.json();
//                 setPosts(data);
//             } else {
//                 console.error('Error fetching posts:', response.statusText);
//             }
//         } catch (error) {
//             console.error('Error fetching posts:', error);
//         }
//     };

//     useEffect(() => {
//         fetchPosts();
//     }, []);

//     const handleShowAdmin = async (post) => {
//         setSelectedPost(post);
//         setTitle(post.title);
//         setDescription(post.description);
//         setEditorValue(post.content);
//         setAuthor(post.author);
//         setDate(post.date);
//         setHandle(post.handle);
//         setPageTitle(post.pagetitle);
//         setDescription(post.pagedescription)
//         setCategory(post.category);
//         setImageUrl(`https://ecombithub-server-1.onrender.com/image/${post.image}`);
//         setShow(true);
//         console.log(post.image)
//     };

//     const resetForm = () => {
//         setEditorValue('');
//         setImage(null);
//         setImageUrl('');
//         setTitle('');
//         setDescription('');
//         setAuthor('');
//         setHandle('');
//         setCategory('');
//         setPageTitle('');
//         setDescription('')
//         setMessage('');
//         setShow(false);
//     };

//     const handleCreateblog = () => {
//         setShow(!show);
//     }


//     const handleUpdate = async () => {
//         if (!selectedPost) {
//             console.error('No post selected for update');
//             return;
//         }
//         const formData = new FormData();
//         formData.append('title', title);
//         formData.append('description', description);
//        formData.append('content', sanitizeHtml(editorValue));
//         if (image) {
//             formData.append('image', image);
//         } else {
//             formData.append('image', '');
//         }
//         formData.append('author', author);
//         formData.append('date', date);
//         formData.append('handle', handle);
//         formData.append('pagetitle', pagetitle);
//         formData.append('pagedescription', pagedescription);
//         formData.append('category', category);
//         formData.append('status', 'published');
    
//         try {
//             const response = await fetch(`https://ecombithub-server-1.onrender.com/blog/admin/${selectedPost._id}`, {
//                 method: 'PUT',
//                 body: formData,
//             });
    
//             if (response.ok) {
//                 const result = await response.json();
//                 alert('Post updated successfully!');
//                 resetForm();
//             } else {
//                 const result = await response.json();
//                 setMessage(result.error || 'Error updating post.');
//             }
//         } catch (error) {
//             console.error('Error updating post:', error);
//             setMessage('Error updating post. Please try again.');
//         }
//     };

//     return (
//         <>
//             {show ? (
//                 <div className='admin-section'>
//                     <div className='container'>
//                         <div className="wrapper">
//                             <div className='admin-section-wrap'>
//                                 <div className='admin-section-wrap-inputs'>
//                                     <div className='admin-input-left'>
//                                         <div className='admin-input'>
//                                             <div className='admin-label'>
//                                                 <label htmlFor="title">Title</label>
//                                             </div>
//                                             <input
//                                                 type="text"
//                                                 placeholder="Title"
//                                                 value={title}
//                                                 onChange={(e) => setTitle(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='admin-input'>
//                                             <div className='admin-label'>
//                                                 <label htmlFor="description">Description</label>
//                                             </div>
//                                             <input
//                                                 type="text"
//                                                 placeholder="Description"
//                                                 value={description}
//                                                 onChange={(e) => setDescription(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='admin-input'>
//                                             <div className='admin-label'>
//                                                 <label htmlFor="content">Content</label>
//                                             </div>
//                                             <ReactQuill
//                                                 value={editorValue}
//                                                 onChange={setEditorValue}
//                                                 modules={{ toolbar: toolbarOptions }}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className='admin-input-right'>
//                                         <div className='admin-input-image'>
//                                             <div>
//                                                 <div className='admin-label'>
//                                                     <label htmlFor="Image">Featured Image</label>
//                                                 </div>
//                                                 <input
//                                                     type="file"
//                                                     accept="image/*"
//                                                     onChange={handleImageChange}
//                                                 />
//                                             </div>
//                                             {imageUrl && <img src={imageUrl} className='admin-image' alt="User" style={{ width: '300px', height: '200px' }} />}
//                                         </div>
//                                         <div className='admin-input-right-wrap'>
//                                             <div className='admin-input'>
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Author"
//                                                     value={author}
//                                                     onChange={(e) => setAuthor(e.target.value)}
//                                                 />
//                                             </div>
//                                             <div className='admin-input'>
//                                                 <div className='admin-label'>
//                                                     <label htmlFor="Date">Date</label>
//                                                 </div>
//                                                 <input
//                                                     type="date"
//                                                     placeholder="Date"
//                                                     value={date}
//                                                     onChange={(e) => setDate(e.target.value)}
//                                                 />
//                                             </div>
//                                             <div className='admin-input'>
//                                                 <div className='admin-label'>
//                                                     <label htmlFor="Handle">Handle</label>
//                                                 </div>
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Handle"
//                                                     value={handle}
//                                                     onChange={(e) => setHandle(e.target.value)}
//                                                 />
//                                             </div>
//                                             <div className='admin-input'>
//                                                 <div className='admin-label'>
//                                                     <label htmlFor="category">Category</label>
//                                                 </div>
//                                                 <select
//                                                     value={category}
//                                                     onChange={(e) => setCategory(e.target.value)}
//                                                 >
//                                                     <option value="" disabled>Select Category</option>
//                                                     <option value="option1">Option 1</option>
//                                                     <option value="option2">Option 2</option>
//                                                     <option value="option3">Option 3</option>
//                                                 </select>
//                                             </div>
//                                             <div className='admin-input'>
//                                             <div className='admin-label'>
//                                                     <label htmlFor="Handle">Pagetitle</label>
//                                                 </div>
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Handle"
//                                                     value={pagetitle}
//                                                     onChange={(e) => setPageTitle(e.target.value)}
//                                                 />
//                                             </div>
//                                             <div className='admin-input'>
//                                             <div className='admin-label'>
//                                                     <label htmlFor="Handle">Pagedescription</label>
//                                                 </div>
//                                                 <input
//                                                     type="text"
//                                                     placeholder="Handle"
//                                                     value={pagedescription}
//                                                     onChange={(e) => setPageDescription(e.target.value)}
//                                                 />
//                                                 </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <button className='bttn' onClick={handleCreateblog} >show blog</button>
//                             {message && <p style={{ color: 'red' }}>{message}</p>}

//                             <button className='bttn' onClick={() => handleSubmit('published')}>Publish</button>
//                             <button className='bttn' onClick={handleUpdate}>Update</button>
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <div className='blog-admin-title'>
//                     <div className="container">
//                         <button className= 'bttn' onClick={handleCreateblog}>Create blog</button>
//                         {posts.map((post) => (
//                             <div key={post.id}>
//                                 <div className='blogging-section-sides-link'>
//                                     <div className="blogging-section-title">
//                                         <h3 onClick={() => handleShowAdmin(post)}>{post.title}</h3>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default Admin;








