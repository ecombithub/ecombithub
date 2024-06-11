import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Brandto() {

    const [ref, inView] = useInView({
        threshold: 0.2,
    });

    const technologyElement = useRef(null);
    const elementor = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView && !hasAnimated) {
            gsap.fromTo(
                technologyElement.current,
                { opacity: 0, x: -250 },
                { opacity: 1, x: 0, duration: 1, delay: 0.3 }
            );

            gsap.fromTo(
                elementor.current,
                { opacity: 0, y: 250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );

            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.branding--section-elementor').classList.add('in-view');
        }
    }, [inView]);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
        // autoplay: true,
        // speed: 3000,
        // autoplaySpeed: 3000,
    };

    return (
        <>
            <div className='branding--section-elementor' ref={ref}>
                <div className="wrapper">
                    <div className='branding--section-elementor-new'>
                        <div className='branding--section-elementor-new-element'>
                            <div className='branding--section-elementor-start' ref={technologyElement}>
                                <div className='laye-first'>
                                    <div className='laye1-left'>
                                        <img src={IMAGES.ss} /></div>

                                    <div className='laye2-right'>
                                        <h4>Accomplish more than just selling.</h4></div>
                                </div>
                                <h2>Branding <span style={{ color: "#fc5569" }}>Element Integration </span>  </h2>
                                <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager.</p>
                                <div className='group-para'>
                                    {/* <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                    <div className='grup-1'>
                                        <div className='grup-2'>
                                            <img src={sm} />
                                        </div>
                                        <div className='grup-3'>
                                            <h4>John Doe</h4>
                                            <p>Cheif Graphic Designing</p>
                                        </div>
                                    </div> */}
                                    <Slider {...settings}>
                                        <div className='group-para-branding'>
                                            <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                            <div className='grup-1'>
                                                <div className='grup-2'>
                                                    <img src={IMAGES.smee} />
                                                </div>
                                                <div className='grup-3'>
                                                    <h4>John Doe</h4>
                                                    <p>Cheif Graphic Designing</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='group-para-branding'>
                                            <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                            <div className='grup-1'>
                                                <div className='grup-2'>
                                                    <img src={IMAGES.smee} />
                                                </div>
                                                <div className='grup-3'>
                                                    <h4>John Doe</h4>
                                                    <p>Cheif Graphic Designing</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='group-para-branding'>
                                            <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                            <div className='grup-1'>
                                                <div className='grup-2'>
                                                    <img src={IMAGES.smee} />
                                                </div>
                                                <div className='grup-3'>
                                                    <h4>John Doe</h4>
                                                    <p>Cheif Graphic Designing</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='group-para-branding'>
                                            <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                            <div className='grup-1'>
                                                <div className='grup-2'>
                                                    <img src={IMAGES.smee} />
                                                </div>
                                                <div className='grup-3'>
                                                    <h4>John Doe</h4>
                                                    <p>Cheif Graphic Designing</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                                <button className='branding--section-btn'><span className="rotate-container">
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
                            <div className='branding--section-elements-images' ref={elementor}>
                                <img src={IMAGES.g23} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Brandto;