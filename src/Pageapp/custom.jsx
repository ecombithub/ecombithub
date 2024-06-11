import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function Custum() {

    const [ref, inView] = useInView({
        threshold: 0.2,
    });

    const brands = useRef(null);
    const items = useRef(null);
    const checkout = useRef(null);
    const perfrom = useRef(null);
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

            gsap.fromTo(
                checkout.current,
                { opacity: 0, y: -250 },
                { opacity: 1, y: 0, duration: 1, delay: 1 }
            );

            gsap.fromTo(
                perfrom.current,
                { opacity: 0, y: 250 },
                { opacity: 1, y: 0, duration: 1, delay: 1 }
            );


            setAutoplays(true);
        }
    }, [inView, autoplays]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.custom--section-perfrom-dolor').classList.add('in-view');
        }
    }, [inView]);
    return (
        <>
            <div className="custom--section-perfrom-dolor" ref={ref}>
                <div className="wrapper">
                    <div className="custom--section-perfrom-bg">
                        <div className="custom--section-perfrom-cust">
                            <div className='laye-first'>
                                <div className='laye1-left'>
                                    <img src={IMAGES.ss} /></div>

                                <div className='laye2-right'>
                                    <h4>Assemble your new team</h4></div>
                            </div>
                            <h2>Explore Our Integration Galaxy: Elevate Your Shopify Store with Top-Tier Apps!</h2>
                        </div>
                        <div className='custom--section-perfrom-custom-high'>
                            <div className='custom--section-perfrom-custom-image' ref={brands}>
                                <img src={IMAGES.four} />
                            </div>
                            <div className='custom--section-perfrom-custom-elements' ref={items}>
                                <div className='custum-rightside'>
                                    <h3>Custom App Development</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididu nt aliqua.</p>
                                    <div className='tail-start'>
                                        <div className='tail-first'>
                                            <img src={IMAGES.ch} />
                                        </div>
                                        <div className='tail-second'>
                                            <h3>Tailored Solutions for Your Business:</h3>
                                            <p>Craft custom app that precisely align with the unique needs aspirations of your Shopify Store.</p>
                                        </div>
                                    </div>
                                    <div className='tail-start1'>
                                        <div className='tail-first'>
                                            <img src={IMAGES.ch1} />
                                        </div>
                                        <div className='tail-second'>
                                            <h3>Personalized Consultation Process:</h3>

                                        </div>
                                    </div>
                                    <div className='tail-start1'>
                                        <div className='tail-first'>
                                            <img src={IMAGES.ch2} />
                                        </div>
                                        <div className='tail-second'>
                                            <h3>Enhanced Functionality and Features:</h3>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='scale'>
                            <div className='scale-first'  ref={checkout}>
                                <div className='scale-first-bg'>
                                <h3>Custom App Development</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididu nt aliqua.</p>
                                    <div className='tail-startt'>
                                        <div className='tail-firstt'>
                                            <img src={IMAGES.ch3} />
                                        </div>
                                        <div className='tail-secondd'>
                                            <h3>Scalability and Future-Proofing:</h3>
                                            <p>Craft custom app that precisely align with the unique needs aspirations of your Shopify Store.</p>
                                        </div>
                                    </div>
                                    <div className='tail-startt1'>
                                        <div className='tail-firstt'>
                                            <img src={IMAGES.ch4} />
                                        </div>
                                        <div className='tail-secondd'>
                                            <h3>Dedicated Support and Maintenance:</h3>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scale-second' ref={perfrom}>
                            <img src={IMAGES.FIVE} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Custum;