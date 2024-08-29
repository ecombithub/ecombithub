import React, { useState, useEffect, useRef } from 'react';
import IMAGES from '../Allfiles/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { Link } from "react-router-dom";
// import desgin1 from '../images/Design1.png';
// import desgin2 from '../images/Design2.png';
// import desgin3 from '../images/Design3.png';
// import desgin4 from '../images/Design4.png';
// import desgin5 from '../images/Design5.png';
// import desgin6 from '../images/Design6.png';
// import here1 from '../images/here1.png';
// import here2 from '../images/here2.png';
// import here3 from '../images/here3.png';
// import here4 from '../images/here4.png';
// import here5 from '../images/here5.png';
// import here6 from '../images/here6.png';

 import mode100 from '../images/mode100.webp';
 import mode99 from '../images/mode99.webp';
 import mode98 from '../images/mode98.webp';
 import mode97 from '../images/mode97.webp';
 import mode96 from '../images/mode96.webp';
 import mode95 from '../images/mode95.webp';

const slides = [
    {
        title: 'Design is',
        subtitle: ' Solution',
        description: 'Transform your Shopify store with unique, visually stunning elements that reflect your brand identity. Provide a seamless and distinctive shopping experience for your customers.',
        imgSrc: mode100,
        actions: {
            title: 'What are you waiting for?',
            linkText: 'Explore Features'
        },
        infoItems: [
            { title: 'Cart Page ', detail: 'A webpage where customers can review the items they have selected for purchase before proceeding to checkout. This page typically provides a summary of the products added to the shopping cart. ' },
            { title: 'Checkout Page', detail: 'A page on an Ecommerce store where customers finalize their purchases by providing payment information, shipping details, and reviewing their order before completing the transaction.' },
            { title: 'Home Page', detail: 'The main page that visitors see when they first access the website. It provides a clear overview, guiding visitors to other sections of the site and offering essential information about the site purpose, features, or offerings. ' },
            { title: 'Collection Page', detail: 'Collection page leads the customer to the final decision. It displays a group of items, products, or content in an organized manner. ' },
            { title: 'Custom Section', detail: 'A personalized area that is specifically designed to meet the specific business goals, enhance user experience, or showcase unique content. ' },
        ]
    },
    {
        title: 'Custom Made ',
        subtitle: 'Service ',
        description: 'Provide custom services to meet the unique needs and requirements of Shopify stores, deliver personalized designs, custom functionalities, and specialized integrations.',
        imgSrc: mode99,
        actions: {
            title: 'Will you miss this chance?',
            linkText: 'Get Started'
        },
        infoItems: [
            { title: 'Cart Page ', detail: 'A webpage where customers can review the items they have selected for purchase before proceeding to checkout. This page typically provides a summary of the products added to the shopping cart. ' },
            { title: 'Checkout Page', detail: 'A page on an Ecommerce store where customers finalize their purchases by providing payment information, shipping details, and reviewing their order before completing the transaction.' },
            { title: 'Home Page', detail: 'The main page that visitors see when they first access the website. It provides a clear overview, guiding visitors to other sections of the site and offering essential information about the site purpose, features, or offerings. ' },
            { title: 'Collection Page', detail: 'Collection page leads the customer to the final decision. It displays a group of items, products, or content in an organized manner. ' },
            { title: 'Custom Section', detail: 'A personalized area that is specifically designed to meet the specific business goals, enhance user experience, or showcase unique content. ' },
        ]
    },
    {
        title: 'Design is',
        subtitle: 'Solution ',
        description: 'Transform your Shopify store with unique, visually stunning elements that reflect your brand identity. Provide a seamless and distinctive shopping experience for your customers.',
        imgSrc: mode98,
        actions: {
            title: 'How can we help you?',
            linkText: 'Leave a Message'
        },
        infoItems: [
            { title: 'Cart Page ', detail: 'A webpage where customers can review the items they have selected for purchase before proceeding to checkout. This page typically provides a summary of the products added to the shopping cart. ' },
            { title: 'Checkout Page', detail: 'A page on an Ecommerce store where customers finalize their purchases by providing payment information, shipping details, and reviewing their order before completing the transaction.' },
            { title: 'Home Page', detail: 'The main page that visitors see when they first access the website. It provides a clear overview, guiding visitors to other sections of the site and offering essential information about the site purpose, features, or offerings. ' },
            { title: 'Collection Page', detail: 'Collection page leads the customer to the final decision. It displays a group of items, products, or content in an organized manner. ' },
            { title: 'Custom Section', detail: 'A personalized area that is specifically designed to meet the specific business goals, enhance user experience, or showcase unique content. ' },
        ]
    },
    {
        title: 'Explore Our',
        subtitle: ' Portfolio',
        description: 'Discover how EcombitHub enhanced Shopify experiences across various projects to achieve their goals. A comprehensive view of our capabilities and the positive impact our custom-made services have had on other Shopify store owners.',
        imgSrc: mode97,
        actions: {
            title: 'How can we help you?',
            linkText: 'Leave a Message'
        },
        infoItems: [
            { title: 'Cart Page ', detail: 'A webpage where customers can review the items they have selected for purchase before proceeding to checkout. This page typically provides a summary of the products added to the shopping cart. ' },
            { title: 'Checkout Page', detail: 'A page on an Ecommerce store where customers finalize their purchases by providing payment information, shipping details, and reviewing their order before completing the transaction.' },
            { title: 'Home Page', detail: 'The main page that visitors see when they first access the website. It provides a clear overview, guiding visitors to other sections of the site and offering essential information about the site purpose, features, or offerings. ' },
            { title: 'Collection Page', detail: 'Collection page leads the customer to the final decision. It displays a group of items, products, or content in an organized manner. ' },
            { title: 'Custom Section', detail: 'A personalized area that is specifically designed to meet the specific business goals, enhance user experience, or showcase unique content. ' },
        ]
    },

    {
        title: 'Design is',
        subtitle: ' Solution',
        description: 'Transform your Shopify store with unique, visually stunning elements that reflect your brand identity. Provide a seamless and distinctive shopping experience for your customers.',
        imgSrc: mode96,
        actions: {
            title: 'How can we help you?',
            linkText: 'Leave a Message'
        },
        infoItems: [
            { title: 'Cart Page ', detail: 'A webpage where customers can review the items they have selected for purchase before proceeding to checkout. This page typically provides a summary of the products added to the shopping cart. ' },
            { title: 'Checkout Page', detail: 'A page on an Ecommerce store where customers finalize their purchases by providing payment information, shipping details, and reviewing their order before completing the transaction.' },
            { title: 'Home Page', detail: 'The main page that visitors see when they first access the website. It provides a clear overview, guiding visitors to other sections of the site and offering essential information about the site purpose, features, or offerings. ' },
            { title: 'Collection Page', detail: 'Collection page leads the customer to the final decision. It displays a group of items, products, or content in an organized manner. ' },
            { title: 'Custom Section', detail: 'A personalized area that is specifically designed to meet the specific business goals, enhance user experience, or showcase unique content. ' },
        ]
    },
    {
        title: 'Custom Made',
        subtitle: ' Service',
        description: 'Provide custom services to meet the unique needs and requirements of Shopify stores, deliver personalized designs, custom functionalities, and specialized integrations.',
        imgSrc: mode95,
        actions: {
            title: 'How can we help you?',
            linkText: 'Leave a Message'
        },
        infoItems: [
            { title: 'Cart Page ', detail: 'A webpage where customers can review the items they have selected for purchase before proceeding to checkout. This page typically provides a summary of the products added to the shopping cart. ' },
            { title: 'Checkout Page', detail: 'A page on an Ecommerce store where customers finalize their purchases by providing payment information, shipping details, and reviewing their order before completing the transaction.' },
            { title: 'Home Page', detail: 'The main page that visitors see when they first access the website. It provides a clear overview, guiding visitors to other sections of the site and offering essential information about the site purpose, features, or offerings. ' },
            { title: 'Collection Page', detail: 'Collection page leads the customer to the final decision. It displays a group of items, products, or content in an organized manner. ' },
            { title: 'Custom Section', detail: 'A personalized area that is specifically designed to meet the specific business goals, enhance user experience, or showcase unique content. ' },
        ]
    }
];

