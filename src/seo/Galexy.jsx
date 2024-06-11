import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function Galexy() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleVisibility = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const [ref, inView] = useInView();

    const brand = useRef(null);
    const item = useRef(null);
    const brands = useRef(null);
    const items = useRef(null);
    const metImg = useRef(null);
    const circle = useRef(null);
    const old = useRef(null);
    const manu = useRef(null);
    const allmanu = useRef(null);
    const [autoplay, setAutoplay] = useState(false);

    useEffect(() => {
        if (inView && !autoplay) {
            gsap.fromTo(
                brand.current,
                { opacity: 0, x: 250 },
                { opacity: 1, x: 0, duration: 1, delay: 1 }
            );

            gsap.fromTo(
                item.current,
                { opacity: 0, y: -250},
                { opacity: 1, y: 0, duration: 1, delay: 1 }
            );
            gsap.fromTo(
                brands.current,
                { opacity: 0, x: -250 },
                { opacity: 1, x: 0, duration: 1, delay: 2 }
            );

            gsap.fromTo(
                items.current,
                { opacity: 0, y: 250},
                { opacity: 1, y: 0, duration: 1, delay: 2 }
            );
            gsap.fromTo(
                metImg.current,
                { opacity: 0 },
                { opacity: 1, duration: 1, delay: 0.5 }
            );
            gsap.fromTo(
                circle.current,
                { opacity: 0, x: 250 },
                { opacity: 1, x: 0, duration: 1, delay: 3 }
            );

            gsap.fromTo(
                manu.current,
                { opacity: 0, y: -250},
                { opacity: 1, y: 0, duration: 1, delay: 3 }
            );
            gsap.fromTo(
                allmanu.current,
                { opacity: 0, x: -250 },
                { opacity: 1, x: 0, duration: 1, delay: 4 }
            );

            gsap.fromTo(
                old.current,
                { opacity: 0, y: 250},
                { opacity: 1, y: 0, duration: 1, delay: 4 }
            );
            setAutoplay(true);
        }
    }, [inView, autoplay]);

    useEffect(() => {
      
        toggleVisibility(0);
    }, []);

    return (
        <>
            <div className="galexy--section-perfroms" ref={ref}>
                <div className="wrapper">
                    <div className="galexy--section-perfroms-add">
                        <div className="galexy--section-perfroms-top"  ref={metImg} style={{ opacity: 0 }}>
                            <h2>Explore Our Integration Galaxy: Elevate Your Shopify Store with Top-Tier Apps!</h2>
                        </div>

                        <div className="off_page">
                            <div className="off_image" ref={brand}>
                                <img src={IMAGES.r3} alt="" />
                            </div>
                            <div className="off_page_seo" ref={item}>
                                <div className="seo_page">
                                    <div className="seo_page2">
                                        <h2>Off Page Seo</h2>
                                        <p>Lorem ispum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididu nt aliqua.</p>
                                    </div>
                                     <div className='tail-for-bg-bottam'>
                                    <h3 className={activeIndex === 0 ? 'active' : ''} onClick={() => toggleVisibility(0)}>Tailored Solutions for Your Business:</h3>
                                      <div className={`tail-for ${activeIndex === 0 ? 'visible' : 'hidden'}`}>
                                        <div className="content">
                                            <div className="tail-seo1">
                                                <img src={IMAGES.r4} alt="" />
                                            </div>
                                            <div className="tail-seo2">
                                                <p>Craft custom apps that precisely align with the unique needs and aspirations of your Shopify store.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='tail-for-bg-bottam'>
                                    <h3 className={activeIndex === 1 ? 'active' : ''} onClick={() => toggleVisibility(1)}>Personalized Consultation Process:</h3>
                                    <div className={`tail-for ${activeIndex === 1 ? 'visible' : 'hidden'}`}>
                                        <div className="content">
                                            <div className="tail-seo1">
                                                <img src={IMAGES.r5} alt="" />
                                            </div>
                                            <div className="tail-seo2">
                                                <p>Craft custom apps that precisely align with the unique needs and aspirations of your Shopify store.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='tail-for-bg-bottam'>
                                    <h3 className={activeIndex === 2 ? 'active' : ''} onClick={() => toggleVisibility(2)}>Enhanced Functionality and Features:</h3>
                                    <div className={`tail-for ${activeIndex === 2 ? 'visible' : 'hidden'}`}>
                                        <div className="content">
                                            <div className="tail-seo1">
                                                <img src={IMAGES.r6} alt="" />
                                            </div>
                                            <div className="tail-seo2">
                                                <p>Craft custom apps that precisely align with the unique needs and aspirations of your Shopify store.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lor_sec">
                            <div className="off_page_seo" ref={brands}>
                                <div className="seo_page">
                                    <div className="seo_page2">
                                        <h2>On Page Seo</h2>
                                        <p>Lorem ispum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididu nt aliqua.</p>
                                    </div>
                                    <div className='tail-for-bg-bottam'>
                                    <h3 className={activeIndex === 3 ? 'active' : ''} onClick={() => toggleVisibility(3)}>Tailored Solutions for Your Business:</h3>
                                    <div className={`tail-for ${activeIndex === 3 ? 'visible' : 'hidden'}`}>
                                        <div className="content">
                                            <div className="tail-seo1">
                                                <img src={IMAGES.r4} alt="" />
                                            </div>
                                            <div className="tail-seo2">
                                                <p>Craft custom apps that precisely align with the unique needs and aspirations of your Shopify store.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div className='tail-for-bg-bottam'>
                                    <h3 className={activeIndex === 4 ? 'active' : ''} onClick={() => toggleVisibility(4)}>Personalized Consultation Process:</h3>
                                    <div className={`tail-for ${activeIndex === 4 ? 'visible' : 'hidden'}`}>
                                        <div className="content">
                                            <div className="tail-seo1">
                                                <img src={IMAGES.r5} alt="" />
                                            </div>
                                            <div className="tail-seo2">
                                                <p>Craft custom apps that precisely align with the unique needs and aspirations of your Shopify store.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
 
                                    <div className='tail-for-bg-bottam'>
                                    <h3 className={activeIndex === 5 ? 'active' : ''} onClick={() => toggleVisibility(5)}>Enhanced Functionality and Features:</h3>
                                    <div className={`tail-for ${activeIndex === 5 ? 'visible' : 'hidden'}`}>
                                        <div className="content">
                                            <div className="tail-seo1">
                                                <img src={IMAGES.r6} alt="" />
                                            </div>
                                            <div className="tail-seo2">
                                                <p>Craft custom apps that precisely align with the unique needs and aspirations of your Shopify store.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="loc_secimg" ref={items}>
                                <img src={IMAGES.r7} alt="" />
                            </div>
                        </div>
                        <div className="off_page">
                            <div className="off_image" ref={circle}>
                                <img src={IMAGES.r8} alt="" />
                            </div>
                            <div className="off_page_seo" ref={manu}>
                                <div className="seo_page">
                                    <div className="seo_page2">
                                        <h2>Technical SEO Audits:.</h2>
                                        <p>Lorem ispum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididu nt aliqua.</p>
                                    </div>
                                    <div className='tail-for-bg-bottam'>
                                    <h3 className={activeIndex === 6 ? 'active' : ''} onClick={() => toggleVisibility(6)}>Tailored Solutions for Your Business:</h3>
                                    <div className={`tail-for ${activeIndex === 6 ? 'visible' : 'hidden'}`}>
                                        <div className="content">
                                            <div className="tail-seo1">
                                                <img src={IMAGES.r4} alt="" />
                                            </div>
                                            <div className="tail-seo2">
                                                <p>Craft custom apps that precisely align with the unique needs and aspirations of your Shopify store.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='tail-for-bg-bottam'>
                                    <h3 className={activeIndex === 7 ? 'active' : ''} onClick={() => toggleVisibility(7)}>Personalized Consultation Process:</h3>
                                    <div className={`tail-for ${activeIndex === 7 ? 'visible' : 'hidden'}`}>
                                        <div className="content">
                                            <div className="tail-seo1">
                                                <img src={IMAGES.r5} alt="" />
                                            </div>
                                            <div className="tail-seo2">
                                                <p>Craft custom apps that precisely align with the unique needs and aspirations of your Shopify store.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div className='tail-for-bg-bottam'>
                                    <h3 className={activeIndex === 8 ? 'active' : ''} onClick={() => toggleVisibility(8)}>Enhanced Functionality and Features:</h3>
                                    <div className={`tail-for ${activeIndex === 8 ? 'visible' : 'hidden'}`}>
                                        <div className="content">
                                            <div className="tail-seo1">
                                                <img src={IMAGES.r6} alt="" />
                                            </div>
                                            <div className="tail-seo2">
                                                <p>Craft custom apps that precisely align with the unique needs and aspirations of your Shopify store.</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="last_page">
                            <div className="lor_sec">
                                <div className="off_page_seo" ref={allmanu}>
                                    <div className="seo_page">
                                        <div className="seo_page2">
                                            <h2>.Keyword Research:</h2>
                                            <p>Lorem ispum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididu nt aliqua.</p>
                                        </div>
                                        <div className='tail-for-bg-bottam'>
                                        <h3 className={activeIndex === 9 ? 'active' : ''} onClick={() => toggleVisibility(9)}>Tailored Solutions for Your Business:</h3>
                                        <div className={`tail-for ${activeIndex === 9 ? 'visible' : 'hidden'}`}>
                                            <div className="content">
                                                <div className="tail-seo1">
                                                    <img src={IMAGES.r4} alt="" />
                                                </div>
                                                <div className="tail-seo2">
                                                    <p>Craft custom apps that precisely align with the unique needs and aspirations of your Shopify store.</p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>

                                        <div className='tail-for-bg-bottam'>
                                        <h3 className={activeIndex === 10 ? 'active' : ''} onClick={() => toggleVisibility(10)}>Personalized Consultation Process:</h3>
                                        <div className={`tail-for ${activeIndex === 10 ? 'visible' : 'hidden'}`}>
                                            <div className="content">
                                                <div className="tail-seo1">
                                                    <img src={IMAGES.r5} alt="" />
                                                </div>
                                                <div className="tail-seo2">
                                                    <p>Craft custom apps that precisely align with the unique needs and aspirations of your Shopify store.</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        
                                        <div className='tail-for-bg-bottam'>
                                        <h3 className={activeIndex === 11 ? 'active' : ''} onClick={() => toggleVisibility(11)}>Enhanced Functionality and Features:</h3>
                                        <div className={`tail-for ${activeIndex === 11 ? 'visible' : 'hidden'}`}>
                                            <div className="content">
                                                <div className="tail-seo1">
                                                    <img src={IMAGES.r6} alt="" />
                                                </div>
                                                <div className="tail-seo2">
                                                    <p>Craft custom apps that precisely align with the unique needs and aspirations of your Shopify store.</p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="loc_secimg" ref={old}>
                                    <img src={IMAGES.r9} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div> </div>
        </>
    )

}
export default Galexy;

