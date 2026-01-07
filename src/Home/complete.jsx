import React from 'react';

function Complete() {

    return (

        <div className="section--banner">
            <div className="section-banner-bg">
                <div className='wrapper'>
                    <div className='container'>
                        <div className='banner-section-center'>
                            <div className="section--banner-elements">
                                <h1 className="animate">Empower Your Business with Shopify Ultimate <span className='brand_for' style={{ color: "#fc5569" }}>Solutions</span></h1>
                                <p>EcombitHub an innovative ecommerce solution to elevate your brand and boost sales. We provide comprehensive Shopify solution and expert service to enhance every aspect of Shopify experience. </p>
                                <a href='/'>  <button id="pxl-button"> <span className="rotate-container">
                                    <span className="rotate-text">V</span>
                                    <span className="rotate-text">i</span>
                                    <span className="rotate-text">e</span>
                                    <span className="rotate-text">w</span>
                                    <span className="rotate-text">&nbsp;</span>
                                    <span className="rotate-text">O</span>
                                    <span className="rotate-text">u</span>
                                    <span className="rotate-text">r</span>
                                    <span className="rotate-text">&nbsp;</span>
                                    <span className="rotate-text">S</span>
                                    <span className="rotate-text">e</span>
                                    <span className="rotate-text">r</span>
                                    <span className="rotate-text">v</span>
                                    <span className="rotate-text">i</span>
                                    <span className="rotate-text">c</span>
                                    <span className="rotate-text">e</span>
                                    <span className="rotate-text">s</span>
                                </span></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Complete;











// // import React, { useRef, useLayoutEffect, useEffect } from 'react';
// // import gsap from 'gsap';
// // import IMAGES from '../Allfiles/image';

// // const Complete = () => {
// //     const shopRef = useRef(null);
// //     const wixRef = useRef(null);

// //     useEffect(() => {
// //         const tl = gsap.timeline({ repeat: -1 });

// //         tl.to([shopRef.current, wixRef.current], { duration: 2, y: '-=7', ease: 'power1.inOut' })
// //             .to([shopRef.current, wixRef.current], { duration: 2, y: '+=7', ease: 'power1.inOut' });

// //         return () => tl.kill();
// //     }, []);

// //     return (
// //         <>
// //             <div className='banner-wrapper'>
// //                 <div className="wrapper">
// //                     <div className="container">
// //                         <div className='banner-content'>
// //                             <div className="main-banner">
// //                                 <div className="content-main">
// //                                     {/* <div className='elementor'>
// //                                         <div className='elementor_laye'>
// //                                             <img src={ss} alt="Image" />
// //                                         </div>
// //                                         <div className='elementor_layer'>
// //                                             <h4>Shopify is supporting the next generation of entrepreneurs</h4>
// //                                         </div>
// //                                     </div> */}

// //                                     <div className='banner-content--elementor'>
// //                                         <div className='banner-content--elementor_laye'>
// //                                             <img src={IMAGES.ss} alt="Image" />
// //                                         </div>
// //                                         <div className='banner-content--elementor_layer'>
// //                                             <h4>Shopify is supporting the next generation of entrepreneurs</h4>
// //                                         </div>
// //                                     </div>


// //                                     <div className='banner-h2'>
// //                                         <h1>
// //                                             <svg width="900" height="240" className="svg-container">
// //                                                 <text x="0" y="45" className="text-stroke first">The</text>
// //                                                 <text x="110" y="45" className="text-stroke second">Complete</text>
// //                                                 <text x="372" y="45" className="text-stroke third" > Shopify</text>
// //                                                 <text x="0" y="115" className="text-stroke four" > Plus</text>
// //                                                 <text x="128" y="115" className="text-stroke five"> Upsell </text>
// //                                                 <text x="305" y="115" className="text-stroke six">Solution</text>
// //                                                 <text x="535" y="115" className="text-stroke seven"> for </text>
// //                                                 <text x="0" y="185" className="text-stroke eight"> Scaling  </text>
// //                                                 <text x="205" y="185" className="text-stroke nine"> Brands.</text>
// //                                             </svg>
// //                                         </h1>

// //                                     </div>


// //                                     {/* <h1 className="animate">The Complete <span className='span_shopify' style={{ color: "#5a853d" }}>Shopify</span> Plus Upsell Solution for Scaling <span className='brand_for' style={{ color: "#fc5569" }}>Brands.</span></h1> */}
// //                                     <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells and thank you page customization. Enjoy complimentary migration and frictionless implementation with a your own plus account manager.</p>
// //                                     <div className='elementor-widget-container'>
// //                                         <button id="pxl-button"> <span className="rotate-container">
// //                                             <span className="rotate-text">V</span>
// //                                             <span className="rotate-text">i</span>
// //                                             <span className="rotate-text">e</span>
// //                                             <span className="rotate-text">w</span>
// //                                             <span className="rotate-text">&nbsp;</span>
// //                                             <span className="rotate-text">O</span>
// //                                             <span className="rotate-text">u</span>
// //                                             <span className="rotate-text">r</span>
// //                                             <span className="rotate-text">&nbsp;</span>
// //                                             <span className="rotate-text">S</span>
// //                                             <span className="rotate-text">e</span>
// //                                             <span className="rotate-text">r</span>
// //                                             <span className="rotate-text">v</span>
// //                                             <span className="rotate-text">i</span>
// //                                             <span className="rotate-text">c</span>
// //                                             <span className="rotate-text">e</span>
// //                                             <span className="rotate-text">s</span>
// //                                         </span></button>
// //                                         <button id="pxl_blank">
// //                                             <span className="rotate-container">
// //                                                 <span className="rotate-text">D</span>
// //                                                 <span className="rotate-text">i</span>
// //                                                 <span className="rotate-text">s</span>
// //                                                 <span className="rotate-text">c</span>
// //                                                 <span className="rotate-text">o</span>
// //                                                 <span className="rotate-text">v</span>
// //                                                 <span className="rotate-text">e</span>
// //                                                 <span className="rotate-text">r</span>
// //                                                 <span className="rotate-text">&nbsp;</span>
// //                                                 <span className="rotate-text">O</span>
// //                                                 <span className="rotate-text">u</span>
// //                                                 <span className="rotate-text">r</span>
// //                                                 <span className="rotate-text">&nbsp;</span>
// //                                                 <span className="rotate-text">W</span>
// //                                                 <span className="rotate-text">o</span>
// //                                                 <span className="rotate-text">r</span>
// //                                                 <span className="rotate-text">k</span>
// //                                             </span>
// //                                         </button>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                             <div className='banner_image'>
// //                                 <img src={IMAGES.full} alt="Image" className="vibrating-image" />
// //                                 <div className='content-area' ref={shopRef} >
// //                                     <img src={IMAGES.shop1} alt="Image" />
// //                                 </div>
// //                                 <div className='wix_image' ref={wixRef} >
// //                                     <img src={IMAGES.wix} alt="Image" />
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // };

// // export default Complete;



// import React, { useEffect, useState } from 'react';
// import imageCompression from 'browser-image-compression';
// import homebg from '../images/homebg.webp';

// function Complete() {
//     const [backgroundImage, setBackgroundImage] = useState('');

//     useEffect(() => {
//         const compressImage = async () => {
//             try {
//                 // Fetch the image file as a Blob
//                 const response = await fetch(homebg);
//                 const blob = await response.blob();

//                 // Check if it's an image
//                 if (!blob.type.startsWith('image/')) {
//                     throw new Error('The file fetched is not an image.');
//                 }

//                 // Compression options
//                 const options = {
//                     maxSizeMB: 1, 
//                     maxWidthOrHeight: 1920, 
//                 };
//                 const compressedBlob = await imageCompression(blob, options);

//                 // Create a URL for the compressed image
//                 const compressedImageUrl = URL.createObjectURL(compressedBlob);
//                 setBackgroundImage(compressedImageUrl);

//             } catch (error) {
//                 console.error('Error fetching or compressing image:', error);
//             }
//         };

//         compressImage(); // Call the function to handle image compression
//     }, []); // Empty dependency array ensures this runs once on mount

//     const backgroundImageStyle = {
//         backgroundImage: `url(${backgroundImage})`,
//     };

//     return (
//         <div className="section--banner">
//             <div className="section-banner-bg" style={backgroundImageStyle}>
//                 <div className='wrapper'>
//                     <div className='container'>
//                         <div className='banner-section-center'>
//                             <div className="section--banner-elements">
//                                 <h1 className="animate">Empower Your Business with Shopify Ultimate <span className='brand_for' style={{ color: "#fc5569" }}>Solutions</span></h1>
//                                 <p>EcombitHub an innovative ecommerce solution to elevate your brand and boost sales. We provide comprehensive Shopify solution and expert service to enhance every aspect of Shopify experience.</p>
                                
//                                 <a href='/app'>  
//                                     <button id="pxl-button"> 
//                                         <span className="rotate-container">
//                                             <span className="rotate-text">V</span>
//                                             <span className="rotate-text">i</span>
//                                             <span className="rotate-text">e</span>
//                                             <span className="rotate-text">w</span>
//                                             <span className="rotate-text">&nbsp;</span>
//                                             <span className="rotate-text">O</span>
//                                             <span className="rotate-text">u</span>
//                                             <span className="rotate-text">r</span>
//                                             <span className="rotate-text">&nbsp;</span>
//                                             <span className="rotate-text">S</span>
//                                             <span className="rotate-text">e</span>
//                                             <span className="rotate-text">r</span>
//                                             <span className="rotate-text">v</span>
//                                             <span className="rotate-text">i</span>
//                                             <span className="rotate-text">c</span>
//                                             <span className="rotate-text">e</span>
//                                             <span className="rotate-text">s</span>
//                                         </span>
//                                     </button>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Complete;

