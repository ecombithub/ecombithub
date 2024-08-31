import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import IMAGES from '../Allfiles/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Layout() {
    // const [ref, inView] = useInView();
    // const technologyElement = useRef(null);
    // const elementor = useRef(null);
    // const metImg1 = useRef(null);
    // const metImg2 = useRef(null);
    // const metImg3 = useRef(null);
    // const metImg4 = useRef(null);
    // const [hasAnimated, setHasAnimated] = useState(false);

    // useEffect(() => {
    //     if (inView && !hasAnimated) {
    //         gsap.fromTo(
    //             technologyElement.current,
    //             { opacity: 0, x: -250 },
    //             { opacity: 1, x: 0, duration: 1, delay: 0.3 }
    //         );

    //         gsap.fromTo(
    //             elementor.current,
    //             { opacity: 0, x: 250 },
    //             { opacity: 1, x: 0, duration: 1, delay: 0.3 }
    //         );

    //         gsap.fromTo(
    //             [metImg1.current, metImg2.current, metImg3.current, metImg4.current],
    //             { opacity: 0 },
    //             { opacity: 1, duration: 1, delay: 1.2, stagger: 0.2 }
    //         );

    //         setHasAnimated(true);
    //     }
    // }, [inView, hasAnimated]);


    const settings = {
        infinite: true,
        slidesToShow: 2,
        // autoplay: true,
        // speed: 9000,
        // cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false
    }

    return (
        <div className="theme-and--section">
            <div className="wrapper">
              
                    <div className="theme-section-h1">
                        <h1> <span style={{ color: "#5a853d" }}>Theme</span> and <span style={{ color: "#fc5569" }}>Layout</span> Customization</h1>
                    </div>
                    <div className="theme-section-layout">
                    <div className="theme-section-img">
                        <img src={IMAGES.storebk} alt="" />
                    </div>
                    <div className='theme-section-sidebar'>
                        <img src={IMAGES.sidebarstore} alt="" />
                    </div>
                     <div className="theme-section-circle">
                        <img src={IMAGES.storecircle} alt="" />
                     </div>
                     <div className='theme-section-shopify-image'>
                        <img src={IMAGES.storeshopify} alt="" />
                     </div>
                     <div className="theme-section-slider-first">
                                <Slider {...settings}>
                                    <div className="theme-section-slides">
                                        <img src={IMAGES.build50} alt="" />
                                    </div>
                                    <div className="theme-section-slides">
                                        <img src={IMAGES.build49} alt="" />
                                    </div>
                                    <div className="theme-section-slides">
                                        <img src={IMAGES.build48} alt="" />
                                    </div>
                                    <div className="theme-section-slides">
                                        <img src={IMAGES.build47} alt="" />
                                    </div>
                                    <div className="theme-section-slides">
                                        <img src={IMAGES.build46} alt="" />
                                    </div>
                                    <div className="theme-section-slides">
                                        <img src={IMAGES.build45} alt="" />
                                    </div>
                                </Slider>
                            </div>
                      

                    <div className='theme-section-p'>
                        <p>You've come to the right place. Backlink the place for next-level SEO training and link building strategies.</p>
                        <a href='/app'>  <button id="pxl-button"> <span className="rotate-container">
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
    );
}

export default Layout;
