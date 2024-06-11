import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function Cro() {

    const [ref, inView] = useInView({
        threshold: 0.2,
    });

    const technologyElement = useRef(null);
    const elementor = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView && !hasAnimated) {
            gsap.fromTo(
                technologyElement.current,
                { opacity: 0, y: 250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );

            gsap.fromTo(
                elementor.current,
                { opacity: 0, y: -250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );

            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.cro--section-seo').classList.add('in-view');
        }
    }, [inView]);

    return (
        <>
            <div className="cro--section-seo" ref={ref}>
                <div className="wrapper">
                    <div className="cro">
                        <div className="cro--section-images" ref={technologyElement}>
                            <img src={IMAGES.f23} />
                        </div>
                        <div className='cro--section-elements' ref={elementor}>
                            <div className='cro-rightyt'>
                                <div className='laye-first'>
                                    <div className='laye1-left'>
                                        <img src={IMAGES.ss} /></div>

                                    <div className='laye2-right'>
                                        <h4>Assemble your new team</h4></div>
                                </div>
                                <h2>CRO/SEO friendly customization.</h2>
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
export default Cro;