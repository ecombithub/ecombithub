import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
function Expand() {

    const [ref, inView] = useInView();

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

    return (
        <>
            <div className="connect--section-perfrom" ref={ref}>
                <div className="connect--section-perfrom-sides">
                    <div className="wrapper">
                        <div className="connect--section-perfrom-start">
                            <div className="connect--section-perfrom-left" ref={brands}>
                                <div className="expand-left">
                                    <div className='laye-first'>
                                        <div className='laye1-left'>
                                            <img src={IMAGES.s100} /></div>
                                        <div className='laye2-right-1'>
                                            <h5>Meet Lemon</h5></div>
                                    </div>
                                    <h1>Connect, Expand, and Thrive </h1>
                                    <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager.</p>
                                    <div className='connect--section-perfrom-btn'>
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
                                        <button className='view-side'><span className="rotate-container">
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
                            <div className='connect--section-perfrom-image' ref={items}>
                                <img src={IMAGES.aa10} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Expand;