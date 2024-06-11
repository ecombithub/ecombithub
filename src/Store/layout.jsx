import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import IMAGES from '../Allfiles/image';
function Layout() {
    const [ref, inView] = useInView();
    const technologyElement = useRef(null);
    const elementor = useRef(null);
    const metImg1 = useRef(null);
    const metImg2 = useRef(null);
    const metImg3 = useRef(null);
    const metImg4 = useRef(null);
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
                { opacity: 0, x: 250 },
                { opacity: 1, x: 0, duration: 1, delay: 0.3 }
            );

            gsap.fromTo(
                [metImg1.current, metImg2.current, metImg3.current, metImg4.current],
                { opacity: 0 },
                { opacity: 1, duration: 1, delay: 1.2, stagger: 0.2 }
            );

            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    return (
        <div className="theme-and--section" ref={ref}>
            <div className="theme--section-layout">
                <div className='theme--section-layout-count'>
                    <div className="wrapper">
                        <div className='container'>
                            <div className="theme--section-layout-com">
                                <div className="theme--section-layout-meet" ref={technologyElement}>
                                    <div className='laye-first'>
                                        <div className='laye1-left'>
                                            <img src={IMAGES.s1011} alt="S10" />
                                        </div>
                                        <div className='laye2-right-1'>
                                            <h5>Meet Lemon</h5>
                                        </div>
                                    </div>
                                    <h1>
                                        <span style={{ color: "#5a853d" }}>Theme </span> and
                                        <span style={{ color: "#fc5569" }}> Layout</span> Customization
                                    </h1>
                                </div>
                                <div className='theme--section-layout-minimal' ref={metImg1} style={{ opacity: 0 }}>
                                    <img src={IMAGES.grop33} alt="Minimal" />
                                </div>
                                <div className='theme--section-layout-shop' ref={metImg2} style={{ opacity: 0 }}>
                                    <img src={IMAGES.grp33} alt="Shop" />
                                </div>
                                <div className='theme--section-layout-Backlink' ref={metImg3} style={{ opacity: 0 }}>
                                    <img src={IMAGES.gr33} alt="Backlink" />
                                </div>
                                <div className='theme--section-layout-link' ref={metImg4} style={{ opacity: 0 }}>
                                    <img src={IMAGES.gr3} alt="Link" />
                                </div>
                                <div className='theme--section-layout-sections' ref={elementor}>
                                    <p>You've come to the right place. Backlink the place for next-level SEO training and link building strategies.</p>
                                    <div className='theme--section-btn'>
                                        <button className='theme--section-btn-view'><span className="rotate-container">
                                            <span className="rotate-text">V</span>
                                            <span className="rotate-text">i</span>
                                            <span className="rotate-text">e</span>
                                            <span className="rotate-text">w</span>
                                            <span className="rotate-text">&nbsp;</span>
                                            <span className="rotate-text">O</span>
                                            <span className="rotate-text">u</span>
                                            <span className="rotate-text">r</span>
                                            <span className="rotate-text">&nbsp;</span>
                                            <span className="rotate-text">S</span>
                                            <span className="rotate-text">e</span>
                                            <span className="rotate-text">r</span>
                                            <span className="rotate-text">v</span>
                                            <span className="rotate-text">i</span>
                                            <span className="rotate-text">c</span>
                                            <span className="rotate-text">e</span>
                                            <span className="rotate-text">s</span>
                                        </span></button>
                                        <button className='theme--section-btn-side'><span className="rotate-container">
                                            <span className="rotate-text">D</span>
                                            <span className="rotate-text">i</span>
                                            <span className="rotate-text">s</span>
                                            <span className="rotate-text">c</span>
                                            <span className="rotate-text">o</span>
                                            <span className="rotate-text">v</span>
                                            <span className="rotate-text">e</span>
                                            <span className="rotate-text">r</span>
                                            <span className="rotate-text">&nbsp;</span>
                                            <span className="rotate-text">O</span>
                                            <span className="rotate-text">u</span>
                                            <span className="rotate-text">r</span>
                                            <span className="rotate-text">&nbsp;</span>
                                            <span className="rotate-text">W</span>
                                            <span className="rotate-text">o</span>
                                            <span className="rotate-text">r</span>
                                            <span className="rotate-text">k</span>
                                        </span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
