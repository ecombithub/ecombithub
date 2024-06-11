import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
function Word() {
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
            document.querySelector('.wordpress--section-perfrom').classList.add('in-view');
        }
    }, [inView]);

    return (
        <>
            <div className="wordpress--section-perfrom" ref={ref}>
                <div className='wrapper'>
                    <div className="wordpress--section-perfrom-start">
                        <div className="wordpress--section-perfrom-world" ref={brand}>
                            <div className="wordpress--section-perfrom-left">
                                <div className='laye-first'>
                                    <div className='laye1-left'>
                                        <img src={IMAGES.ss} /></div>

                                    <div className='laye2-right'>
                                        <h4>Accomplish more than just selling.</h4></div>
                                </div>
                                <h2>Migrate to Shopify from  <span style={{ color: "#007095" }}>WordPress </span></h2>
                                <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager.</p>
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
                        </div>
                        <div className='wordpress--section-perfrom-image' ref={item}>
                            <img src={IMAGES.s55} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Word;