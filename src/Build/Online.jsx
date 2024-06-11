
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import IMAGES from '../Allfiles/image';
function Online() {

    const [ref, inView] = useInView({
        threshold: 0.2,
    });

    const brandref = useRef(null);
    const itemref = useRef(null);
    const [autoplayref, setAutoplayref] = useState(false);

    useEffect(() => {
        if (inView && !autoplayref) {
            gsap.fromTo(
                brandref.current,
                { opacity: 0, y: -250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );

            gsap.fromTo(
                itemref.current,
                { opacity: 0, y: 250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );
            setAutoplayref(true);
        }
    }, [inView, autoplayref]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.online-buy--section').classList.add('in-view');
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
            <div className="online-buy--section" ref={ref}>
                <div className="wrapper">
                    <div className="online_buy">
                        <div className="online-buy--section-flex">
                            <div className="online-buy--section-image" ref={brandref}>
                                <div className="online_imgg1">
                                    <img src={IMAGES.bu7} alt="" />
                                </div>
                            </div>

                            <div className="online-buy--section-business" ref={itemref}>

                                <div className="online_secper">
                                    <div className='laye-first'>
                                        <div className='laye1-left'>
                                            <img src={IMAGES.ss} /></div>

                                        <div className='laye2-right'>
                                            <h4>Accomplish more than just selling.</h4></div>
                                    </div>
                                    <h2>Technology that grows with your <span style={{ color: "#fc5569" }}> online business</span> </h2>
                                    <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager.</p>
                                    <div className='online-buy--section-group'>
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
                                            <div className='online-buy--section-group-slides'>
                                                <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                                <div className='grup-1'>
                                                    <div className='grup-2'>
                                                        <img src={IMAGES.sme} />
                                                    </div>
                                                    <div className='grup-3'>
                                                        <h4>John Doe</h4>
                                                        <p>Cheif Graphic Designing</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='online-buy--section-group-slides'>
                                                <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                                <div className='grup-1'>
                                                    <div className='grup-2'>
                                                        <img src={IMAGES.sme} />
                                                    </div>
                                                    <div className='grup-3'>
                                                        <h4>John Doe</h4>
                                                        <p>Cheif Graphic Designing</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='online-buy--section-group-slides'>
                                                <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                                <div className='grup-1'>
                                                    <div className='grup-2'>
                                                        <img src={IMAGES.sme} />
                                                    </div>
                                                    <div className='grup-3'>
                                                        <h4>John Doe</h4>
                                                        <p>Cheif Graphic Designing</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='online-buy--section-group-slides'>
                                                <p>"Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager."</p>
                                                <div className='grup-1'>
                                                    <div className='grup-2'>
                                                        <img src={IMAGES.sme} />
                                                    </div>
                                                    <div className='grup-3'>
                                                        <h4>John Doe</h4>
                                                        <p>Cheif Graphic Designing</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
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
export default Online;