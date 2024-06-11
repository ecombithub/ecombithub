import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useInView } from 'react-intersection-observer';
import IMAGES from '../Allfiles/image';

gsap.registerPlugin(TextPlugin);

function Discover() {
    const [ref, inView] = useInView();
    const elementor = useRef(null);
    const [animationPlayed, setAnimationPlayed] = useState(false);
    const [animation, setAnimation] = useState(false);
    const item = useRef(null);
    const totalStoresRef = useRef(null);
    const totalStores = useRef(null);
    const totalReviewsRef = useRef(null);
    useEffect(() => {
        if (inView && !animationPlayed) {
            gsap.fromTo(
                elementor.current,
                { opacity: 0, x: 160 },
                { opacity: 1, x: 0, duration: 1, delay: 0.3 }
            );
            setAnimationPlayed(true);
        }
    }, [inView, animationPlayed]);

    useEffect(() => {
        if (inView && !animation) {
            gsap.fromTo(
                item.current,
                { opacity: 0, y: 250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );

            gsap.fromTo(
                totalStoresRef.current,
                { textContent: "0" },
                {
                    textContent: "170",
                    duration: 2,
                    ease: "power1.inOut",
                    snap: { textContent: 1 },
                    onUpdate: function () {
                        totalStoresRef.current.textContent = Math.floor(totalStoresRef.current.textContent);
                    },
                    onComplete: function () {
                        totalStoresRef.current.textContent = "+170";
                    }
                }
            );

            gsap.fromTo(
                totalStores.current,
                { textContent: "0" },
                {
                    textContent: "170",
                    duration: 2,
                    ease: "power1.inOut",
                    snap: { textContent: 1 },
                    onUpdate: function () {
                        totalStores.current.textContent = Math.floor(totalStores.current.textContent);
                    },
                    onComplete: function () {
                        totalStores.current.textContent = "+170";
                    }
                }
            );

            gsap.fromTo(
                totalReviewsRef.current,
                { textContent: "0" },
                {
                    textContent: "3.4",
                    duration: 2,
                    ease: "power1.inOut",
                    snap: { textContent: 0.1 },
                    onUpdate: function () {
                        totalReviewsRef.current.textContent =  parseFloat(totalReviewsRef.current.textContent).toFixed(1);
                    },
                    onComplete: function () {
                        totalReviewsRef.current.textContent = "3.4+";
                    }
                }
            );

            setAnimation(true);
        }

    }, [inView, animation]);

    const shop = useRef(null);
    const wix = useRef(null);
    const pxl = useRef(null);
    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        tl.to([shop.current, wix.current, pxl.current], { duration: 2, y: '-=6', ease: 'power1.inOut' })
          .to([shop.current, wix.current, pxl.current], { duration: 2, y: '+=6', ease: 'power1.inOut' });

        return () => tl.kill();
    }, []);

    return (
        <div className='elementor-section'>
            <div className='wrapper'>
                <div className='container'>
                    <div className='elementor-top-section' ref={ref}>
                        <div className="pxl-item--dots" ref={item}>
                            <div className='pxl-item'>
                                <div className="pxl-grid-masonry">
                                    <img src={IMAGES.ico} alt="Total Stores Icon" ref={shop} />
                                    <h4>Total Stores</h4>
                                    <p ref={totalStoresRef}>0</p>
                                </div>
                                <div className='pxl-item--title'>
                                    <img src={IMAGES.ico2} alt="Revenue Generated Icon" ref={wix} />
                                    <h4>Revenue Generated</h4>
                                    <p ref={totalStores}>0</p>
                                </div>
                            </div>
                            <div className='pxl-new'>
                                <div className="pxl-item--inner">
                                    <img src={IMAGES.ico1} alt="5-Star Reviews Icon" ref={pxl} />
                                    <h4>5-Star Reviews</h4>
                                    <p ref={totalReviewsRef}>0</p>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-widget">
                            <div className='elementor-widget--form' ref={elementor}>
                                <img src={IMAGES.ss} alt="Hello World" />
                                <h4>From hello world to IPO.</h4>
                                <h2>
                                    <span className="start-text">Discover why</span>
                                    <span style={{ color: "#8db848" }}> millions of entrepreneurs</span>
                                    <span className="end-text"> choose Shopify to build their business</span>
                                </h2>
                                <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one click upsells and thank you page customization. Enjoy complimentary migration and frictionless implementation with your own plus account manager.</p>
                                <button className='button'>
                                <span className="rotate-container">
                                  <span className="rotate-text">K</span>
                                  <span className="rotate-text">n</span>
                                  <span className="rotate-text">o</span>
                                  <span className="rotate-text">w</span>
                                  <span className="rotate-text">&nbsp;</span>
                                  <span className="rotate-text">M</span>
                                  <span className="rotate-text">o</span>
                                  <span className="rotate-text">r</span>
                                  <span className="rotate-text">e</span>
                                  </span>
                                 </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Discover;









// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { useInView } from 'react-intersection-observer';
// import ico from '../images/icon 01.png';
// import ico1 from '../images/02.png';
// import ico2 from '../images/03.png';
// import ss from '../images/ss.png';

// function Discover() {
    
//     const [ref, inView] = useInView();
//     const h2Ref = useRef(null);

//     useEffect(() => {
//         if (inView) {
//             gsap.fromTo(
//                 h2Ref.current,
//                 { opacity: 0, x: -150},
//                 { opacity: 1, x: 0, duration: 1, delay: 0.2 }
//             );
//         }
//     }, [inView]);

//     return (
//         <div className='elementor-section'>
//             <div className='wrapper'>
//                 <div className='container'>
//                     <div className='elementor-top-section'>
//                         <div className="pxl-item--dots">
//                             <div className='pxl-item'>
//                                 <div className="pxl-grid-masonry">
//                                     <img src={ico} alt="Total Stores Icon" />
//                                     <h4>Total Stores</h4>
//                                     <p>+170</p>
//                                 </div>
//                                 <div className='pxl-item--title'>
//                                     <img src={ico2} alt="Revenue Generated Icon" />
//                                     <h4>Revenue Generated</h4>
//                                     <p>+170</p>
//                                 </div>
//                             </div>
//                             <div className='pxl-new'>
//                                 <div className="pxl-item--inner"> 
//                                     <img src={ico1} alt="5-Star Reviews Icon" />
//                                     <h4>5-Star Reviews</h4>
//                                     <p>3.4+</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="elementor-widget" ref={ref}>
//                             <div className='elementor-widget--form'>
//                                 <img src={ss} alt="Hello World" />
//                                 <h4>From hello world to IPO.</h4>
//                                 <h2 ref={h2Ref}>
//                                     <span className="start-text">Discover why</span>  
//                                     <span style={{ color: "#8db848" }}> millions of entrepreneurs</span> 
//                                     <span className="end-text"> choose Shopify to build their business</span>
//                                 </h2>
//                                 <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one click upsells and thank you page customization. Enjoy complimentary migration and frictionless implementation with your own plus account manager.</p>
//                                 <button id='pxl-item--button'>Know More</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Discover;
