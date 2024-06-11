import IMAGES from "../Allfiles/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Tech() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
  return (
    <>
      <div className="business--section-grow">
        <div className='wrapper'>
        <div className="container">
          <div className="business--section-grow-online">
            <div className='business--section-grow-online-store'>
              <div className="business--section-google">
                <div className="business--section-plus">
                  <img src={IMAGES.ag} />
                </div>
                <div className="business--section-long">
                  <div className='business--section-long-ads'>
                  <button id='ad'> <span style={{ color: "#FC5569" }}>Google Ads</span></button>
                  <h2>Technology that  grows with  your <span style={{ color: "#FC5569" }}>online business</span></h2>
                  <p>Use HubSyntax to grow your Shopify plus brand  via checkout upsells, one-click upsells and thank you page custonization.</p>
                </div>
                </div>
              </div>
              <div className="business--section-google">
                <div className="business--section-plus">
                  <img src={IMAGES.ag1} />
                </div>
                <div className="business--section-long">
                <div className='business--section-long-ads'>
                  <button id='ad'> <span style={{ color: "#FC5569" }}>Google Ads</span></button>
                  <h2>Technology that  grows with  your <span style={{ color: "#FC5569" }}>online business</span></h2>
                  <p>Use HubSyntax to grow your Shopify plus brand  via checkout upsells, one-click upsells and thank you page custonization.</p>
                </div>
              </div>
              </div>
              <div className="business--section-google">
                <div className="business--section-plus">
                  <img src={IMAGES.ag2} />
                </div>
                <div className="business--section-long">
                <div className='business--section-long-ads'>
                  <button id='ad'> <span style={{ color: "#FC5569" }}>Google Ads</span></button>
                  <h2>Technology that  grows with  your <span style={{ color: "#FC5569" }}>online business</span></h2>
                  <p>Use HubSyntax to grow your Shopify plus brand  via checkout upsells, one-click upsells and thank you page custonization.</p>
                </div>
              </div>
              </div>
            </div>
            <div className='business--section-angle'>
              <div className='business--section-engine'>
                <img src={IMAGES.ag3} />
                <h1> <span style={{ color: "#FC5569" }}>SEO </span> </h1>
              </div>
         
              <div className='business--section-engine-change'>
                <Slider {...settings}>
                  <div className='business--section-engine-process'>
                    <h2>What is SEO</h2>
                    <p>Keep in mind that SEO is an ongoing process, and search engine algorithms may change. Sta ing informed about industry trends and conous adapting your Strategy is crucial for long-term success. Additionally,ethical prac-</p>
                  </div>
                  <div className='business--section-engine-process'>
                    <h2>What is SEO</h2>
                    <p>Keep in mind that SEO is an ongoing process, and search engine algorithms may change. Sta ing informed about industry trends and conous adapting your Strategy is crucial for long-term success. Additionally,ethical prac-</p>
                  </div>
                  <div className='business--section-engine-process'>
                    <h2>What is SEO</h2>
                    <p>Keep in mind that SEO is an ongoing process, and search engine algorithms may change. Sta ing informed about industry trends and conous adapting your Strategy is crucial for long-term success. Additionally,ethical prac-</p>
                  </div>

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
export default Tech;