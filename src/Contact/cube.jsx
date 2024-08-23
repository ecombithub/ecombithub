import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useRef, useState } from "react";
import IMAGES from '../Allfiles/image';
function Cube() {

    const [showFirstImage, setShowFirstImage] = useState(true);
    const [showSecondImage, setShowSecondImage] = useState(true);
    const [showThirdImage, setShowThirdImage] = useState(true);
    const [showFourImage, setShowFourImage] = useState(true);
    const [showFiveImage, setShowFiveImage] = useState(true);
    const [showSixImage, setShowSixImage] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [firestHovered, setFirstHovered] = useState(false);
    const [secondHovered, setSecondHovered] = useState(false);
    const [thirdHovered, setThirdHovered] = useState(false);
    const [fourHovered, setFourHovered] = useState(false);
    const [fiveHovered, setFiveHovered] = useState(false);
    const [ref, inView] = useInView();
    const elementor1 = useRef(null);
    const elementor2 = useRef(null);
    const elementor3 = useRef(null);
    const elementor4 = useRef(null);
    const elementor5 = useRef(null);
    const elementor6 = useRef(null);
    const elementor7 = useRef(null);
    const elementor8 = useRef(null);
    const elementor9 = useRef(null);
    const elementor10 = useRef(null);
    const elementor11 = useRef(null);
    const elementor12 = useRef(null);

    const animateImages = () => {
        if (showFirstImage) {
            gsap.fromTo(
                elementor1.current,
                { opacity: 1, x: 0 },
                {
                    opacity: 0, x: -50, duration: 0.2, onComplete: () => {
                        setShowFirstImage(false);
                    }
                }
            );
            gsap.fromTo(
                elementor2.current,
                { opacity: 0, y: -50, x: 0 },
                { opacity: 1, y: 0, duration: 0.2, delay: 0.4 }
            );
        } else {
            gsap.fromTo(
                elementor2.current,
                { opacity: 1, x: 0 },
                {
                    opacity: 0, x: -50, duration: 0.2, onComplete: () => {
                        setShowFirstImage(true);
                    }
                }
            );
            gsap.fromTo(
                elementor1.current,
                { opacity: 0, y: -50, x: 0 },
                { opacity: 1, y: 0, duration: 0.2, delay: 0.4 }
            );
        }
    };

    const animateSecond = () => {
        if (showSecondImage) {
            gsap.fromTo(
                elementor3.current,
                { opacity: 1, y: 0 },
                {
                    opacity: 0, y: -50, duration: 0.2, onComplete: () => {
                        setShowSecondImage(false);
                    }
                }
            );
            gsap.fromTo(
                elementor4.current,
                { opacity: 0, x: -50, y: 0 },
                { opacity: 1, x: 0, duration: 0.2, delay: 0.6 }
            );
        } else {
            gsap.fromTo(
                elementor4.current,
                { opacity: 1, y: 0 },
                {
                    opacity: 0, y: -50, duration: 0.2, onComplete: () => {
                        setShowSecondImage(true);
                    }
                }
            );
            gsap.fromTo(
                elementor3.current,
                { opacity: 0, x: -50, y: 0 },
                { opacity: 1, x: 0, duration: 0.2, delay: 0.6 }
            );
        }
    };

    const animateThird = () => {
        if (showThirdImage) {
            gsap.fromTo(
                elementor5.current,
                { opacity: 1, x: 0 },
                {
                    opacity: 0, x: 50, duration: 0.2, onComplete: () => {
                        setShowThirdImage(false);
                    }
                }
            );
            gsap.fromTo(
                elementor6.current,
                { opacity: 0, y: -50, x: 0 },
                { opacity: 1, y: 0, duration: 0.2, delay: 0.8 }
            );
        } else {
            gsap.fromTo(
                elementor6.current,
                { opacity: 1, x: 0 },
                {
                    opacity: 0, x: 50, duration: 0.2, onComplete: () => {
                        setShowThirdImage(true);
                    }
                }
            );
            gsap.fromTo(
                elementor5.current,
                { opacity: 0, y: -50, x: 0 },
                { opacity: 1, y: 0, duration: 0.2, delay: 0.8 }
            );
        }
    };

    const animateFour = () => {
        if (showFourImage) {
            gsap.fromTo(
                elementor7.current,
                { opacity: 1, x: 0 },
                {
                    opacity: 0, x: -50, duration: 0.2, onComplete: () => {
                        setShowFourImage(false);
                    }
                }
            );
            gsap.fromTo(
                elementor8.current,
                { opacity: 0, y: 50, x: 0 },
                { opacity: 1, y: 0, duration: 0.2, delay: 1.1 }
            );
        } else {
            gsap.fromTo(
                elementor8.current,
                { opacity: 1, x: 0 },
                {
                    opacity: 0, x: -50, duration: 0.2, onComplete: () => {
                        setShowFourImage(true);
                    }
                }
            );
            gsap.fromTo(
                elementor7.current,
                { opacity: 0, y: 50, x: 0 },
                { opacity: 1, y: 0, duration: 0.2, delay: 1.1 }
            );
        }
    };

    const animateFive = () => {
        if (showFiveImage) {
            gsap.fromTo(
                elementor9.current,
                { opacity: 1, x: 0 },
                {
                    opacity: 0, x: -50, duration: 0.2, onComplete: () => {
                        setShowFiveImage(false);
                    }
                }
            );
            gsap.fromTo(
                elementor10.current,
                { opacity: 0, y: -50, x: 0 },
                { opacity: 1, y: 0, duration: 0.2, delay: 1.3 }
            );
        } else {
            gsap.fromTo(
                elementor10.current,
                { opacity: 1, x: 0 },
                {
                    opacity: 0, x: -50, duration: 0.2, onComplete: () => {
                        setShowFiveImage(true);
                    }
                }
            );
            gsap.fromTo(
                elementor9.current,
                { opacity: 0, y: -50, x: 0 },
                { opacity: 1, y: 0, duration: 0.2, delay: 1.3 }
            );
        }
    };

    const animateSix = () => {
        if (showSixImage) {
            gsap.fromTo(
                elementor11.current,
                { opacity: 1, x: 0 },
                {
                    opacity: 0, x: -50, duration: 0.2, onComplete: () => {
                        setShowSixImage(false);
                    }
                }
            );
            gsap.fromTo(
                elementor12.current,
                { opacity: 0, y: 50, x: 0 },
                { opacity: 1, y: 0, duration: 0.2, delay: 1.5 }
            );
        } else {
            gsap.fromTo(
                elementor12.current,
                { opacity: 1, x: 0 },
                {
                    opacity: 0, x: -50, duration: 0.2, onComplete: () => {
                        setShowSixImage(true);
                    }
                }
            );
            gsap.fromTo(
                elementor11.current,
                { opacity: 0, y: 50, x: 0 },
                { opacity: 1, y: 0, duration: 0.2, delay: 1.5 }
            );
        }
    };

    useEffect(() => {
        if (inView) {
            const interval = setInterval(() => {
                animateImages();
                setTimeout(() => {
                    animateSecond();
                    setTimeout(() => {
                        animateThird();
                        setTimeout(() => {
                            animateFour();
                            setTimeout(() => {
                                animateFive();
                                setTimeout(() => {
                                    animateSix();
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 500);
                }, 500);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [inView, showFirstImage, showSecondImage, showThirdImage, showFourImage, showFiveImage, showSixImage]);

    return (
        <>
            <div className='page-template-default'>
                <div className='wrapper'>
                    <div className='container'>

                        <div className='page-template-section'>
                            <div className="swiper-slide">
                                <div className='container'>
                                    <div className='page-templates-h2'>
                                        {/* <h2>Our clients</h2> */}
                                    </div>
                                    <div className="slider-cube-section" ref={ref}>
                                        <div className="slide--cube-section" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                            {!isHovered && (
                                                <>
                                                    <img src={IMAGES.shopify1} ref={elementor1} style={{ display: showFirstImage ? 'block' : 'none' }}  alt='shopifyplus'/>
                                                    <img src={IMAGES.shopify1} ref={elementor2} style={{ display: showFirstImage ? 'none' : 'block' }} alt='shopifyplus' />
                                                </>
                                            )}
                                            {isHovered && <img src={IMAGES.plus} alt='shopifyplus' />}
                                        </div>
                                        <div className="slide--cube-section" onMouseEnter={() => setFirstHovered(true)} onMouseLeave={() => setFirstHovered(false)}>
                                            {!firestHovered && (
                                                <>
                                                    <img src={IMAGES.page} ref={elementor3} style={{ display: showSecondImage ? 'block' : 'none' }} alt='PageFly'  />
                                                    <img src={IMAGES.page} ref={elementor4} style={{ display: showSecondImage ? 'none' : 'block' }} alt='PageFly' />
                                                </>
                                            )}
                                            {firestHovered && <img src={IMAGES.fly} alt='PageFly'  />}
                                        </div>
                                        <div className="slide--cube-section" onMouseEnter={() => setSecondHovered(true)} onMouseLeave={() => setSecondHovered(false)}>
                                            {!secondHovered && (
                                                <>
                                                    <img src={IMAGES.hub} ref={elementor5} style={{ display: showThirdImage ? 'block' : 'none' }} alt='HubSpot'  />
                                                    <img src={IMAGES.hub} ref={elementor6} style={{ display: showThirdImage ? 'none' : 'block' }} alt='HubSpot' />
                                                </>
                                            )}
                                            {secondHovered && <img src={IMAGES.spot} alt='HubSpot' />}
                                        </div>
                                        <div className="slide--cube-section" onMouseEnter={() => setThirdHovered(true)} onMouseLeave={() => setThirdHovered(false)}>
                                            {!thirdHovered && (
                                                <>
                                                    <img src={IMAGES.web} ref={elementor7} style={{ display: showFourImage ? 'block' : 'none' }} alt='Webflow'/>
                                                    <img src={IMAGES.web} ref={elementor8} style={{ display: showFourImage ? 'none' : 'block' }}  alt='Webflow'/>
                                                </>
                                            )}
                                            {thirdHovered && <img src={IMAGES.flow} alt='Webflow' />}
                                        </div>
                                        <div className="slide--cube-section" onMouseEnter={() => setFourHovered(true)} onMouseLeave={() => setFourHovered(false)}>
                                            {!fourHovered && (
                                                <>
                                                    <img src={IMAGES.shopify10} ref={elementor9} style={{ display: showFiveImage ? 'block' : 'none' }} alt='Shopify' />
                                                    <img src={IMAGES.shopify10} ref={elementor10} style={{ display: showFiveImage ? 'none' : 'block' }} alt='Shopify'/>
                                                </>
                                            )}
                                            {fourHovered && <img src={IMAGES.shopify12} alt='Shopify' />}
                                        </div>

                                        <div className="slide--cube-section" onMouseEnter={() => setFiveHovered(true)} onMouseLeave={() => setFiveHovered(false)}>
                                            {!fiveHovered && (
                                                <>
                                                     <img src={IMAGES.figma} ref={elementor11} style={{ display: showSixImage ? 'block' : 'none' }} alt='Figma' />
                                                     <img src={IMAGES.figma} ref={elementor12} style={{ display: showSixImage ? 'none' : 'block' }} alt='Figma'/>
                                                </>
                                            )}
                                            {fiveHovered && <img src={IMAGES.fig} alt='Figma'/>}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cube;
