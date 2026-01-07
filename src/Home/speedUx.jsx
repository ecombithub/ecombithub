
import IMAGES from '../Allfiles/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import imageCompression from 'browser-image-compression';
import React, { useState, useEffect } from 'react';


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

    const [compressedImages, setCompressedImages] = useState([]);

    const compressImage = async (imageSrc) => {
        try {
            const response = await fetch(imageSrc);
            const blob = await response.blob();
            const compressedFile = await imageCompression(blob, {
                maxSizeMB: 1,
                maxWidthOrHeight: 1024,
                useWebWorker: true
            });
            return URL.createObjectURL(compressedFile);
        } catch (error) {
            console.error("Image compression failed:", error);
            return imageSrc;
        }
    };

    useEffect(() => {
        const loadAndCompressImages = async () => {
            const imageSrcs = [
                IMAGES.Image1,
                IMAGES.Image2,
                IMAGES.Image3,
                IMAGES.Image4,
                IMAGES.Image5,
                IMAGES.Image6,
                IMAGES.Image7,
                IMAGES.Image8,
                IMAGES.Image9,
                IMAGES.Image10,
                IMAGES.Image11,
                IMAGES.Image12
            ];

            const compressed = await Promise.all(imageSrcs.map(src => compressImage(src)));
            setCompressedImages(compressed);
        };

        loadAndCompressImages();
    }, []);


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
                                        {compressedImages.slice(0, 6).map((imgSrc, index) => (
                                            <div key={index} className="speedux-ui-images-slides">
                                                <img src={imgSrc} alt={`Slide ${index + 1}`} />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                                <div className="speed-ux--ui-display-slider-slides">
                                    <Slider {...settings}>
                                        {compressedImages.slice(6).map((imgSrc, index) => (
                                            <div key={index} className="speedux-ui-images-slides">
                                                <img src={imgSrc} alt={`Slide ${index + 7}`} />
                                            </div>
                                        ))}
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

