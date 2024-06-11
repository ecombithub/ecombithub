import { AiOutlineLine } from "react-icons/ai";
import IMAGES from "../Allfiles/image";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function Store() {
    const [ref, inView] = useInView({
        threshold: 0.3,
    });
    const brandRefs = useRef([]);
    const [animationTriggered, setAnimationTriggered] = useState(false);

    useEffect(() => {
        if (inView && !animationTriggered) {
            gsap.fromTo(
                brandRefs.current,
                { opacity: 0, y: -250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3, stagger: 0.2 }
            );
            setAnimationTriggered(true);
        }
    }, [inView, animationTriggered]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.store--section').classList.add('in-view');
        }
    }, [inView]);


    return (
        <div className="store--section">
            <div className="wrapper">
                <div className="container">
                    <div className="store--section--main">
                        <div className="store--section--first">
                            <div className="store--section-setup">
                                <AiOutlineLine /> <h4>Accomplish more than just selling.</h4>
                                <h2>Shopify Store Setup</h2>
                                <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one-click upsells and thank you page customization.</p>
                                <button id="store--btn">
                                    <span className="rotate-container">
                                        <span className="rotate-text">D</span>
                                        <span className="rotate-text">i</span>
                                        <span className="rotate-text">s</span>
                                        <span className="rotate-text">c</span>
                                        <span className="rotate-text">o</span>
                                        <span className="rotate-text">v</span>
                                        <span className="rotate-text">e</span>
                                        <span className="rotate-text">r</span>
                                        <span className="rotate-text">&nbsp;</span>
                                        <span className="rotate-text">A</span>
                                        <span className="rotate-text">l</span>
                                        <span className="rotate-text">l</span>
                                        <span className="rotate-text">&nbsp;</span>
                                        <span className="rotate-text">S</span>
                                        <span className="rotate-text">e</span>
                                        <span className="rotate-text">r</span>
                                        <span className="rotate-text">v</span>
                                        <span className="rotate-text">i</span>
                                        <span className="rotate-text">c</span>
                                        <span className="rotate-text">e</span>
                                        <span className="rotate-text">s</span>
                                        

                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="store-bottom-section" ref={ref}>
                            <div className="store-bottom-app" ref={el => brandRefs.current[0] = el}>
                                <img src={IMAGES.aa} alt="" />
                                <h4>Shopify Store Setup</h4>
                            </div>
                            <div className="store-bottom-app" ref={el => brandRefs.current[1] = el}>
                                <img src={IMAGES.aa1} alt="" />
                                <h4>Shopify App Integration & Configuration</h4>
                            </div>
                            <div className="store-bottom-app" ref={el => brandRefs.current[2] = el}>
                                <img src={IMAGES.aa2} alt="" />
                                <h4>Shopify Store Design and Development</h4>
                            </div>
                            <div className="store-bottom-app" ref={el => brandRefs.current[3] = el}>
                                <img src={IMAGES.aa3} alt="" />
                                <h4>Payment & Shipping Zones Set-Up</h4>
                            </div>
                            <div className="store-bottom-app" ref={el => brandRefs.current[4] = el}>
                                <img src={IMAGES.aa4} alt="" />
                                <h4>Theme Development</h4>
                            </div>
                            <div className="store-bottom-app" ref={el => brandRefs.current[5] = el}>
                                <img src={IMAGES.aa5} alt="" />
                                <h4>Product & Inventory Set-Up</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Store;
