import React from 'react';
import IMAGES from '../Allfiles/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
function SpeedPlus() {

    const settgs = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 5000,
        cssEase: 'linear',
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        reverseDirection: true,
        pauseOnHover: false,
        pauseOnFocus: false
    }
    return (
        <>
            <div className="speed-plus-shopify-section">
                <div className="speed-plus-shopify-section-too">
                    <div className='elementor-wrapper'>
                        <div className="speed-plus-optimization">
                            <div className="speed-plus-optimization-slider">
                                <div className="speed-plus-optimization-first-slider">
                                    <div className="speed-plus-first-slide">
                                        <Slider {...settgs}>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.spd1} alt="" />
                                            </div>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.third101} alt="" />
                                            </div>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.third102} alt="" />
                                            </div>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.third103} alt="" />
                                            </div>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.third104} alt="" />
                                            </div>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.third106} alt="" />
                                            </div>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.third107} alt="" />
                                            </div>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.third108} alt="" />
                                            </div>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.third109} alt="" />
                                            </div>

                                        </Slider>
                                    </div>

                                </div>
                                <div className="speed-plus-optimization-second-slider">
                                    <div className="speed-plus-second-slide">
                                        <Slider {...settgs}>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.spd} alt="" />
                                            </div>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.section1} alt="" />
                                            </div>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.section2} alt="" />
                                            </div>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.section3} alt="" />
                                            </div>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.section4} alt="" />
                                            </div>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.section5} alt="" />
                                            </div>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.section6} alt="" />
                                            </div>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.section7} alt="" />
                                            </div>
                                            <div className='speed pluss-images-slides'>
                                                <img src={IMAGES.section8} alt="" />
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                                <div className="speed-plus-optimization-third-slider">
                                    <div className="speed-plus-third-slide">
                                        <div className='speed-plus-third-slide-icon'>
                                            <FontAwesomeIcon icon={faCircle} /> <FontAwesomeIcon icon={faCircle} />  <FontAwesomeIcon icon={faCircle} />
                                        </div>
                                        <Slider {...settgs}>
                                            <div className='speed pluss-image-slides'>
                                                <img src={IMAGES.speed1} alt="" />
                                            </div>
                                            <div className='speed pluss-image-slides'>
                                                <img src={IMAGES.speed2} alt="" />
                                            </div>
                                            <div className='speed pluss-image-slides'>
                                                <img src={IMAGES.speed3} alt="" />
                                            </div>
                                            <div className='speed pluss-image-slides'>
                                                <img src={IMAGES.speed4} alt="" />
                                            </div>

                                        </Slider>
                                    </div>
                                </div>

                                <div className="speed-plus-optimization-four-slider">
                                    <div className="speed-plus-third-slide">
                                        <div className='speed-plus-third-slide-icon'>
                                            <FontAwesomeIcon icon={faCircle} /> <FontAwesomeIcon icon={faCircle} />  <FontAwesomeIcon icon={faCircle} />
                                        </div>
                                        <Slider {...settgs}>
                                            <div className='speed pluss-image-slides'>
                                                <img src={IMAGES.speed21} alt="" />
                                            </div>
                                            <div className='speed pluss-image-slides'>
                                                <img src={IMAGES.speed22} alt="" />
                                            </div>
                                            <div className='speed pluss-image-slides'>
                                                <img src={IMAGES.speed23} alt="" />
                                            </div>
                                            <div className='speed pluss-image-slides'>
                                                <img src={IMAGES.speed24} alt="" />
                                            </div>
                                            <div className='speed pluss-image-slides'>
                                                <img src={IMAGES.speed25} alt="" />
                                            </div>

                                        </Slider>
                                    </div>
                                </div>

                                <div className="speed-plus-optimization-five-slider">
                                    <div className="speed-plus-third-slide">
                                        <Slider {...settgs}>
                                            <div className='speed-plus-content-elements'>
                                                <div className='speed-plus-page-speed'>
                                                    <p>Measure Page Speed</p>
                                                </div>
                                                <div className="first-page-speed">
                                                    <div className="first-page-speed-pant">
                                                        <p>FIRST CONTENTFUL PAINT</p>
                                                    </div>
                                                    <div className="first-page-speed-pertcentage">
                                                        <p>0.25</p>
                                                    </div>
                                                </div>
                                                <div className="first-page-speed">
                                                    <div className="first-page-speed-pant">
                                                        <p>SPEED INDEX</p>
                                                    </div>
                                                    <div className="first-page-speed-pertcentage">
                                                        <p>96%</p>
                                                    </div>
                                                </div>
                                                <div className="first-page-speed">
                                                    <div className="first-page-speed-pant">
                                                        <p>LARGEST CONTENTFUL PAINT</p>
                                                    </div>
                                                    <div className="first-page-speed-pertcentage">
                                                        <p>0.25</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='speed-plus-content-elements'>
                                                <div className='speed-plus-page-speed'>
                                                    <p>Measure Page Speed</p>
                                                </div>
                                                <div className="first-page-speed">
                                                    <div className="first-page-speed-pant">
                                                        <p>FIRST CONTENTFUL PAINT</p>
                                                    </div>
                                                    <div className="first-page-speed-pertcentage">
                                                        <p>0.15</p>
                                                    </div>
                                                </div>
                                                <div className="first-page-speed">
                                                    <div className="first-page-speed-pant">
                                                        <p>SPEED INDEX</p>
                                                    </div>
                                                    <div className="first-page-speed-pertcentage">
                                                        <p>90%</p>
                                                    </div>
                                                </div>
                                                <div className="first-page-speed">
                                                    <div className="first-page-speed-pant">
                                                        <p>LARGEST CONTENTFUL PAINT</p>
                                                    </div>
                                                    <div className="first-page-speed-pertcentage">
                                                        <p>0.05</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='speed-plus-content-elements'>
                                                <div className='speed-plus-page-speed'>
                                                    <p>Measure Page Speed</p>
                                                </div>
                                                <div className="first-page-speed">
                                                    <div className="first-page-speed-pant">
                                                        <p>FIRST CONTENTFUL PAINT</p>
                                                    </div>
                                                    <div className="first-page-speed-pertcentage">
                                                        <p>0.65</p>
                                                    </div>
                                                </div>
                                                <div className="first-page-speed">
                                                    <div className="first-page-speed-pant">
                                                        <p>SPEED INDEX</p>
                                                    </div>
                                                    <div className="first-page-speed-pertcentage">
                                                        <p>40%</p>
                                                    </div>
                                                </div>
                                                <div className="first-page-speed">
                                                    <div className="first-page-speed-pant">
                                                        <p>LARGEST CONTENTFUL PAINT</p>
                                                    </div>
                                                    <div className="first-page-speed-pertcentage">
                                                        <p>0.85</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='speed-plus-content-elements'>
                                                <div className='speed-plus-page-speed'>
                                                    <p>Measure Page Speed</p>
                                                </div>
                                                <div className="first-page-speed">
                                                    <div className="first-page-speed-pant">
                                                        <p>FIRST CONTENTFUL PAINT</p>
                                                    </div>
                                                    <div className="first-page-speed-pertcentage">
                                                        <p>0.75</p>
                                                    </div>
                                                </div>
                                                <div className="first-page-speed">
                                                    <div className="first-page-speed-pant">
                                                        <p>SPEED INDEX</p>
                                                    </div>
                                                    <div className="first-page-speed-pertcentage">
                                                        <p>60%</p>
                                                    </div>
                                                </div>
                                                <div className="first-page-speed">
                                                    <div className="first-page-speed-pant">
                                                        <p>LARGEST CONTENTFUL PAINT</p>
                                                    </div>
                                                    <div className="first-page-speed-pertcentage">
                                                        <p>0.75</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                                <div className='last-slide-images'>
                                    <img src={IMAGES.Group024} alt="" />
                                </div>
                            </div>
                            <div className="speed-plus-optimization-elements">
                                <div className="wrappersed">
                                    <div className="speed-plus-optimization-elements-start">
                                        <h2>Shopify Speed <span style={{ color: "rgb(252, 85, 105)" }}> Optimizations.</span></h2>
                                        <p>Boost your Shopify store performance with our speed optimization services. We provide a seamless shopping experience for your customers and improve search engine rankings.</p>
                                        <div className='speed-plus-optim-site'>
                                            <div className='speed-plus-website'>
                                                <div className='speed-plus-website-image'>
                                                    <img src={IMAGES.speedometer100} alt="" itemProp='icon' />
                                                </div>
                                                <div className='speed-plus-website-paragraph'>
                                                    <p>Improve Site Speed.</p>
                                                </div>
                                            </div>
                                            <div className='speed-plus-website'>
                                                <div className='speed-plus-website-image'>
                                                    <img src={IMAGES.store102} alt="" itemProp='icon' />
                                                </div>
                                                <div className='speed-plus-website-paragraph'>
                                                    <p>Reduce Loading Time.</p>
                                                </div>
                                            </div>
                                            <div className='speed-plus-website'>
                                                <div className='speed-plus-website-image'>
                                                    <img src={IMAGES.rocket102} alt="" itemProp='icon' />
                                                </div>
                                                <div className='speed-plus-website-paragraph'>
                                                    <p>Remove Additional Coding. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to="https://calendly.com/ecom-support/shopify-expert">   <button class='button'> <span className="rotate-container">
                                            <span className="rotate-text">L</span>
                                            <span className="rotate-text">e</span>
                                            <span className="rotate-text">t</span>
                                            <span className="rotate-text">&nbsp;</span>
                                            <span className="rotate-text">'s</span>
                                            <span className="rotate-text">&nbsp;</span>
                                            <span className="rotate-text">G</span>
                                            <span className="rotate-text">o</span>
                                            <span className="rotate-text">!</span>

                                        </span></button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpeedPlus
