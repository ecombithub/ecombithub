import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import IMAGES from '../Allfiles/image';
import { Link } from 'react-router-dom';
import browsersettings from '../images/browsersettings.png'
import bestproduct from '../images/bestproduct.png'
import customize1011 from '../images/customize1011.png'
import folder321 from '../images/folder321.webp'
import integration101 from '../images/integration101.webp'
import sandclock1111 from '../images/sandclock1111.webp'
import selling111 from '../images/selling111.webp'
import shoppingbag0 from '../images/shoppingbag0.webp'
import shoppingcart from '../images/shoppingcart.webp'
import slider999 from '../images/slider999.webp'
import upselling111 from '../images/upselling111.webp'


const slides = [
    {
        title: 'Checkout',
        subtitle: 'Extension Integration',
        ptitle: 'Checkout',
        extraSubtitle1: 'Custom Checkout',
        extraSubtitle2: 'Upsell or Cross-sell Suggestions',
        extraSubtitle3: 'Checkout Page Customization',
        images: [integration101, shoppingbag0, selling111, browsersettings],
    },
    {
        title: 'Cart Drawer',
        subtitle: 'Shipping Bar',
        ptitle: 'Cart Drawer',
        extraSubtitle1: 'Product Recommendation',
        extraSubtitle2: 'Custom Upsell',
        extraSubtitle3: 'Cart Notes',
        images: [folder321, bestproduct, upselling111, slider999],
    },
    {
        title: 'Section',
        subtitle: 'Custom Slider',
        ptitle: 'Section',
        extraSubtitle1: 'Custom Metafield',
        extraSubtitle2: 'Timer Countdown',
        extraSubtitle3: 'Custom filter',
        images: [browsersettings, sandclock1111, customize1011, shoppingcart],
    }
];


