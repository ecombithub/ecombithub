import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function Search() {

    const [ref, inView] = useInView();
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

    return (
        <>
            <div className="dominate--section-perfrom" ref={ref}>
                <div className="wrapper">
                    <div className="dominate--section-perfrom-rank">
                        <div className="dominate--section-perfrom-rank-bg">
                            <div className="dominate--section-perfrom-rank-flex">
                                <div className="dominate--section-perfrom-rank-left" ref={technologyElement}>
                                    <div className="dom_start">
                                        <div className='laye-first'>
                                            <div className='laye1-left'>
                                                <img src={IMAGES.s101} /></div>
                                            <div className='laye2-right-1'>
                                                <h5>Meet Lemon</h5></div>
                                        </div>
                                        <h1><span style={{ color: "#fc5569" }}>Dominate</span> Search Rankings: <span style={{ color: "#6cac54" }}>Elevate Your Shopify Store</span></h1>
                                        <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager.</p>
                                        <div className='dominate--section-perfrom-rank-btn'>
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
                                            </span></button>
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
                                </div>
                                <div className="dominate--section-perfrom-rank-image" ref={elementor}>
                                    <img src={IMAGES.r1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
export default Search;
