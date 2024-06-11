import IMAGES from "../Allfiles/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey " }}
            onClick={onClick}
        />
    );
}
function Cost() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        // nextArrow: <Arrow />,
        // prevArrow: <Arrow />,
        adaptiveHeight: true,
        variableWidth: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,


                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 548,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    const [ref, inView] = useInView();
    const brand = useRef(null);
    const [autoplay, setAutoplay] = useState(false);

    useEffect(() => {
        if (inView && !autoplay) {
            gsap.fromTo(
                brand.current,
                { opacity: 0, x: -150 },
                { opacity: 1, x: 0, duration: 1, delay: 0.3 }
            );
            setAutoplay(true);
        }
    }, [inView, autoplay]);

    return (
        <>

            <div className='customer--section' ref={ref}>
                <div className="customer--section-work">
                    <div className='wrappered'>
                        <div className='customer--section-our' ref={brand}>
                            <h2>Our 3000+ customers in their words</h2>
                            <p>The great appreciation of our customers speaks louder than us!</p>
                        </div>
                        <div className='customer--section-slider'>
                            <Slider {...settings}>

                                <div className='customer--section-doller'>
                                    <img src={IMAGES.king} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes que so llicitudin, tellus eu  volutpat  vehicula, sapien neque maxim us nisi, non s celerisque ex trupis mattis nisi. Praesent pharenta nisl vel ante porta bibendum.Aenean quis accumsan nulla. </p>
                                    <div className='customer--section-connect'>
                                        <div className='customer--section-image'>
                                            <img src={IMAGES.s1} /></div>
                                        <div className='customer--section-graph'>
                                            <h4>John Doe</h4>
                                            <p>Chief Graphic Designing</p></div>
                                    </div>
                                    <img id='customer--section-star' src={IMAGES.star} />
                                </div>

                                <div className='customer--section-doller'>
                                    <img src={IMAGES.king} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes que so llicitudin, tellus eu  volutpat  vehicula, sapien neque maxim us nisi, non s celerisque ex trupis mattis nisi. Praesent pharenta nisl vel ante porta bibendum.Aenean quis accumsan nulla. </p>
                                    <div className='customer--section-connect'>
                                        <div className='customer--section-image'>
                                            <img src={IMAGES.s1} /></div>
                                        <div className='customer--section-graph'>
                                            <h4>John Doe</h4>
                                            <p>Chief Graphic Designing</p></div>
                                    </div>
                                    <img id='customer--section-star' src={IMAGES.star} />
                                </div>
                                <div className='customer--section-doller' >
                                    <img src={IMAGES.king} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes que so llicitudin, tellus eu  volutpat  vehicula, sapien neque maxim us nisi, non s celerisque ex trupis mattis nisi. Praesent pharenta nisl vel ante porta bibendum.Aenean quis accumsan nulla. </p>
                                    <div className='customer--section-connect'>
                                        <div className='customer--section-image'>
                                            <img src={IMAGES.s1} /></div>
                                        <div className='customer--section-graph'>
                                            <h4>John Doe</h4>
                                            <p>Chief Graphic Designing</p></div>
                                    </div>
                                    <img id='customer--section-star' src={IMAGES.star} />
                                </div>
                                <div className='customer--section-doller'  >
                                    <img src={IMAGES.king} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes que so llicitudin, tellus eu  volutpat  vehicula, sapien neque maxim us nisi, non s celerisque ex trupis mattis nisi. Praesent pharenta nisl vel ante porta bibendum.Aenean quis accumsan nulla. </p>
                                    <div className='customer--section-connect'>
                                        <div className='customer--section-image'>
                                            <img src={IMAGES.s1} /></div>
                                        <div className='customer--section-graph'>
                                            <h4>John Doe</h4>
                                            <p>Chief Graphic Designing</p></div>
                                    </div>
                                    <img id='customer--section-star' src={IMAGES.star} />
                                </div>
                                <div className='customer--section-doller'>
                                    <img src={IMAGES.king} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes que so llicitudin, tellus eu  volutpat  vehicula, sapien neque maxim us nisi, non s celerisque ex trupis mattis nisi. Praesent pharenta nisl vel ante porta bibendum.Aenean quis accumsan nulla. </p>
                                    <div className='customer--section-connect'>
                                        <div className='customer--section-image'>
                                            <img src={IMAGES.s1} /></div>
                                        <div className='customer--section-graph'>
                                            <h4>John Doe</h4>
                                            <p>Chief Graphic Designing</p></div>
                                    </div>
                                    <img id='customer--section-star' src={IMAGES.star} />
                                </div>
                                <div className='customer--section-doller' >
                                    <img src={IMAGES.king} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes que so llicitudin, tellus eu  volutpat  vehicula, sapien neque maxim us nisi, non s celerisque ex trupis mattis nisi. Praesent pharenta nisl vel ante porta bibendum.Aenean quis accumsan nulla. </p>
                                    <div className='customer--section-connect'>
                                        <div className='customer--section-image'>
                                            <img src={IMAGES.s1} /></div>
                                        <div className='customer--section-graph'>
                                            <h4>John Doe</h4>
                                            <p>Chief Graphic Designing</p></div>
                                    </div>
                                    <img id='customer--section-star' src={IMAGES.star} />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Cost;

