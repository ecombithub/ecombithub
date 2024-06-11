import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import IMAGES from '../Allfiles/image';
function New() {

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
                { opacity: 0, y: -250 },
                { opacity: 1, y: 0, duration: 1, delay: 2 }
            );

            gsap.fromTo(
                item.current,
                { opacity: 0, y: 250 },
                { opacity: 1, y: 0, duration: 1, delay: 2 }
            );
            setAutoplay(true);
        }
    }, [inView, autoplay]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.magento--section-perfrom-element').classList.add('in-view');
        }
    }, [inView]);

    return (
        <>
            <div className='magento--section-perfrom-element' ref={ref}>
                <div className='magento--section-perfrom-element-custom'>
                    <div className='wrapper'>
                        <div className='magento--section-perfrom-element-team'>
                            <div className='magento--section-perfrom-element-team-left' ref={brand}>
                                <img src={IMAGES.sho} />
                            </div>
                            <div className='magento--section-perfrom-element-team-right' ref={item}>
                                <div className='magento--section-perfrom-element-items'>
                                    <div className='laye-first'>
                                        <div className='laye1-left'>
                                            <img src={IMAGES.ss} /></div>
                                        <div className='laye2-right'>
                                            <h4>Assemble your new team </h4></div>
                                    </div>
                                    <h2>Migrate to Shopify from  <span style={{ color: "#fc5569" }}> Magento</span></h2>
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
            </div>
        </>
    )
}
export default New;