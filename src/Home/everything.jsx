// import React, { useState, useEffect } from 'react';
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Every() {
//     const [isDesktop, setIsDesktop] = useState(false);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsDesktop(window.innerWidth > 768);
//         };

//         handleResize(); 
//         window.addEventListener("resize", handleResize); 

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);

//     const sett = {
//         dots: false,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         responsive: [
                  
//                      {
//                          breakpoint: 768,
//                          settings: {
//                              slidesToShow: 2,
            
            
//                          }
//                      },
//                      {
//                          breakpoint: 480,
//                          settings: {
//                              slidesToShow: 1,
            
//                          }
//                      }
//                  ]
//     };

//     return (
//         <div className="feature--section">
//             <div className='wrapper'>
//                 <div className='feature--section--white'>
//                     <div className="feature--section--every">
//                         <h4>Everything below designed to make your life easier and mobile shopping better!</h4>
//                         <h2>We have all features you need for app commerce!</h2>
//                     </div>
//                     <div className='container'>
//                         {!isDesktop && (
//                             <div className='feature--section--app'>
//                                 <Slider {...sett}>
//                                     <div className="feature--section--elements">
//                                         <ul>
//                                             <img src={ri} />
//                                             <li> White lable ios & android app</li>
//                                             <img src={ri} />
//                                             <li> All design element types</li>
//                                             <img src={ri} />
//                                             <li> Localization in 21 Language</li>
//                                             <img src={ri} />
//                                             <li> Different mobile app themes</li>
//                                             <img src={ri} />
//                                             <li>App-exclusive discounts </li>
//                                             <img src={ri} />
//                                             <li>Mobile app promotion banner </li>
//                                             <img src={ri} />
//                                             <li>Bottom bar navigatin</li>
//                                             <img src={ri} />
//                                             <li> sub collection</li>
//                                             <img src={ri} />
//                                             <li> Pre-order</li>
//                                             <img src={ri} />
//                                             <li>Unlimited design elements </li>
//                                             <img src={ri} />
//                                             <li>Address auto-complete </li>
//                                             <img src={ri} />
//                                             <li>Barcode scanner</li>
//                                             <img src={ri} />
//                                             <li>Augmented reality</li>
//                                             <img src={ri} />
//                                             <li> Product Recomendation</li>
//                                         </ul>
//                                     </div>

//                                     <div className='feature--section--elements'>
//                                         <ul>
//                                             <img src={ri} />
//                                             <li>Real-time Shopify sync</li>
//                                             <img src={ri} />
//                                             <li>Shopify store checkout</li>
//                                             <img src={ri} />
//                                             <li>Pick up & local delivery</li>
//                                             <img src={ri} />
//                                             <li> User accounts and order history</li>
//                                             <img src={ri} />
//                                             <li>Unlimited Products & collections</li>
//                                             <img src={ri} />
//                                             <li>Shopify script</li>
//                                             <img src={ri} />
//                                             <li>Shopify markets</li>
//                                             <img src={ri} />
//                                             <li>Multi Language & currency</li>
//                                             <img src={ri} />
//                                             <li>Payment installment</li>
//                                             <img src={ri} />
//                                             <li>Product Reviews integrations</li>
//                                             <img src={ri} />
//                                             <li>Search & filter integrations</li>
//                                             <img src={ri} />
//                                             <li>Scheduled design elements</li>
//                                             <img src={ri} />
//                                             <li>Loyalty & reward programs</li>
//                                             <img src={ri} />
//                                             <li>StroifyMe integration</li>

//                                         </ul>

