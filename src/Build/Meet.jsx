import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function Meet() {

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
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );

            gsap.fromTo(
                item.current,
                { opacity: 0, y: 250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );
            setAutoplay(true);
        }
    }, [inView, autoplay]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.meet--section-team').classList.add('in-view');
        }
    }, [inView]);

    const shop = useRef(null);
    const wix = useRef(null);
    const shopi = useRef(null);
    const ph = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        tl.to([shop.current, wix.current, shopi.current, ph.current], { duration: 2, y: '-=5', ease: 'power1.inOut' })
            .to([shop.current, wix.current, shopi.current, ph.current], { duration: 2, y: '+=5', ease: 'power1.inOut' });

        return () => tl.kill();
    }, []);

    return (
        <>
            <div className="meet--section-team" ref={ref}>
                <div className="wrapper">
                    <div className="meet--section-team-start">

                        <div className="meet--section-team-flex">
                            <div className="meet--section-team-image" ref={brand}>
                                {/* <img src={bu3} alt="" /> */}
                                <img src={IMAGES.my} alt="" />
                                <div className='firt' ref={shop}>
                                    <img src={IMAGES.firt} alt="" />
                                </div>
                                <div className='ps' ref={wix}>
                                    <img src={IMAGES.ps} alt="" />
                                </div>
                                <div className='id' ref={shopi}>
                                    <img src={IMAGES.id} alt="" />
                                </div>
                                <div className='ai' ref={ph}>
                                    <img src={IMAGES.ai} alt="" />
                                </div>
                            </div>
                            <div className="meet--section-team-element" ref={item}>
                                <div className="meet--section-team-elementor">
                                    <div className='laye-first'>
                                        <div className='laye1-left'>
                                            <img src={IMAGES.ss} /></div>

                                        <div className='laye2-right'>
                                            <h4>Assemble your new team</h4></div>
                                    </div>
                                    <h2>Meet <span style={{ color: "#90bc4c" }}> / </span> Research <span style={{ color: "#90bc4c" }}> / </span> Create a plan </h2>
                                    <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager.</p>
                                    <button className='meet--btn'><span className="rotate-container">
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
export default Meet;