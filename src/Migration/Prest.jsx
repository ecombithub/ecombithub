import { IoMdCheckmark } from "react-icons/io";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import IMAGES from "../Allfiles/image";
function Prest() {
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
            document.querySelector('.prestashop--section-perfrom').classList.add('in-view');
        }
    }, [inView]);
    return (
        <>
            <div className='prestashop--section-perfrom' ref={ref}>
                <div className='wrapper'>
                    <div className='prestashop--section-perfrom-start'>
                        <div className='prestashop--section-perfrom-image' ref={brand}>
                            <img src={IMAGES.sk} />
                        </div>
                        <div className='prestashop--section-perfrom-element' ref={item}>
                            <div className='laye-first'>
                                <div className='laye1-left'>
                                    <img src={IMAGES.ss} /></div>

                                <div className='laye2-right'>
                                    <h4>Accomplish more than just selling.</h4></div>
                            </div>
                            <h2><span style={{ color: "#95BF46" }}>Migrate </span> to Shopify from Prestashop</h2>
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
                            <div className='mon-to'>
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
        </>
    )
}
export default Prest;