//                                     </div>
//                                     <div className='feature--section--elements'>
//                                         <ul>
//                                             <img src={ri} />
//                                             <li> Rich push notification</li>
//                                             <img src={ri} />
//                                             <li> Back in stock notification</li>
//                                             <img src={ri} />
//                                             <li> In-app chat</li>
//                                             <img src={ri} />
//                                             <li>Shopify Inbox integration </li>
//                                             <img src={ri} />
//                                             <li>Goggle Analytics & Facbook Ads </li>
//                                             <img src={ri} />
//                                             <li> 24/7 Live chat & video support </li>
//                                             <img src={ri} />
//                                             <li>Scheduled push notification </li>
//                                             <img src={ri} />
//                                             <li>Abandonded cart notification</li>
//                                             <img src={ri} />
//                                             <li>Welcome push notification</li>
//                                             <img src={ri} />
//                                             <li>Shopify blogs & articles </li>
//                                             <img src={ri} />
//                                             <li>Deep-linking</li>
//                                             <img src={ri} />
//                                             <li>Segmented push notification</li>
//                                             <img src={ri} />
//                                             <li> Klaviyo integration</li>
//                                             <img src={ri} />
//                                             <li>Gorgias integration </li>
//                                         </ul>
//                                     </div>
//                                     <div className="feature--section--elements">
//                                         <ul>
//                                             <img src={ri} />
//                                             <li> White lable ios & android app</li>
//                                             <img src={ri} />
//                                             <li> All design element types</li>
//                                             <img src={ri} />
//                                             <li> Localization in 21 Language</li>
//                                             <img src={ri} />
//                                             <li> Different mobile app themes</li>
//                                             <img src={ri} />
//                                             <li>App-exclusive discounts </li>
//                                             <img src={ri} />
//                                             <li>Mobile app promotion banner </li>
//                                             <img src={ri} />
//                                             <li>Bottom bar navigatin</li>
//                                             <img src={ri} />
//                                             <li> sub collection</li>
//                                             <img src={ri} />
//                                             <li> Pre-order</li>
//                                             <img src={ri} />
//                                             <li>Unlimited design elements </li>
//                                             <img src={ri} />
//                                             <li>Address auto-complete </li>
//                                             <img src={ri} />
//                                             <li>Barcode scanner</li>
//                                             <img src={ri} />
//                                             <li>Augmented reality</li>
//                                             <img src={ri} />
//                                             <li> Product Recomendation</li>
//                                         </ul>
//                                     </div>
//                                     <div className="feature--section--elements">
//                                         <ul>
//                                             <img src={ri} />
//                                             <li> White lable ios & android app</li>
//                                             <img src={ri} />
//                                             <li> All design element types</li>
//                                             <img src={ri} />
//                                             <li> Localization in 21 Language</li>
//                                             <img src={ri} />
//                                             <li> Different mobile app themes</li>
//                                             <img src={ri} />
//                                             <li>App-exclusive discounts </li>
//                                             <img src={ri} />
//                                             <li>Mobile app promotion banner </li>
//                                             <img src={ri} />
//                                             <li>Bottom bar navigatin</li>
//                                             <img src={ri} />
//                                             <li> sub collection</li>
//                                             <img src={ri} />
//                                             <li> Pre-order</li>
//                                             <img src={ri} />
//                                             <li>Unlimited design elements </li>
//                                             <img src={ri} />
//                                             <li>Address auto-complete </li>
//                                             <img src={ri} />
//                                             <li>Barcode scanner</li>
//                                             <img src={ri} />
//                                             <li>Augmented reality</li>
//                                             <img src={ri} />
//                                             <li> Product Recomendation</li>
//                                         </ul>
//                                     </div>
//                                     <div className="feature--section--elements">
//                                         <ul>
//                                             <img src={ri} />
//                                             <li> White lable ios & android app</li>
//                                             <img src={ri} />
//                                             <li> All design element types</li>
//                                             <img src={ri} />
//                                             <li> Localization in 21 Language</li>
//                                             <img src={ri} />
//                                             <li> Different mobile app themes</li>
//                                             <img src={ri} />
//                                             <li>App-exclusive discounts </li>
//                                             <img src={ri} />
//                                             <li>Mobile app promotion banner </li>
//                                             <img src={ri} />
//                                             <li>Bottom bar navigatin</li>
//                                             <img src={ri} />
//                                             <li> sub collection</li>
//                                             <img src={ri} />
//                                             <li> Pre-order</li>
//                                             <img src={ri} />
//                                             <li>Unlimited design elements </li>
//                                             <img src={ri} />
//                                             <li>Address auto-complete </li>
//                                             <img src={ri} />
//                                             <li>Barcode scanner</li>
//                                             <img src={ri} />
//                                             <li>Augmented reality</li>
//                                             <img src={ri} />
//                                             <li> Product Recomendation</li>
//                                         </ul>
//                                     </div>


