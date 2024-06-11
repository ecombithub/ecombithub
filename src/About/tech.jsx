import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMAGES from "../Allfiles/image";
function Tech() {
    const settgs = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
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
                breakpoint: 850,
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
                breakpoint: 470,
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


        ]

    }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
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
                breakpoint: 850,
                settings: {
                    slidesToShow: 6,
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
                breakpoint: 470,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                    verticalSwiping: false,
                    swipeToSlide: false,


                }
            },


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
                                <div className="technology--sections-first-item">
                                    <div className='technology--sections-first-image'>
                                        <img src={IMAGES.z1} />
                                    </div>
                                    <div className='technology--sections-first-paragraph'>
                                        <h4>Accomplish more than just selling.</h4>
                                    </div>
                                </div>
                                <div className='technology--sections-online'>
                                    <h2>Technology that grows with your  <span style={{ color: "#FF546A" }}>online business </span> </h2>
                                    <p>Use Hubsyntax to grow your shopify plus brand via checkout upsells, one-click upsells and thank you page customization. Enjoy complimentary migration  and frictionless implementation with a your own plus account manager.</p>
                                </div>
                                <div className='technology--sections-online-brand'>
                                    <p>"Use Hubsyntax to grow your shopify plus brand via checkout upsells, one-click upsells and thank you page customize. Enjoy complimentary migration  and frictionless implement with a your own plus account manager."</p>
                                    <div className='technology--sections-online-checkout'>
                                        <div className='technology--sections-online-img'>
                                            <img src={IMAGES.z2} />
                                        </div>
                                        <div className='technology--sections-online-design'>
                                            <h4>John Doe</h4>
                                            <p>Cheif Graphic Designing</p>
                                        </div>
                                    </div>
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
                                                <img src={IMAGES.g9} />
                                            </div>
                                            <div className='technology--sections-slider-slides'>
                                                <img src={IMAGES.g10} />
                                            </div>
                                            <div className='technology--sections-slider-slides'>
                                                <img style={{ backgroundColor: "grey" }} src={IMAGES.g11} />
                                            </div>
                                            <div className='technology--sections-slider-slides'>
                                                <img src={IMAGES.g4} />
                                            </div>
                                            <div className='technology--sections-slider-slides'>
                                                <img src={IMAGES.g13} />
                                            </div>
                                            <div className='technology--sections-slider-slides'>
                                                <img src={IMAGES.g14} />
                                            </div>
                                            <div className='technology--sections-slider-slides'>
                                                <img src={IMAGES.g15} />
                                            </div>
                                            <div className='technology--sections-slider-slides'>
                                                <img src={IMAGES.g13} />
                                            </div>
                                            <div className='technology--sections-slider-slides'>
                                                <img src={IMAGES.g14} />
                                            </div>
                                            <div className='technology--sections-slider-slides'>
                                                <img src={IMAGES.g15} />
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                                </div>
                                {/* <div className='that-first'>
                                  <div className='that-bg'>
                                  <img src={op9} />
                                  </div>
                                  <div className='open-to'>
                                  <img src={op2} />
                                  </div>
                                  <div className='open-side'>
                                  <img src={op8} />
                                  </div>
                                  <div className='open-side1'>
                                  <img src={op1} />
                                  </div>
                                  <div className='open-side2'>
                                  <img src={op5} />
                                  <p>5.0 Star Reviews</p>
                                  <img src={op6} />
                                  </div>
                                  <div className='open-side3'>
                                    <div className='pop-to'>
                                  <img src={op3} /></div>
                                  <div className='popl-to'>
                                  <p>popular Merchants</p></div>
                                  </div>
                                </div> */}
                                <div className='wd'>
                                    <img src={IMAGES.se} />
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