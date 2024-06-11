import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import IMAGES from '../Allfiles/image';

function Web() {
    const [ref, inView] = useInView();
    const technologyElement = useRef(null);
    const elementor = useRef(null);
    const metImg = useRef(null);
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
                { opacity: 0, x: 150 },
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
            <div className="build--section-perform" ref={ref}>
                <div className="build--section-perform-site">
                    <div className="wrapper">
                        <div className="web-sitestart">
                            <div className="container">
                                <div className="build--section-perform-site-flex">
                                    <div className="build--section-perform-site-first" >
                                        <div className="build--section-perform-site-first_meet" ref={technologyElement}>
                                            <div className='laye-first'>
                                                <div className='laye1-left'>
                                                    <img src={IMAGES.ss} />
                                                </div>
                                                <div className='laye2-right'>
                                                    <h5>Meet Lemon</h5>
                                                </div>
                                            </div>
                                            <h1>Build a <span style={{ color: "#5a853d" }}>website </span> that- <span style={{ color: "#fc5569" }}>performs.</span></h1>
                                            <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells and thank you page customization. Enjoy complimentary migration and frictionless implementation with your own plus account manager.</p>
                                            <div className='build--section-btn'>
                                                <button className='build--section-btn-view'>
                                                    <span className="rotate-container">
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
                                                    </span>
                                                </button>
                                                <button className='build--section-btn-side'>
                                                    <span className="rotate-container">
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
                                        <div className="met_img" ref={metImg} style={{ opacity: 0 }}>
                                            <img src={IMAGES.bu2} />
                                        </div>
                                    </div>
                                    <div className="build--section-right-image" ref={elementor}>
                                        <img src={IMAGES.bu1} />
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

export default Web;