function Desgineverything() {
    const moreInfoRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationStage, setAnimationStage] = useState('enter');
    const imgRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()]);
    const [animating, setAnimating] = useState(false);
    const h2Ref = useRef(null);
    const descRef = useRef(null);
    const subtitle = useRef(null);
    const actionRef = useRef(null);
    const infoItems = useRef(null);
    const intervalRef = useRef(null);

    const [showMore, setShowMore] = useState(() => {
        const storedShowMore = localStorage.getItem('showMore');
        return storedShowMore ? JSON.parse(storedShowMore) : false;
    });
    const initialInfoItemCount = 2;

    useEffect(() => {
        localStorage.setItem('showMore', JSON.stringify(showMore));
    }, [showMore]);

    const handlePrev = () => {
        if (animating) return;
        setAnimating(true);
        const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;

        gsap.fromTo(imgRefs.current[0].current, { y: '0%' }, { y: '100%', duration: 1 });
        gsap.fromTo(imgRefs.current[1].current, { y: '-100%' }, { y: '0%', duration: 1 });
        gsap.fromTo(imgRefs.current[2].current, { y: '-100%' }, { y: '0%', duration: 1 });
        gsap.fromTo(imgRefs.current[3].current, { y: '-100%' }, { y: '0%', duration: 1 });
        gsap.fromTo(imgRefs.current[4].current, { y: '-100%' }, { y: '0%', duration: 1 });
        gsap.fromTo(imgRefs.current[5].current, { y: '-100%' }, {
            y: '0%', duration: 1, onComplete: () => {
                setCurrentIndex(newIndex);
                setAnimating(false);
            }
        });
        moveAndUpdateContent(true, newIndex);
    };

    const handleNext = () => {
        if (animating) return;
        setAnimating(true);
        const newIndex = (currentIndex + 1) % slides.length;

        gsap.to(imgRefs.current[0].current, { y: '-100%', duration: 1, ease: 'power2.inOut' });
        gsap.fromTo(imgRefs.current[1].current, { y: '100%' }, { y: '0%', duration: 1, ease: 'power2.inOut' });
        gsap.fromTo(imgRefs.current[2].current, { y: '100%' }, { y: '100%', duration: 1, ease: 'power2.inOut' });
        gsap.fromTo(imgRefs.current[3].current, { y: '100%' }, { y: '100%', duration: 1, ease: 'power2.inOut' });
        gsap.fromTo(imgRefs.current[4].current, { y: '100%' }, { y: '100%', duration: 1, ease: 'power2.inOut' });
        gsap.fromTo(imgRefs.current[5].current, { y: '100%' }, {
            y: '100%', duration: 1, ease: 'power2.inOut', onComplete: () => {
                setCurrentIndex(newIndex);
                setAnimating(false);

            }
        });
        moveAndUpdateContent(false, newIndex);
    };

    useEffect(() => {
        gsap.set(imgRefs.current[0].current, { y: 0 });
        gsap.set(imgRefs.current[1].current, { y: '100%' });
        gsap.set(imgRefs.current[2].current, { y: '-100%' });
        gsap.set(imgRefs.current[3].current, { y: '-100%' });
        gsap.set(imgRefs.current[4].current, { y: '-100%' });
        gsap.set(imgRefs.current[5].current, { y: '-100%' });
    }, [currentIndex]);


    const moveAndUpdateContent = (isPrev, newIndex) => {
        const commonAnimation = { y: isPrev ? -50 : 50, opacity: 0, duration: 1 };

        gsap.to(h2Ref.current, commonAnimation);
        gsap.to(descRef.current, commonAnimation);
        gsap.to(subtitle.current, commonAnimation);
        gsap.to(actionRef.current, commonAnimation);
        gsap.to(infoItems.current, {
            ...commonAnimation,
            onComplete: () => {
                gsap.set(h2Ref.current, { y: isPrev ? 50 : -50, opacity: 0 });
                gsap.set(descRef.current, { y: isPrev ? 50 : -50, opacity: 0 });
                gsap.set(subtitle.current, { y: isPrev ? 50 : -50, opacity: 0 });
                gsap.set(actionRef.current, { y: isPrev ? 50 : -50, opacity: 0 });
                gsap.set(infoItems.current, { y: isPrev ? 50 : -50, opacity: 0 });

                gsap.to(h2Ref.current, { y: 0, opacity: 1, duration: 1 });
                gsap.to(descRef.current, { y: 0, opacity: 1, duration: 1 });
                gsap.to(subtitle.current, { y: 0, opacity: 1, duration: 1 });
                gsap.to(actionRef.current, { y: 0, opacity: 1, duration: 1 });
                gsap.to(infoItems.current, { y: 0, opacity: 1, duration: 1 });
            }
        });
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            handlePrev();
        }, 5000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [currentIndex]);

    const toggleMoreInfo = () => {
        localStorage.setItem('showMore', JSON.stringify(!showMore));
        setShowMore(!showMore);
    };

    useEffect(() => {
        const handleResize = () => {
            let height;
            if (window.innerWidth >= 1280) {
                height = showMore ? "91%" : "270px";
            } else if (window.innerWidth > 1024) {
                height = showMore ? "100%" : "200px";
            } else {
                height = showMore ? "100%" : "160px";
            }
            gsap.to(".slide-more-bg", { height, duration: 0.5 });
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [showMore]);


    const currentSlide = slides[currentIndex];

    return (

        <div className="elementor-containers elementor-column-gap-no">
            <div className='elementor-wrapper'>
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9eeb502">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-9d50233 elementor-widget elementor-widget-shock-dynamic-slider" data-id="9d50233" data-element_type="widget" data-widget_type="shock-dynamic-slider.default">
                            <div className="elementor-widget-container">
                                <section className="shock-section dynamic-slider" data-autoplay="3600000">
                                    <div id="slide-index" className="slide-index slides-3">
                                        <span className="slide-index-current">
                                            <span className="slide-index-inner" style={{ color: "#fd5392" }}>{`0${currentIndex + 1}`}</span>
                                        </span>
                                        <span className="slide-index-total">{`0${slides.length}`}</span>
                                    </div>
                                    <nav className="slide-navigation">
                                        <div className="slide-navigation-item-prev" onClick={handlePrev}>
                                            <span className="arrow-button prev">
                                                <span className="arrow">
                                                    <span className="item"></span>
                                                    <span className="item"></span>
                                                </span>
                                                <span className="line"></span>
                                                <span className="text"><img src={IMAGES.Layer2} alt="right arrow" /></span>
                                            </span>
                                        </div>
                                        <div className="slide-navigation-item-next" onClick={handleNext}>
                                            <span className="arrow-button next">
                                                <span className="arrow">
                                                    <span className="item"></span>
                                                    <span className="item"></span>
                                                </span>
                                                <span className="line"></span>
                                                <span className="text"><img src={IMAGES.Layer577} alt="left arrow" /></span>
                                            </span>
                                        </div>
                                    </nav>
                                    <div className="slide-info-menu parent">
                                        <div id="slide-info-toggle" className="slide-info-toggle" onClick={toggleMoreInfo}>
                                            <span className="arrow-button cross">
                                                <span className="arrow">
                                                    <span className="item"></span>
                                                    <span className="item"></span>
                                                </span>
                                                <span className="line"></span>
                                                <div id="slide-info-toggle-text" className="text" data-toggle="VIEW LESS">
                                                    {showMore ? <><FontAwesomeIcon icon={faMinus} /> View Less</> : <><FontAwesomeIcon icon={faPlus} /> View More</>}
                                                </div>
                                            </span>
                                        </div>
                                        <span className="slide-info-menu-close"></span>
                                    </div>
                                    <div className="slide-item side-introduction">
                                        <div className='slide-item side-intro'>
                                            <div className='wrappers'>
                                                <div className="slide-content">
                                                    <h2 ref={h2Ref} className='slide-title text-1 text-style-1 normal' >
                                                        {currentSlide.title.split('').map((char, index) => (
                                                            <span key={index} className={`char${index + 1}`}>{char}</span>
                                                        ))}
                                                        
                                                    </h2>
                                                    <h2 className='slide-content-all' ref={subtitle}><span style={{ color: "#f14c60" }} >{currentSlide.subtitle}</span></h2>
                                                    <div className="slide-description">
                                                        {/* <h2 ref={subtitle} className='slide-subtitle text-2 text-italic text-style-4 normal h2' style={{ color: "#f14c60" }}>
                                                        {currentSlide.subtitle}
                                                        
                                                       
                                                    </h2> */}
                                                   
                                                        <p ref={descRef} className='description'>
                                                            {currentSlide.description}
                                                        </p>

                                                        <Link to="https://calendly.com/ecom-support/shopify-expert">   <button class='button'> <span className="rotate-container">
                                                            <span className="rotate-text">G</span>
                                                            <span className="rotate-text">e</span>
                                                            <span className="rotate-text">t</span>
                                                            <span className="rotate-text">&nbsp;</span>
                                                            <span className="rotate-text">S</span>
                                                            <span className="rotate-text">t</span>
                                                            <span className="rotate-text">a</span>
                                                            <span className="rotate-text">r</span>
                                                            <span className="rotate-text">t</span>
                                                            <span className="rotate-text">e</span>
                                                            <span className="rotate-text">d</span>
                                                        </span></button></Link>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='slide-image-wrapper'>
                                            <div className="slide-image-inner">
                                                <img
                                                    decoding="async"
                                                    src={slides[currentIndex].imgSrc}
                                                    alt={slides[currentIndex].title}
                                                    ref={imgRefs.current[0]}
                                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                                />
                                                <img
                                                    decoding="async"
                                                    src={slides[(currentIndex + 1) % slides.length].imgSrc}
                                                    alt={slides[(currentIndex + 1) % slides.length].title}
                                                    ref={imgRefs.current[1]}
                                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                                />
                                                <img
                                                    decoding="async"
                                                    src={slides[(currentIndex + 2) % slides.length].imgSrc}
                                                    alt={slides[(currentIndex + 2) % slides.length].title}
                                                    ref={imgRefs.current[2]}
                                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                                />
                                                <img
                                                    decoding="async"
                                                    src={slides[(currentIndex + 3) % slides.length].imgSrc}
                                                    alt={slides[(currentIndex + 3) % slides.length].title}
                                                    ref={imgRefs.current[3]}
                                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                                />
                                                <img
                                                    decoding="async"
                                                    src={slides[(currentIndex + 4) % slides.length].imgSrc}
                                                    alt={slides[(currentIndex + 4) % slides.length].title}
                                                    ref={imgRefs.current[4]}
                                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                                />
                                                <img
                                                    decoding="async"
                                                    src={slides[(currentIndex + 5) % slides.length].imgSrc}
                                                    alt={slides[(currentIndex + 5) % slides.length].title}
                                                    ref={imgRefs.current[5]}
                                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                                />

                                            </div>

                                            <div ref={actionRef} className='slide-action '>
                                                <div className="slide-action-inner">
                                                    <p className="slide-action-title">{currentSlide.actions.title}</p>
                                                    <div id="elementor-button" className="elementor-button-link" role="button">
                                                        <span className="elementor-button-text" style={{ color: "#fc5569" }}>{currentSlide.actions.linkText}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="slide-more-bg">
                                        {showMore || (
                                            <div ref={infoItems} className='slide-more-info'>
                                                {currentSlide.infoItems.slice(0, initialInfoItemCount).map((infoItem, index) => (
                                                    <div key={index} className="info-item">
                                                        <div className='info-item-title'>
                                                        <p>   {infoItem.title}</p>
                                                        </div>
                                                        <p>{infoItem.detail}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {showMore && (
                                            <div ref={infoItems} className='slide-more-info'>
                                                {currentSlide.infoItems.map((infoItem, index) => (
                                                    <div key={index} className="info-item">
                                                     <div className='info-item-title'>
                                                        <p>   {infoItem.title}</p>
                                                        </div>
                                                        <p>{infoItem.detail}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                    </div>
                                    <div className='vecter-image'>
                                        <img src={IMAGES.VectorSmartObject} alt="" />
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Desgineverything;































