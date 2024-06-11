import IMAGES from "../Allfiles/image";
import { IoMdCheckmark } from "react-icons/io";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function How() {

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
                { opacity: 0, y: 250},
                { opacity: 1, y: 0, duration: 1, delay: 2 }
            );
            setAutoplay(true);
        }
    }, [inView, autoplay]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.how--section-perfroms').classList.add('in-view');
        }
    }, [inView]);
    return (
        <>
            <div className="how--section-perfroms" ref={ref}>
                <div className="wrapper">
                <div className="how--section-perfroms-start">
                    <div className="income">
                        <div className="income_store" ref={brand}>
                            <img src={IMAGES.r2} />
                        </div>
                        <div className="income-sec1" ref={item}>
                        <div className="income-sec">
                            <div className='laye-first'>
                                <div className='laye1-left'>
                                    <img src={IMAGES.ss} /></div>

                                <div className='laye2-right'>
                                    <h4>Assemble your new team</h4></div>
                            </div>
                            <h2>How <span style={{ color: "#fc5569" }}>SEO can Increase </span> Your  <span style={{ color: "#68b048" }}> Shopify Store </span> Sales: </h2>
                            <div className='more_income'>
                                <div className="more_income_1">
                                    <div className="more_income_2">
                                    <IoMdCheckmark />
                                    </div>
                                    <div className="more_income_3">
                                    <p>More Organic Traffic - More Conversions - More Revenue</p>
                                    </div>
                                </div>
                                <div className="more_income_1">
                                    <div className="more_income_2">
                                    <IoMdCheckmark />
                                    </div>
                                    <div className="more_income_3">
                                    <p>Generate High Return on Investments</p>
                                    </div>
                                </div>
                                <div className="more_income_1">
                                    <div className="more_income_2">
                                    <IoMdCheckmark />
                                    </div>
                                    <div className="more_income_3">
                                    <p>Easily Outrank Your Competitors & Build a Brand</p>
                                    </div>
                                </div>
                                <div className="more_income_1">
                                    <div className="more_income_2">
                                    <IoMdCheckmark />
                                    </div>
                                    <div className="more_income_3">
                                    <p>Help You Establish online Credibility</p>
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
            </div>
            </div>
        </>
    )

}
export default How;