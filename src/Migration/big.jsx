import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function Big() {
    const [ref, inView] = useInView();

    const brands = useRef(null);
    const items = useRef(null);
    const [autoplays, setAutoplays] = useState(false);

    useEffect(() => {
        if (inView && !autoplays) {
            gsap.fromTo(
                brands.current,
                { opacity: 0, x: -250 },
                { opacity: 1, x: 0, duration: 1, delay: 0.3 }
            );

            gsap.fromTo(
                items.current,
                { opacity: 0, y: -250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );

            setAutoplays(true);
        }
    }, [inView, autoplays]);

    return (
        <>
            <div className="migrate--section-perfrom" ref={ref}>
                <div className="wrapper">
                    <div className="migrate--section-perfrom-elementor">
                        <div className="migrate--section-perfrom-elements">
                            <div className="migrate--section-perfrom-element-left">
                                <div className="migrate--section-perfrom-element-left-sidess" ref={brands}>
                                    <div className='laye-first'>
                                        <div className='laye1-left'>
                                            <img src={IMAGES.s10} /></div>
                                        <div className='laye2-right-1'>
                                            <h5>Meet Lemon</h5></div>
                                    </div>
                                    <h1>Migrate to <span style={{ color: "#5a853d" }}> Shopify </span>from  <span style={{ color: "#263A8A" }}>  BigCommerce </span> </h1>
                                    <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager.</p>
                                    <div className='migrate--section-perfrom-element-btn'>
                                        <button className='view-to'> <span className="rotate-container">
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
                                        </span></button>
                                        <button className='view-side'> <span className="rotate-container">
                                            <span className="rotate-text">D</span>
                                            <span className="rotate-text">i</span>
                                            <span className="rotate-text">s</span>
                                            <span className="rotate-text">c</span>
                                            <span className="rotate-text">o</span>
                                            <span className="rotate-text">v</span>
                                            <span className="rotate-text">e</span>
                                            <span className="rotate-text">r</span>
                                            <span className="rotate-text">&nbsp;</span>
                                            <span className="rotate-text">O</span>
                                            <span className="rotate-text">u</span>
                                            <span className="rotate-text">r</span>
                                            <span className="rotate-text">&nbsp;</span>
                                            <span className="rotate-text">W</span>
                                            <span className="rotate-text">o</span>
                                            <span className="rotate-text">r</span>
                                            <span className="rotate-text">k</span>
                                        </span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="migrate--section-perfrom-element-image" ref={items}>
                                <img src={IMAGES.s23} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Big;