//                                 </Slider>
//                             </div>
//                         )}
//                         {isDesktop && (
//                            <div className='feature--section--app'>
//                                <div className="feature--section--elements">
//                                    <ul>
//                                        <img src={ri} />
//                                        <li> White lable ios & android app</li>
//                                        <img src={ri} />
//                                        <li> All design element types</li>
//                                        <img src={ri} />
//                                        <li> Localization in 21 Language</li>
//                                        <img src={ri} />
//                                        <li> Different mobile app themes</li>
//                                        <img src={ri} />
//                                        <li>App-exclusive discounts </li>
//                                        <img src={ri} />
//                                        <li>Mobile app promotion banner </li>
//                                        <img src={ri} />
//                                        <li>Bottom bar navigatin</li>
//                                        <img src={ri} />
//                                        <li> sub collection</li>
//                                        <img src={ri} />
//                                        <li> Pre-order</li>
//                                        <img src={ri} />
//                                        <li>Unlimited design elements </li>
//                                        <img src={ri} />
//                                        <li>Address auto-complete </li>
//                                        <img src={ri} />
//                                        <li>Barcode scanner</li>
//                                        <img src={ri} />
//                                        <li>Augmented reality</li>
//                                        <img src={ri} />
//                                        <li> Product Recomendation</li>
//                                    </ul>
//                                </div>

//                                <div className='feature--section--elements'>
//                                    <ul>
//                                        <img src={ri} />
//                                        <li>Real-time Shopify sync</li>
//                                        <img src={ri} />
//                                        <li>Shopify store checkout</li>
//                                        <img src={ri} />
//                                        <li>Pick up & local delivery</li>
//                                        <img src={ri} />
//                                        <li> User accounts and order history</li>
//                                        <img src={ri} />
//                                        <li>Unlimited Products & collections</li>
//                                        <img src={ri} />
//                                        <li>Shopify script</li>
//                                        <img src={ri} />
//                                        <li>Shopify markets</li>
//                                        <img src={ri} />
//                                        <li>Multi Language & currency</li>
//                                        <img src={ri} />
//                                        <li>Payment installment</li>
//                                        <img src={ri} />
//                                        <li>Product Reviews integrations</li>
//                                        <img src={ri} />
//                                        <li>Search & filter integrations</li>
//                                        <img src={ri} />
//                                        <li>Scheduled design elements</li>
//                                        <img src={ri} />
//                                        <li>Loyalty & reward programs</li>
//                                        <img src={ri} />
//                                        <li>StroifyMe integration</li>

//                                    </ul>

//                                </div>
//                                <div className='feature--section--elements'>
//                                    <ul>
//                                        <img src={ri} />
//                                        <li> Rich push notification</li>
//                                        <img src={ri} />
//                                        <li> Back in stock notification</li>
//                                        <img src={ri} />
//                                        <li> In-app chat</li>
//                                        <img src={ri} />
//                                        <li>Shopify Inbox integration </li>
//                                        <img src={ri} />
//                                        <li>Goggle Analytics & Facbook Ads </li>
//                                        <img src={ri} />
//                                        <li> 24/7 Live chat & video support </li>
//                                        <img src={ri} />
//                                        <li>Scheduled push notification </li>
//                                        <img src={ri} />
//                                        <li>Abandonded cart notification</li>
//                                        <img src={ri} />
//                                        <li>Welcome push notification</li>
//                                        <img src={ri} />
//                                        <li>Shopify blogs & articles </li>
//                                        <img src={ri} />
//                                        <li>Deep-linking</li>
//                                        <img src={ri} />
//                                        <li>Segmented push notification</li>
//                                        <img src={ri} />
//                                        <li> Klaviyo integration</li>
//                                        <img src={ri} />
//                                        <li>Gorgias integration </li>
//                                    </ul>
//                                </div>
                              
                              
//                        </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Every;











// // import ri from '../images/right.png';
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import Slder from "react-slick";

// // function Every() {

// //     const sett = {
// //         dots: false,
// //         infinite: false,
// //         speed: 500,
// //         slidesToShow: 3,
// //         slidesToScroll: 1,
// //         mobileFirst: true ,
// //         responsive: [
// //             {
// //                 breakpoint: 1024,
// //                 settings: {
// //                     slidesToShow: 3,
// //                     slidesToScroll: 3,
// //                     infinite: false,
// //                     dots: false,

// //                 }
// //             },
// //             {
// //                 breakpoint: 768,
// //                 settings: {
// //                     slidesToShow: 2,


