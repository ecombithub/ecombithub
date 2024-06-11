import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import IMAGES from "../Allfiles/image";

function Help() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 9000,
        cssEase: 'linear',
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        reverseDirection: true,
        rtl: true,

        responsive: [

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                    verticalSwiping: false,
                    swipeToSlide: false,
                    swipeToSlide: true,
                    reverseDirection: true,
                    rtl: true,

                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    vertical: false,
                    verticalSwiping: false,
                    swipeToSlide: false,
                    swipeToSlide: true,
                    reverseDirection: true,
                    rtl: true,

                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
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
    const settin = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 9000,
        reverseDirection: true,
        responsive: [

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                    verticalSwiping: false,
                    swipeToSlide: false,

                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    vertical: false,
                    verticalSwiping: false,
                    swipeToSlide: false,

                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    vertical: false,
                    verticalSwiping: false,
                    swipeToSlide: false,

                }
            },
        ]

    }
    return (
        <>
            <div className="slider--section">
                <div className="slider--section-slidess">
                    <div className="wrapper">
                        <div className="slider--section-after">
                            <div className="slider--section-first">
                                <div className="slider--section-first-sides">
                                    <Slider {...settings}>
                                        <div>
                                            <img src={IMAGES.z11} />
                                        </div>
                                        <div>
                                            <img src={IMAGES.z21} />
                                        </div>
                                        <div>
                                            <img src={IMAGES.z11} />
                                        </div>
                                        <div>
                                            <img src={IMAGES.z21} />
                                        </div>
                                        <div>
                                            <img src={IMAGES.z11} />
                                        </div>
                                        <div>
                                            <img src={IMAGES.z21} />
                                        </div>
                                        <div>
                                            <img src={IMAGES.z11} />
                                        </div>
                                        <div>
                                            <img src={IMAGES.z21} />
                                        </div>


                                    </Slider>
                                </div>
                                <div className="slider--section-second-sides">
                                    <Slider {...settin}>
                                        <div className="best-1">
                                            <img src={IMAGES.p31} />
                                        </div>
                                        <div className="best-2">
                                            <img src={IMAGES.p21} />
                                        </div>
                                        <div className="best-3" >
                                            <img src={IMAGES.p11} />
                                        </div>
                                        <div className="best-1">
                                            <img src={IMAGES.p31} />
                                        </div>
                                        <div className="best-2">
                                            <img src={IMAGES.p21} />
                                        </div>
                                        <div className="best-3" >
                                            <img src={IMAGES.p11} />
                                        </div>
                                        <div className="best-1">
                                            <img src={IMAGES.p31} />
                                        </div>
                                        <div className="best-2">
                                            <img src={IMAGES.p21} />
                                        </div>
                                        <div className="best-3" >
                                            <img src={IMAGES.p11} />
                                        </div>

                                    </Slider>
                                </div>
                                <div className="slider--section-third-sides">
                                    <Slider {...settings}>
                                        <div>
                                            <img src={IMAGES.s21} />
                                        </div>
                                        <div>
                                            <img src={IMAGES.s111} />
                                        </div>
                                        <div>
                                            <img src={IMAGES.s21} />
                                        </div>
                                        <div>
                                            <img src={IMAGES.s111} />
                                        </div>
                                        <div>
                                            <img src={IMAGES.s21} />
                                        </div>
                                        <div>
                                            <img src={IMAGES.s111} />
                                        </div>
                                        <div>
                                            <img src={IMAGES.s21} />
                                        </div>
                                        <div>
                                            <img src={IMAGES.s111} />
                                        </div>


                                    </Slider>
                                </div>
                            </div>
                            <div className="slider--section-before-images">
                                <div className="time-first">
                                    <img src={IMAGES.s31} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Help;