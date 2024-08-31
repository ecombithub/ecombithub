import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import IMAGES from './Allfiles/image';

function Footer() {

    const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);
    // const [isFbHovered, setIsFbHovered] = useState(false);
    // const [isInsHovered, setIsInsHovered] = useState(false);
    // const [isInsHove, setIsInsHove] = useState(false);
    // const [isIns, setIsIns] = useState(false);
    // const [plus, setPlus] = useState(false);
    // const [youq, setYouq] = useState(false);
    // const [whated, setWhated] = useState(false);


    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [company, setCompany] = useState('');
    const [web, setWeb] = useState('');
    const [scheduleCall, setScheduleCall] = useState(false);
    const [message, setMessage] = useState('');
    const [sendmessage, setSendmessage] = useState('');
    const [loading, setLoading] = useState(false);

    const upload = async (e) => {
        e.preventDefault();

        if (!first || !last || !email) {
            setMessage('Kindly complete all required fields before proceeding.');
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setMessage("Thank you for your submission! We'll get back to you shortly.");

            setFirst('');
            setLast('');
            setEmail('');
            setNumber('');
            setCompany('');
            setWeb('');
            setSendmessage('');
        }, 2000);

        try {
            const response = await fetch('https://ecombithub-database.onrender.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first,
                    last,
                    email,
                    number,
                    company,
                    web,
                    sendmessage,
                
                }),
            });

            if (response.status === 200) {
                console.log("Thank you for your submission! We'll get back to you shortly.");
            } else {
                throw new Error('Error sending email');
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
            setMessage('Error sending email');
            setLoading(false);
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


    return (
        <>
            <footer>
                <div className='footer-first-bg' >
                    <div className='footer-second-bg' >
                        <div className='build--section' ref={ref}>
                            <div className='wrapper'>
                                <div className='build--section-store'>
                                    <div className='build--section-tag'>
                                        <div className='build--section-begin'>
                                            <div className='build--section-back'>
                                                <div className='build--section-new'>
                                                    <div className='build--section-first-to'>
                                                        <div className='build--section-first-image'>
                                                            <img src={IMAGES.whitelogo} alt='Shopify' itemProp='icon' ref={brand} /></div>
                                                        <div className='build--section-first-elements'>
                                                            <h2 className='get-bg' ref={elementor}>Get a Quote to Build a New Shopify Store</h2></div>
                                                    </div>
                                                    <p className='use--hub' ref={technologyElement}>
                                                        Are you ready to elevate your Shopify store to the next level?  EcombitHub Shopify experts are here to provide personalized solutions that meet your e-commerce needs. Whether you are looking to enhance store design, optimize performance, or integrate advanced features. Fill out the form to receive a detailed proposal customized to your specific requirements.
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
                                                                    value={first}
                                                                    onChange={(e) => setFirst(e.target.value.replace(/[^a-z]/gi, ''))}
                                                                ></input>{' '}
                                                                <br />
                                                                <br />
                                                                <label>Email</label>
                                                                <br />
                                                                <input
                                                                    type='text'
                                                                    value={email}
                                                                    onChange={(e) => setEmail(e.target.value)}

                                                                ></input>{' '}
                                                                <br />
                                                                <br />
                                                                <label>Company Name - (Optional)</label>
                                                                <br />
                                                                <input
                                                                    type='text'
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
                                                                    value={last}
                                                                    onChange={(e) => setLast(e.target.value.replace(/[^a-z]/gi, ''))}
                                                                ></input>{' '}
                                                                <br />
                                                                <br />
                                                                <label>Phone Number - (Optional)</label>
                                                                <br />
                                                                <input
                                                                    type='text'
                                                                    value={number}
                                                                    onChange={(e) => setNumber(e.target.value.replace(/[^0-9]/g, ''))}

                                                                />
                                                                {' '}
                                                                <br />
                                                                <br />
                                                                <label>Website Url - (Optional)</label>
                                                                <br />
                                                                <input
                                                                    type='text'
                                                                    value={web}
                                                                    onChange={(e) => setWeb(e.target.value)}
                                                                ></input>{' '}
                                                                <br />
                                                            </div>

                                                            {/* <div className='build-form-section'> */}
                                                            <div className='build--section-form-all'>
                                                                <label>First Name</label>
                                                                <br />
                                                                <input
                                                                    type='text'
                                                                    value={first}
                                                                    onChange={(e) => setFirst(e.target.value.replace(/[^a-z]/gi, ''))}
                                                                ></input>{' '}
                                                                <br />
                                                                <br />

                                                                <label>Last Name</label>
                                                                <br />
                                                                <input
                                                                    type='text'
                                                                    value={last}
                                                                    onChange={(e) => setLast(e.target.value.replace(/[^a-z]/gi, ''))}
                                                                ></input>{' '}
                                                                <br />
                                                                <br />
                                                                <label>Email</label>
                                                                <br />
                                                                <input
                                                                    type='text'
                                                                    value={email}
                                                                    onChange={(e) => setEmail(e.target.value)}

                                                                ></input>{' '}
                                                                <br />
                                                                <br />
                                                                <label>Phone Number - (Optional)</label>
                                                                <br />
                                                                <input
                                                                    type='text'
                                                                    value={number}
                                                                    onChange={(e) => setNumber(e.target.value.replace(/[^0-9]/g, ''))}

                                                                />
                                                                {' '}
                                                                <br />
                                                                <br />
                                                                <label>Company Name - (Optional)</label>
                                                                <br />
                                                                <input
                                                                    type='text'
                                                                    value={company}
                                                                    onChange={(e) => setCompany(e.target.value.replace(/[^a-z]/gi, ''))}
                                                                ></input>{' '}
                                                                <br />
                                                                <br />
                                                                <label>Website Url - (Optional)</label>
                                                                <br />
                                                                <input
                                                                    type='text'
                                                                    value={web}
                                                                    onChange={(e) => setWeb(e.target.value)}
                                                                ></input>{' '}
                                                                <br />
                                                            </div>
                                                        </div>
                                                        {/* </div> */}
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
                                                                <span className="rotate-text">S</span>
                                                                <span className="rotate-text">u</span>
                                                                <span className="rotate-text">b</span>
                                                                <span className="rotate-text">m</span>
                                                                <span className="rotate-text">i</span>
                                                                <span className="rotate-text">t</span>

                                                            </span>
                                                        </button>
                                                        {loading && <p>Loading...</p>}
                                                        {message && !loading && (
                                                            <p className={
                                                                message === "Thank you for your submission! We'll get back to you shortly."
                                                                    ? 'success-message'
                                                                    : 'error-message'
                                                            }>
                                                                {message}
                                                            </p>
                                                        )}
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
                                            <Link to="/">< img src={IMAGES.blank} alt='EcombitHub' itemProp='logo'  /></Link>
                                            <p>1600D Dove St, Newport Beach, CA 92660, United States D133C, Phase 7, Mohali, Punjab, 160062</p>
                                        </div>
                                        <div className='footer--section-right'>
                                            <div className='footer-shopify-icon'>
                                                <div className='footer-shopify-icon'>
                                                    <img src={IMAGES.expert} alt="shopify expert" />
                                                </div>
                                                <div className='footer-shopify-icon'>
                                                    <img src={IMAGES.shopifyf} alt="shopify plus" />
                                                </div>
                                            </div>
                                            <ul>
                                                <Link to="/terms-and-conditions" style={{ textDecoration: "none", color: "black" }}><li>Term of services</li></Link>
                                                <Link to="/privacy-policy" style={{ textDecoration: "none", color: "black" }}><li>Privacy Policy</li></Link>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-footer">
                        <p>Copyright @2020-2024 <a className='copy_link' target='blank' href='https://www.hubsyntax.com/'>Hubsyntax</a> Limited. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;

