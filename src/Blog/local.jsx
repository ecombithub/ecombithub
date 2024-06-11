import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Local() {
    const [data, setData] = useState([]);
    const [first, setFirst] = useState([]);
    const [second, setSecond] = useState([]);
    const [third, setThird] = useState([]);
    const [four, setFour] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all([
                    fetch("https://strapi-1-hnmf.onrender.com/api/products/?populate=*"),
                    fetch("https://strapi-1-hnmf.onrender.com/api/product-firsts/?populate=*"),
                    fetch("https://strapi-1-hnmf.onrender.com/api/product-twos/?populate=*"),
                    fetch("https://strapi-1-hnmf.onrender.com/api/product-threes/?populate=*"),
                    fetch("https://strapi-1-hnmf.onrender.com/api/product-fous/?populate=*")
                ]);

                const jsonDatas = await Promise.all(responses.map(response => response.json()));
                const [products, productFirsts, productSeconds, productThirds, productFours] = jsonDatas.map(data => data.data || []);


                if (products.length > 0) {
                    localStorage.setItem('products', JSON.stringify(products));
                    localStorage.setItem('productFirsts', JSON.stringify(productFirsts));
                    localStorage.setItem('productSeconds', JSON.stringify(productSeconds));
                    localStorage.setItem('productThirds', JSON.stringify(productThirds));
                    localStorage.setItem('productfous', JSON.stringify(productFours));
                }

                setData(products);
                setFirst(productFirsts);
                setSecond(productSeconds);
                setThird(productThirds);
                setFour(productFours);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {

        const savedProducts = localStorage.getItem('products');
        const savedProductFirsts = localStorage.getItem('productFirsts');
        const savedProductSeconds = localStorage.getItem('productSeconds');
        const savedProductThirds = localStorage.getItem('productThirds');
        const savedProductFours = localStorage.getItem('productfous');

        if (savedProducts && savedProductFirsts && savedProductSeconds && savedProductThirds && savedProductFours) {
            setData(JSON.parse(savedProducts));
            setFirst(JSON.parse(savedProductFirsts));
            setSecond(JSON.parse(savedProductSeconds));
            setThird(JSON.parse(savedProductThirds));
            setFour(JSON.parse(savedProductFours));
            setLoading(false);
        }
    }, []);

    const extractDate = (timestamp) => {
        const date = new Date(timestamp);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };


    return (
        <>
            <div className="loacal--section-online">
                <div className="wrapper">
                    <div className="container">
                        <div className="loacal--section-online-global">
                            <div className="loacal--section-online-global-per">
                                <div className="loacal--section-online-drive">
                                    <div className="loacal--section-online-drive-start">
                                        {data.map(product => (
                                            <Link
                                                key={product.id}
                                                to={`/blogpage/${product.attributes.url}`}
                                                state={{ product }}
                                                className='product-container'
                                            >
                                                <div className='product-details-section'>
                                                    <div className='product-details'>
                                                        <h2>{product.attributes.title}</h2>
                                                        <p>{product.attributes.Description}</p>
                                                        <button id="loacal--btn-connor">{product.attributes.Authorname}</button>
                                                        <button id="loacal--btn-feb">{extractDate(product.attributes.createdAt)}</button>
                                                    </div>
                                                </div>
                                                <div className='loacal--section-feb'>
                                                    <div className='loacal--section-conner'>
                                                        {product.attributes.image && (
                                                            <img src={product.attributes.image.data.attributes.url} alt={product.attributes.title} />
                                                        )}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="loacal--section-find">
                                <div className="loacal--section-keyworld">
                                    {first.map(product => (
                                        <Link
                                            key={product.id}
                                            to={`/blogpage/${product.attributes.url}`}
                                            state={{ product }}
                                            className='product-keyworld'
                                        >
                                            <div className='product-image-keyworld'>
                                                {product.attributes.image && (
                                                    <img src={product.attributes.image.data.attributes.url} alt={product.attributes.title} />
                                                )}
                                            </div>
                                            <div className='loacal--section-competitor'>
                                                <button id="to">keyword Research</button>
                                                <h2>{product.attributes.title}</h2>
                                                <p>{product.attributes.Description}</p>
                                                <div className="loacal--section-conner-lahey">
                                                    <h4 id="mar">{product.attributes.Authorname}</h4>
                                                    <p>{extractDate(product.attributes.createdAt)}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="loacal--section-create-key">
                                    {second.map(product => (
                                        <Link
                                            key={product.id}
                                            to={`/blogpage/${product.attributes.url}`}
                                            state={{ product }}
                                            className='product-keyworld'
                                        >
                                            <div className='product-image-keyworld'>
                                                {product.attributes.image && (
                                                    <img src={product.attributes.image.data.attributes.url} alt={product.attributes.title} />
                                                )}
                                            </div>
                                            <div className='loacal--section-word-key'>
                                                <button id="to">keyword Research</button>
                                                <h2>{product.attributes.title}</h2>
                                                <p>{product.attributes.Description}</p>
                                                <div className="loacal--section-word-rachel">
                                                    <h4 id="mar1">{product.attributes.Authorname}</h4>
                                                    <p>{extractDate(product.attributes.createdAt)}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="loacal--section-keyworld">
                                    {third.map(product => (
                                        <Link
                                            key={product.id}
                                            to={`/blogpage/${product.attributes.url}`}
                                            state={{ product }}
                                            className='product-keyworld'
                                        >
                                            <div className='product-image-keyworld'>
                                                {product.attributes.image && (
                                                    <img src={product.attributes.image.data.attributes.url} alt={product.attributes.title} />
                                                )}
                                            </div>
                                            <div className='loacal--section-competitor'>
                                                <button id="to">keyword Research</button>
                                                <h2>{product.attributes.title}</h2>
                                                <p>{product.attributes.Description}</p>
                                                <div className="loacal--section-conner-lahey">
                                                    <h4 id="mar">{product.attributes.Authorname}</h4>
                                                    <p>{extractDate(product.attributes.createdAt)}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="loacal--section-create-key">
                                    {four.map(product => (
                                        <Link
                                            key={product.id}
                                            to={`/blogpage/${product.attributes.url}`}
                                            state={{ product }}
                                            className='product-keyworld'
                                        >
                                            <div className='product-image-keyworld'>
                                                {product.attributes.image && (
                                                    <img src={product.attributes.image.data.attributes.url} alt={product.attributes.title} />
                                                )}
                                            </div>
                                            <div className='loacal--section-word-key'>
                                                <button id="to">keyword Research</button>
                                                <h2>{product.attributes.title}</h2>
                                                <p>{product.attributes.Description}</p>
                                                <div className="loacal--section-word-rachel">
                                                    <h4 id="mar1">{product.attributes.Authorname}</h4>
                                                    <p>{extractDate(product.attributes.createdAt)}</p>
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
        </>
    );
}

export default Local;










// import React, { useState, useEffect, } from 'react';
// import { Link } from 'react-router-dom';
// function Local() {

//     const [data, setData] = useState([]);
//     const [first, setFirst] = useState([]);
//     const [second, setSecond] = useState([]);
//     const [third, setThird] = useState([]);
//     const [four, setFour] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchData = async () => {
//         try {
//             const responses = await Promise.all([
//                 fetch("https://strapi-1-hnmf.onrender.com/api/products/?populate=*"),
//                 fetch("https://strapi-1-hnmf.onrender.com/api/product-firsts/?populate=*"),
//                 fetch("https://strapi-1-hnmf.onrender.com/api/product-twos/?populate=*"),
//                 fetch("https://strapi-1-hnmf.onrender.com/api/product-threes/?populate=*"),
//                 fetch("https://strapi-1-hnmf.onrender.com/api/product-fous?populate=*")
//             ]);

//             const jsonDatas = await Promise.all(responses.map(response => response.json()));
//             setData(jsonDatas[0].data || []);
//             setFirst(jsonDatas[1].data || []);
//             setSecond(jsonDatas[2].data || []);
//             setThird(jsonDatas[3].data || []);
//             setFour(jsonDatas[4].data || []);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const extractDate = (timestamp) => {
//         const date = new Date(timestamp);
//         const options = { year: 'numeric', month: 'long', day: 'numeric' };
//         return date.toLocaleDateString('en-US', options);
//     };

//     if (loading) {
//         return <div></div>
//     }

//     return (
//         <>
//             <div className="loacal--section-online">
//                 <div className="wrapper">
//                     <div className="container">
//                         <div className="loacal--section-online-global">
//                             <div className="loacal--section-online-global-per">
//                                 <div className="loacal--section-online-drive">
//                                     <div className="loacal--section-online-drive-start">
//                                         {data.map(product => (
//                                             <Link
//                                                 key={product.id}
//                                                 to={`/blogpage/${product.attributes.url}`}
//                                                 state={{ product }}
//                                                 className='product-container'
//                                             >
//                                                 {/* <Link
//                                                 key={product.id}
//                                                 to={`/blogpage/${product.attributes.title.replace(/ /g, '-').toLowerCase()}`}
//                                                  state={{ product }}
//                                                  className='product-container'
//                                              > */}

//                                                 <div className='product-details-section'>
//                                                     <div className='product-details'>
//                                                         <h2>{product.attributes.title}</h2>
//                                                         <p>{product.attributes.Description}</p>
//                                                         <button id="loacal--btn-connor">{product.attributes.Authorname}</button>
//                                                         <button id="loacal--btn-feb">{extractDate(product.attributes.createdAt)}</button>
//                                                     </div>
//                                                 </div>
//                                                 <div className='loacal--section-feb'>
//                                                     <div className='loacal--section-conner'>
//                                                         {product.attributes.image && (
//                                                             <img src={product.attributes.image.data.attributes.url} alt={product.attributes.title} />
//                                                         )}
//                                                     </div>
//                                                 </div>
//                                             </Link>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="loacal--section-find">
//                                 <div className="loacal--section-keyworld">

//                                     {first.map(product => (
//                                         <Link
//                                             key={product.id}
//                                             to={`/blogpage/${product.attributes.url}`}
//                                             state={{ product }}
//                                             className='product-keyworld'
//                                         >
//                                             <div className='product-image-keyworld'>
//                                                 {product.attributes.image && (
//                                                     <img src={product.attributes.image.data.attributes.url} alt={product.attributes.title} />
//                                                 )}
//                                             </div>
//                                             <div className='loacal--section-competitor'>
//                                                 <button id="to">keyword Research</button>
//                                                 <h2>{product.attributes.title}</h2>
//                                                 <p>{product.attributes.Description}</p>
//                                                 <div className="loacal--section-conner-lahey">
//                                                     <h4 id="mar">{product.attributes.Authorname}</h4>
//                                                     <p>{extractDate(product.attributes.createdAt)}</p>
//                                                 </div>
//                                             </div>

//                                         </Link>
//                                     ))}
//                                 </div>
//                                 <div className="loacal--section-create-key">

//                                     {second.map(product => (
//                                        <Link
//                                        key={product.id}
//                                        to={`/blogpage/${product.attributes.url}`}
//                                        state={{ product }}
//                                        className='product-keyworld'
//                                    >
//                                             <div className='product-image-keyworld'>
//                                                 {product.attributes.image && (
//                                                     <img src={product.attributes.image.data.attributes.url} alt={product.attributes.title} />
//                                                 )}
//                                             </div>
//                                             <div className='loacal--section-word-key'>
//                                                 <button id="to">keyword Research</button>
//                                                 <h2>{product.attributes.title}</h2>
//                                                 <p>{product.attributes.Description}</p>
//                                                 <div className="loacal--section-word-rachel">
//                                                     <h4 id="mar1">{product.attributes.Authorname}</h4>
//                                                     <p>{extractDate(product.attributes.createdAt)}</p>
//                                                 </div>
//                                             </div>
//                                         </Link>
//                                     ))}
//                                 </div>
//                                 <div className="loacal--section-keyworld">

//                                     {third.map(product => (
//                                        <Link
//                                        key={product.id}
//                                        to={`/blogpage/${product.attributes.url}`}
//                                        state={{ product }}
//                                        className='product-keyworld'
//                                    >
//                                             <div className='product-image-keyworld'>
//                                                 {product.attributes.image && (
//                                                     <img src={product.attributes.image.data.attributes.url} alt={product.attributes.title} />
//                                                 )}
//                                             </div>
//                                             <div className='loacal--section-competitor'>
//                                                 <button id="to">keyword Research</button>
//                                                 <h2>{product.attributes.title}</h2>
//                                                 <p>{product.attributes.Description}</p>
//                                                 <div className="loacal--section-conner-lahey">
//                                                     <h4 id="mar">{product.attributes.Authorname}</h4>
//                                                     <p>{extractDate(product.attributes.createdAt)}</p>
//                                                 </div>
//                                             </div>

//                                         </Link>
//                                     ))}
//                                 </div>
//                                 <div className="loacal--section-create-key">

//                                     {four.map(product => (
//                                         <Link
//                                         key={product.id}
//                                         to={`/blogpage/${product.attributes.url}`}
//                                         state={{ product }}
//                                         className='product-keyworld'
//                                     >
//                                             <div className='product-image-keyworld'>
//                                                 {product.attributes.image && (
//                                                     <img src={product.attributes.image.data.attributes.url} alt={product.attributes.title} />
//                                                 )}
//                                             </div>
//                                             <div className='loacal--section-word-key'>
//                                                 <button id="to">keyword Research</button>
//                                                 <h2>{product.attributes.title}</h2>
//                                                 <p>{product.attributes.Description}</p>
//                                                 <div className="loacal--section-word-rachel">
//                                                     <h4 id="mar1">{product.attributes.Authorname}</h4>
//                                                     <p>{extractDate(product.attributes.createdAt)}</p>
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
//         </>
//     )
// }
// export default Local;










