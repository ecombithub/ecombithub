import IMAGES from '../Allfiles/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { TextPlugin } from 'gsap/TextPlugin';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

function Exclusive() {

    const [isDesktop, setIsDesktop] = useState(false);
    const [autoplay, setAutoplay] = useState(false);
    const totalStoresRef = useRef(null);
    const totalStore = useRef(null);
    const total = useRef(null);
    const [ref, inView] = useInView();


    useEffect(() => {
        if (inView && !autoplay) {
            if (totalStoresRef.current) {
                gsap.fromTo(
                    totalStoresRef.current,
                    { textContent: "0" },
                    {
                        textContent: "30",
                        duration: 1,
                        ease: "power1.inOut",
                        snap: { textContent: 1 },
                        onUpdate: function () {
                            totalStoresRef.current.textContent = Math.floor(totalStoresRef.current.textContent);
                        },
                        onComplete: function () {
                            totalStoresRef.current.textContent = "30+";
                        }
                    }
                );
            }

            if (totalStore.current) {
                gsap.fromTo(
                    totalStore.current,
                    { textContent: "0" },
                    {
                        textContent: "72",
                        duration: 1,
                        ease: "power1.inOut",
                        snap: { textContent: 1 },
                        onUpdate: function () {
                            totalStore.current.textContent = Math.floor(totalStore.current.textContent);
                        },
                        onComplete: function () {
                            totalStore.current.textContent = "72+";
                        }
                    }
                );
            }

            if (total.current) {
                gsap.fromTo(
                    total.current,
                    { textContent: "0" },
                    {
                        textContent: "100",
                        duration: 1,
                        ease: "power1.inOut",
                        snap: { textContent: 1 },
                        onUpdate: function () {
                            total.current.textContent = Math.floor(total.current.textContent);
                        },
                        onComplete: function () {
                            total.current.textContent = "100+";
                        }
                    }
                );
            }

            setAutoplay(true);
        }
    }, [inView, autoplay]);


    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 640);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const sette = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [

            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,


                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    }


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false
    }
    const setting = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false
    }
    const sett = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false
    }



    return (

        <div className='exclusive-elements' ref={ref}>
            <div className="wrapper">
                <div className="container">
                    <div className='exclusive-elements-items'>
                        <div className='exclusive-elements-start'>
                            <h2>Exclusive <span style={{ color: "#fc5569" }}> Custom  Elements.</span></h2>
                            <p>Custom functions allow you to tailor Shopify’s templating engine to meet unique requirements and enhance your store’s functionality beyond standard Shopify features.</p>
                        </div>

                        {!isDesktop && (
                            <div className='feature--section--app'>
                                <Slider {...sette}>
                                    <div className='exclusive-elements-elements-variation'>
                                        <div className='exclusive-elements-elements-variation-button'>
                                            <div className='exclusive-elements-paragraph'>
                                                <p >30+</p>
                                            </div>
                                            <p>Cart Variations</p>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.filter10} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <div className='excluseive-h4-elements'>
                                                    <p >Custom  <span className='exclusive-bg-slides'>filters</span> </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.dynamic10} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Dynamic sorting options</p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.effort10} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Advanced product grid  <span className='exclusive-bg-slides'>layout</span></p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.webbrowser} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Interactive product elements </p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.secure10} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Custom  <span className='exclusive-bg-slides'>checkout fields</span></p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.paintswatch} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Custom color swatches</p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.scale1000} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Size guides for products</p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.gps10} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Location-based content display</p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.memorycard} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Device-specific  <span className='exclusive-bg-slides'>content</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='exclusive-elements-elements-variation'>
                                        <div className='exclusive-elements-elements-variation-button'>
                                            <div className='exclusive-elements-paragraph'>
                                                <p>72+</p>
                                            </div>
                                            <p>Product Page Variations</p>
                                        </div>

                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.personalization} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Personalized order summary</p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.recomendation} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Personalized recommendations</p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.dynamic2000} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Dynamic  <span className='exclusive-bg-slides'>navigation menus</span></p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.menu10000} alt="" itemprop="icon" />
                                            </div>

                                            <div className='exclusive-elements-elements-variation-card'>
                                                <div className='excluseive-h4-elements'>
                                                    <p >Mega  <span className='exclusive-bg-slides'> menus</span></p>
                                                </div>
                                                {/* <div className='exclusive-element-slider'>
                                            <Slider {...setting}>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}> Show Portfolio</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}> Show Portfolio</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}> Show Portfolio</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}> Show Portfolio</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}> Show Portfolio</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}> Show Portfolio</span></p>
                                                </div>

                                            </Slider>
                                        </div> */}

                                            </div>


                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.code11} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Custom email templates </p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.upselling} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Custom upsell suggestions</p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.checkout00} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Advanced  <span className='exclusive-bg-slides'> cart functionality</span></p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.notes1000} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Custom order  <span className='exclusive-bg-slides'> notes</span></p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.email159} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Dynamic shipping messages</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='exclusive-elements-elements-variation'>
                                        <div className='exclusive-elements-elements-variation-button'>
                                            <div className='exclusive-elements-paragraph'>
                                                <p>100+</p>
                                            </div>
                                            <p>Other Custom Variations</p>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.mail22} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Personalized email content</p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.marketing22} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Dynamic meta tags</p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.chatbot22} alt="" itemprop="icon" />
                                            </div>
                                            {/* <div className='exclusive-elements-elements-variation-card'>
                                        <p>Line Progressbar -  <span style={{ color: '#fc5569' }}> Show Line </span></p>
                                    </div> */}
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <div className='excluseive-h4-elements'>
                                                    <p >Integration with chatbots</p>
                                                </div>
                                                {/* <div className='exclusive-element-sliderrs'>
                                            <Slider {...sett}>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}>  Show Line</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}>  Show Line</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}>  Show Line</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}>  Show Line</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}>  Show Line</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}>  Show Line</span></p>
                                                </div>

                                            </Slider>
                                        </div> */}
                                            </div>

                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.marketing} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Marketing platform integration</p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.wishlist22} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Wishlist  <span className='exclusive-bg-slides'> features</span></p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.recommendation22} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Custom product recommendations</p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.touch22} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Interactive  <span className='exclusive-bg-slides'>dropdowns</span></p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.buy22} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Custom  <span className='exclusive-bg-slides'> checkout upsells</span> </p>
                                            </div>
                                        </div>
                                        <div className='exclusive-elements-elements-variation-use'>
                                            <div className='exclusive-elements-elements-variation-image'>
                                                <img src={IMAGES.ass1} alt="" itemprop="icon" />
                                            </div>
                                            <div className='exclusive-elements-elements-variation-card'>
                                                <p>Custom   <span className='exclusive-bg-slides'>Metafield/ Metaobjects</span> </p>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>
                            </div>
                        )}
                        {isDesktop && (<div className='exclusive-elements-elements-flex'>
                            <div className='exclusive-elements-elements-variation'>
                                <div className='exclusive-elements-elements-variation-button'>
                                    <div className='exclusive-elements-paragraph'>
                                        <p ref={totalStoresRef} >0</p>
                                    </div>
                                    <p>Cart Variations</p>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.filter10} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <div className='excluseive-h4-elements'>
                                            <p >Custom  <span className='exclusive-bg-slides'>filters</span> </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.dynamic10} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Dynamic sorting options</p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.effort10} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Advanced product grid  <span className='exclusive-bg-slides'>layout</span></p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.webbrowser} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Interactive product elements </p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.secure10} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Custom  <span className='exclusive-bg-slides'>checkout fields</span></p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.paintswatch} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Custom color swatches</p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.scale1000} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Size guides for products</p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.gps10} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Location-based content display</p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.memorycard} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Device-specific  <span className='exclusive-bg-slides'>content</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='exclusive-elements-elements-variation'>
                                <div className='exclusive-elements-elements-variation-button'>
                                    <div className='exclusive-elements-paragraph'>
                                        <p ref={totalStore}>0</p>
                                    </div>
                                    <p>Product Page Variations</p>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.personalization} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Personalized order summary</p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.recomendation} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Personalized recommendations</p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.dynamic2000} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Dynamic  <span className='exclusive-bg-slides'>navigation menus</span></p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.menu10000} alt="" itemprop="icon" />
                                    </div>

                                    <div className='exclusive-elements-elements-variation-card'>
                                        <div className='excluseive-h4-elements'>
                                            <p >Mega  <span className='exclusive-bg-slides'> menus</span></p>
                                        </div>
                                        {/* <div className='exclusive-element-slider'>
                                            <Slider {...setting}>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}> Show Portfolio</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}> Show Portfolio</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}> Show Portfolio</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}> Show Portfolio</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}> Show Portfolio</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}> Show Portfolio</span></p>
                                                </div>

                                            </Slider>
                                        </div> */}

                                    </div>


                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.code11} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Custom email templates </p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.upselling} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Custom upsell suggestions</p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.checkout00} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Advanced  <span className='exclusive-bg-slides'> cart functionality</span></p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.notes1000} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Custom order  <span className='exclusive-bg-slides'> notes</span></p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.email159} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Dynamic shipping messages</p>
                                    </div>
                                </div>
                            </div>
                            <div className='exclusive-elements-elements-variation'>
                                <div className='exclusive-elements-elements-variation-button'>
                                    <div className='exclusive-elements-paragraph'>
                                        <p ref={total}>0</p>
                                    </div>
                                    <p>Other Custom Variations</p>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.mail22} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Personalized email content</p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.marketing22} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Dynamic meta tags</p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.chatbot22} alt="" itemprop="icon" />
                                    </div>
                                    {/* <div className='exclusive-elements-elements-variation-card'>
                                        <p>Line Progressbar -  <span style={{ color: '#fc5569' }}> Show Line </span></p>
                                    </div> */}
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <div className='excluseive-h4-elements'>
                                            <p >Integration with chatbots</p>
                                        </div>
                                        {/* <div className='exclusive-element-sliderrs'>
                                            <Slider {...sett}>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}>  Show Line</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}>  Show Line</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}>  Show Line</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}>  Show Line</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}>  Show Line</span></p>
                                                </div>
                                                <div className='exclusive-elements-sliders-card'>
                                                    <p><span style={{ color: '#fc5569' }}>  Show Line</span></p>
                                                </div>

                                            </Slider>
                                        </div> */}
                                    </div>

                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.marketing} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Marketing platform integration</p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.wishlist22} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Wishlist  <span className='exclusive-bg-slides'> features</span></p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.recommendation22} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Custom product recommendations</p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.touch22} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Interactive  <span className='exclusive-bg-slides'>dropdowns</span></p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.buy22} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Custom  <span className='exclusive-bg-slides'> checkout upsells</span> </p>
                                    </div>
                                </div>
                                <div className='exclusive-elements-elements-variation-use'>
                                    <div className='exclusive-elements-elements-variation-image'>
                                        <img src={IMAGES.ass1} alt="" itemprop="icon" />
                                    </div>
                                    <div className='exclusive-elements-elements-variation-card'>
                                        <p>Custom   <span className='exclusive-bg-slides'>Metafield/ Metaobjects</span> </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        )}
                        {/* <Link to="https://calendly.com/ecom-support/shopify-expert">  <button class='button'> <span className="rotate-container">
                            <span className="rotate-text">E</span>
                            <span className="rotate-text">x</span>
                            <span className="rotate-text">p</span>
                            <span className="rotate-text">l</span>
                            <span className="rotate-text">o</span>
                            <span className="rotate-text">r</span>
                            <span className="rotate-text">e</span>
                            <span className="rotate-text">&nbsp;</span>
                            <span className="rotate-text">M</span>
                            <span className="rotate-text">o</span>
                            <span className="rotate-text">r</span>
                            <span className="rotate-text">e</span>
                        </span></button></Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exclusive;


















// import { AiOutlineLine } from "react-icons/ai";
// import { IoMdCheckmark } from "react-icons/io";
// import React, { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import { useInView } from 'react-intersection-observer';
// import IMAGES from "../Allfiles/image";

// function Stunn() {

//     const [ref, inView] = useInView({
//         threshold: 0.2,
//     });
//     const brand = useRef(null);
//     const technology = useRef(null);
//     const [autoplay, setAutoplay] = useState(false);
//     const [brandAnimationComplete, setBrandAnimationComplete] = useState(false);

//     useEffect(() => {
//         if (inView && !autoplay) {
//             gsap.fromTo(
//                 brand.current,
//                 { opacity: 0, y: -250 },
//                 { opacity: 1, y: 0, duration: 1, delay: 0.3 }
//             );
//             setAutoplay(true);
//         }
//     }, [inView, autoplay]);

//     useEffect(() => {
//         if (inView && !brandAnimationComplete) {
//             gsap.fromTo(
//                 technology.current,
//                 { opacity: 0, x: 160 },
//                 { opacity: 1, x: 0, duration: 1, delay: 0.3 }
//             );
//             setBrandAnimationComplete(true);
//         }
//     }, [inView, brandAnimationComplete]);

//     const shop = useRef(null);
//     const wix = useRef(null);
//     const shopi = useRef(null);
//     const ph = useRef(null);

//     useEffect(() => {
//         const tl = gsap.timeline({ repeat: -1 });

//         tl.to([shop.current, wix.current, shopi.current, ph.current], { duration: 2, y: '-=6', ease: 'power1.inOut' })
//             .to([shop.current, wix.current, shopi.current, ph.current], { duration: 2, y: '+=6', ease: 'power1.inOut' });

//         return () => tl.kill();
//     }, []);

//     const firstimage = useRef(null);
//     const [first, setFirst] = useState(false);

//     useEffect(() => {
//         if (inView && !first) {
//             gsap.fromTo(
//                 firstimage.current,
//                 { opacity: 0, x: -250 },
//                 { opacity: 1, x: 0, duration: 1, delay: 1 }
//             );
//             setFirst(true);
//         }
//     }, [inView, first]);

//     const secondimage = useRef(null);
//     const [second, setSecond] = useState(false);

//     useEffect(() => {
//         if (inView && !second) {
//             gsap.fromTo(
//                 secondimage.current,
//                 { opacity: 0, y: -250 },
//                 { opacity: 1, y: 0, duration: 1, delay: 2 }
//             );
//             setSecond(true);
//         }
//     }, [inView, second]);

//     const thirdimage = useRef(null);
//     const [third, setThird] = useState(false);

//     useEffect(() => {
//         if (inView && !third) {
//             gsap.fromTo(
//                 thirdimage.current,
//                 { opacity: 0, x: 250 },
//                 { opacity: 1, x: 0, duration: 1, delay: 3 }
//             );
//             setThird(true);
//         }
//     }, [inView, third]);

//     const forthimage = useRef(null);
//     const [four, setFour] = useState(false);

//     useEffect(() => {
//         if (inView && !four) {
//             gsap.fromTo(
//                 forthimage.current,
//                 { opacity: 0, y: 250 },
//                 { opacity: 1, y: 0, duration: 1, delay: 4 }
//             );
//             setFour(true);
//         }
//     }, [inView, four]);

//     useEffect(() => {
//         if (inView) {
//             document.querySelector('.templates--section').classList.add('in-view');
//         }
//     }, [inView]);

//     return (
//         <>
//             <div className='templates--section' ref={ref}>
//                 <div className='stunning'>
//                     <div className='wrapper'>
//                         <div className='container'>
//                             <div className='templates-section-main'>
//                                 <div className='templates-section-ajex' ref={brand} >
//                                     <img src={IMAGES.ring} />

//                                     <div className='templates-php' ref={firstimage}>
//                                         <img src={IMAGES.php} ref={shop} />
//                                     </div>
//                                     <div className='templates-shopify' ref={secondimage}>
//                                         <img src={IMAGES.shopify} ref={wix} />
//                                     </div>
//                                     <div className='templates-node' ref={thirdimage}>
//                                         <img src={IMAGES.node3} ref={shopi} />
//                                     </div>
//                                     <div className='templates-ajex' ref={forthimage}>
//                                         <img src={IMAGES.ajex} ref={ph} />
//                                     </div>
//                                 </div>

//                                 <div className='templates-section-sucess' ref={technology} >
//                                     <div className='templates-section-selling'>
//                                         <AiOutlineLine />
//                                         <p>Accomplish more than just selling.</p>
//                                     </div>
//                                     <h2> <span style={{ color: "#8db848" }}>Stunning Templates</span> to Empower Your Sucess</h2>
//                                     <div className='templates-section-flex'>
//                                         <div className='templates-section-plus'>
//                                             <IoMdCheckmark />
//                                             <p>Use HubSyntax to grow your shopify plus brand via checkout upsells, one-click upsells and thank you page customization.</p>
//                                         </div>
//                                         <div className='templates-section-migration'>
//                                             <IoMdCheckmark />
//                                             <p>Enjoy complimentary migration and frictionless implementatioin width a your own plus  account manager.</p>
//                                         </div>
//                                         <div className='templates-section-around'>
//                                             <IoMdCheckmark />
//                                             <p>Easy move elements and play around with different color schemes and fonts.</p>
//                                         </div>
//                                     </div>
//                                     <div className='templates-section-paragraph'>
//                                         <h4>What is your store's monthly order volume?</h4>
//                                         <div className='templates-section-order'>
//                                             <div className='templates-section-month'>
//                                                 <h2>49</h2>
//                                                 <p>Order per month</p>
//                                             </div>
//                                             <div className='templates-section-revenue'>
//                                                 <h2>$49</h2>
//                                                 <p>+0.75% of upsells Revenue</p>
//                                             </div>
//                                         </div>
//                                         <div className='templates-section-trial'>
//                                             <div className='templates-section-free'>
//                                                 <IoMdCheckmark /> <p>30-Day free trial</p>
//                                             </div>
//                                             <div className='templates-section-user'>
//                                                 <p> Average UserROI :219%</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <button class='button'> <span className="rotate-container">
//                                   <span className="rotate-text">K</span>
//                                   <span className="rotate-text">n</span>
//                                   <span className="rotate-text">o</span>
//                                   <span className="rotate-text">w</span>
//                                   <span className="rotate-text">&nbsp;</span>
//                                   <span className="rotate-text">M</span>
//                                   <span className="rotate-text">o</span>
//                                   <span className="rotate-text">r</span>
//                                   <span className="rotate-text">e</span>
//                                   </span></button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Stunn;


