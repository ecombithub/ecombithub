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
                { opacity: 1, y: 0, duration: 0.2, delay: 0.6 }
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
                { opacity: 1, y: 0, duration: 0.2, delay: 0.6 }
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
                { opacity: 1, x: 0, duration: 0.2, delay: 0.8 }
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
                { opacity: 1, x: 0, duration: 0.2, delay: 0.8 }
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
                { opacity: 1, y: 0, duration: 0.2, delay: 1.1 }
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
                { opacity: 1, y: 0, duration: 0.2, delay: 1.1 }
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
                { opacity: 1, y: 0, duration: 0.2, delay: 1.3 }
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
                { opacity: 1, y: 0, duration: 0.2, delay: 1.3 }
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
                { opacity: 1, y: 0, duration: 0.2, delay: 1.5 }
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
                { opacity: 1, y: 0, duration: 0.2, delay: 1.5 }
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
                { opacity: 1, y: 0, duration: 0.2, delay: 1.7 }
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
                { opacity: 1, y: 0, duration: 0.2, delay: 1.7 }
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
                                    <h3>Trusted by company all over the world</h3>
                                    <div className="slider-cube-section" ref={ref}>
                                        <div className="slide--cube-section">
                                            <img src={IMAGES.cube1} ref={elementor1} style={{ display: showFirstImage ? 'block' : 'none' }} />
                                            <img src={IMAGES.cube2} ref={elementor2} style={{ display: showFirstImage ? 'none' : 'block' }} />
                                        </div>

                                        <div className="slide--cube-section">
                                            <img src={IMAGES.cube2} ref={elementor3} style={{ display: showSecondImage ? 'block' : 'none' }} />
                                            <img src={IMAGES.cube4} ref={elementor4} style={{ display: showSecondImage ? 'none' : 'block' }} />
                                        </div>

                                        <div className="slide--cube-section">
                                            <img src={IMAGES.cube4} ref={elementor5} style={{ display: showThirdImage ? 'block' : 'none' }} />
                                            <img src={IMAGES.cube5} ref={elementor6} style={{ display: showThirdImage ? 'none' : 'block' }} />
                                        </div>

                                        <div className="slide--cube-section">
                                            <img src={IMAGES.cube5} ref={elementor7} style={{ display: showFourImage ? 'block' : 'none' }} />
                                            <img src={IMAGES.cube6} ref={elementor8} style={{ display: showFourImage ? 'none' : 'block' }} />
                                        </div>
                                        <div className="slide--cube-section">
                                            <img src={IMAGES.cube6} ref={elementor9} style={{ display: showFiveImage ? 'block' : 'none' }} />
                                            <img src={IMAGES.cube1} ref={elementor10} style={{ display: showFiveImage ? 'none' : 'block' }} />
                                        </div>
                                        <div className="slide--cube-section">
                                            <img src={IMAGES.cube1} ref={elementor11} style={{ display: showSixImage ? 'block' : 'none' }} />
                                            <img src={IMAGES.cube2} ref={elementor12} style={{ display: showSixImage ? 'none' : 'block' }} />
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














// import cube1 from '../images/ify.png';
// import cube2 from '../images/port.png';
// import cube3 from '../images/ic3.png';
// import cube4 from '../images/ops.png';
// import cube5 from '../images/bols.png';
// import cube6 from '../images/nik.png';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// function Arrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "grey " }}
//             onClick={onClick}
//         />
//     );
// }

// function Cube() {
//     const settings = {
//         dots: false,
//         infinite: true,
//         slidesToShow: 5,
//         slidesToScroll: 3,
//         // nextArrow: <Arrow />,
//         // prevArrow: <Arrow />,
//         adaptiveHeight: true,
//         variableWidth: true,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 2000,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,


//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             },
//             {
//                 breakpoint: 548,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]

//     };

//     return (
//         <>
//             <div className='page-template-default'>
//                 <div className='wrapper'>
//                     <div className='page-template-section'>


//                         <div className="swiper-slide">
//                             <div className='container'>
//                                 <h3>Trusted by company all over the world</h3>

//                                 <Slider {...settings}>
//                                     <div className='swiper-slide-inner'>
//                                         <img src={cube1} />
//                                     </div>
//                                     <div className='swiper-slide-inner'>
//                                         <img src={cube2} />
//                                     </div>
//                                     <div className='swiper-slide-inner'>
//                                         <img src={cube4} />
//                                     </div>
//                                     <div className='swiper-slide-inner'>
//                                         <img src={cube5} />
//                                     </div>
//                                     <div className='swiper-slide-inner'>
//                                         <img src={cube6} />
//                                     </div>
//                                     <div className='swiper-slide-inner'>
//                                         <img src={cube4} />
//                                     </div>
//                                     <div className='swiper-slide-inner'>
//                                         <img src={cube5} />
//                                     </div>
//                                     <div className='swiper-slide-inner'>
//                                         <img src={cube6} />
//                                     </div>
//                                     <div className='swiper-slide-inner'>
//                                         <img src={cube4} />
//                                     </div>

//                                 </Slider>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Cube;
