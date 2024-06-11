import React from 'react';
import Cursor from "../Cursor";
import { useLocation, useParams } from 'react-router-dom';

function Blogdata() {

    const location = useLocation();
    const { product } = location.state || {};
    const { title } = useParams();
    console.log(product);

    const extractDate = (timestamp) => {
        const date = new Date(timestamp);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <>
            <div className="blogdata">
                <div className="container">
                    <div className='blog-sectiondata'>
                        <div className='product-details-section'>
                            <div className='blogdata-product-details'>
                                {product.attributes && (
                                    <>
                                        <h2>{product.attributes.title}</h2>
                                        <p>{product.attributes.Description}</p>
                                        <button id="loacal--btn-connor">{product.attributes.Authorname}</button>
                                        <button id="loacal--btn-feb">{extractDate(product.attributes.createdAt)}</button>
                                    </>
                                )}
                            </div>

                            <div>
                                {product.attributes.blog && (
                                    <div>
                                        {product.attributes.blog.map((element, index) => (
                                            <div key={index}>
                                                {element.type === "paragraph" && (
                                                    <p>{element.children[0].text}</p>
                                                )}
                                                {element.type === "image" && (
                                                    <img src={element.image.url} />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='blogdata-loacal--section-conner'>
                            <div className='loacal--section-online-blog'>
                                { product.attributes.image && (
                                    <img src={product.attributes.image.data.attributes.url} alt={product.attributes.title} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Cursor />
        </>
    );
}

export default Blogdata;

