import IMAGES from "../Allfiles/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Brand() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 7,


                }
            },
            {
                breakpoint: 1950,
                settings: {
                    slidesToShow: 7,


                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,


                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 3,
                }
            },

        ]
    };
    const setting = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: 'linear',
        rtl: true,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 7,


                }
            },
            {
                breakpoint: 1950,
                settings: {
                    slidesToShow: 7,


                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,


                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 3,
                }
            },

        ]
    };

    return (
        <div className='brand-section-slider'>
            <div className="brand-section-container">
                <div className="brand-first-slide">
                    <Slider {...settings}>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand1} alt="" />
                            </div>
                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand2} alt="" />
                            </div>

                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand3} alt="" />
                            </div>
                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand4} alt="" />
                            </div>
                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand5} alt="" />
                            </div>

                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand1} alt="" />
                            </div>
                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand2} alt="" />
                            </div>

                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand3} alt="" />
                            </div>
                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand4} alt="" />
                            </div>
                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand5} alt="" />
                            </div>

                        </div>
                    </Slider>
                </div>
                <div className="brand-second-section">
                    <Slider {...setting}>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand6} alt="" />
                            </div>
                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand7} alt="" />
                            </div>

                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand8} alt="" />
                            </div>
                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand9} alt="" />
                            </div>
                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand10} alt="" />
                            </div>

                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand6} alt="" />
                            </div>
                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand7} alt="" />
                            </div>

                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand8} alt="" />
                            </div>
                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand9} alt="" />
                            </div>
                        </div>
                        <div className="brand-slider-flex">
                            <div className="brand-slides">
                                <img src={IMAGES.brand10} alt="" />
                            </div>

                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Brand
