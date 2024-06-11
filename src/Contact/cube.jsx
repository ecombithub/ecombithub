import cube1 from '../images/ic1.png';
import cube2 from '../images/ic2.png';
import cube3 from '../images/ic3.png';
import cube4 from '../images/ic4.png';
import cube5 from '../images/ic5.png';
import cube6 from '../images/ic6.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
function Cube() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        // nextArrow: <Arrow />,
        // prevArrow: <Arrow />,
        adaptiveHeight: true,
        variableWidth: true,
        autoplay: true, 
        speed: 2000,
        autoplaySpeed: 2000,
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

    return (
        <>
           

                <div className="today-section-slider">
                    <div className='wrapper'>
                    <div className='lay'>
                    

                        <Slider {...settings}>
                        <div className='today-section-slider-sides'>
                                <img src={cube1} />
                            </div>
                            <div className='today-section-slider-sides'>
                                <img src={cube2} />
                            </div>
                            <div className='today-section-slider-sides'>
                                <img src={cube4} />
                            </div>
                            <div className='today-section-slider-sides'>
                                <img src={cube5} />
                            </div>
                            <div className='today-section-slider-sides'>
                                <img src={cube6} />
                            </div>
                            <div className='today-section-slider-sides'>
                                <img src={cube4} />
                            </div>

                            <div className='today-section-slider-sides'>
                                <img src={cube5} />
                            </div>
                            <div className='today-section-slider-sides'>
                                <img src={cube6} />
                            </div>
                            <div className='today-section-slider-sides'>
                                <img src={cube4} />
                            </div>
                        </Slider>
                    </div>
                    </div>
                </div>
       
        </>
    )
}
export default Cube;