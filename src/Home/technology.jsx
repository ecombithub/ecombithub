import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import IMAGES from '../Allfiles/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Tech() {
    
    const [ref, inView] = useInView({
        threshold: 0.2,
    });
    const brandElement = useRef(null);
    const technologyElement = useRef(null);
    const brandImageFirst = useRef(null);
    const brandImageSecond = useRef(null);
    const brandImageThird = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView && !hasAnimated) {
            gsap.fromTo(
                brandElement.current,
                { opacity: 0, y: 250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );

            gsap.fromTo(
                technologyElement.current,
                { opacity: 0, x: -250 },
                { opacity: 1, x: 0, duration: 1, delay: 0.3 }
            );

            gsap.fromTo(
                brandImageFirst.current,
                { opacity: 0, x: 250 },
                { opacity: 1, x: 0, duration: 1, delay: 0.5 }
            );

            gsap.fromTo(
                brandImageSecond.current,
                { opacity: 0, x: 250 },
                { opacity: 1, x: 0, duration: 1, delay: 0.5}
            );

            gsap.fromTo(
                brandImageThird.current,
                { opacity: 0, y: -250 },
                { opacity: 1, y: 0, duration: 1, delay: 1 }
            );

            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.technology--section').classList.add('in-view');
        }
    }, [inView]);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
    };

    return (
        <div className="technology--section" ref={ref}>
            <div className='wrapper'>
                <div className='technol-Partners'>
                    <div className='container'>
                        <div className='brand-tech-wrap'>
                            <div className="brand-tech-just" ref={technologyElement}>
                                <div className='brand-colo'>
                                    <img src={IMAGES.ss} alt="Brand Image" />
                                    <h4>Accomplish more than just selling.</h4>
                                </div>
                                <h2>Technology that grows with your <span style={{ color: "#fc5569" }}>online business</span></h2>
                                <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells and thank you page customization. Enjoy complimentary migration and frictionless implementation with your own plus account manager.</p>
                                <div className='brand--autoplay'>
                                    <Slider {...settings}>
                                        <div className="brand--autoplay-side">
                                            <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells and thank you page customize. Enjoy <span style={{ fontWeight: "600" }}>complimentary migration</span> and frictionless implement with your own plus account manager."</p>
                                            <div className='brand-slide-second'>
                                                <img src={IMAGES.s1} alt="Author Image" />
                                                <h4 style={{ fontSize: "15px", fontFamily: "Work Sans", fontWeight: "600" }}>
                                                    John Doe
                                                </h4>
                                                <p style={{ marginTop: "2px", fontFamily: "Work Sans", marginLeft: "65px" }}>Chief Graphic Designing</p>
                                            </div>
                                        </div>
                                        <div className="brand--autoplay-side">
                                            <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells and thank you page customize. Enjoy <span style={{ fontWeight: "600" }}>complimentary migration</span> and frictionless implement with your own plus account manager."</p>
                                            <div className='brand0slide-second'>
                                                <img src={IMAGES.s1} alt="Author Image" />
                                                <h4 style={{ fontSize: "15px", fontFamily: "Work Sans", fontWeight: "600" }}>
                                                    John Doe
                                                </h4>
                                                <p style={{ marginTop: "2px", fontFamily: "Work Sans", marginLeft: "65px" }}>Chief Graphic Designing</p>
                                            </div>
                                        </div>
                                        <div className="brand--autoplay-side">
                                            <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells and thank you page customize. Enjoy <span style={{ fontWeight: "600" }}>complimentary migration</span> and frictionless implement with your own plus account manager."</p>
                                            <div className='brand0slide-second'>
                                                <img src={IMAGES.s1} alt="Author Image" />
                                                <h4 style={{ fontSize: "15px", fontFamily: "Work Sans", fontWeight: "600" }}>
                                                    John Doe
                                                </h4>
                                                <p style={{ marginTop: "2px", fontFamily: "Work Sans", marginLeft: "65px" }}>Chief Graphic Designing</p>
                                            </div>
                                        </div>
                                        <div className="brand--autoplay-side">
                                            <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells and thank you page customize. Enjoy <span style={{ fontWeight: "600" }}>complimentary migration</span> and frictionless implement with your own plus account manager."</p>
                                            <div className='brand0slide-second'>
                                                <img src={IMAGES.s1} alt="Author Image" />
                                                <h4 style={{ fontSize: "15px", fontFamily: "Work Sans", fontWeight: "600" }}>
                                                    John Doe
                                                </h4>
                                                <p style={{ marginTop: "2px", fontFamily: "Work Sans", marginLeft: "65px" }}>Chief Graphic Designing</p>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                                <button className='button'> <span className="rotate-container">
                                  <span className="rotate-text">K</span>
                                  <span className="rotate-text">n</span>
                                  <span className="rotate-text">o</span>
                                  <span className="rotate-text">w</span>
                                  <span className="rotate-text">&nbsp;</span>
                                  <span className="rotate-text">M</span>
                                  <span className="rotate-text">o</span>
                                  <span className="rotate-text">r</span>
                                  <span className="rotate-text">e</span>
                                  </span></button>
                            </div>

                            <div className='brand-image'>
                                <div className='brand-img-bg' ref={brandElement}>
                                    <img src={IMAGES.br} alt="Image" />
                                    <div className='brand-image-first' ref={brandImageFirst}>
                                        <img src={IMAGES.anim1} alt="Image" />
                                    </div>
                                    <div className='brand-image-second' ref={brandImageSecond}>
                                        <img src={IMAGES.anim2} alt="Image" />
                                    </div>
                                    <div className='brand-image-third' ref={brandImageThird}>
                                        <img src={IMAGES.baar} alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tech;
