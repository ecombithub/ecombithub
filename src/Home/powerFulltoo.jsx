import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMAGES from '../Allfiles/image';
import  { useState } from 'react';
import Slider from 'react-slick';

const PrevArrow = (props) => {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{
                display: "block",
                left: "77%",
                top: "117%",
                backgroundColor: "white",
                
            }}
            onClick={onClick}
        >
            <div
                style={{
                    position: "absolute",
                }}
            ></div>
            <img src={IMAGES.Layer577}  alt='left arrow'/>

        </div>
    );
}
const NextArrow = (props) => {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{
                display: "block",
                top: "117%",
                left: "89%",
                backgroundColor: "white",

            }}
            onClick={onClick}
        >
            <div
                style={{
                    position: "absolute",
                }}
            ></div>
            <img src={IMAGES.Layer2} alt=' right arrow'/>

        </div>
    );
}

function Powerfull() {
    const [isHovered, setIsHovered] = useState(false);
    const [firestHovered, setFirstHovered] = useState(false);
    const [secondHovered, setSecondHovered] = useState(false);
    const [thirdHovered, setThirdHovered] = useState(false);
    const [fourHovered, setFourHovered] = useState(false);
    const [fiveHovered, setFiveHovered] = useState(false);
    const setting = {
        dots: false,
        infinite: true,
        slidesToShow:1,
        adaptiveHeight: true,
        variableWidth: true,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
          }

          
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true, 
    speed: 1000,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    reverseDirection: true,
    rtl: true,

  };

  
  return (
    <div>
       <div className="powerfull-section">
        <div className="wrapper">
            <div className="container">
                  <div className="powerfull-tool-flex">
                   <div className="powerfull-tool-image">
                   <div className="powerfull-tool-image-slider" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                     <Slider {...settings}>
                     <div className="powerfull-tool-image-slides" >
                                            {!isHovered && (
                                                <>
                                                  <img src={IMAGES.one0} alt="" />
                                                </>
                                            )}
                                            {isHovered && <img src={IMAGES.two0} alt="" />}
                                        </div> 
                                        
                         <div className="powerfull-tool-image-slides" >
                         {!isHovered && (
                                                <>
                                                <img src={IMAGES.one2} alt="" />
                                                </>
                                            )}
                                            {isHovered && <img src={IMAGES.two2} alt="" />}
                                        </div>
                        <div className="powerfull-tool-image-slides" >
                        {!isHovered && (
                                                <>
                                                 <img src={IMAGES.que} alt="" />
                                                </>
                                            )}
                                            {isHovered && <img src={IMAGES.oo1} alt="" />}
                                               
                                        </div> 
                        <div className="powerfull-tool-image-slides" >
                        {!isHovered && (
                                                <>
                                                 <img src={IMAGES.com} alt="" />
                                                </>
                                            )}
                                            {isHovered && <img src={IMAGES.nek} alt="" />}
                                               
                                        </div>  
                                        
                                        <div className="powerfull-tool-image-slides" >
                                        {!isHovered && (
                                                <>
                                                 <img src={IMAGES.one5} alt="" />
                                                </>
                                            )}
                                            {isHovered && <img src={IMAGES.two3} alt="" />}
                                               
                                        </div>
                                        
                                        <div className="powerfull-tool-image-slides" >
                                            {!isHovered && (
                                                <>
                                                        <img src={IMAGES.one6} alt="" />
                                                </>
                                            )}
                                            {isHovered && <img src={IMAGES.two4} alt="" />} 
                                          
                                        </div>
                                        {/* <div className="powerfull-tool-image-slides" >
                                            {!isHovered && (
                                                <>
                                                        <img src={IMAGES.power1} alt="" />
                                                </>
                                            )}
                                            {isHovered && <img src={IMAGES.power2} alt="" />} 
                                          
                                        </div>
                                        <div className="powerfull-tool-image-slides" >
                                            {!isHovered && (
                                                <>
                                                        <img src={IMAGES.power3} alt="" />
                                                </>
                                            )}
                                            {isHovered && <img src={IMAGES.power4} alt="" />} 
                                          
                                        </div>
                                        <div className="powerfull-tool-image-slides" >
                                            {!isHovered && (
                                                <>
                                                        <img src={IMAGES.power5} alt="" />
                                                </>
                                            )}
                                            {isHovered && <img src={IMAGES.power6} alt="" />} 
                                          
                                        </div>
                                        <div className="powerfull-tool-image-slides" >
                                            {!isHovered && (
                                                <>
                                                        <img src={IMAGES.power7} alt="" />
                                                </>
                                            )}
                                            {isHovered && <img src={IMAGES.power8} alt="" />} 
                                          
                                        </div> */}

                      </Slider>
                      </div>

                      <div className="powerfull-tool-image-slider" onMouseEnter={() => setFirstHovered(true)} onMouseLeave={() => setFirstHovered(false)}>
                     <Slider {...settings}>
                     {/* <div className="powerfull-tool-image-slides" >
                                            {!firestHovered && (
                                                <>
                                                        <img src={IMAGES.power7} alt="" />
                                                </>
                                            )}
                                            {firestHovered && <img src={IMAGES.power8} alt="" />} 
                                          
                                        </div>
                     <div className="powerfull-tool-image-slides" > */}
                        
                                            {/* {!firestHovered && (
                                                <>
                                                        <img src={IMAGES.power5} alt="" />
                                                </>
                                            )}
                                            {firestHovered && <img src={IMAGES.power6} alt="" />} 
                                          
                                        </div> */}
                                        {/* <div className="powerfull-tool-image-slides" >
                                            {!firestHovered && (
                                                <>
                                                        <img src={IMAGES.power1} alt="" />
                                                </>
                                            )}
                                            {firestHovered && <img src={IMAGES.power2} alt="" />} 
                                          
                                        </div> */}

                     <div className="powerfull-tool-image-slides" >
                        
                                          {!firestHovered && (
                                                <>
                                                <img src={IMAGES.one2} alt="" />
                                                </>
                                            )}
                                            {firestHovered && <img src={IMAGES.two2} alt="" />}
                                        </div>

                                        <div className="powerfull-tool-image-slides" >
                                          {!firestHovered && (
                                                <>
                                                 <img src={IMAGES.que} alt="" />
                                                </>
                                            )}
                                            {firestHovered && <img src={IMAGES.oo1} alt="" />}
                                               
                                        </div>
                         <div className="powerfull-tool-image-slides" >
                                          {!firestHovered && (
                                                <>
                                                 <img src={IMAGES.com} alt="" />
                                                </>
                                            )}
                                            {firestHovered && <img src={IMAGES.nek} alt="" />}
                                               
                                        </div>
                         <div className="powerfull-tool-image-slides" >
                         {!firestHovered && (
                                                <>
                                                 <img src={IMAGES.one5} alt="" />
                                                </>
                                            )}
                                            {firestHovered && <img src={IMAGES.two3} alt="" />}
                                               
                                        </div>
                                        <div className="powerfull-tool-image-slides" >
                                        {!firestHovered && (
                                                <>
                                                        <img src={IMAGES.one6} alt="" />
                                                </>
                                            )}
                                            {firestHovered && <img src={IMAGES.two4} alt="" />} 
                                          
                                        </div> 
                         <div className="powerfull-tool-image-slides" >
                         {!firestHovered && (
                                                <>
                                                  <img src={IMAGES.one0} alt="" />
                                                </>
                                            )}
                                            {firestHovered && <img src={IMAGES.two0} alt="" />}
                                        </div>
                                        {/* <div className="powerfull-tool-image-slides" >
                                            {!firestHovered && (
                                                <>
                                                        <img src={IMAGES.power3} alt="" />
                                                </>
                                            )}
                                            {firestHovered && <img src={IMAGES.power4} alt="" />} 
                                          
                                        </div> */}
                                        
                      </Slider>
                      </div>

                      <div className="powerfull-tool-image-slider" onMouseEnter={() => setSecondHovered(true)} onMouseLeave={() => setSecondHovered(false)}>
                     <Slider {...settings}>
                     <div className="powerfull-tool-image-slides" >
                                          {!secondHovered && (
                                                <>
                                                 <img src={IMAGES.que} alt="" />
                                                </>
                                            )}
                                            {secondHovered && <img src={IMAGES.oo1} alt="" />}
                                               
                                        </div>
                                        {/* <div className="powerfull-tool-image-slides" >
                                            {!secondHovered && (
                                                <>
                                                        <img src={IMAGES.power5} alt="" />
                                                </>
                                            )}
                                            {secondHovered && <img src={IMAGES.power6} alt="" />} 
                                          
                                        </div> */}
                      <div className="powerfull-tool-image-slides" >
                      {!secondHovered && (
                                                <>
                                                 <img src={IMAGES.com} alt="" />
                                                </>
                                            )}
                                            {secondHovered && <img src={IMAGES.nek} alt="" />}
                                               
                                        </div>
                                        {/* <div className="powerfull-tool-image-slides" >
                                            {!secondHovered && (
                                                <>
                                                        <img src={IMAGES.power7} alt="" />
                                                </>
                                            )}
                                            {secondHovered && <img src={IMAGES.power8} alt="" />} 
                                          
                                        </div> */}
                        <div className="powerfull-tool-image-slides" >
                        {!secondHovered && (
                                                <>
                                                 <img src={IMAGES.one5} alt="" />
                                                </>
                                            )}
                                            {secondHovered && <img src={IMAGES.two3} alt="" />}
                                               
                                        </div>

                                        {/* <div className="powerfull-tool-image-slides" >
                                            {!secondHovered && (
                                                <>
                                                        <img src={IMAGES.power3} alt="" />
                                                </>
                                            )}
                                            {secondHovered && <img src={IMAGES.power4} alt="" />} 
                                          
                                        </div> */}
                        <div className="powerfull-tool-image-slides" >
                        {!secondHovered && (
                                                <>
                                                        <img src={IMAGES.one6} alt="" />
                                                </>
                                            )}
                                            {secondHovered && <img src={IMAGES.two4} alt="" />} 
                                          
                                        </div>
                                        <div className="powerfull-tool-image-slides" >
                                        {!secondHovered && (
                                                <>
                                                  <img src={IMAGES.one0} alt="" />
                                                </>
                                            )}
                                            {secondHovered && <img src={IMAGES.two0} alt="" />}
                                        </div> 
                        <div className="powerfull-tool-image-slides" >
                        {!secondHovered && (
                                                <>
                                                <img src={IMAGES.one2} alt="" />
                                                </>
                                            )}
                                            {secondHovered && <img src={IMAGES.two2} alt="" />}
                                        </div>

                                        {/* <div className="powerfull-tool-image-slides" >
                                            {!secondHovered && (
                                                <>
                                                        <img src={IMAGES.power1} alt="" />
                                                </>
                                            )}
                                            {secondHovered && <img src={IMAGES.power2} alt="" />} 
                                          
                                        </div> */}
                      </Slider>
                      </div>

                      <div className="powerfull-tool-image-slider" onMouseEnter={() => setThirdHovered(true)} onMouseLeave={() => setThirdHovered(false)}>
                     <Slider {...settings}>
                     {/* <div className="powerfull-tool-image-slides" >
                                            {!thirdHovered && (
                                                <>
                                                        <img src={IMAGES.power3} alt="" />
                                                </>
                                            )}
                                            {thirdHovered && <img src={IMAGES.power4} alt="" />} 
                                          
                                        </div> */}
                                        {/* <div className="powerfull-tool-image-slides" >
                                            {!thirdHovered && (
                                                <>
                                                        <img src={IMAGES.power7} alt="" />
                                                </>
                                            )}
                                            {thirdHovered && <img src={IMAGES.power8} alt="" />} 
                                          
                                        </div> */}
                     <div className="powerfull-tool-image-slides" >
                                          {!thirdHovered && (
                                                <>
                                                 <img src={IMAGES.com} alt="" />
                                                </>
                                            )}
                                            {thirdHovered && <img src={IMAGES.nek} alt="" />}
                                               
                                        </div>
                       <div className="powerfull-tool-image-slides" >
                       {!thirdHovered && (
                                                <>
                                                 <img src={IMAGES.one5} alt="" />
                                                </>
                                            )}
                                            {thirdHovered && <img src={IMAGES.two3} alt="" />}
                                               
                                        </div>
                                        {/* <div className="powerfull-tool-image-slides" >
                                            {!thirdHovered && (
                                                <>
                                                        <img src={IMAGES.power5} alt="" />
                                                </>
                                            )}
                                            {thirdHovered && <img src={IMAGES.power6} alt="" />} 
                                          
                                        </div> */}
                        <div className="powerfull-tool-image-slides" >
                        {!thirdHovered && (
                                                <>
                                                        <img src={IMAGES.one6} alt="" />
                                                </>
                                            )}
                                            {thirdHovered && <img src={IMAGES.two4} alt="" />} 
                                          
                                        </div>
                                        {/* <div className="powerfull-tool-image-slides" >
                                            {!thirdHovered && (
                                                <>
                                                        <img src={IMAGES.power1} alt="" />
                                                </>
                                            )}
                                            {thirdHovered && <img src={IMAGES.power2} alt="" />} 
                                          
                                        </div> */}
                        <div className="powerfull-tool-image-slides" >
                        {!thirdHovered && (
                                                <>
                                                  <img src={IMAGES.one0} alt="" />
                                                </>
                                            )}
                                            {thirdHovered && <img src={IMAGES.two0} alt="" />}
                                        </div> 

                                        <div className="powerfull-tool-image-slides" >
                                           {!thirdHovered && (
                                                <>
                                                <img src={IMAGES.one2} alt="" />
                                                </>
                                            )}
                                            {thirdHovered && <img src={IMAGES.two2} alt="" />}
                                        </div>
                        <div className="powerfull-tool-image-slides" >
                        {!thirdHovered && (
                                                <>
                                                 <img src={IMAGES.que} alt="" />
                                                </>
                                            )}
                                            {thirdHovered && <img src={IMAGES.oo1} alt="" />}
                                               
                                        </div>
                      </Slider>
                      </div>

                      <div className="powerfull-tool-image-slider" onMouseEnter={() => setFourHovered(true)} onMouseLeave={() => setFourHovered(false)}>
                     <Slider {...settings}>
                     {/* <div className="powerfull-tool-image-slides" >
                                            {!fourHovered && (
                                                <>
                                                        <img src={IMAGES.power1} alt="" />
                                                </>
                                            )}
                                            {fourHovered && <img src={IMAGES.power2} alt="" />} 
                                          
                                        </div> */}
                     <div className="powerfull-tool-image-slides" >
                                          {!fourHovered && (
                                                <>
                                                 <img src={IMAGES.one5} alt="" />
                                                </>
                                            )}
                                            {fourHovered && <img src={IMAGES.two3} alt="" />}
                                               
                                        </div>
                           <div className="powerfull-tool-image-slides" >
                           {!fourHovered && (
                                                <>
                                                        <img src={IMAGES.one6} alt="" />
                                                </>
                                            )}
                                            {fourHovered && <img src={IMAGES.two4} alt="" />} 
                                          
                                        </div> 
                                        {/* <div className="powerfull-tool-image-slides" >
                                            {!fourHovered && (
                                                <>
                                                        <img src={IMAGES.power5} alt="" />
                                                </>
                                            )}
                                            {fourHovered && <img src={IMAGES.power6} alt="" />} 
                                          
                                        </div>
                                        <div className="powerfull-tool-image-slides" >
                                            {!fourHovered && (
                                                <>
                                                        <img src={IMAGES.power7} alt="" />
                                                </>
                                            )}
                                            {fourHovered && <img src={IMAGES.power8} alt="" />} 
                                          
                                        </div> */}
                          <div className="powerfull-tool-image-slides" >
                          {!fourHovered && (
                                                <>
                                                  <img src={IMAGES.one0} alt="" />
                                                </>
                                            )}
                                            {fourHovered && <img src={IMAGES.two0} alt="" />}
                                        </div> 
                          <div className="powerfull-tool-image-slides" >
                          {!fourHovered && (
                                                <>
                                                <img src={IMAGES.one2} alt="" />
                                                </>
                                            )}
                                            {fourHovered && <img src={IMAGES.two2} alt="" />}
                                        </div>
                                        <div className="powerfull-tool-image-slides" >
                                        {!fourHovered && (
                                                <>
                                                 <img src={IMAGES.que} alt="" />
                                                </>
                                            )}
                                            {fourHovered && <img src={IMAGES.oo1} alt="" />}
                                               
                                        </div>
                          <div className="powerfull-tool-image-slides" >
                          {!fourHovered && (
                                                <>
                                                 <img src={IMAGES.com} alt="" />
                                                </>
                                            )}
                                            {fourHovered && <img src={IMAGES.nek} alt="" />}
                                               
                                        </div> 
                                        {/* <div className="powerfull-tool-image-slides" >
                                            {!fourHovered && (
                                                <>
                                                        <img src={IMAGES.power3} alt="" />
                                                </>
                                            )}
                                            {fourHovered && <img src={IMAGES.power4} alt="" />} 
                                          
                                        </div> */}
                      </Slider>
                      </div>

                      <div className="powerfull-tool-image-slider" onMouseEnter={() => setFiveHovered(true)} onMouseLeave={() => setFiveHovered(false)}>
                     <Slider {...settings}>
                     {/* <div className="powerfull-tool-image-slides" >
                                            {!fiveHovered && (
                                                <>
                                                        <img src={IMAGES.power5} alt="" />
                                                </>
                                            )}
                                            {fiveHovered && <img src={IMAGES.power6} alt="" />} 
                                          
                                        </div> */}
                     <div className="powerfull-tool-image-slides" >
                        
                                            {!fiveHovered && (
                                                <>
                                                        <img src={IMAGES.one6} alt="" />
                                                </>
                                            )}
                                            {fiveHovered && <img src={IMAGES.two4} alt="" />} 
                                          
                                        </div>
                        <div className="powerfull-tool-image-slides" >
                        {!fiveHovered && (
                                                <>
                                                  <img src={IMAGES.one0} alt="" />
                                                </>
                                            )}
                                            {fiveHovered && <img src={IMAGES.two0} alt="" />}
                                        </div> 
                         <div className="powerfull-tool-image-slides" >
                         {!fiveHovered && (
                                                <>
                                                <img src={IMAGES.one2} alt="" />
                                                </>
                                            )}
                                            {fiveHovered && <img src={IMAGES.two2} alt="" />}
                                        </div>
                                        {/* <div className="powerfull-tool-image-slides" >
                                            {!fiveHovered && (
                                                <>
                                                        <img src={IMAGES.power1} alt="" />
                                                </>
                                            )}
                                            {fiveHovered && <img src={IMAGES.power2} alt="" />} 
                                          
                                        </div> */}
                         <div className="powerfull-tool-image-slides" >
                         {!fiveHovered && (
                                                <>
                                                 <img src={IMAGES.que} alt="" />
                                                </>
                                            )}
                                            {fiveHovered && <img src={IMAGES.oo1} alt="" />}
                                               
                                        </div>
                                        {/* <div className="powerfull-tool-image-slides" >
                                            {!fiveHovered && (
                                                <>
                                                        <img src={IMAGES.power7} alt="" />
                                                </>
                                            )}
                                            {fiveHovered && <img src={IMAGES.power8} alt="" />} 
                                          
                                        </div> */}
                                        <div className="powerfull-tool-image-slides" >
                                        {!fiveHovered && (
                                                <>
                                                 <img src={IMAGES.com} alt="" />
                                                </>
                                            )}
                                            {fiveHovered && <img src={IMAGES.nek} alt="" />}
                                               
                                        </div>
                         <div className="powerfull-tool-image-slides" >
                         {!fiveHovered && (
                                                <>
                                                 <img src={IMAGES.one5} alt="" />
                                                </>
                                            )}
                                            {fiveHovered && <img src={IMAGES.two3} alt="" />}
                                               
                                        </div>
                                        {/* <div className="powerfull-tool-image-slides" >
                                            {!fiveHovered && (
                                                <>
                                                        <img src={IMAGES.power3} alt="" />
                                                </>
                                            )}
                                            {fiveHovered && <img src={IMAGES.power4} alt="" />} 
                                          
                                        </div> */}
                      </Slider>
                      </div>
                      
                   </div>
                      <div className="powerfull-tool-elements">
                      <div className="powerfull-tool-elements-tool">
                      <h2>EcombitHub Empowers<span style={{color:'rgb(241, 76, 96)'}}> Businesses</span></h2>
                      <p>We specialize in providing custom solutions to tackle the specific challenges in e-commerce business. Our custom Shopify solution enhance the store functionality, optimize performance, and drive growth. </p>
                      <div className="powerfull-tool-elements-slider">
                      <Slider {...setting}>
                      <div className="powerfull-tool-elements-slide">
                           <p> "Design is the intermediary between information and understanding".</p>
                            <div className="power-tool-name">
                            <p>- Jeffrey Zeldman</p>
                            </div>
                        </div>
                        <div className="powerfull-tool-elements-slide">
                           <p> "Design is not just what it looks like and feels like. Design is how it works".</p>
                           <div className="power-tool-name">
                            <p>- Steve Jobs </p>
                            </div>
                        </div>
                        <div className="powerfull-tool-elements-slide">
                           <p> "User experience is not just about usability; it’s about creating a relationship with the user".</p>
                           <div className="power-tool-name">
                            <p>- Ethan Marcotte</p>
                            </div>
                        </div>
                        <div className="powerfull-tool-elements-slide">
                           <p> "User experience is not just about usability; it’s about creating a relationship with the user".</p>
                           <div className="power-tool-name">
                            <p>- Don Norman </p>
                            </div>
                        </div>
                        <div className="powerfull-tool-elements-slide">
                           <p> "People may forget what you said, but they will never forget how you made them feel".</p>
                           <div className="power-tool-name">
                            <p>- Maya Angelou</p>
                            </div>
                        </div>
                        <div className="powerfull-tool-elements-slide">
                           <p> "Design is the silent ambassador of your brand".</p>
                           <div className="power-tool-name">
                            <p>- Paul Rand</p>
                            </div>
                        </div>
                      </Slider>
                     
                        </div>
                        <div className='powerfull-tool-elements-slide-images-bg'>
                        <img src={IMAGES.VectorSmartObject} alt="" />
                      </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Powerfull;
























// // import React, { useEffect, useRef, useState } from 'react';
// // import gsap from 'gsap';
// // import { TextPlugin } from 'gsap/TextPlugin';
// // import { useInView } from 'react-intersection-observer';
// // import IMAGES from '../Allfiles/image';

// // gsap.registerPlugin(TextPlugin);

// // function Discover() {
// //     const [ref, inView] = useInView();
// //     const elementor = useRef(null);
// //     const [animationPlayed, setAnimationPlayed] = useState(false);
// //     const [animation, setAnimation] = useState(false);
// //     const item = useRef(null);
// //     const totalStoresRef = useRef(null);
// //     const totalStores = useRef(null);
// //     const totalReviewsRef = useRef(null);
// //     useEffect(() => {
// //         if (inView && !animationPlayed) {
// //             gsap.fromTo(
// //                 elementor.current,
// //                 { opacity: 0, x: 160 },
// //                 { opacity: 1, x: 0, duration: 1, delay: 0.3 }
// //             );
// //             setAnimationPlayed(true);
// //         }
// //     }, [inView, animationPlayed]);

// //     useEffect(() => {
// //         if (inView && !animation) {
// //             gsap.fromTo(
// //                 item.current,
// //                 { opacity: 0, y: 250 },
// //                 { opacity: 1, y: 0, duration: 1, delay: 0.3 }
// //             );

// //             gsap.fromTo(
// //                 totalStoresRef.current,
// //                 { textContent: "0" },
// //                 {
// //                     textContent: "170",
// //                     duration: 2,
// //                     ease: "power1.inOut",
// //                     snap: { textContent: 1 },
// //                     onUpdate: function () {
// //                         totalStoresRef.current.textContent = Math.floor(totalStoresRef.current.textContent);
// //                     },
// //                     onComplete: function () {
// //                         totalStoresRef.current.textContent = "+170";
// //                     }
// //                 }
// //             );

// //             gsap.fromTo(
// //                 totalStores.current,
// //                 { textContent: "0" },
// //                 {
// //                     textContent: "170",
// //                     duration: 2,
// //                     ease: "power1.inOut",
// //                     snap: { textContent: 1 },
// //                     onUpdate: function () {
// //                         totalStores.current.textContent = Math.floor(totalStores.current.textContent);
// //                     },
// //                     onComplete: function () {
// //                         totalStores.current.textContent = "+170";
// //                     }
// //                 }
// //             );

// //             gsap.fromTo(
// //                 totalReviewsRef.current,
// //                 { textContent: "0" },
// //                 {
// //                     textContent: "3.4",
// //                     duration: 2,
// //                     ease: "power1.inOut",
// //                     snap: { textContent: 0.1 },
// //                     onUpdate: function () {
// //                         totalReviewsRef.current.textContent =  parseFloat(totalReviewsRef.current.textContent).toFixed(1);
// //                     },
// //                     onComplete: function () {
// //                         totalReviewsRef.current.textContent = "3.4+";
// //                     }
// //                 }
// //             );

// //             setAnimation(true);
// //         }

// //     }, [inView, animation]);

// //     const shop = useRef(null);
// //     const wix = useRef(null);
// //     const pxl = useRef(null);
// //     useEffect(() => {
// //         const tl = gsap.timeline({ repeat: -1 });

// //         tl.to([shop.current, wix.current, pxl.current], { duration: 2, y: '-=6', ease: 'power1.inOut' })
// //           .to([shop.current, wix.current, pxl.current], { duration: 2, y: '+=6', ease: 'power1.inOut' });

// //         return () => tl.kill();
// //     }, []);

// //     return (
// //         <div className='elementor-section'>
// //             <div className='wrapper'>
// //                 <div className='container'>
// //                     <div className='elementor-top-section' ref={ref}>
// //                         <div className="pxl-item--dots" ref={item}>
// //                             <div className='pxl-item'>
// //                                 <div className="pxl-grid-masonry">
// //                                     <img src={IMAGES.ico} alt="Total Stores Icon" ref={shop} />
// //                                     <h4>Total Stores</h4>
// //                                     <p ref={totalStoresRef}>0</p>
// //                                 </div>
// //                                 <div className='pxl-item--title'>
// //                                     <img src={IMAGES.ico2} alt="Revenue Generated Icon" ref={wix} />
// //                                     <h4>Revenue Generated</h4>
// //                                     <p ref={totalStores}>0</p>
// //                                 </div>
// //                             </div>
// //                             <div className='pxl-new'>
// //                                 <div className="pxl-item--inner">
// //                                     <img src={IMAGES.ico1} alt="5-Star Reviews Icon" ref={pxl} />
// //                                     <h4>5-Star Reviews</h4>
// //                                     <p ref={totalReviewsRef}>0</p>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div className="elementor-widget">
// //                             <div className='elementor-widget--form' ref={elementor}>
// //                                 <img src={IMAGES.ss} alt="Hello World" />
// //                                 <h4>From hello world to IPO.</h4>
// //                                 <h2>
// //                                     <span className="start-text">Discover why</span>
// //                                     <span style={{ color: "#8db848" }}> millions of entrepreneurs</span>
// //                                     <span className="end-text"> choose Shopify to build their business</span>
// //                                 </h2>
// //                                 <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one click upsells and thank you page customization. Enjoy complimentary migration and frictionless implementation with your own plus account manager.</p>
// //                                 <button className='button'>
// //                                 <span className="rotate-container">
// //                                   <span className="rotate-text">K</span>
// //                                   <span className="rotate-text">n</span>
// //                                   <span className="rotate-text">o</span>
// //                                   <span className="rotate-text">w</span>
// //                                   <span className="rotate-text">&nbsp;</span>
// //                                   <span className="rotate-text">M</span>
// //                                   <span className="rotate-text">o</span>
// //                                   <span className="rotate-text">r</span>
// //                                   <span className="rotate-text">e</span>
// //                                   </span>
// //                                  </button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Discover;









// // // import React, { useEffect, useRef } from 'react';
// // // import gsap from 'gsap';
// // // import { useInView } from 'react-intersection-observer';
// // // import ico from '../images/icon 01.png';
// // // import ico1 from '../images/02.png';
// // // import ico2 from '../images/03.png';
// // // import ss from '../images/ss.png';

// // // function Discover() {
    
// // //     const [ref, inView] = useInView();
// // //     const h2Ref = useRef(null);

// // //     useEffect(() => {
// // //         if (inView) {
// // //             gsap.fromTo(
// // //                 h2Ref.current,
// // //                 { opacity: 0, x: -150},
// // //                 { opacity: 1, x: 0, duration: 1, delay: 0.2 }
// // //             );
// // //         }
// // //     }, [inView]);

// // //     return (
// // //         <div className='elementor-section'>
// // //             <div className='wrapper'>
// // //                 <div className='container'>
// // //                     <div className='elementor-top-section'>
// // //                         <div className="pxl-item--dots">
// // //                             <div className='pxl-item'>
// // //                                 <div className="pxl-grid-masonry">
// // //                                     <img src={ico} alt="Total Stores Icon" />
// // //                                     <h4>Total Stores</h4>
// // //                                     <p>+170</p>
// // //                                 </div>
// // //                                 <div className='pxl-item--title'>
// // //                                     <img src={ico2} alt="Revenue Generated Icon" />
// // //                                     <h4>Revenue Generated</h4>
// // //                                     <p>+170</p>
// // //                                 </div>
// // //                             </div>
// // //                             <div className='pxl-new'>
// // //                                 <div className="pxl-item--inner"> 
// // //                                     <img src={ico1} alt="5-Star Reviews Icon" />
// // //                                     <h4>5-Star Reviews</h4>
// // //                                     <p>3.4+</p>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                         <div className="elementor-widget" ref={ref}>
// // //                             <div className='elementor-widget--form'>
// // //                                 <img src={ss} alt="Hello World" />
// // //                                 <h4>From hello world to IPO.</h4>
// // //                                 <h2 ref={h2Ref}>
// // //                                     <span className="start-text">Discover why</span>  
// // //                                     <span style={{ color: "#8db848" }}> millions of entrepreneurs</span> 
// // //                                     <span className="end-text"> choose Shopify to build their business</span>
// // //                                 </h2>
// // //                                 <p>Use HubSyntax to grow your Shopify plus brand via checkout upsells, one click upsells and thank you page customization. Enjoy complimentary migration and frictionless implementation with your own plus account manager.</p>
// // //                                 <button id='pxl-item--button'>Know More</button>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default Discover;