function Customise() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentSlide = slides[currentIndex];
    const h2Ref = useRef(null);
    const infoItems = useRef([null, null, null, null]);
    const intervalRef = useRef(null);
    const ptitle = useRef(null);
    const imageRefs = useRef([null, null, null, null]);


    const handlePrev = () => {
        moveAndUpdateContent(true);
    };

    const handleNext = () => {
        moveAndUpdateContent(false);
    };

    const moveAndUpdateContent = (isPrev) => {
        gsap.to(h2Ref.current, { y: isPrev ? -50 : 50, opacity: 0, duration: 0.5 });
        gsap.to(ptitle.current, { y: isPrev ? -50 : 50, opacity: 0, duration: 0.5 });
        gsap.to(imageRefs.current, { y: isPrev ? -50 : 50, opacity: 0, duration: 0.5 });
        gsap.to(infoItems.current, {
            y: isPrev ? -50 : 50,
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                const nextIndex = isPrev ? (currentIndex === 0 ? slides.length - 1 : currentIndex - 1) : (currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
                setCurrentIndex(nextIndex);

                gsap.set(h2Ref.current, { y: isPrev ? 50 : -50, opacity: 0 });
                gsap.set(infoItems.current, { y: isPrev ? 50 : -50, opacity: 0 });
                gsap.set(ptitle.current, { y: isPrev ? 50 : -50, opacity: 0 });
                gsap.set(imageRefs.current, { y: isPrev ? 50 : -50, opacity: 0 });

                gsap.to(h2Ref.current, { y: 0, opacity: 1, duration: 0.5 });
                gsap.to(infoItems.current, { y: 0, opacity: 1, duration: 0.5 });
                gsap.to(ptitle.current, { y: 0, opacity: 1, duration: 0.5 });
                gsap.to(imageRefs.current, { y: 0, opacity: 1, duration: 0.5 });
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

    const setting = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false
    };

    return (
        <div className='block__shopify-product-audit-section-block'>
            <div className='block__shopify-product-audit-box'>
                <div className='block__shopify-product-audit-images-listing'>
                    <div className='block__shopify-product-audit-images-list' style={{ transform: "translate3d(-37%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotate(-29deg) skew(0deg)" }}>
                        <div className='block__shopify-product-audit-images'>
                            
                            <div className='block__shopify-product-audit-images-slider-conttent'>
                                <Slider {...setting}>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.check2} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart103} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart104} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart105} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart103} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart104} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart105} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart103} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart104} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart105} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.check2} alt="" />
                                    </div>
                                </Slider>
                            </div>
                          
                            <div className='block__shopify-product-audit-images-slider-conttent'>
                                <Slider {...setting}>
                                <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.check3} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart106} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart107} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart108} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart106} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart107} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart108} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart106} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart107} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart108} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.check3} alt="" />
                                    </div>
                                </Slider>
                            </div>
                            <div className='block__shopify-product-audit-images-slider-conttent'>
                                <Slider {...setting}>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart101} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.check1} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart102} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart101} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart102} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart101} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart102} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart101} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart102} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.check1} alt="" />
                                    </div>
                                </Slider>
                            </div>
                            <div className='block__shopify-product-audit-images-slider-conttent'>
                                <Slider {...setting}>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart109} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart110} alt="" />
                                    </div>

                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart109} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart110} alt="" />
                                    </div>

                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart109} alt="" />
                                    </div>
                                    <div class="block__shopify-product-audit-images-slide-img">
                                        <img src={IMAGES.cart110} alt="" />
                                    </div>


                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block__shopify-product-audit-content">
                    <div className='wrappersed'>
                        <div className='block__shopify-product-audit-details'>
                            <div className="block__shopify-product-audit-header">
                                <div className="slide-content">
                                    <h2>Customize Your</h2>
                                    <h2 ref={h2Ref}> <span style={{ color: "rgb(252, 85, 105)" }}>   {currentSlide.title.split('').map((char, index) => (
                                        <span key={index} className={`char${index + 1}`}>{char}</span>
                                    ))}</span></h2>
                                </div>

                                <p>Transform your customer Shopping experience with Shopify custom  <span ref={ptitle} style={{ color: "rgb(252, 85, 105)", fontWeight: 700 }} > {currentSlide.ptitle} </span> options. Tailor every aspect of the checkout process to reflect your brand unique identity. </p>
                                <div className='customise-prodcut-to-custom'>
                                    <div className='customise-prodcut'>
                                        <div className='customise-prodcut-image'>
                                            <img ref={el => imageRefs.current[0] = el} src={currentSlide.images[0]} alt="" itemprop="icon"/>
                                        </div>
                                        <div className='customise-prodcut-elements'>
                                            <p ref={el => infoItems.current[0] = el}>{currentSlide.subtitle}</p>
                                        </div>
                                    </div>
                                    <div className='customise-prodcut'>
                                        <div className='customise-prodcut-image'>
                                            <img ref={el => imageRefs.current[1] = el} src={currentSlide.images[1]} alt="" itemprop="icon"/>
                                        </div>
                                        <div className='customise-prodcut-elements'>
                                            <p ref={el => infoItems.current[1] = el}>{currentSlide.extraSubtitle1}</p>
                                        </div>
                                    </div>
                                    <div className='customise-prodcut'>
                                        <div className='customise-prodcut-image'>
                                            <img ref={el => imageRefs.current[2] = el} src={currentSlide.images[2]} alt="" itemprop="icon"/>
                                        </div>
                                        <div className='customise-prodcut-elements'>
                                            <p ref={el => infoItems.current[2] = el}>{currentSlide.extraSubtitle2}</p>
                                        </div>
                                    </div>
                                    <div className='customise-prodcut'>
                                        <div className='customise-prodcut-image'>
                                            <img ref={el => imageRefs.current[3] = el} src={currentSlide.images[3]} alt="" itemprop="icon"/>
                                        </div>
                                        <div className='customise-prodcut-elements'>
                                            <p ref={el => infoItems.current[3] = el}>{currentSlide.extraSubtitle3}</p>
                                        </div>
                                    </div>
                                </div>
                                <Link to="https://calendly.com/ecom-support/shopify-expert">     <button className='button'>
                                    <span className="rotate-container">
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
                                    </span>
                                </button></Link>
                            </div>
                            <nav className="customise-slide-navigation">
                                <div className="customise-slide-navigation-item-prev" onClick={handlePrev}>
                                    <span className="customise-arrow-button prev">
                                        <span className="customise-arrow">
                                            <span className="item"></span>
                                            <span className="item"></span>
                                        </span>
                                        <span className="line"></span>
                                        <span className="text"><img src={IMAGES.Layer2} alt="right arrow" /></span>
                                    </span>
                                </div>
                                <div className="customise-slide-navigation-item-next" onClick={handleNext}>
                                    <span className="customise-arrow-button next">
                                        <span className="customise-arrow">
                                            <span className="item"></span>
                                            <span className="item"></span>
                                        </span>
                                        <span className="line"></span>
                                        <span className="text"><img src={IMAGES.Layer577} alt=" left arrow" /></span>
                                    </span>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Customise;
