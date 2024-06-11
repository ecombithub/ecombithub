import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Grow() {

    const [ref, inView] = useInView({
        threshold: 0.2,
    });

    const brand = useRef(null);
    const item = useRef(null);
    const [autoplay, setAutoplay] = useState(false);

    useEffect(() => {
        if (inView && !autoplay) {
            gsap.fromTo(
                brand.current,
                { opacity: 0, x: -250 },
                { opacity: 1, x: 0, duration: 1, delay: 0.3 }
            );

            gsap.fromTo(
                item.current,
                { opacity: 0, y: -250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );
            setAutoplay(true);
        }
    }, [inView, autoplay]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.woocommece--section-perfrom').classList.add('in-view');
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
            <div className="woocommece--section-perfrom" ref={ref}>
                <div className="wrapper">
                    <div className="woocommece--section-perfrom-grow">
                        <div className="woocommece--section-perfrom-left" ref={brand} >
                            <div className='laye-first' >
                                <div className='laye1-left'>
                                    <img src={IMAGES.ss} /></div>

                                <div className='laye2-right'>
                                    <h4>Accomplish more than just selling.</h4></div>
                            </div>
                            <h2>Migrate to Shopify from <span style={{ color: "rgb(128,84,179)" }}>WooCommece </span> </h2>
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
                                    <div className='woo-section-group'>
                                        <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                        <div className='grup-1'>
                                            <div className='grup-2'>
                                                <img src={IMAGES.sm11} />
                                            </div>
                                            <div className='grup-3'>
                                                <h4>John Doe</h4>
                                                <p>Cheif Graphic Designing</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='woo-section-group'>
                                        <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                        <div className='grup-1'>
                                            <div className='grup-2'>
                                                <img src={IMAGES.sm11} />
                                            </div>
                                            <div className='grup-3'>
                                                <h4>John Doe</h4>
                                                <p>Cheif Graphic Designing</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='woo-section-group'>
                                        <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                        <div className='grup-1'>
                                            <div className='grup-2'>
                                                <img src={IMAGES.sm11} />
                                            </div>
                                            <div className='grup-3'>
                                                <h4>John Doe</h4>
                                                <p>Cheif Graphic Designing</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='woo-section-group'>
                                        <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                        <div className='grup-1'>
                                            <div className='grup-2'>
                                                <img src={IMAGES.sm11} />
                                            </div>
                                            <div className='grup-3'>
                                                <h4>John Doe</h4>
                                                <p>Cheif Graphic Designing</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <button className='more-figma'><span className="rotate-container">
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
                        <div className="woocommece--section-perfrom-right" ref={item}>
                            <img src={IMAGES.s11} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Grow;