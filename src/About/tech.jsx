import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMAGES from "../Allfiles/image";
function Tech() {
    const settgs = {
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        cssEase: 'linear',
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        reverseDirection: true,
        rtl: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    vertical: true,
                    verticalSwiping: true,
                    swipeToSlide: true,
                    swipeToSlide: true,
                    reverseDirection: true,
                    rtl: true,

                }
            },

            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 8,
                    vertical: true,
                    verticalSwiping: true,
                    swipeToSlide: true,
                    swipeToSlide: true,
                    reverseDirection: true,
                    rtl: true,

                }
            },




            {
                breakpoint: 726,
                settings: {
                    slidesToShow: 7,
                    vertical: false,
                    verticalSwiping: false,
                    swipeToSlide: false,
                    swipeToSlide: true,
                    reverseDirection: true,
                    rtl: true,

                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 5,
                    vertical: false,
                    verticalSwiping: false,
                    swipeToSlide: false,
                    swipeToSlide: true,
                    reverseDirection: true,
                    rtl: true,

                }
            },

            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 4,
                    vertical: false,
                    verticalSwiping: false,
                    swipeToSlide: false,
                    swipeToSlide: true,
                    reverseDirection: true,
                    rtl: true,

                }
            },


        ]

    }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        cssEase: 'linear',
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,

        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    vertical: true,
                    verticalSwiping: true,
                    swipeToSlide: true,


                }
            },

            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 8,
                    vertical: true,
                    verticalSwiping: true,
                    swipeToSlide: true,


                }
            },




            {
                breakpoint: 726,
                settings: {
                    slidesToShow: 7,
                    vertical: false,
                    verticalSwiping: false,
                    swipeToSlide: false,


                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 5,
                    vertical: false,
                    verticalSwiping: false,
                    swipeToSlide: false,


                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 4,
                    vertical: false,
                    verticalSwiping: false,
                    swipeToSlide: false,
                    swipeToSlide: true,
                    reverseDirection: true,
                    rtl: true,

                }
            }


        ]
    }
    return (
        <>
            <div className="technology--sections-grow">
                <div className='wrapper'>
                    <div className="container">
                        <div className='technology--sections-sell'>
                            <div className="technology--sections-just">

                                <div className="technology--sections-first">
                                    <div className='technology--sections-online'>
                                        <h2>Innovative Technology Stack For Shopify Excellence</h2>
                                        <p>At EcombitHub, we leverage innovative technology stack to elevate your Shopify experience. Our team excels in Shopify and Shopify Plus, offering specialized services including Custom Functionality, 3rd-Party Integration, Front-End Development, Back-End Development, E-commerce Platforms, and Custom App Development. </p>
                                    </div>

                                </div>

                                <div className='technology--sections-slider'>
                                    <div className='technology--sections-slider-element'>
                                        <div className='technology--sections-slider-types'>
                                            <div className='technology--sections-slider-types-all'>
                                                <Slider {...settgs}>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g1} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g2} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g3} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g4} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g5} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g6} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g7} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g5} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g6} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g7} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g5} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g6} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g7} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g5} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g6} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g7} />
                                                    </div>
                                                </Slider>
                                            </div>
                                            <div className='technology--sections-slider-slides'>
                                                <Slider {...settings}>
                                                <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g1} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g2} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g3} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g4} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g5} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g6} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g7} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g5} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g6} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g7} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g5} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g6} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g7} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g5} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g6} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g7} />
                                                    </div>
                                                </Slider>
                                            </div>

                                        </div>

                                        <div className='technology--sections-slider-about'>
                                            <div className='technology--sections-slider-types-about'>
                                                <Slider {...settgs}>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g1} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g2} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g3} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g4} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g5} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g6} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g7} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g5} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g6} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g7} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g5} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g6} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g7} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g5} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g6} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g7} />
                                                    </div>
                                                </Slider>
                                            </div>
                                            <div className='technology--sections-slider-slides-about'>
                                                <Slider {...settings}>
                                                <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g1} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g2} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g3} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g4} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g5} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g6} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g7} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g5} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g6} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g7} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g5} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g6} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g7} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g5} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g6} />
                                                    </div>
                                                    <div className='technology--sections-slider-slides'>
                                                        <img src={IMAGES.g7} />
                                                    </div>
                                                </Slider>
                                            </div>

                                        </div>

                                    </div>

                                    <div className='wd'>
                                        <img src={IMAGES.Mobileabout} />
                                        <div className="technology-section-images-star">
                                            <img src={IMAGES.mobile201} alt="" />
                                        </div>
                                        <div className="technology-section-images-pop">
                                            <img src={IMAGES.mobile200} alt="" />
                                        </div>
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
export default Tech;