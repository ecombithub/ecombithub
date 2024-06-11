import { IoMdCheckmark } from "react-icons/io";
import IMAGES from "../Allfiles/image";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function Effect() {

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
                { opacity: 0, y: -250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );

            setAutoplays(true);
        }
    }, [inView, autoplays]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.effect--section-perfroms').classList.add('in-view');
        }
    }, [inView]);
    return (
        <>
            <div className="effect--section-perfroms" ref={ref}>
                <div className="wrapper">
                    <div className="effect--section-perfroms-bar">
                        <div className="effect--section-perfroms-left" ref={brands}>
                            <div className='laye-first'>
                                <div className='laye1-left'>
                                    <img src={IMAGES.ss} /></div>

                                <div className='laye2-right'>
                                    <h4>Accomplish more than just selling.</h4></div>
                            </div>
                            <h2><span style={{ color: "#95BF46" }}>What Effect </span>Site speed ?</h2>
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
                            <div className='moveon'>
                                <h3>what is your store's monthly order volume?</h3>
                                <div className='move-order'>
                                    <div className='move-order1'>
                                        <h3>49</h3>
                                        <p>Order per month</p>
                                    </div>
                                    <div className='move-order2'>
                                        <h3>$49</h3>
                                        <p>+0.75% of upsells revenue</p>
                                    </div>
                                </div>
                                <div className='move-day'>
                                    <div className='move-day1'>
                                        <div className='mover-1'>
                                            <IoMdCheckmark />
                                        </div>
                                        <div className='mover-2'>
                                            30- Day Free Trial
                                        </div>
                                    </div>
                                    <div className='changeer'>
                                        <p>Average UserROI :219%</p>
                                    </div>
                                </div>

                            </div>
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
                        <div className="effect--section-perfroms-image" ref={items}>
                            <img src={IMAGES.jh} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Effect;