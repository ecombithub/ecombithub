import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function Perfrom() {

    const [ref, inView] = useInView();
    const technologyElement = useRef(null);
    const elementor = useRef(null);
    const metImg = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView && !hasAnimated) {
            gsap.fromTo(
                technologyElement.current,
                { opacity: 0, x: -350 },
                { opacity: 1, x: 0, duration: 1, delay: 0.3 }
            );

            gsap.fromTo(
                elementor.current,
                { opacity: 0, x: -220 },
                { opacity: 1, x: 0, duration: 1, delay: 0.3 }
            );

            gsap.fromTo(
                metImg.current,
                { opacity: 0 },
                { opacity: 1, duration: 1, delay: 1.6 }
            );

            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    return (
        <>
            <div className="website--section-build" ref={ref}>
                <div className="wrapper">
                    <div className='website--section-perfrom'>
                        <div className='website--section-perfrom-flex' ref={technologyElement}>
                            <div className='website--section-perfrom-element'>
                                <div className='laye-first'>
                                    <div className='laye1-left'>
                                        <img src={IMAGES.ss} />
                                    </div>
                                    <div className='laye2-right'>
                                        <h5>Meet Lemon</h5>
                                    </div>
                                </div>
                                <h1>Build a <span style={{ color: "#5a853d" }}>website </span> that- <span style={{ color: "#fc5569" }}>perfroms.</span></h1>
                                <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager.</p>
                                <div className='website--section-perfrom-btn'>
                                    <button className='view-to'><span className="rotate-container">
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
                                    </span> </button>
                                    <button className='view-side'>  <span className="rotate-container">
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
                            <div className='back-side' ref={metImg} style={{ opacity: 0 }}>
                                <img src={IMAGES.f32} />
                            </div>
                        </div>
                        <div className='website--section-perfrom-image' ref={elementor}>
                            <img src={IMAGES.f12} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Perfrom;
