
import { IoMdCheckmark } from "react-icons/io";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import IMAGES from "../Allfiles/image";

function Power() {

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


    useEffect(() => {
        if (inView) {
            document.querySelector('.power--section-selling').classList.add('in-view');
        }
    }, [inView]);


    const shop = useRef(null);
    const wix = useRef(null);
    const shopi = useRef(null);
    const ph = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        tl.to([shop.current, wix.current, shopi.current], { duration: 2, y: '-=5', ease: 'power1.inOut' })
            .to([shop.current, wix.current, shopi.current], { duration: 2, y: '+=5', ease: 'power1.inOut' });

        return () => tl.kill();
    }, []);

    return (
        <>
            <div className="power--section-selling" ref={ref}>
                <div className="wrapper">
                    <div className="power--section-element">
                        <div className="power--section-element-flex">
                            <div className="power--section-element-image" ref={technologyElement}>
                                <div className="power_img1">
                                    {/* <img src={bu5} alt="" /> */}
                                    <img src={IMAGES.ph3} alt="" />
                                    <div className='html'>
                                        <img src={IMAGES.html} alt="" ref={wix} />
                                    </div>
                                    <div className='js'>
                                        <img src={IMAGES.js} alt="" ref={shopi} />
                                    </div>
                                    <div className='css'>
                                        <img src={IMAGES.css} alt="" ref={shop} />
                                    </div>
                                </div>

                            </div>
                            <div className="power--section-element-right-side" ref={elementor}>
                                <div className='laye-first'>
                                    <div className='laye1-left'>
                                        <img src={IMAGES.ss} /></div>

                                    <div className='laye2-right'>
                                        <h4>Accomplish more than just selling.</h4></div>
                                </div>
                                <h2><span style={{ color: "#95BF46" }}>Stunning Templates  </span> to Empower Your Sucess</h2>
                                <div className='play-to'>
                                    <div className='play-to1'>
                                        <IoMdCheckmark />
                                    </div>
                                    <div className='play-to2'>
                                        <p>Use Hubsyntax to grow your Shopify plus brand via checkout upsells, one-click upsells and thank you page customization.</p>
                                    </div>
                                </div>
                                <div className='play-to'>
                                    <div className='play-to1'>
                                        <IoMdCheckmark />
                                    </div>
                                    <div className='play-to2'>
                                        <p>Enjoy complimentary migratin and frictionless implementation with ayour own plus account manager.</p>
                                    </div>
                                </div>
                                <div className='play-to'>
                                    <div className='play-to1'>
                                        <IoMdCheckmark />
                                    </div>
                                    <div className='play-to2'>
                                        <p>Easy move elements and play around with different color schemes and fonts.</p>
                                    </div>
                                </div>
                                <div className='power--section-element-moon'>
                                    <h3>What is your store's monthly order volume?</h3>
                                    <div className='sche-to'>
                                        <div className='sche-1'>
                                            <h4>49</h4>
                                            <p>Orders per month</p>
                                        </div>
                                        <div className='sche-2'>
                                            <h4>$49</h4>
                                            <p>+0.75% of upsell revenue</p>

                                        </div>
                                    </div>
                                    <div className='sche-to-1'>
                                        <div className='sche-3'>
                                            <div className='sh-1'>
                                                <IoMdCheckmark />
                                            </div>
                                            <div className='sh2'>
                                                <p>30-Day Free Trial</p>
                                            </div>
                                        </div>
                                        <div className='sche-4'>
                                            <p>Average UserROI :219%</p>

                                        </div>
                                    </div>
                                </div>
                                <button className='power--section-btn'> <span className="rotate-container">
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
export default Power;