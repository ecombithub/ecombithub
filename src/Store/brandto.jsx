import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Brandto() {

    // const [ref, inView] = useInView({
    //     threshold: 0.2,
    // });

    // const technologyElement = useRef(null);
    // const elementor = useRef(null);
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
    //             { opacity: 0, y: 250 },
    //             { opacity: 1, y: 0, duration: 1, delay: 0.3 }
    //         );

    //         setHasAnimated(true);
    //     }
    // }, [inView, hasAnimated]);

    // useEffect(() => {
    //     if (inView) {
    //         document.querySelector('.branding--section-elementor').classList.add('in-view');
    //     }
    // }, [inView]);

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
    //     variableWidth: true,
    //     // autoplay: true,
    //     // speed: 3000,
    //     // autoplaySpeed: 3000,
    // };

    return (
        <>
            <div className='branding--section-elementor'>
                <div className="wrapper">
                    <div className="branding-section-flex">
                        <div className="branding-section-element">
                            <h2>Branding  <span style={{ color: "#fc5569" }}>Element Integration</span> </h2>
                            <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager.</p>
                        </div>
                        <div className='branding-section-image'>
                            <img src={IMAGES.brand123} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Brandto;