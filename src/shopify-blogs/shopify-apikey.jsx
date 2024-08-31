import Cursor from '../Cursor';
import Bar from '../Blog/bar';
import Mark from '../Blog/Mark';
import ScrollTo from '../Blog/scroll';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Shopifyapi() {

    const { handle } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://ecombithub-database.onrender.com/blog/posts/?handle=${handle}`);
                if (response.ok) {
                    const data = await response.json();
                    setPost(data[0]);
                } else {
                    console.error('Error fetching post:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, [handle]);

    if (!post) return;

    return (
        <>
            <Bar />
            <Mark />
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
                                            <img src={`http://localhost:5000/image/${post.image}`} alt={post.title} />
                                        </div>

                                        <div className='blog-content' dangerouslySetInnerHTML={{ __html: post.content }}
                                         />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollTo />
            <Cursor />
        </>
    )
}

export default Shopifyapi;



// import React from 'react'
// import Cursor from '../Cursor';
// import Bar from '../Blog/bar';
// import Mark from '../Blog/Mark';
// import ScrollTo from '../Blog/scroll';
// import IMAGES from '../Allfiles/image';

// function Shopifyapi() {

//     return (
//         <>
//             <Bar />
//             <Mark />
//             <div className="blogdata">
//                 <div className="wrapper">
//                     <div className="container">
//                         <div className='blog-sectiondata'>
//                             <div className='blog-section-build'>
//                                 <div className='blog-section-h1'>
//                                     <h1>Shopify API Key: Definition, Generation, And Benefits </h1>
//                                 </div>
//                                 <div className='blog-image'>
//                                     <img src={IMAGES.apikey} alt="Shopify API Key Definition" />
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>The Shopify API key is a secure token that allows authorized applications to securely access and interact with Shopify stores data and functionality through the Shopify API. It provides controlled and authenticated integration between Shopify stores and external applications, facilitating seamless automation and enhanced functionality for store owners while maintaining data security.</p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>The Shopify admin dashboard generates each API key, enabling secure communication between third-party apps and the Shopify platform.</p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>Developers use the Shopify API to create customized solutions that integrate seamlessly with Shopify stores, enhancing technical efficiency and improving the customer experience.</p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>By leveraging the API key, businesses can automate tasks, synchronize data across platforms, and implement personalized marketing strategies. This integration not only streamlines e-commerce operations but also fosters innovation and scalability within the Shopify ecosystem.</p>
//                                 </div>
//                                 <div className='blog-section-h2'>
//                                     <h2>What Is Shopify API Key?  </h2>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>The Shopify API key is a unique identifier that allows authorized applications or integrations to securely access and interact with a specific Shopify store's data through the Shopify API. It serves as a primary credential used for authentication purposes when making API requests to access a Shopify store's data. Along with other credentials, such as the API secret key and access token, this key enables the app to securely access and manipulate store information, including products, orders, customers, and settings, through Shopify's API endpoints.</p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>The API key is essential for developers building custom applications, integrating external services, and automating workflows within a Shopify store. Each application has its own API key, which must be kept confidential to ensure the security and integrity of the Shopify store data.</p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>When integrating Shopify with other systems or services, developers use an API key, which enables them to automate processes, synchronize data, and create custom functionalities that meet the specific needs of Shopify merchants.</p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>Properly managing the API key is essential for security. Developers should keep it confidential and securely store it to prevent unauthorized access or misuse.</p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>The following are the key components of Shopify API.</p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p> <span style={{ fontWeight: 700 }}> 1.  Admin API:  </span> Enables developers to manage a store’s data including products, collections, orders, customers, and more. </p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p><span style={{ fontWeight: 700 }}> 2.  Storefront API:  </span>Allows developers to create custom storefronts by providing access to product and collection data. </p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>  <span style={{ fontWeight: 700 }}>3. Shopify App Bridge:  </span> Facilitates communication between a Shopify app and the Shopify admin interface.</p>
//                                 </div>
//                                 <div className='blog-section-h2'>
//                                     <h2>What Are the Types of Shopify API key?  </h2>
//                                 </div>

//                                 <div className="blogpage-paragraph">
//                                     <p>There are two main types of  Shopify API key. </p>
//                                 </div>
//                                 <div className="blogpage-paragraph-list">
//                                     <p> 1. Private API Keys.</p>
//                                 </div>
//                                 <div className="blogpage-paragraph-list">
//                                     <p> 2. Public API Keys. </p>
//                                 </div>
                                
//                                 <div className='blog-section-h3'>
//                                     <h3> 1. Private API Keys  </h3>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>Private API keys in Shopify are primarily used for custom apps developed specifically for a particular store. These keys allow secure access to Shopify's API endpoints, enabling the creation of custom functionalities and integrations tailored to the store needs.  </p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>Private API Keys are typically associated with private apps created in a Shopify store, allowing them to perform actions such as reading or modifying store data (e.g., products, orders, customers) through the Shopify API. These keys should be kept secure and not exposed publicly, as they provide direct access to the store's data and functionalities. </p>
//                                 </div>
//                                 <div className='blog-section-h3'>
//                                     <h3>2. Public API Keys  </h3>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>Public API keys authenticate requests to Shopify servers, especially for client-side applications where users can view the source code. These keys pose less security because they appear in client-side code, such as JavaScript applications running in web browsers. Typically, they are used to access read-only endpoints and non-sensitive Shopify data. However, due to this exposure, they should not be used for accessing sensitive information or performing actions that require secure authentication.</p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>Private API keys enable direct integrations that require access to sensitive or private data within a Shopify store, including customer information, order details, and configurations. They grant comprehensive access for modifying and interacting with all aspects of a store's data, making them essential for applications that need to process orders, update customer records, or manage complex settings that require write access to the store's backend. In contrast, Shopify regulates public API keys more strictly, ensuring they adhere closely to API usage policies and access only non-sensitive, publicly available data such as product details and general store information. These keys support integrations where third-party applications or services need read-only access to aspects of a store that do not compromise its security or privacy.</p>
//                                 </div>
//                                 <div className='blog-section-h2'>
//                                     <h2>How To Generate Shopify API Key for Private App?  </h2>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>Shopify API key for a private app is a unique identifier created specifically for that app. This key enables the app to securely access and interact with the data of a specific Shopify store through the Shopify Admin API. You can get the Shopify API key for a private app by using the Shopify Admin panel.</p>
//                                 </div>
//                                 <div className='blogpage-built'>
//                                     <ul>
//                                         <li> Log in to Shopify admin panel. </li>
//                                         <li> Go to the “Settings” on the left-hand bottom side. </li>
//                                         <li> Click on “Apps and sales channels” and select <span style={{ fontWeight: 700 }}>develop app</span>. </li>
//                                         <li> Next click on <span style={{ fontWeight: 700 }} >“Create an app”</span>  and give the app name. </li>
//                                         <li> In the "API credentials" section, Click on <span style={{ fontWeight: 700 }}>Configure Admin API scopes </span>and set the permissions or scopes for the APIs you need to access.  </li>
//                                         <li> Then save the setting, now you'll see the "API key" and "API secret key" under the Admin API section. Use these credentials to authenticate your private app.</li>
//                                     </ul>
//                                 </div>
//                                 {/* <div className='blog-video'>
//                                     <iframe width="560" height="315" src="https://www.youtube.com/embed/lyaPUc6ov9I?si=uiNchg3guKFDTCmQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//                                 </div> */}
//                                  <div className='blog-image'>
//                                     <img src={IMAGES.api1} alt="Generate Shopify APIKEY For Private App" />
//                                 </div>

//                                 <div className='blog-section-h2'>
//                                     <h2>How To Generate Shopify API Key For Public App?  </h2>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>Shopify public API allows a public application to authenticate and access the Shopify API. It is used during the OAuth authentication process to establish a secure connection between the app and a merchant's Shopify store, enabling the app to perform authorized actions on behalf of the merchant, such as reading and modifying store data.</p>
//                                 </div>
//                                 <div className='blogpage-built'>
//                                     <ul>
//                                         <li>Log in to Shopify partner dashboard.  </li>
//                                         <li>Click on App on the left-hand sidebar and then Select Create app. </li>
//                                         <li>Click on <span style={{ fontWeight: 700 }}>Create app manually, </span>Enter a name for your custom app. </li>
//                                         <li>Now here select the  <span style={{ fontWeight: 700 }} >Choose distribution </span>  and select the public app.  </li>
//                                         <li>Here you can get the API key and API secret key.</li>
//                                     </ul>
//                                 </div>
//                                 <div className='blog-image'>
//                                     <img src={IMAGES.clientblog} alt="Generate Shopify  API Key for Public App" />
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>With the recent update, Shopify has changed the name from API key to Client ID and API secret key to Client secret.  </p>
//                                 </div>
//                                 <div className='blog-section-h2'>
//                                     <h2>How To Manage Shopify API Key? </h2>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>Managing a Shopify API key typically involves securing it, limiting access permissions based on need, and periodically rotating or updating it to enhance security.</p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p><span style={{ fontWeight: 700 }}>● Rotating Keys:</span>  Regularly change new API keys and update your application with the new credentials to minimize the risk of unauthorized access.</p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p><span style={{ fontWeight: 700 }}> ● Revoking Keys:  </span> Disable the API keys that are no longer in use to prevent unauthorized access to your Shopify store.  </p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p><span style={{ fontWeight: 700 }}>●  Monitoring: </span> Regularly monitor API usage and access logs to detect any suspicious activity. </p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p><span style={{ fontWeight: 700 }}>● Restricting Permissions: </span> Assign minimum necessary permissions to each API key based on the specific tasks and data it needs to access. </p>
//                                 </div>
//                                 <div className='blog-section-h3'>
//                                     <h3>What are the Benefits of Shopify API Key?  </h3>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>The benefits of the Shopify API key include seamless integration with various third-party applications and services, allowing merchants to extend their store's functionality and customize it to meet specific business needs. </p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>Developers use the API key for custom app development that enhance operational efficiency and customer satisfaction. By accessing Shopify store data through the API key, they gain deep insights into sales trends, customer behavior, and inventory performance, which support informed decision-making.</p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>The API helps businesses scale seamlessly within the Shopify ecosystem of tools and resources. Ultimately, integrating custom functionalities via the API key enhances user experience, potentially boosting customer satisfaction and conversion rates.</p>
//                                 </div>
//                                 <div className='blog-section-h2'>
//                                     <h2>What Happens If You Lose API Key of Shopify App?</h2>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>If you lose the API key of a Shopify app, you lose access to the unique identifier that allows your app to authenticate and communicate with the Shopify API. This results in the inability to make API requests, access store data, or utilize app functionalities that depend on the Shopify API. To restore functionality, you need to regenerate or retrieve a new API key.</p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p><span style={{ fontWeight: 700 }}> ● Immediate Impact on Integrations.</span> Third-party services and apps that rely on the API key to access your store's data will fail to function. Similarly, any custom applications or scripts developed to interact with your Shopify store using the API will fail to connect. Users will temporarily lose access to the data that third-party apps or integrations retrieve via the API.</p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p><span style={{ fontWeight: 700 }}> ● Potential Security Risks.  </span> If the API key is lost due to security breaches or leaks, unauthorized parties can gain access to your store data. </p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p><span style={{ fontWeight: 700 }}> ● Operational Disruptions.  </span> Losing the API key leads to interruptions in service, delays, or failures in executing API requests. </p>
//                                 </div>
//                                 <div className='blog-section-h3'>
//                                     <h3>How To Regenerate Shopify API Key?  </h3>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>Regenerate Shopify API key involves creating a new set of credentials to access Shopify API. This is necessary if you lose access to your current API key or it has been compromised or leaked.  </p>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>To regenerate API key, log in to Shopify partner account and navigate to the Apps section. Select and open the specific app for which you need a new API key. Click on <span style={{ fontWeight: 700 }}> API access</span> under client secret, and then click on <span style={{ fontWeight: 700 }}>Generate refresh token.</span></p>
//                                 </div>
//                                 <div className='blog-image'>
//                                     <img src={IMAGES.api3} alt="Regenerate Shopify API Key" />
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>After generating the new credentials, integration with these details to ensure seamless access to the Shopify API and maintain the functionality of services without interruption.</p>
//                                 </div>
//                                 <div className='blog-section-h3'>
//                                     <h3>Is It Possible To Use Multiple Shopify API keys in Shopify Store? </h3>
//                                 </div>
//                                 <div className="blogpage-paragraph">
//                                     <p>Yes, it is possible to use multiple Shopify API keys in a single Shopify store. Each API key is associated with a specific app or integration, allowing multiple apps to access the store data simultaneously. This enables store owners to use custom apps and Shopify apps simultaneously, each with its own unique API key and specific permissions.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <ScrollTo />
//             <Cursor />
//         </>
//     )
// }

// export default Shopifyapi;
