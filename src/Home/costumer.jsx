import IMAGES from "../Allfiles/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

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
                    slidesToShow: 1,
                }
            },

        ]

    };

    const [ref, inView] = useInView();
    const brand = useRef(null);
    const [autoplay, setAutoplay] = useState(false);
    const totalStoresRef = useRef(null);

    useEffect(() => {
        if (inView && !autoplay) {
            gsap.fromTo(
                totalStoresRef.current,
                { textContent: "0" },
                {
                    textContent: "3000",
                    duration: 1,
                    ease: "power1.inOut",
                    snap: { textContent: 1 },
                    onUpdate: function () {
                        totalStoresRef.current.textContent = Math.floor(totalStoresRef.current.textContent);
                    },
                    onComplete: function () {
                        totalStoresRef.current.textContent = "3000+";
                    }
                }
            );
            setAutoplay(true);
        }
    }, [inView, autoplay]);

    return (
        <>

            <div className='customer--section' ref={ref}>
                <div className="customer--section-work">
                    <div className='wrappered'>
                        <div className='customer--section-our'>
                            <h2>
                                Our <span ref={totalStoresRef} style={{ color: "rgb(252, 85, 105)" }}>0</span> customers in their words
                            </h2>
                            <p>The great appreciation of our customers speaks louder than us!</p>
                        </div>
                    </div>

                    <div className='customer--section-slider'>
                        <div className="wrappers">
                            <Slider {...settings}>
                                <div className="customer-section-slider">
                                    <img src={IMAGES.Ellipse1} alt="Nested Natural" />
                                    <p>They transformed our basic Shopify theme into truly unique and tailored to our brand. The customization process is done properly and they were open to all our feedback and suggestions. The final theme is stunning and performs beautifully across all devices.</p>
                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.Ellipse} itemprop ="name" />
                                            </div>
                                            <div className="customer-section-slides-test">
                                                <div className="customer-client-name">
                                                <p>Joanne</p>
                                                </div>
                                             
                                                <p>Nested Natural</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>
                                <div className="customer-section-slider">
                                    <img src={IMAGES.codester} alt="Codistry" />
                                    <p>We were struggling with search engines visibility, but after their SEO optimization, our Shopify store is ranking much higher. Their knowledge of Shopify SEO is outstanding, and the results speak this.</p>
                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.codester1} itemprop ="name" />
                                            </div>
                                            <div className="customer-section-slides-test">
                                            <div className="customer-client-name">
                                                <p>Josue Mora</p>
                                                </div>
                                                <p>Codistry</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>
                                <div className="customer-section-slider">
                                    <img src={IMAGES.psy3}  alt="All Star Digital"/>
                                    <p>Migrating the store from woocommerce to Shopify is a difficult task, but they handled everything with ease. The transition was smooth, with no data loss or disruptions to our business. Their professionalism and expertise made the entire process stress-free.
                                    </p>

                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.psy2} itemprop ="name" />
                                            </div>
                                            <div className="customer-section-slides-test">
                                            <div className="customer-client-name">
                                                <p>Bradley Keys</p>
                                                </div>
                                                <p>All Star Digital</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>
                                <div className="customer-section-slider">
                                    <img src={IMAGES.fum2} alt="Fum" />

                                    <p> The design and implementation of a custom section for our Shopify store were handled in a skillful manner. The final product is responsive and user-friendly.
                                    </p>
                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.fum102} itemprop ="name" />
                                            </div>
                                            <div className="customer-section-slides-test">
                                            <div className="customer-client-name">
                                                <p>Jay</p>
                                                </div>
                                                <p>Fum</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>
                                <div className="customer-section-slider">
                                    <img src={IMAGES.psy}  alt="PSY commerce"/>
                                    <p>Our store was outdated, and needed redesign. Ecombithub gave it a completely new modern, user-friendly design and has improved our overall customer experience. Their creativity and attention to detail are exceptional.
                                    </p>
                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.psy1} itemprop ="name"/>
                                            </div>
                                            <div className="customer-section-slides-test">
                                            <div className="customer-client-name">
                                                <p>Josef Kara</p>
                                                </div>
                                                <p>PSY commerce</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>

                                <div className="customer-section-slider">
                                    <img src={IMAGES.tes2} alt="Strand Media"/>
                                    <p>I was impressed with the level of expertise and professionalism. The app they created is not only functional but also visually appealing. The team was always available to address any concerns and made sure we were happy with the final product.</p>
                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.tes1} itemprop ="name" />
                                            </div>
                                            <div className="customer-section-slides-test">
                                            <div className="customer-client-name">
                                                <p>Ole</p>
                                                </div>
                                                <p>Strand Media</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>

                                <div className="customer-section-slider">
                                    <img src={IMAGES.neola}  alt="Neola Design"/>
                                    <p>I was a bit hesitant to hire a development agency for my Shopify store, but Ecombithub completely exceeded my expectations. Their team is not only technically proficient but also very creative. They took the time to understand my brand and created a website that perfectly reflects my business.  </p>
                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.neola1} itemprop ="name"/>
                                            </div>
                                            <div className="customer-section-slides-test">
                                            <div className="customer-client-name">
                                                <p>Andrea Hauer</p>
                                                </div>
                                                <p>Neola Design</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>

                                <div className="customer-section-slider">
                                    <img src={IMAGES.clientlogo} alt="Retrospec"/>
                                    <p>I just finished working with ecombithub on our Shopify store, and it was a fantastic experience. They really know their stuff when it comes to Shopify and delivered a website that's not only functional but also looks amazing. </p>
                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.clientlogo1} itemprop ="name"/>
                                            </div>
                                            <div className="customer-section-slides-test">
                                            <div className="customer-client-name">
                                                <p>Ely KhaKshouri</p>
                                                </div>
                                                <p>Retrospec</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="customer-section-slider">
                                    <img src={IMAGES.clientlooo} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentes que so llicitudin, tellus eu  volutpat  vehicula, sapien neque maxim us nisi, non s celerisque ex trupis mattis nisi. Praesent pharenta nisl vel ante porta bibendum.Aenean quis accumsan nulla. </p>
                                    <div className="customer-section-slides">
                                        <div className="customer-section-all-sides">
                                            <div className="customer-section-slides-images">
                                                <img src={IMAGES.last} />
                                            </div>
                                            <div className="customer-section-slides-test">
                                                <p>Alex Fetanat</p>
                                                <p>GemFind</p>
                                            </div>
                                        </div>
                                        <div className="customer-section-image-star">
                                            <img src={IMAGES.starrr120} />
                                        </div>
                                    </div>
                                </div>
                                 */}

                            </Slider>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Cost;

