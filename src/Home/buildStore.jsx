import React from 'react'
import IMAGES from '../Allfiles/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function BuildStore() {
    const settings = {
        infinite: true,
        slidesToShow: 2,
        autoplay: true,
        speed: 9000,
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false
    }
    return (
        <>
            <div className="buildstore-section">
                <div className="wrappers">

                    <div className="buildstore-section-full">
                        <div className="buildstore-section-new">
                            <h2>Build a New  <span style={{ color: "rgb(252, 85, 105)" }}> Shopify Online Store</span></h2>
                            <p>Transform your business vision into reality with a custom-built Shopify online store. Whether you're starting from scratch or migrating from another platform. EcombitHub Shopify experts make it simple to create a stunning, fully functional store that stands out and drives sales.</p>
                        </div>
                    </div>
                    <div className="buildstore-section-new-image-show-bg">
                        <div className="buildstore-section-new-image">
                            <div className="buildstore-section-new-image-bg">
                                <img src={IMAGES.default1} alt="" />
                            </div>

                            <div className="buildstore-section-slider-first">
                                <Slider {...settings}>
                                    <div className="buildstore-section-slides">
                                        <img src={IMAGES.build50} alt="" />
                                    </div>
                                    <div className="buildstore-section-slides">
                                        <img src={IMAGES.build49} alt="" />
                                    </div>
                                    <div className="buildstore-section-slides">
                                        <img src={IMAGES.build48} alt="" />
                                    </div>
                                    <div className="buildstore-section-slides">
                                        <img src={IMAGES.build47} alt="" />
                                    </div>
                                    <div className="buildstore-section-slides">
                                        <img src={IMAGES.build46} alt="" />
                                    </div>
                                    <div className="buildstore-section-slides">
                                        <img src={IMAGES.build45} alt="" />
                                    </div>
                                </Slider>
                            </div>
                            {/* <div className="buildstore-section-slider-second">
                                <Slider {...settings}>
                                    <div className="buildstore-section-slides">
                                        <img src={IMAGES.one103} alt="" />
                                    </div>
                                    <div className="buildstore-section-slides">
                                        <img src={IMAGES.one104} alt="" />
                                    </div>
                                   
                                </Slider>
                            </div> */}

                        </div>
                        <div className="buildstore-circle">
                            <img src={IMAGES.circle} alt="" />
                        </div>
                        <div className="buildstore-circle-red">
                            <img src={IMAGES.redcircle} alt="" />
                        </div>
                        <div className="buildstore-circle-shopfiy">
                            <img src={IMAGES.grp33} alt="" />
                        </div>
                        <div className="buildstore-circle-icons">
                            <img src={IMAGES.icons} alt="" />
                        </div>
                        <div className="buildstore-circle-border">
                            <img src={IMAGES.border} alt="" />
                        </div>
                        <div className="buildstore-circle-redbox">
                            <img src={IMAGES.redbox} alt="" />
                        </div>
                        <Link to="https://calendly.com/ecom-support/shopify-expert"> <button class='button'> <span className="rotate-container">
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
        </>
    )
}

export default BuildStore;
