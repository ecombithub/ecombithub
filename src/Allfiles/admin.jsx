import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { format } from 'date-fns';

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

    const handleSubmit = async (status) => {
        if (!title || !description || !image || !author || !handle || !status) {
            setMessage('Please fill in all fields.');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('content', editorValue);
        if (image) {
            formData.append('image', image);
        }
        formData.append('author', author);
        formData.append('date', date);
        formData.append('handle', handle);
        formData.append('category', category);
        formData.append('status', 'published');

        try {
            const response = await fetch('https://ecombithub-database.onrender.com/admin', {
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
            const response = await fetch('https://ecombithub-database.onrender.com/posts?status=published');
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
        setHandle(post.handle);
        setCategory(post.category);
        setImageUrl(`https://ecombithub-database.onrender.com/image/${post.image}`);
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
        formData.append('content', editorValue);
        if (image) {
            formData.append('image', image);
        } else {
            formData.append('image', '');
        }
        formData.append('author', author);
        formData.append('date', date);
        formData.append('handle', handle);
        formData.append('category', category);
        formData.append('status', 'published');
    
        try {
            const response = await fetch(`https://ecombithub-database.onrender.com/admin/${selectedPost._id}`, {
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
//     const [message, setMessage] = useState('');
//     const [show, setShow] = useState('')

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         console.log("Selected file:", file);
//         setImage(file);
//         setImageUrl(URL.createObjectURL(file));
//     };
//     useEffect(() => {
//         setDate(format(new Date(), "yyyy-MM-dd"));
//     }, []);


//     const handleSubmit = async (status) => {
//         if (!title || !description || !image || !author || !handle || !status) {
//             setMessage('Please fill in all fields.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('title', title);
//         formData.append('description', description);
//         formData.append('content', editorValue);
//         if (image) {
//             formData.append('image', image);
//         }
//         formData.append('author', author);
//         formData.append('date', date);
//         formData.append('handle', handle);
//         formData.append('category', category);
//         formData.append('status', 'published');
//         try {
//             const response = await fetch('http://localhost:5000/admin', {
//                 method: 'POST',
//                 body: formData,
//             });
//             const result = await response.json();
//             if (response.ok) {
//                 alert('Post published successfully!');

//                 setEditorValue('');
//                 setImage(null);
//                 setImageUrl('');
//                 setTitle('');
//                 setDescription('');
//                 setAuthor('');
//                 setHandle('');
//                 setCategory('');
//             } else {
//                 setMessage(result.error || 'Error submitting form.');
//             }
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             setMessage('Error submitting form. Please try again.');
//         }
//     };

//     const [posts, setPosts] = useState([]);
//     const fetchPosts = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/posts?status=published');
//             if (response.ok) {
//                 const data = await response.json();
//                 console.log('Posts:', data);
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

//     const handleshowadmin = () =>{
//         setShow(!show);
//     }

//     return (
//         <>

//             {show ? (<div className='admin-section'>
//                 <div className='container'>
//                     <div className="wrapper">
//                         <div className='admin-section-wrap'>
//                             <div className='admin-section-wrap-inputs'>
//                                 <div className='admin-input-left'>
//                                     <div className='admin-input'>
//                                         <div className='admin-lable'>
//                                             <label htmlFor="title">Title</label>
//                                         </div>
//                                         <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
//                                     </div>
//                                     <div className='admin-input'>
//                                         <div className='admin-lable'>
//                                             <label htmlFor="description">Description</label>
//                                         </div>
//                                         <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//                                     </div>
//                                     <div className='admin-input'>
//                                         <div className='admin-lable'>
//                                             <label htmlFor="Content">Content</label>
//                                         </div>
//                                         <ReactQuill
//                                             value={editorValue}
//                                             onChange={setEditorValue}
//                                             modules={{ toolbar: toolbarOptions }}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className='admin-input-right'>
//                                     <div className='admin-input-image'>
//                                         <div>
//                                             <div className='admin-lable'>
//                                                 <label htmlFor="Image">Featured Image</label>
//                                             </div>
//                                             <input type="file" accept="image/*" onChange={handleImageChange} />
//                                         </div>
//                                         {imageUrl && <img src={imageUrl} className='admin-image' alt="User" style={{ width: '300px', height: '200px' }} />}
//                                     </div>
//                                     <div className='admin-input-right-wrp'>
//                                         <div className='admin-input'>
//                                             <input
//                                                 type="text"
//                                                 placeholder="Author"
//                                                 value={author}
//                                                 onChange={(e) => setAuthor(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='admin-input'>
//                                             <div className='admin-lable'>
//                                                 <label htmlFor="Image">Date</label>
//                                             </div>
//                                             <input
//                                                 type="date"
//                                                 placeholder="Date"
//                                                 value={date}
//                                                 onChange={(e) => setDate(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='admin-input'>
//                                             <div className='admin-lable'>
//                                                 <label htmlFor="Image">Handle</label>
//                                             </div>
//                                             <input
//                                                 type="text"
//                                                 placeholder="Handle"
//                                                 value={handle}
//                                                 onChange={(e) => setHandle(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='admin-input'>
//                                             <div className='admin-lable'>
//                                                 <label htmlFor="category">Category</label>
//                                             </div>
//                                             <select
//                                                 value={category}
//                                                 onChange={(e) => setCategory(e.target.value)}
//                                             >
//                                                 <option value="" disabled>Select Category</option>
//                                                 <option value="option1">Option 1</option>
//                                                 <option value="option2">Option 2</option>
//                                                 <option value="option3">Option 3</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         {message && <p style={{ color: 'red' }}>{message}</p>}

//                         <button className='bttn' onClick={() => handleSubmit('published')}>Publish</button>
//                     </div>
//                 </div>
//             </div>
//             ) : (
//                 <div className='blog-admin-title'>
//                     <div className="container">
//                         {posts.map((post) => (
//                             <div key={post.id}>
//                                 <div className='blogging-section-sides-link'>
//                                     <div className="blogging-section-title">
//                                         <h2 onClick={handleshowadmin}>{post.title} </h2>
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





// // const handleSubmit = async (status) => {
// //     if (!title || !description || !image || !author) {
// //         setMessage('Please fill in all fields.');
// //         return;
// //     }

// //     const formData = new FormData();
// //     formData.append('title', title);
// //     formData.append('description', description);
// //     formData.append('content', editorValue);
// //     if (image) {
// //         formData.append('image', image);
// //     }
// //     formData.append('author', author);
// //     formData.append('date', date);
// //     formData.append('handle', handle);
// //     formData.append('category', category);
// //     formData.append('status', status);

// //     try {
// //         const response = await fetch('http://localhost:5000/admin', {
// //             method: 'POST',
// //             body: formData,
// //         });
// //         const result = await response.json();
// //         console.log(result);
// //         alert(status === 'draft' ? 'Post saved as draft!' : 'Post published successfully!');

// //     } catch (error) {
// //         console.error('Error submitting form:', error);
// //         alert('Error submitting form. Please try again.');
// //     }
// // };