import React from 'react'
import IMAGES from '../Allfiles/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function SpeedUx() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 3000,
        cssEase: 'linear',
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        pauseOnHover: false,
        pauseOnFocus: false
    }

    return (
        <>
            <div className="speed-ux-section">
                <div className='elementor-wrapper'>
                    <div className="speed-ux--ui">
                        <div className="speed-ux--ui-display">
                            <div className='speed-ux-ui-display-start'>
                                <div className="wrappers">
                                    <div className="speed-ux--ui-display-brand">
                                        <h2>UX & UI <span style={{ color: "rgb(252, 85, 105)" }}> Audit</span></h2>
                                        <p>EcombitHub  expert team analyzes every aspect of your website user experience and user interface  to identify areas for improvement. We provide insights and recommendations to ensure your platform is visually appealing and aligned with your business goals. </p>
                                        <div className='resposive-desgin-speed-brandto'>
                                            <div className='resposive-desgin-speed'>
                                                <div className='resposive-desgin-speed-image'>
                                                    <img src={IMAGES.responsive} alt="" itemprop="icon" />
                                                </div>
                                                <div className='resposive-desgin-speed-element'>
                                                    <p>Navigation and Usability.</p>
                                                </div>
                                            </div>
                                            <div className='resposive-desgin-speed'>
                                                <div className='resposive-desgin-speed-image'>
                                                    <img src={IMAGES.graphic101} alt="" itemprop="icon" />
                                                </div>
                                                <div className='resposive-desgin-speed-element'>
                                                    <p>Mobile Responsiveness.</p>
                                                </div>
                                            </div>
                                            <div className='resposive-desgin-speed'>
                                                <div className='resposive-desgin-speed-image'>
                                                    <img src={IMAGES.structure} alt="" itemprop="icon" />
                                                </div>
                                                <div className='resposive-desgin-speed-element'>
                                                    <p>Visual Design.</p>
                                                </div>
                                            </div>
                                            <div className='resposive-desgin-speed'>
                                                <div className='resposive-desgin-speed-image'>
                                                    <img src={IMAGES.prototyping} alt="" itemprop="icon" />
                                                </div>
                                                <div className='resposive-desgin-speed-element'>
                                                    <p>Page Load Speed. </p>
                                                </div>
                                            </div>
                                            <div className='resposive-desgin-speed'>
                                                <div className='resposive-desgin-speed-image'>
                                                    <img src={IMAGES.user1012} alt="" itemprop="icon" />
                                                </div>
                                                <div className='resposive-desgin-speed-element'>
                                                    <p>Usability testing. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to="https://calendly.com/ecom-support/shopify-expert">    <button class='button'> <span className="rotate-container">
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
                                </div>
                            </div>
                            <div className="speed-ux--ui-display-slider">
                                <div className="speed-ux--ui-display-slider-slides">
                                    <Slider {...settings}>
                                        <div className="speedux-ui-images-slides">
                                            <img src={IMAGES.Image1} alt="" />
                                        </div>
                                        <div className="speedux-ui-images-slides">
                                            <img src={IMAGES.Image2} alt="" />
                                        </div>
                                        <div className="speedux-ui-images-slides">
                                            <img src={IMAGES.Image3} alt="" />
                                        </div>
                                        <div className="speedux-ui-images-slides">
                                            <img src={IMAGES.Image4} alt="" />
                                        </div>
                                        <div className="speedux-ui-images-slides">
                                            <img src={IMAGES.Image5} alt="" />
                                        </div>
                                        <div className="speedux-ui-images-slides">
                                            <img src={IMAGES.Image6} alt="" />
                                        </div>
                                     

                                    </Slider>
                                </div>
                                <div className="speed-ux--ui-display-slider-slides">
                                    <Slider {...settings}>
                                        <div className="speedux-ui-images-slides">
                                            <img src={IMAGES.Image7} alt="" />
                                        </div>
                                        <div className="speedux-ui-images-slides">
                                            <img src={IMAGES.Image8} alt="" />
                                        </div>
                                        <div className="speedux-ui-images-slides">
                                            <img src={IMAGES.Image9} alt="" />
                                        </div>
                                        <div className="speedux-ui-images-slides">
                                            <img src={IMAGES.Image10} alt="" />
                                        </div>
                                        <div className="speedux-ui-images-slides">
                                            <img src={IMAGES.Image11} alt="" />
                                        </div>
                                        <div className="speedux-ui-images-slides">
                                            <img src={IMAGES.Image12} alt="" />
                                        </div>
                                     
                                        

                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpeedUx

