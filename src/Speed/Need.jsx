import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function Need() {

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
                { opacity: 0, x: -250 },
                { opacity: 1, x: 0, duration: 1, delay: 0.3 }
            );

            setAutoplays(true);
        }
    }, [inView, autoplays]);

    return (
        <>
            <div className="need--section-perfrom" ref={ref}>
                <div className="need--section-perfrom-start">
                    <div className='wrapper'>

                        <div className="need--section-perfrom-flex">
                            <div className="need--section-perfrom-flex-item">
                                <div className="need--section-perfrom-left" ref={brands}>
                                    <div className="need-left">
                                        <h1>Need for Speed: <span style={{ color: "#5a853d" }}>Supercharge Your</span> Shopify Site Today</h1>
                                        <p>You've come to the right place. Backlink the place for next-level SEO training and building strategies.</p>
                                        <div className='our-to'>
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
                                </div>
                                <div className="need--section-perfrom-image" ref={items}>
                                    <img src={IMAGES.fw1} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Need;