// //                 }
// //             },
// //             {
// //                 breakpoint: 480,
// //                 settings: {
// //                     slidesToShow: 1,

// //                 }
// //             }
// //         ]

// //     };
// //     return (

// //         <>



// //             <div className="feature--section">
// //                 <div className='wrapper'>
// //                 <div className='feature--section--white'>
// //                     <div className="feature--section--every">
// //                         <h4>Everything below designed to make your life easier and mobile shopping better!</h4>
// //                         <h2>We have all features you need for app commerce!</h2>
// //                     </div>
// //                     <div className='container'>

// //                     <div className='feature--section--app'>
// //                         <Slder {...sett}>
// //                             <div className="feature--section--elements">
// //                                 <ul>
// //                                     <img src={ri} />
// //                                     <li> White lable ios & android app</li>
// //                                     <img src={ri} />
// //                                     <li> All design element types</li>
// //                                     <img src={ri} />
// //                                     <li> Localization in 21 Language</li>
// //                                     <img src={ri} />
// //                                     <li> Different mobile app themes</li>
// //                                     <img src={ri} />
// //                                     <li>App-exclusive discounts </li>
// //                                     <img src={ri} />
// //                                     <li>Mobile app promotion banner </li>
// //                                     <img src={ri} />
// //                                     <li>Bottom bar navigatin</li>
// //                                     <img src={ri} />
// //                                     <li> sub collection</li>
// //                                     <img src={ri} />
// //                                     <li> Pre-order</li>
// //                                     <img src={ri} />
// //                                     <li>Unlimited design elements </li>
// //                                     <img src={ri} />
// //                                     <li>Address auto-complete </li>
// //                                     <img src={ri} />
// //                                     <li>Barcode scanner</li>
// //                                     <img src={ri} />
// //                                     <li>Augmented reality</li>
// //                                     <img src={ri} />
// //                                     <li> Product Recomendation</li>
// //                                 </ul>
// //                             </div>

// //                             <div className='feature--section--elements'>
// //                                 <ul>
// //                                     <img src={ri} />
// //                                     <li>Real-time Shopify sync</li>
// //                                     <img src={ri} />
// //                                     <li>Shopify store checkout</li>
// //                                     <img src={ri} />
// //                                     <li>Pick up & local delivery</li>
// //                                     <img src={ri} />
// //                                     <li> User accounts and order history</li>
// //                                     <img src={ri} />
// //                                     <li>Unlimited Products & collections</li>
// //                                     <img src={ri} />
// //                                     <li>Shopify script</li>
// //                                     <img src={ri} />
// //                                     <li>Shopify markets</li>
// //                                     <img src={ri} />
// //                                     <li>Multi Language & currency</li>
// //                                     <img src={ri} />
// //                                     <li>Payment installment</li>
// //                                     <img src={ri} />
// //                                     <li>Product Reviews integrations</li>
// //                                     <img src={ri} />
// //                                     <li>Search & filter integrations</li>
// //                                     <img src={ri} />
// //                                     <li>Scheduled design elements</li>
// //                                     <img src={ri} />
// //                                     <li>Loyalty & reward programs</li>
// //                                     <img src={ri} />
// //                                     <li>StroifyMe integration</li>

// //                                 </ul>

