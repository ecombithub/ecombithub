import axios from 'axios'
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import IMAGES from './Allfiles/image';

function Footer() {

    const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);
    const [isFbHovered, setIsFbHovered] = useState(false);
    const [isInsHovered, setIsInsHovered] = useState(false);
    const [isInsHove, setIsInsHove] = useState(false);
    const [isIns, setIsIns] = useState(false);
    const [youq, setYouq] = useState(false);
    const [whated, setWhated] = useState(false);
    const [plus, setPlus] = useState(false);

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [company, setCompany] = useState('');
    const [web, setWeb] = useState('');
    const [scheduleCall, setScheduleCall] = useState(false);
    const [message, setMessage] = useState('');

    const upload = async (e) => {
        e.preventDefault();

        if (!first || !last || !email || !number || !company || !web || !scheduleCall) {
            setMessage('Please fill in all fields.');
            return;
        }

        console.log('Submitting form data:', { first, last, email, number, company, web });

        try {
            const response = await axios.post('https://same-3.onrender.com/api/items', {
                first,
                last,
                email,
                number,
                company,
                web,
            });

            console.log('Response:', response);

            if (response.status === 201) {
                console.log('Email sent successfully');
                setMessage('Email sent successfully');
                setFirst('');
                setLast('');
                setEmail('');
                setNumber('');
                setCompany('');
                setWeb('');
                setScheduleCall(true);
            } else {
                console.error('Error sending email');
                setMessage('Error sending email');
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
            setMessage('Error sending email');
        }
    };

    const [ref, inView] = useInView({
        threshold: 0.3,
    });
    const brand = useRef(null);
    const elementor = useRef(null);
    const [animationPlayed, setAnimationPlayed] = useState(false);
    const [autoplay, setAutoplay] = useState(false);
    const technologyElement = useRef(null);
    const [brandAnimationComplete, setBrandAnimationComplete] = useState(false);

    useEffect(() => {
        if (inView && !autoplay) {
            gsap.fromTo(
                brand.current,
                { opacity: 0, y: -250 },
                { opacity: 1, y: 0, duration: 1, delay: 0.5 }
            );
            setAutoplay(true);
        }
    }, [inView, autoplay]);


    useEffect(() => {
        if (inView && !animationPlayed) {
            gsap.fromTo(
                elementor.current,
                { opacity: 0, x: 250 },
                { opacity: 1, x: 0, duration: 1, delay: 0.2 }
            );
            setAnimationPlayed(true);
        }
    }, [inView, animationPlayed]);

    useEffect(() => {
        if (inView && !brandAnimationComplete) {
            gsap.fromTo(
                technologyElement.current,
                { opacity: 0, x: -250 },
                { opacity: 1, x: 0, duration: 1, delay: 0.4 }
            );
            setBrandAnimationComplete(true);
        }
    }, [inView, brandAnimationComplete]);

    const formSection = useRef(null);

    useEffect(() => {
        if (inView && !hasPlayedAnimation) {
            gsap.fromTo(formSection.current, { opacity: 0 }, { opacity: 2, duration: 5 });
            setHasPlayedAnimation(true);
        }
    }, [inView, hasPlayedAnimation]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.build--section').classList.add('in-view');
        }
    }, [inView]);

    return (
        <>
            <footer>
                <div className='build--section' ref={ref}>
                    <div className='wrapper'>
                        <div className='build--section-store'>
                            <div className='build--section-tag'>
                                <div className='build--section-begin'>
                                    <div className='build--section-back'>
                                        <div className='build--section-new'>
                                            <img src={IMAGES.bag} alt='Background' ref={brand} />
                                            <h1 className='get-bg' ref={elementor}>Get a Quote to Build a New Shopify Store.</h1>
                                            <p className='use--hub' ref={technologyElement}>
                                                Use HubSyntax to grow your Shopify plus brand via checkout
                                                upsells, one-click upsells, and thank you page
                                                customization. Enjoy complimentary migration and frictionless
                                                implementation with your own plus account manager.
                                            </p>
                                        </div>
                                    </div>
                                    <form ref={formSection}>
                                        <div className='build--section-your'>
                                            <div className='build--section-port'>
                                                <div className='build--section-reoprt'>
                                                    <div className='build--section-form'>
                                                        <label>First Name</label>
                                                        <br />
                                                        <input
                                                            type='text'
                                                            placeholder='First Name'

                                                            value={first}
                                                            onChange={(e) => setFirst(e.target.value.replace(/[^a-z]/gi, ''))}
                                                        ></input>{' '}
                                                        <br />
                                                        <br />
                                                        <label>Email</label>
                                                        <br />
                                                        <input
                                                            type='text'
                                                            placeholder='Email'
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}

                                                        ></input>{' '}
                                                        <br />
                                                        <br />
                                                        <label>Company Name</label>
                                                        <br />
                                                        <input
                                                            type='text'
                                                            placeholder='Company Name'
                                                            value={company}
                                                            onChange={(e) => setCompany(e.target.value.replace(/[^a-z]/gi, ''))}
                                                        ></input>{' '}
                                                        <br />
                                                        <br />
                                                    </div>
                                                    <div className='build--section-second-form'>
                                                        <label>Last Name</label>
                                                        <br />
                                                        <input
                                                            type='text'
                                                            placeholder='Last Name'
                                                            value={last}
                                                            onChange={(e) => setLast(e.target.value.replace(/[^a-z]/gi, ''))}
                                                        ></input>{' '}
                                                        <br />
                                                        <br />
                                                        <label>Phone Number</label>
                                                        <br />
                                                        <input
                                                            type='text'
                                                            placeholder='Phone Number'
                                                            value={number}
                                                            onChange={(e) => setNumber(e.target.value.replace(/[^0-9]/g, ''))}

                                                        />
                                                        {' '}
                                                        <br />
                                                        <br />
                                                        <label>Website Url</label>
                                                        <br />
                                                        <input
                                                            type='text'
                                                            placeholder='Website Url'
                                                            value={web}
                                                            onChange={(e) => setWeb(e.target.value.replace(/[^a-z]/gi, ''))}
                                                        ></input>{' '}
                                                        <br />
                                                    </div>
                                                </div>
                                                <div className='build--section-color'>
                                                    <input
                                                        type='checkbox'
                                                        onChange={() => setScheduleCall(!scheduleCall)}
                                                        checked={scheduleCall}

                                                    />
                                                    <p>
                                                        I'd like to Schedule a call to discuss this before we
                                                        start.
                                                    </p>
                                                </div>
                                                <button onClick={upload} id='build--btn'>

                                                    <span className="rotate-container">
                                                        <span className="rotate-text">G</span>
                                                        <span className="rotate-text">e</span>
                                                        <span className="rotate-text">t</span>
                                                        <span className="rotate-text">&nbsp;</span>
                                                        <span className="rotate-text">S</span>
                                                        <span className="rotate-text">t</span>
                                                        <span className="rotate-text">a</span>
                                                        <span className="rotate-text">r</span>
                                                        <span className="rotate-text">t</span>
                                                        <span className="rotate-text">e</span>
                                                        <span className="rotate-text">d</span>
                                                    </span>
                                                </button>
                                                {message && <p style={{ color: "red" }}>{message}</p>}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='footer--section'>
                    <div className="wrapper">
                        <div className="container">
                            <div className="footer">
                                <div className='footer--section-rever'>
                                    <Link to="/">< img src={IMAGES.shop} alt="Shop" /></Link>
                                    <p>&copy; 2023 HubSyntax, All rights reserved.</p>
                                </div>
                                <div className='footer--section-right'>
                                    <ul>
                                        <a href='#' style={{ textDecoration: "none", color: "black" }}><li>About</li></a>
                                        <a href='#' style={{ textDecoration: "none", color: "black" }}><li>Contacts</li></a>
                                        <a href='#' style={{ textDecoration: "none", color: "black" }}><li>Privacy Policy</li></a>
                                        <a href='#' style={{ textDecoration: "none", color: "black" }}><li>Term Condition</li></a>
                                    </ul>
                                    <div className='footer--section-face'>
                                        <a href='https://www.facebook.com/HubSyntax/' target="_blank"><img src={isFbHovered ? IMAGES.f : IMAGES.fb} onMouseEnter={() => setIsFbHovered(true)} onMouseLeave={() => setIsFbHovered(false)} /></a>
                                        <a href='https://www.instagram.com/hubsyntax/' target="_blank"><img src={isInsHovered ? IMAGES.ini : IMAGES.ins} onMouseEnter={() => setIsInsHovered(true)} onMouseLeave={() => setIsInsHovered(false)} /></a>
                                        <a href='https://x.com/i/flow/login?redirect_after_login=%2FHubsyntaxdev' target="_blank"><img src={isInsHove ? IMAGES.t : IMAGES.twi} onMouseEnter={() => setIsInsHove(true)} onMouseLeave={() => setIsInsHove(false)} /></a>
                                        <a href='https://www.linkedin.com/company/hubsyntax?originalSubdomain=in' target="_blank"><img src={isIns ? IMAGES.i : IMAGES.ink} onMouseEnter={() => setIsIns(true)} onMouseLeave={() => setIsIns(false)} /></a>
                                        {/* <a href='#'><img src={youq ? y : you} onMouseEnter={() => setYouq(true)} onMouseLeave={() => setYouq(false)} /></a>
                                        <a href='#'><img src={whated ? w : what} onMouseEnter={() => setWhated(true)} onMouseLeave={() => setWhated(false)} /></a> */}
                                        <a href='https://in.pinterest.com/hubsyntax/' target="_blank"><img src={plus ? IMAGES.p : IMAGES.pl} onMouseEnter={() => setPlus(true)} onMouseLeave={() => setPlus(false)} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;

