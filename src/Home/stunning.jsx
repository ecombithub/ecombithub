import { AiOutlineLine } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import IMAGES from "../Allfiles/image";

function Stunn() {

    const [ref, inView] = useInView({
        threshold: 0.2,
    });
    const brand = useRef(null);
    const technology = useRef(null);
    const [autoplay, setAutoplay] = useState(false);
    const [brandAnimationComplete, setBrandAnimationComplete] = useState(false);

    useEffect(() => {
        if (inView && !autoplay) {
            gsap.fromTo(
                brand.current,
                { opacity: 0, y: -250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3 }
            );
            setAutoplay(true);
        }
    }, [inView, autoplay]);

    useEffect(() => {
        if (inView && !brandAnimationComplete) {
            gsap.fromTo(
                technology.current,
                { opacity: 0, x: 160 },
                { opacity: 1, x: 0, duration: 1, delay: 0.3 }
            );
            setBrandAnimationComplete(true);
        }
    }, [inView, brandAnimationComplete]);

    const shop = useRef(null);
    const wix = useRef(null);
    const shopi = useRef(null);
    const ph = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        tl.to([shop.current, wix.current, shopi.current, ph.current], { duration: 2, y: '-=6', ease: 'power1.inOut' })
            .to([shop.current, wix.current, shopi.current, ph.current], { duration: 2, y: '+=6', ease: 'power1.inOut' });

        return () => tl.kill();
    }, []);

    const firstimage = useRef(null);
    const [first, setFirst] = useState(false);

    useEffect(() => {
        if (inView && !first) {
            gsap.fromTo(
                firstimage.current,
                { opacity: 0, x: -250 },
                { opacity: 1, x: 0, duration: 1, delay: 1 }
            );
            setFirst(true);
        }
    }, [inView, first]);

    const secondimage = useRef(null);
    const [second, setSecond] = useState(false);

    useEffect(() => {
        if (inView && !second) {
            gsap.fromTo(
                secondimage.current,
                { opacity: 0, y: -250 },
                { opacity: 1, y: 0, duration: 1, delay: 2 }
            );
            setSecond(true);
        }
    }, [inView, second]);

    const thirdimage = useRef(null);
    const [third, setThird] = useState(false);

    useEffect(() => {
        if (inView && !third) {
            gsap.fromTo(
                thirdimage.current,
                { opacity: 0, x: 250 },
                { opacity: 1, x: 0, duration: 1, delay: 3 }
            );
            setThird(true);
        }
    }, [inView, third]);

    const forthimage = useRef(null);
    const [four, setFour] = useState(false);

    useEffect(() => {
        if (inView && !four) {
            gsap.fromTo(
                forthimage.current,
                { opacity: 0, y: 250 },
                { opacity: 1, y: 0, duration: 1, delay: 4 }
            );
            setFour(true);
        }
    }, [inView, four]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.templates--section').classList.add('in-view');
        }
    }, [inView]);

    return (
        <>
            <div className='templates--section' ref={ref}>
                <div className='stunning'>
                    <div className='wrapper'>
                        <div className='container'>
                            <div className='templates-section-main'>
                                <div className='templates-section-ajex' ref={brand} >
                                    <img src={IMAGES.ring} />

                                    <div className='templates-php' ref={firstimage}>
                                        <img src={IMAGES.php} ref={shop} />
                                    </div>
                                    <div className='templates-shopify' ref={secondimage}>
                                        <img src={IMAGES.shopify} ref={wix} />
                                    </div>
                                    <div className='templates-node' ref={thirdimage}>
                                        <img src={IMAGES.node3} ref={shopi} />
                                    </div>
                                    <div className='templates-ajex' ref={forthimage}>
                                        <img src={IMAGES.ajex} ref={ph} />
                                    </div>
                                </div>

                                <div className='templates-section-sucess' ref={technology} >
                                    <div className='templates-section-selling'>
                                        <AiOutlineLine />
                                        <h4>Accomplish more than just selling.</h4>
                                    </div>
                                    <h2> <span style={{ color: "#8db848" }}>Stunning Templates</span> to Empower Your Sucess</h2>
                                    <div className='templates-section-flex'>
                                        <div className='templates-section-plus'>
                                            <IoMdCheckmark />
                                            <p>Use HubSyntax to grow your shopify plus brand via checkout upsells, one-click upsells and thank you page customization.</p>
                                        </div>
                                        <div className='templates-section-migration'>
                                            <IoMdCheckmark />
                                            <p>Enjoy complimentary migration and frictionless implementatioin width a your own plus  account manager.</p>
                                        </div>
                                        <div className='templates-section-around'>
                                            <IoMdCheckmark />
                                            <p>Easy move elements and play around with different color schemes and fonts.</p>
                                        </div>
                                    </div>
                                    <div className='templates-section-paragraph'>
                                        <h4>What is your store's monthly order volume?</h4>
                                        <div className='templates-section-order'>
                                            <div className='templates-section-month'>
                                                <h2>49</h2>
                                                <p>Order per month</p>
                                            </div>
                                            <div className='templates-section-revenue'>
                                                <h2>$49</h2>
                                                <p>+0.75% of upsells Revenue</p>
                                            </div>
                                        </div>
                                        <div className='templates-section-trial'>
                                            <div className='templates-section-free'>
                                                <IoMdCheckmark /> <p>30-Day free trial</p>
                                            </div>
                                            <div className='templates-section-user'>
                                                <p> Average UserROI :219%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button class='button'> <span className="rotate-container">
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
export default Stunn;
