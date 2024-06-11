import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import IMAGES from '../Allfiles/image';

function Create() {
    const [ref, inView] = useInView();
    const technologyElemented = useRef(null);
    const elementored = useRef(null);

    const [hasAnimateded, setHasAnimateded] = useState(false);

    useEffect(() => {
        if (inView && !hasAnimateded) {
            gsap.fromTo(
                technologyElemented.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );

            gsap.fromTo(
                elementored.current,
                { opacity: 0, x: -200 },
                { opacity: 1, x: 0, duration: 1, delay: 0.3 }
            );

            setHasAnimateded(true);
        }
    }, [inView, hasAnimateded]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.research--section-brand').classList.add('in-view');
        }
    }, [inView]);

    const shop = useRef(null);
    const wix = useRef(null);
    const shopi = useRef(null);
    const ph = useRef(null);
    const go = useRef(null);
    const bls = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        tl.to([shop.current, wix.current, shopi.current, ph.current, go.current, bls.current], { duration: 2, y: '-=5', ease: 'power1.inOut' })
            .to([shop.current, wix.current, shopi.current, ph.current, go.current, bls.current], { duration: 2, y: '+=5', ease: 'power1.inOut' });

        return () => tl.kill();
    }, []);

    return (
        <>
            <div className="research--section-brand" ref={ref}>
                <div className="wrapper">
                    <div className="research--section-checkout">
                        <div className="research--section-flex" ref={technologyElemented}>
                            <div className="create_leftside">
                                <div className='laye-first'>
                                    <div className='laye1-left'>
                                        <img src={IMAGES.ss} /></div>
                                    <div className='laye2-right'>
                                        <h4>Assemble your new team</h4></div>
                                </div>
                                <h2>Meet <span style={{ color: "#90bc4c" }}> / </span> Research <span style={{ color: "#90bc4c" }}> / </span> Create a plan </h2>
                                <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells  and thank you page customization. Enjoy complimentary migration and frictionless implementatioin with a your own plus account manager.</p>
                                <button className='research--section-btn'> <span className="rotate-container">
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
                        <div className="research--section-second" ref={elementored}>
                            {/* <img src={bu6} /> */}
                            <img src={IMAGES.pay} />
                            <div className='yellow'>
                                <img src={IMAGES.yellow} alt="" ref={shop}/>
                            </div>
                            <div className='stripe'>
                                <img src={IMAGES.stripe} alt="" ref={shopi} />
                            </div>
                            <div className='goggle'>
                                <img src={IMAGES.goggle} alt="" ref={wix} />
                            </div>
                            <div className='black'>
                                <img src={IMAGES.black} alt=""ref={ph} />
                            </div>
                            <div className='visa'>
                                <img src={IMAGES.visa} alt="" ref={bls}/>
                            </div>
                            <div className='pa'>
                                <img src={IMAGES.pa} alt="" ref={go} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Create;