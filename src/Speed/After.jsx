import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function After() {

    const [ref, inView] = useInView({
        threshold: 0.2,
    });

    const brands = useRef(null);
    const items = useRef(null);
    const [autoplays, setAutoplays] = useState(false);

    useEffect(() => {
        if (inView && !autoplays) {
            gsap.fromTo(
                brands.current,
                { opacity: 0, y: -250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );

            gsap.fromTo(
                items.current,
                { opacity: 0, y: 250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );

            setAutoplays(true);
        }
    }, [inView, autoplays]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.after--section-perfrom-before').classList.add('in-view');
        }
    }, [inView]);
    return (
        <>
            <div className="after--section-perfrom-before" ref={ref}>
                <div className='wrapper'>
                <div className="after--section-perfrom-start">
                    <div className="after--section-perfrom-left" ref={brands}>
                        <img src={IMAGES.ff1} />
                    </div>
                    <div className="after--section-perfrom-right" ref={items}>
                        <div className="after--section-perfrom-right-sides">
                            <div className='laye-first'>
                                <div className='laye1-left'>
                                    <img src={IMAGES.ss} /></div>

                                <div className='laye2-right'>
                                    <h4>Assemble your new team</h4></div>
                            </div>
                            <h2><span style={{ color: "#fc5569" }}> Before</span>and <span style={{ color: "#5a853d" }}>After</span> speed effects</h2>
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
                </div>
                </div>
            </div>
        </>
    )
}
export default After;