// //                             </div>
// //                             <div className='feature--section--elements'>
// //                                 <ul>
// //                                     <img src={ri} />
// //                                     <li> Rich push notification</li>
// //                                     <img src={ri} />
// //                                     <li> Back in stock notification</li>
// //                                     <img src={ri} />
// //                                     <li> In-app chat</li>
// //                                     <img src={ri} />
// //                                     <li>Shopify Inbox integration </li>
// //                                     <img src={ri} />
// //                                     <li>Goggle Analytics & Facbook Ads </li>
// //                                     <img src={ri} />
// //                                     <li> 24/7 Live chat & video support </li>
// //                                     <img src={ri} />
// //                                     <li>Scheduled push notification </li>
// //                                     <img src={ri} />
// //                                     <li>Abandonded cart notification</li>
// //                                     <img src={ri} />
// //                                     <li>Welcome push notification</li>
// //                                     <img src={ri} />
// //                                     <li>Shopify blogs & articles </li>
// //                                     <img src={ri} />
// //                                     <li>Deep-linking</li>
// //                                     <img src={ri} />
// //                                     <li>Segmented push notification</li>
// //                                     <img src={ri} />
// //                                     <li> Klaviyo integration</li>
// //                                     <img src={ri} />
// //                                     <li>Gorgias integration </li>
// //                                 </ul>
// //                             </div>
// //                             <div className="feature--section--elements">
// //                                 <ul>
// //                                     <img src={ri} />
// //                                     <li> White lable ios & android app</li>
// //                                     <img src={ri} />
// //                                     <li> All design element types</li>
// //                                     <img src={ri} />
// //                                     <li> Localization in 21 Language</li>
// //                                     <img src={ri} />
// //                                     <li> Different mobile app themes</li>
// //                                     <img src={ri} />
// //                                     <li>App-exclusive discounts </li>
// //                                     <img src={ri} />
// //                                     <li>Mobile app promotion banner </li>
// //                                     <img src={ri} />
// //                                     <li>Bottom bar navigatin</li>
// //                                     <img src={ri} />
// //                                     <li> sub collection</li>
// //                                     <img src={ri} />
// //                                     <li> Pre-order</li>
// //                                     <img src={ri} />
// //                                     <li>Unlimited design elements </li>
// //                                     <img src={ri} />
// //                                     <li>Address auto-complete </li>
// //                                     <img src={ri} />
// //                                     <li>Barcode scanner</li>
// //                                     <img src={ri} />
// //                                     <li>Augmented reality</li>
// //                                     <img src={ri} />
// //                                     <li> Product Recomendation</li>
// //                                 </ul>
// //                             </div>
// //                             <div className="feature--section--elements">
// //                                 <ul>
// //                                     <img src={ri} />
// //                                     <li> White lable ios & android app</li>
// //                                     <img src={ri} />
// //                                     <li> All design element types</li>
// //                                     <img src={ri} />
// //                                     <li> Localization in 21 Language</li>
// //                                     <img src={ri} />
// //                                     <li> Different mobile app themes</li>
// //                                     <img src={ri} />
// //                                     <li>App-exclusive discounts </li>
// //                                     <img src={ri} />
// //                                     <li>Mobile app promotion banner </li>
// //                                     <img src={ri} />
// //                                     <li>Bottom bar navigatin</li>
// //                                     <img src={ri} />
// //                                     <li> sub collection</li>
// //                                     <img src={ri} />
// //                                     <li> Pre-order</li>
// //                                     <img src={ri} />
// //                                     <li>Unlimited design elements </li>
// //                                     <img src={ri} />
// //                                     <li>Address auto-complete </li>
// //                                     <img src={ri} />
// //                                     <li>Barcode scanner</li>
// //                                     <img src={ri} />
// //                                     <li>Augmented reality</li>
// //                                     <img src={ri} />
// //                                     <li> Product Recomendation</li>
// //                                 </ul>
// //                             </div>
// //                             <div className="feature--section--elements">
// //                                 <ul>
// //                                     <img src={ri} />
// //                                     <li> White lable ios & android app</li>
// //                                     <img src={ri} />
// //                                     <li> All design element types</li>
// //                                     <img src={ri} />
// //                                     <li> Localization in 21 Language</li>
// //                                     <img src={ri} />
// //                                     <li> Different mobile app themes</li>
// //                                     <img src={ri} />
// //                                     <li>App-exclusive discounts </li>
// //                                     <img src={ri} />
// //                                     <li>Mobile app promotion banner </li>
// //                                     <img src={ri} />
// //                                     <li>Bottom bar navigatin</li>
// //                                     <img src={ri} />
// //                                     <li> sub collection</li>
// //                                     <img src={ri} />
// //                                     <li> Pre-order</li>
// //                                     <img src={ri} />
// //                                     <li>Unlimited design elements </li>
// //                                     <img src={ri} />
// //                                     <li>Address auto-complete </li>
// //                                     <img src={ri} />
// //                                     <li>Barcode scanner</li>
// //                                     <img src={ri} />
// //                                     <li>Augmented reality</li>
// //                                     <img src={ri} />
// //                                     <li> Product Recomendation</li>
// //                                 </ul>
// //                             </div>


// //                         </Slder>
// //                     </div>
// //                 </div>
// //                 </div>
// //                 </div>
// //             </div>
// //         </>
// //     )
// // }
// // export default Every;







