import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import IMAGES from '../Allfiles/image';

function Grow() {

    const [ref, inView] = useInView({
        threshold: 0.2,
    });

    const brands = useRef(null);
    const items = useRef(null);
    const [autoplays, setAutoplays] = useState(false);

    useEffect(() => {
        if (inView && !autoplays) {
            gsap.fromTo(
                brands.current,
                { opacity: 0, y: 250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );

            gsap.fromTo(
                items.current,
                { opacity: 0, y: -250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );

            setAutoplays(true);
        }
    }, [inView, autoplays]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.tech--section-elements').classList.add('in-view');
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
        <>
            <div className="tech--section-elements" ref={ref}>
                <div className="wrapper">
                    <div className="tech--section-elements-grow">
                        <div className="tech--section-elements-flex">
                            <div className="tech--section-elements-firsted" >
                                <div className="tech--section-elements-first" ref={brands}>
                                    <div className="grow_flx">
                                        <div className='laye-first'>
                                            <div className='laye1-left'>
                                                <img src={IMAGES.ss} /></div>

                                            <div className='laye2-right'>
                                                <h4>Accomplish more than just selling.</h4></div>
                                        </div>
                                        <h2>Technology that grows with your <span style={{ color: "#fc5569" }}> online business</span> </h2>
                                        <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager.</p>

                                        {/* <div className='group-para'> */}
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

                                        <div className='group-para'>
                                            <Slider {...settings}>
                                                <div className='tech-group-elements'>

                                                    <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                                    <div className='grup-1'>
                                                        <div className='grup-2'>
                                                            <img src={IMAGES.sm} />
                                                        </div>
                                                        <div className='grup-3'>
                                                            <h4>John Doe</h4>
                                                            <p>Cheif Graphic Designing</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='tech-group-elements'>
                                                    <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                                    <div className='grup-1'>
                                                        <div className='grup-2'>
                                                            <img src={IMAGES.sm} />
                                                        </div>
                                                        <div className='grup-3'>
                                                            <h4>John Doe</h4>
                                                            <p>Cheif Graphic Designing</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tech-group-elements'>
                                                    <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                                    <div className='grup-1'>
                                                        <div className='grup-2'>
                                                            <img src={IMAGES.sm} />
                                                        </div>
                                                        <div className='grup-3'>
                                                            <h4>John Doe</h4>
                                                            <p>Cheif Graphic Designing</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tech-group-elements'>
                                                    <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                                    <div className='grup-1'>
                                                        <div className='grup-2'>
                                                            <img src={IMAGES.sm} />
                                                        </div>
                                                        <div className='grup-3'>
                                                            <h4>John Doe</h4>
                                                            <p>Cheif Graphic Designing</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tech-group-elements'>
                                                    <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                                    <div className='grup-1'>
                                                        <div className='grup-2'>
                                                            <img src={IMAGES.sm} />
                                                        </div>
                                                        <div className='grup-3'>
                                                            <h4>John Doe</h4>
                                                            <p>Cheif Graphic Designing</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='tech-group-elements'>
                                                    <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                                    <div className='grup-1'>
                                                        <div className='grup-2'>
                                                            <img src={IMAGES.sm} />
                                                        </div>
                                                        <div className='grup-3'>
                                                            <h4>John Doe</h4>
                                                            <p>Cheif Graphic Designing</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                                        <button className='tech--section-btn'> <span className="rotate-container">
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
                                </div>
                            </div>
                            <div className="tech--section-elements-second" ref={items}>
                                <img src={IMAGES.bu4} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Grow;