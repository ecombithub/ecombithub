import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function Explore() {

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
                { opacity: 0, x: -250 },
                { opacity: 1, x: 0, duration: 1, delay: 0.3 }
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
            document.querySelector('.explore--section-perfrom-store').classList.add('in-view');
        }
    }, [inView]);
    
    return (
        <>
            <div className="explore--section-perfrom-store" ref={ref}>
                <div className="explore--section-perfrom-title">
                    <div className='wrapper'>
                    <div className="explore--section-perfrom-start">
                        <div className="explore-left-side" ref={brands}>
                            <img src={IMAGES.sec} />
                        </div>
                        <div className="explore-right" ref={items}>
                            <div className="explore-right-side">
                                <div className='laye-first'>
                                    <div className='laye1-left'>
                                        <img src={IMAGES.ss} /></div>
                                    <div className='laye2-right'>
                                        <h4>Assemble your new team </h4></div>
                                </div>
                                <h2>Explore Our Integration Galaxy: Elevate Your Shopify Store with Top-Tier Apps!</h2>
                                <p>List the apps and platforms that your service can seamlessly integrate with shopify. Showcase the variety and versatility of Integration possibilities.</p>
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
export default Explore;