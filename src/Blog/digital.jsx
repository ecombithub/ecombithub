import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMAGES from "../Allfiles/image";
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        display: "block",
  
        backgroundColor:"white",
        top: "-50px",
        left: "91%",

      }}
      onClick={onClick}
    >
      <div
        style={{
          position: "absolute",
        }}
      ></div>
      <img src={IMAGES.leftt}/>

    </div>
  );
}
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        display: "block",
     
 backgroundColor:"white",
        top: "-50px",
        right: "9px"
      }}
      onClick={onClick}
    >
      <div
        style={{
          position: "absolute",
        }}
      ></div>
     <img src={IMAGES.rightt}/>

    </div>
  );
}
function Digital() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              slidesToScroll: 3,
              infinite: false,
              dots: false
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,


          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,

          }
      }
  ]

  };


  return (
    <>
      <div className="digital-marketing--section">
        <div className="wrapper">
        <div className="container">
          <div className="digital--section-call">
            <h2>Digital Marketing</h2>
            <p>Digital marketing, also called online marketing,<span style={{ color: "#FC5569" }}> is the promotion </span></p>

            <div className="digital--section-solid">
            <Slider {...settings}>
              <div className="digital--section-google">
                <img src={IMAGES.react1} />
                <div className="digital--section-google-ads">
                  <button id="go">Google Ads</button>
                  <h3>Why You Should Set Up Enhanced Goggle Analytics for Your  <span style={{ color: "#FC5569" }}>Shopify Store?   </span></h3>
                  <div className="digital--section-google-mark">
                    <h4>  <span style={{ color: "#FC5569" }}> Digital Marketing </span></h4>
                    <p>2 November 2020</p>
                  </div>
                </div>
              </div>
              <div className="digital--section-google">
                <img src={IMAGES.react2} />
                <div className="digital--section-google-ads">
                  <button id="go1">Keyword Research</button>
                  <h3> Leveraging Goggle Ads to Reach Your  <span style={{ color: "#FC5569" }}>Target Audience  </span></h3>
                  <div className="digital--section-google-mark">
                    <h4>  <span style={{ color: "#FC5569" }}> Digital Marketing </span></h4>
                    <p>2 November 2020</p>
                  </div>
                </div>
              </div>
              <div className="digital--section-google">
                <img src={IMAGES.react3} />
                <div className="digital--section-google-ads">
                  <button id="go1">Keyword Research</button>
                  <h3>Why You Should Set Up Enhanced Goggle Analytics for Your  <span style={{ color: "#FC5569" }}>Shopify Store?   </span></h3>
                  <div className="digital--section-google-mark">
                    <h4>  <span style={{ color: "#FC5569" }}> Digital Marketing </span></h4>
                    <p>2 November 2020</p>
                  </div>
                </div>
              </div>
              <div className="digital--section-google">
                <img src={IMAGES.react1} />
                <div className="digital--section-google-ads">
                  <button id="go">Goggle Ads</button>
                  <h3>Why You Should Set Up Enhanced Goggle Analytics for Your  <span style={{ color: "#FC5569" }}>Shopify Store?   </span></h3>
                  <div className="digital--section-google-mark">
                    <h4>  <span style={{ color: "#FC5569" }}> Digital Marketing </span></h4>
                    <p>2 November 2020</p>
                  </div>
                </div>
              </div>
              <div className="digital--section-google">
                <img src={IMAGES.react2} />
                <div className="digital--section-google-ads">
                  <button id="go1">Keyword Research</button>
                  <h3> Leveraging Goggle Ads to Reach Your  <span style={{ color: "#FC5569" }}>Target Audience  </span></h3>
                  <div className="digital--section-google-mark">
                    <h4>  <span style={{ color: "#FC5569" }}> Digital Marketing </span></h4>
                    <p>2 November 2020</p>
                  </div>
                </div>
              </div>
              <div className="digital--section-google">
                <img src={IMAGES.react3} />
                <div className="digital--section-google-ads">
                  <button id="go1">Keyword Research</button>
                  <h3>Why You Should Set Up Enhanced Goggle Analytics for Your  <span style={{ color: "#FC5569" }}>Shopify Store?   </span></h3>
                  <div className="digital--section-google-mark">
                    <h4>  <span style={{ color: "#FC5569" }}> Digital Marketing </span></h4>
                    <p>2 November 2020</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}
export default Digital;