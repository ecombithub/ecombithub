import React, { useState, useRef, useEffect } from 'react';
import { BiSolidXCircle } from "react-icons/bi";
import { TfiAlignJustify } from "react-icons/tfi";
import { Link, NavLink } from "react-router-dom";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import gsap from 'gsap';
import Mega from './Allfiles/Megamenu';
import IMAGES from './Allfiles/image';
import { useLocation } from 'react-router-dom';
import { IoClose, IoMenu } from "react-icons/io5";

function Head() {
    const navRef = useRef(null);
    const megaMenuRef = useRef(null);
    const dropServiceRef = useRef(null);
    const dropBlogRef = useRef(null);

    const [megaVisible, setMegaVisible] = useState(false);
    const [servicesClicked, setServicesClicked] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [blogClicked, setBlogClicked] = useState(false);
    const [navbarColor, setNavbarColor] = useState(false);
    const [scrollThreshold, setScrollThreshold] = useState(550);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [activeLink, setActiveLink] = useState(null);

    const location = useLocation();
     useEffect(() => {
         const path = location.pathname;
         if (path.includes('/services') || path.includes('/app')) {
             setActiveLink('services');
         } else if (path.includes('/blog')) {
             setActiveLink('blog');
         } else if (path.includes('/about')) {
             setActiveLink('about');
         } else if (path.includes('/contact')) {
             setActiveLink('contact');
         } else {
             setActiveLink(null);
         }
     }, [location.pathname]);

     useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                megaMenuRef.current && !megaMenuRef.current.contains(event.target)
            ) {
                setMegaVisible(false);
                setActiveLink(null);
            }
        };
   
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
       
    useEffect(() => {
        if (servicesClicked && dropServiceRef.current) {
            gsap.to(dropServiceRef.current, { duration: 0.5, opacity: 1, height: 'auto', ease: 'power2.inOut' });
        } else if (!servicesClicked && dropServiceRef.current) {
            gsap.to(dropServiceRef.current, { duration: 0.5, opacity: 0, height: 0, ease: 'power2.inOut' });
        }
    }, [servicesClicked]);

    useEffect(() => {
        if (blogClicked && dropBlogRef.current) {
            gsap.to(dropBlogRef.current, { duration: 0.5, opacity: 1, height: 'auto', ease: 'power2.inOut' });
        } else if (!blogClicked && dropBlogRef.current) {
            gsap.to(dropBlogRef.current, { duration: 0.5, opacity: 0, height: 0, ease: 'power2.inOut' });
        }
    }, [blogClicked]);

    const handleMegaClick = () => {
        setMegaVisible(!megaVisible);
    };

    const handleMegaLinkClick = () => {
        setMegaVisible(!megaVisible);
        setServicesClicked(true);
        setBlogClicked(false);
        setActiveLink('services');
    };

    const handleServicesClick = (e) => {
        e.stopPropagation();
        setServicesClicked(!servicesClicked);
        setBlogClicked(false);
    };

    const handleBlogClick = (e) => {
        e.stopPropagation();
        setBlogClicked(!blogClicked);
        setServicesClicked(false);
    };

    const handleMouseEnter = () => {
        setMegaVisible(true);
    };


    const handleOtherLinkClick = (link) => {
        setServicesClicked(false);
        setMenuOpen(false);
        setMegaVisible(false);
        setActiveLink(link);
    };

    const handleOtherLinkMouseEnter = () => {
        if (!servicesClicked, !blogClicked) {
            setMegaVisible(false);
        }
    };

    const handleHideClick = () => {
        setMegaVisible(false);
    };

    const handleDocumentClick = (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
            setMenuOpen(false);
            setMegaVisible(false);
            setServicesClicked(false);

        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50 || window.innerWidth < 320) {
                setNavbarColor(true);
            } else {
                setNavbarColor(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);
    
    const headerStyle = {
        backgroundImage: navbarColor ? `url(${IMAGES.header})` : 'none',
        transition: 'background-image 0.5s ease-in-out, opacity 0.5s ease-in-out',
        backgroundSize: 'cover'
    };

    const toggleMenu = () => setMenuOpen(prevState => !prevState);

    return (

         <header ref={navRef} style={headerStyle}>
            <div className='wrapper'>
                <div className='container'>
                    <div className='logo'>
                        <div className="brand-logo ">
                            <Link to="/">
                                <img src={IMAGES.bithub} alt="EcombitHub" exact to="/" onClick={handleOtherLinkClick}  itemprop="logo"/>
                            </Link>
                        </div>
                      <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                          <IoMenu />
                            </div>
                        <nav>
                        <div className={`nav__menu ${menuOpen ? "show-menu" : ""}`} id="nav-menu">
                            <ul className='nav-list'>
                                <div className="brand-logo1">
                                    <Link to="/"> <img src={IMAGES.bithub} alt="EcombitHub" itemprop="logo" onClick={handleOtherLinkClick} /></Link>
                                </div>
                                <li className='first-home-li' style={{ color: navbarColor ? 'white' : 'white' }}>
                                    <div className='home-image-nav'>
                                        <div className='home-image-face'>
                                            <img src={IMAGES.home} alt="logo" />
                                        </div>
                                        <div className="home-image-content">
                                            <NavLink activeClassName="active" style={{ color: "white" }} className="nav-link" aria-current="page" exact to="/" onClick={handleOtherLinkClick} >Home</NavLink>
                                        </div>
                                    </div>
                                </li> 
                                    <li className='product-shopify-show-after'>
                                    <NavLink
                                        onClick={handleMegaLinkClick}
                                        style={{ color: activeLink === 'services' ? "#fe3e5e" : navbarColor ? 'white' : 'white' }}
                                        className="drop_blog"
                                        aria-current="page"
                                    >
                                        Service
                                    </NavLink>
                                    {megaVisible && (
                                        <ul ref={megaMenuRef} className="product-shopify show">
                                            <Mega onLinkClick={() => handleOtherLinkClick('services')} />
                                        </ul>
                                    )}
                                </li>

                                <li className='product-shopify-show-before' onClick={handleServicesClick} style={{ backgroundColor: servicesClicked ? 'rgb(90, 133, 61)' : 'transparent' }}>
                                    <div className='servies-content'>
                                        <div className='serveries-flex'>
                                            <img src={IMAGES.Service} alt="logo" />
                                        </div>
                                        <div className='servies-elements'>
                                            <NavLink activeClassName="active" style={{ color: servicesClicked ? "#fe3e5e" : "black" }} className={`drop_blog ${servicesClicked ? "services-active" : ""}`} aria-current="page" onClick={handleServicesClick} >
                                                Service {servicesClicked ? <FaChevronUp className='right-show' /> : <FaChevronDown className='right-show' />}

                                            </NavLink>

                                        </div>
                                    </div>
                                    {servicesClicked && (
                                        <div ref={dropServiceRef} className='drop-servie'>
                                            <ul>
                                          <Link to="/app" onClick={handleOtherLinkClick} >  <li>
                                                    <div className="servics-page-flex-nav">
                                                        <div className="servics-images-start">
                                                            <img src={IMAGES.Build1} alt="logo" />
                                                        </div>
                                                        <div className="servics-elements-start">
                                                            <NavLink activeClassName="active" style={{ color: "black" }} className="nav-link" aria-current="page" exact to="/app">App <span className='life-shopify'>Integration</span></NavLink>
                                                        </div>
                                                    </div>
                                                </li>
                                                </Link>
                                                
                                               
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li className='first-blog-section'>
                                    <NavLink activeClassName="active" style={{ color: navbarColor ? 'white' : 'white' }} className="nav-link" aria-current="page" exact to="/blog" onClick={handleOtherLinkClick} >Blog</NavLink>
                                </li>

                                <li className='second-blog-section' onClick={handleBlogClick} style={{ backgroundColor: blogClicked ? 'rgb(90, 133, 61)' : 'transparent' }}>
                                    <div className='blog-section-navabr' >
                                        <div className="blog-flex" >
                                            <div className="blog-image-flex">
                                                <img src={IMAGES.about} alt="logo" />
                                            </div>
                                            <div className="blog-elements-flex"  >
                                                <NavLink activeClassName="active" style={{ color: "black" }} className="nav-link" aria-current="page" exact to="/blog" onClick={handleOtherLinkClick} >Blog</NavLink>
                                            </div>
                                        </div>

                                        
                                    </div>
                                </li>

                                <li className='about-home-page'>
                                    <div className="about-flex-nav">
                                        <div className="about-image-flex">
                                            <img src={IMAGES.blog} alt="logo" />
                                        </div>
                                        <div className='about-element-flex'>
                                            <NavLink activeClassName="active" style={{ color: navbarColor ? 'white' : 'white' }} className="nav-link" aria-current="page" exact to="/about" onClick={handleOtherLinkClick} >About</NavLink>
                                        </div>
                                    </div>
                                </li>
                                <li className='content-home'>
                                    <div className="about-flex-nav">
                                        <div className="about-image-flex">
                                            <img src={IMAGES.content0} alt="logo" />
                                        </div>
                                        <div className='about-element-flex'>
                                            <NavLink activeClassName="active" style={{ color: navbarColor ? 'white' : 'white' }} className="nav-link" aria-current="page" exact to="/contact" onClick={handleOtherLinkClick} >Contact Us</NavLink>
                                        </div>
                                    </div>
                                </li>

                               
                                <Link to="https://calendly.com/ecom-support/shopify-expert"><button id='us' exact to="/" onClick={handleOtherLinkClick} ><span className="rotate-container">
                                    <span className="rotate-text">B</span>
                                    <span className="rotate-text">o</span>
                                    <span className="rotate-text">o</span>
                                    <span className="rotate-text">k</span>
                                    <span className="rotate-text">&nbsp;</span>
                                    <span className="rotate-text">a</span>
                                    <span className="rotate-text">&nbsp;</span>
                                    <span className="rotate-text">C</span>
                                    <span className="rotate-text">a</span>
                                  
                                    <span className="rotate-text">l</span>
                                    <span className="rotate-text">l</span>
                                </span></button></Link>
                                <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                                    <IoClose />
                               </div>
                                
                            </ul>
                            </div>
                        </nav>

                         
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Head;









// // // import React, { useState, useRef, useEffect } from 'react';
// // // import { BiSolidXCircle } from "react-icons/bi";
// // // import { TfiAlignJustify } from "react-icons/tfi";
// // // import { Link, NavLink } from "react-router-dom";
// // // import { FaChevronUp, FaChevronDown } from "react-icons/fa";
// // // import gsap from 'gsap';
// // // import Mega from './Allfiles/Megamenu';
// // // import IMAGES from './Allfiles/image';

// // // function Head() {
// // //     const navRef = useRef(null);
// // //     const megaMenuRef = useRef(null);
// // //     const dropServiceRef = useRef(null);
// // //     const dropBlogRef = useRef(null);
// // //     const [megaVisible, setMegaVisible] = useState(false);
// // //     const [servicesClicked, setServicesClicked] = useState(false);
// // //     const [menuOpen, setMenuOpen] = useState(false);
// // //     const [blogClicked, setBlogClicked] = useState(false);
// // //     const [navbarColor, setNavbarColor] = useState(false);
// // //     const [scrollThreshold, setScrollThreshold] = useState(550);
// // //     const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    
// // //     useEffect(() => {
// // //         if (servicesClicked && dropServiceRef.current) {
// // //             gsap.to(dropServiceRef.current, { duration: 0.5, opacity: 1, height: 'auto', ease: 'power2.inOut' });
// // //         } else if (!servicesClicked && dropServiceRef.current) {
// // //             gsap.to(dropServiceRef.current, { duration: 0.5, opacity: 0, height: 0, ease: 'power2.inOut' });
// // //         }
// // //     }, [servicesClicked]);

// // //     useEffect(() => {
// // //         if (blogClicked && dropBlogRef.current) {
// // //             gsap.to(dropBlogRef.current, { duration: 0.5, opacity: 1, height: 'auto', ease: 'power2.inOut' });
// // //         } else if (!blogClicked && dropBlogRef.current) {
// // //             gsap.to(dropBlogRef.current, { duration: 0.5, opacity: 0, height: 0, ease: 'power2.inOut' });
// // //         }
// // //     }, [blogClicked]);

// // //     const handleMegaClick = () => {
// // //         setMegaVisible(!megaVisible);
// // //     };

// // //     const handleMegaLinkClick = () => {
// // //         setMegaVisible(!megaVisible);
// // //         setServicesClicked(true);
// // //         setBlogClicked(false);
// // //     };


// // //     const handleServicesClick = (e) => {
// // //         e.stopPropagation();
// // //         setServicesClicked(!servicesClicked);
// // //         setBlogClicked(false);
// // //     };

// // //     const handleBlogClick = (e) => {
// // //         e.stopPropagation();
// // //         setBlogClicked(!blogClicked);
// // //         setServicesClicked(false);
// // //     };

// // //     const handleMouseEnter = () => {
// // //         setMegaVisible(true);
// // //     };

// // //     const handleMouseLeave = (e) => {
// // //         const megaMenuRect = megaMenuRef.current.getBoundingClientRect();
// // //         const distanceToMegaMenu = {
// // //             top: e.clientY - megaMenuRect.top,
// // //             right: megaMenuRect.right - e.clientX,
// // //             bottom: megaMenuRect.bottom - e.clientY,
// // //             left: e.clientX - megaMenuRect.left
// // //         };
// // //         if (
// // //             distanceToMegaMenu.top > -1 &&
// // //             distanceToMegaMenu.right > -1 &&
// // //             distanceToMegaMenu.bottom > -10 &&
// // //             distanceToMegaMenu.left > -1
// // //         ) {

// // //             return;
// // //         }
// // //         setMegaVisible(false);
// // //     };

// // //     const handleOtherLinkClick = () => {
// // //         setServicesClicked(false);
// // //         setMenuOpen(false);
// // //         setMegaVisible(false);
// // //     };

// // //     const handleOtherLinkMouseEnter = () => {
// // //         if (!servicesClicked, !blogClicked) {
// // //             setMegaVisible(false);
// // //         }
// // //     };

// // //     const handleHideClick = () => {
// // //         setMegaVisible(false);
// // //     };

// // //     const handleDocumentClick = (e) => {
// // //         if (navRef.current && !navRef.current.contains(e.target)) {
// // //             setMenuOpen(false);
// // //             setMegaVisible(false);
// // //             setServicesClicked(false);

// // //         }
// // //     };

// // //     useEffect(() => {
// // //         document.addEventListener('click', handleDocumentClick);
// // //         return () => {
// // //             document.removeEventListener('click', handleDocumentClick);
// // //         };
// // //     }, []);

// // //     // useEffect(() => {
// // //     //     const handleResize = () => {
// // //     //         setScreenWidth(window.innerWidth);
// // //     //     };
    
// // //     //     const handleScroll = () => {
// // //     //         if (screenWidth <= 768) {
// // //     //             if (window.scrollY > 200) {
// // //     //                 setNavbarColor(true);
// // //     //             } else {
// // //     //                 setNavbarColor(false);
// // //     //             }
// // //     //         } else if (screenWidth <= 1024) {
// // //     //             if (window.scrollY > 300) {
// // //     //                 setNavbarColor(true);
// // //     //             } else {
// // //     //                 setNavbarColor(false);
// // //     //             }
// // //     //         } else {
               
// // //     //             if (window.scrollY > 550) {
// // //     //                 setNavbarColor(true);
// // //     //             } else {
// // //     //                 setNavbarColor(false);
// // //     //             }
// // //     //         }
// // //     //     };
    
// // //     //     window.addEventListener('scroll', handleScroll);
// // //     //     window.addEventListener('resize', handleResize);

// // //     //     handleScroll();
    
// // //     //     return () => {
// // //     //         window.removeEventListener('scroll', handleScroll);
// // //     //         window.removeEventListener('resize', handleResize);
// // //     //     };
// // //     // }, [screenWidth]);



// // //     // const headerStyle = {
// // //     //     backgroundImage: navbarColor ? `url(${IMAGES.header1})` : 'none',
// // //     //     transition: 'background-image 0.5s ease-in-out, opacity 0.5s ease-in-out ',
// // //     //     backgroundSize:'cover'
// // //     // };

    
// // //     useEffect(() => {
// // //         const handleScroll = () => {
// // //             if (window.scrollY > 50 || window.innerWidth < 320) {
// // //                 setNavbarColor(true);
// // //             } else {
// // //                 setNavbarColor(false);
// // //             }
// // //         };

// // //         window.addEventListener('scroll', handleScroll);
// // //         window.addEventListener('resize', handleScroll);
// // //         return () => {
// // //             window.removeEventListener('scroll', handleScroll);
// // //             window.removeEventListener('resize', handleScroll);
// // //         };
// // //     }, []);
    
// // //     const headerStyle = {
// // //         backgroundImage: navbarColor ? `url(${IMAGES.header1})` : 'none',
// // //         transition: 'background-image 0.5s ease-in-out, opacity 0.5s ease-in-out',
// // //         backgroundSize: 'cover'
// // //     };


// // //     return (

// // //         <header ref={navRef} style={headerStyle}>
// // //             <div className='wrapper'>
// // //                 <div className='container'>
// // //                     <div className='logo'>
// // //                         <div className="brand-logo ">
// // //                             <Link to="/">
// // //                                 <img src={IMAGES.bithub} alt="logo" exact to="/" onClick={handleOtherLinkClick} />
// // //                             </Link>
// // //                         </div>

// // //                         {/* <input type="checkbox" id="toggle-btn" />
// // //                         <label htmlFor="toggle-btn" className="show-menu-btn"><TfiAlignJustify /></label>
// // //                         */}

// // //                         <input type="checkbox" id="toggle-btn" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
// // //                         <label htmlFor="toggle-btn" className="show-menu-btn" ><TfiAlignJustify style={{ color: navbarColor ? 'white' : 'white', }} /></label>

// // //                         <nav>
// // //                             <ul className="navigation" >
// // //                                 <div className="brand-logo1">
// // //                                     <Link to="/"> <img src={IMAGES.bithub} alt="logo" onClick={handleOtherLinkClick} /></Link>
// // //                                 </div>
// // //                                 <li style={{ color: navbarColor ? 'white' : 'white' }}>
// // //                                     <div className='home-image-nav'>
// // //                                         <div className='home-image-face'>
// // //                                             <img src={IMAGES.home} alt="logo" />
// // //                                         </div>
// // //                                         <div className="home-image-content">
// // //                                             <NavLink activeClassName="active" style={{ color: "white" }} className="nav-link" aria-current="page" exact to="/" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>Home</NavLink>
// // //                                         </div>
// // //                                     </div>
// // //                                 </li>
// // //                                 <li className='product-shopify-show-after' ref={megaMenuRef} onMouseLeave={handleMouseLeave} >

// // //                                     <NavLink onClick={handleMegaLinkClick} style={{ color: servicesClicked ? "#fe3e5e" : navbarColor ? 'white' : 'white' }} className={`drop_blog ${servicesClicked ? "services-active" : ""}`} aria-current="page">Service</NavLink>
// // //                                     <ul className={`product-shopify ${megaVisible ? 'show' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
// // //                                         <Mega onLinkClick={handleMegaLinkClick} onHideClick={handleHideClick} />
// // //                                     </ul>

// // //                                 </li>

// // //                                 <li className='product-shopify-show-before' onClick={handleServicesClick} style={{ backgroundColor: servicesClicked ? 'rgb(90, 133, 61)' : 'transparent' }}>
// // //                                     <div className='servies-content'>
// // //                                         <div className='serveries-flex'>
// // //                                             <img src={IMAGES.Service} alt="logo" />
// // //                                         </div>
// // //                                         <div className='servies-elements'>
// // //                                             <NavLink activeClassName="active" style={{ color: servicesClicked ? "#fe3e5e" : "black" }} className={`drop_blog ${servicesClicked ? "services-active" : ""}`} aria-current="page" onClick={handleServicesClick} onMouseEnter={handleOtherLinkMouseEnter}>
// // //                                                 Service {servicesClicked ? <FaChevronUp className='right-show' /> : <FaChevronDown className='right-show' />}

// // //                                             </NavLink>

// // //                                         </div>
// // //                                     </div>
// // //                                     {servicesClicked && (
// // //                                         <div ref={dropServiceRef} className='drop-servie'>
// // //                                             <ul>
// // //                                                 <Link to="/build" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>  <li>
// // //                                                     <div className="servics-page-flex-nav">
// // //                                                         <div className="servics-images-start">
// // //                                                             <img src={IMAGES.Build1} alt="logo" />
// // //                                                         </div>
// // //                                                         <div className="servics-elements-start">

// // //                                                             <NavLink activeClassName="active" style={{ color: "black" }} className="nav-link" aria-current="page" exact to="/build" >Build from <span className='life-shopify'>Scratch </span></NavLink>
// // //                                                         </div>
// // //                                                     </div>
// // //                                                 </li>
// // //                                                 </Link>
// // //                                                 <Link to="/store" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>  <li>
// // //                                                     <div className="servics-page-flex-nav">
// // //                                                         <div className="servics-images-start">
// // //                                                             <img src={IMAGES.storecustomization} alt="logo" />
// // //                                                         </div>
// // //                                                         <div className="servics-elements-start">
// // //                                                             <NavLink activeClassName="active" style={{ color: "black" }} className="nav-link" aria-current="page" exact to="/store" >Store <span className='life-shopify'>Customization </span></NavLink>
// // //                                                         </div>
// // //                                                     </div>
// // //                                                 </li>
// // //                                                 </Link>
// // //                                                 <Link to="/design" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>  <li>
// // //                                                     <div className="servics-page-flex-nav">
// // //                                                         <div className="servics-images-start">
// // //                                                             <img src={IMAGES.Designstore1} alt="logo" />
// // //                                                         </div>
// // //                                                         <div className="servics-elements-start">
// // //                                                             <NavLink activeClassName="active" style={{ color: "black" }} className="nav-link" aria-current="page" exact to="/design">Desgin <span className='life-shopify'>Store</span></NavLink>
// // //                                                         </div>
// // //                                                     </div>
// // //                                                 </li>
// // //                                                 </Link>
// // //                                                 <Link to="/migration" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>  <li>
// // //                                                     <div className="servics-page-flex-nav">
// // //                                                         <div className="servics-images-start">
// // //                                                             <img src={IMAGES.migration00} alt="logo" />
// // //                                                         </div>
// // //                                                         <div className="servics-elements-start">
// // //                                                             <NavLink activeClassName="active" style={{ color: "black" }} className="nav-link" aria-current="page" exact to="/migration">Migration to <span className='life-shopify'>Shopify</span></NavLink>
// // //                                                         </div>
// // //                                                     </div>
// // //                                                 </li>
// // //                                                 </Link>
// // //                                                 <Link to="/app" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>  <li>
// // //                                                     <div className="servics-page-flex-nav">
// // //                                                         <div className="servics-images-start">
// // //                                                             <img src={IMAGES.Build1} alt="logo" />
// // //                                                         </div>
// // //                                                         <div className="servics-elements-start">
// // //                                                             <NavLink activeClassName="active" style={{ color: "black" }} className="nav-link" aria-current="page" exact to="/app">App <span className='life-shopify'>Integration</span></NavLink>
// // //                                                         </div>
// // //                                                     </div>
// // //                                                 </li>
// // //                                                 </Link>
// // //                                                 <Link to="/speed" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>  <li>
// // //                                                     <div className="servics-page-flex-nav">
// // //                                                         <div className="servics-images-start">
// // //                                                             <img src={IMAGES.speedoptimization} alt="logo" />
// // //                                                         </div>
// // //                                                         <div className="servics-elements-start">
// // //                                                             <NavLink activeClassName="active" style={{ color: "black" }} className="nav-link" aria-current="page" exact to="/speed">Speed <span className='life-shopify'>Optimization</span></NavLink>
// // //                                                         </div>
// // //                                                     </div>
// // //                                                 </li>
// // //                                                 </Link>
// // //                                                 <Link to="/seo" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>  <li>
// // //                                                     <div className="servics-page-flex-nav">
// // //                                                         <div className="servics-images-start">
// // //                                                             <img src={IMAGES.SEO10} alt="logo" />
// // //                                                         </div>
// // //                                                         <div className="servics-elements-start">
// // //                                                             <NavLink activeClassName="active" style={{ color: "black" }} className="nav-link" aria-current="page" exact to="/seo">SEO/CRO/AOV</NavLink>
// // //                                                         </div>
// // //                                                     </div>
// // //                                                 </li>
// // //                                                 </Link>
// // //                                             </ul>
// // //                                         </div>
// // //                                     )}
// // //                                 </li>
// // //                                 <li className='first-blog-section'>
// // //                                     <NavLink activeClassName="active" style={{ color: navbarColor ? 'white' : 'white' }} className="nav-link" aria-current="page" exact to="/blog" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>Blog</NavLink>
// // //                                 </li>

// // //                                 <li className='second-blog-section' onClick={handleBlogClick} style={{ backgroundColor: blogClicked ? 'rgb(90, 133, 61)' : 'transparent' }}>
// // //                                     <div className='blog-section-navabr' >
// // //                                         <div className="blog-flex" >
// // //                                             <div className="blog-image-flex">
// // //                                                 <img src={IMAGES.about} alt="logo" />
// // //                                             </div>
// // //                                             <div className="blog-elements-flex"  >
// // //                                                 <NavLink activeClassName="active" style={{ color: "black" }} className="nav-link" aria-current="page" exact to="/blog" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>Blog</NavLink>
// // //                                             </div>
// // //                                         </div>
// // //                                         <div className='blog-section-show'>
// // //                                             <div className='blog-icon-show'>
// // //                                                 {blogClicked ? <FaChevronUp className='left-show' onClick={handleBlogClick} /> : <FaChevronDown className='left-show' onClick={handleBlogClick} />}
// // //                                             </div>
// // //                                             {blogClicked && (
// // //                                                 <div ref={dropBlogRef} className='drop-blog'>

// // //                                                     <li>
// // //                                                         <NavLink activeClassName="active" style={{ color: blogClicked ? "white" : "#fe3e5e" }} aria-current="page" exact to="/" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>Home</NavLink>
// // //                                                     </li>
// // //                                                     <li>
// // //                                                         <NavLink activeClassName="active" style={{ color: blogClicked ? "white" : "#fe3e5e" }} aria-current="page" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>Advanced SEO</NavLink>
// // //                                                     </li>
// // //                                                     <li>
// // //                                                         <NavLink activeClassName="active" style={{ color: blogClicked ? "white" : "#fe3e5e" }} aria-current="page" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>Channels</NavLink>
// // //                                                     </li>
// // //                                                     <li>
// // //                                                         <NavLink activeClassName="active" style={{ color: blogClicked ? "white" : "#fe3e5e" }} aria-current="page" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>Content</NavLink>
// // //                                                     </li>
// // //                                                     <li>
// // //                                                         <NavLink activeClassName="active" style={{ color: blogClicked ? "white" : "#fe3e5e" }} aria-current="page" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>Marketing</NavLink>
// // //                                                     </li>

// // //                                                 </div>
// // //                                             )}
// // //                                         </div>
// // //                                     </div>
// // //                                 </li>

// // //                                 <li>
// // //                                     <div className="about-flex-nav">
// // //                                         <div className="about-image-flex">
// // //                                             <img src={IMAGES.blog} alt="logo" />
// // //                                         </div>
// // //                                         <div className='about-element-flex'>
// // //                                             <NavLink activeClassName="active" style={{ color: navbarColor ? 'white' : 'white' }} className="nav-link" aria-current="page" exact to="/about" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>About</NavLink>
// // //                                         </div>
// // //                                     </div>
// // //                                 </li>
// // //                                 <li>
// // //                                     <div className="about-flex-nav">
// // //                                         <div className="about-image-flex">
// // //                                             <img src={IMAGES.content0} alt="logo" />
// // //                                         </div>
// // //                                         <div className='about-element-flex'>
// // //                                             <NavLink activeClassName="active" style={{ color: navbarColor ? 'white' : 'white' }} className="nav-link" aria-current="page" exact to="/contact" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>Contact Us</NavLink>
// // //                                         </div>
// // //                                     </div>
// // //                                 </li>

// // //                                 {/* <Link to="/contact"><button id='us' exact to="/" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}>Contact Us</button></Link> */}
// // //                                 <Link to="https://calendly.com/ecom-support/shopify-expert"><button id='us' exact to="/" onClick={handleOtherLinkClick} onMouseEnter={handleOtherLinkMouseEnter}><span className="rotate-container">
// // //                                     <span className="rotate-text">B</span>
// // //                                     <span className="rotate-text">o</span>
// // //                                     <span className="rotate-text">o</span>
// // //                                     <span className="rotate-text">k</span>
// // //                                     <span className="rotate-text">&nbsp;</span>
// // //                                     <span className="rotate-text">a</span>
// // //                                     <span className="rotate-text">&nbsp;</span>
// // //                                     <span className="rotate-text">C</span>
// // //                                     <span className="rotate-text">a</span>
                                  
// // //                                     <span className="rotate-text">l</span>
// // //                                     <span className="rotate-text">l</span>
// // //                                 </span></button></Link>
// // //                                 <label htmlFor="toggle-btn" className="hide-menu-btn"><TfiAlignJustify /></label>
// // //                                 <label for="toggle-btn" class="show-menu">< BiSolidXCircle /></label>
                                
// // //                             </ul>
// // //                         </nav>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </header>

// // //     );
// // // }

// // // export default Head;


// import React, { useState, useRef, useEffect } from 'react';
// import { BiSolidXCircle } from "react-icons/bi";
// import { TfiAlignJustify } from "react-icons/tfi";
// import { Link, NavLink } from "react-router-dom";
// import { FaChevronUp, FaChevronDown } from "react-icons/fa";
// import gsap from 'gsap';
// import Mega from './Allfiles/Megamenu';
// import IMAGES from './Allfiles/image';
// import { useLocation } from 'react-router-dom';

// function Head() {
//     const navRef = useRef(null);
//     const megaMenuRef = useRef(null);
//     const dropServiceRef = useRef(null);
//     const dropBlogRef = useRef(null);
    
//     const [megaVisible, setMegaVisible] = useState(false);
//     const [servicesClicked, setServicesClicked] = useState(false);
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [blogClicked, setBlogClicked] = useState(false);
//     const [navbarColor, setNavbarColor] = useState(false);
//     const [scrollThreshold, setScrollThreshold] = useState(550);
//     const [screenWidth, setScreenWidth] = useState(window.innerWidth);
//     const [activeLink, setActiveLink] = useState(null);

//    const location = useLocation();

//      useEffect(() => {
//          const path = location.pathname;
//          if (path.includes('/services') || path.includes('/app')) {
//              setActiveLink('services');
//          } else if (path.includes('/blog')) {
//              setActiveLink('blog');
//          } else if (path.includes('/about')) {
//              setActiveLink('about');
//          } else if (path.includes('/contact')) {
//              setActiveLink('contact');
//          } else {
//              setActiveLink(null);
//          }
//      }, [location.pathname]);


//      useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (
//                 megaMenuRef.current && !megaMenuRef.current.contains(event.target)
//             ) {
//                 setMegaVisible(false);
//                 setActiveLink(null);
//             }
//         };
   
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);
       
//     useEffect(() => {
//         if (servicesClicked && dropServiceRef.current) {
//             gsap.to(dropServiceRef.current, { duration: 0.5, opacity: 1, height: 'auto', ease: 'power2.inOut' });
//         } else if (!servicesClicked && dropServiceRef.current) {
//             gsap.to(dropServiceRef.current, { duration: 0.5, opacity: 0, height: 0, ease: 'power2.inOut' });
//         }
//     }, [servicesClicked]);

//     useEffect(() => {
//         if (blogClicked && dropBlogRef.current) {
//             gsap.to(dropBlogRef.current, { duration: 0.5, opacity: 1, height: 'auto', ease: 'power2.inOut' });
//         } else if (!blogClicked && dropBlogRef.current) {
//             gsap.to(dropBlogRef.current, { duration: 0.5, opacity: 0, height: 0, ease: 'power2.inOut' });
//         }
//     }, [blogClicked]);

//     const handleMegaClick = () => {
//         setMegaVisible(!megaVisible);
//     };

//     const handleMegaLinkClick = () => {
//         setMegaVisible(!megaVisible);
//         setServicesClicked(true);
//         setBlogClicked(false);
//         setActiveLink('services');
//     };


//     const handleServicesClick = (e) => {
//         e.stopPropagation();
//         setServicesClicked(!servicesClicked);
//         setBlogClicked(false);
//     };

//     const handleBlogClick = (e) => {
//         e.stopPropagation();
//         setBlogClicked(!blogClicked);
//         setServicesClicked(false);
//     };

//     const handleMouseEnter = () => {
//         setMegaVisible(true);
//     };


//     const handleOtherLinkClick = (link) => {
//         setServicesClicked(false);
//         setMenuOpen(false);
//         setMegaVisible(false);
//         setActiveLink(link);
//     };

//     const handleOtherLinkMouseEnter = () => {
//         if (!servicesClicked, !blogClicked) {
//             setMegaVisible(false);
//         }
//     };

//     const handleHideClick = () => {
//         setMegaVisible(false);
//     };

//     const handleDocumentClick = (e) => {
//         if (navRef.current && !navRef.current.contains(e.target)) {
//             setMenuOpen(false);
//             setMegaVisible(false);
//             setServicesClicked(false);

//         }
//     };

//     useEffect(() => {
//         document.addEventListener('click', handleDocumentClick);
//         return () => {
//             document.removeEventListener('click', handleDocumentClick);
//         };
//     }, []);

    
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50 || window.innerWidth < 320) {
//                 setNavbarColor(true);
//             } else {
//                 setNavbarColor(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         window.addEventListener('resize', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//             window.removeEventListener('resize', handleScroll);
//         };
//     }, []);
    
//     const headerStyle = {
//         backgroundImage: navbarColor ? `url(${IMAGES.header1})` : 'none',
//         transition: 'background-image 0.5s ease-in-out, opacity 0.5s ease-in-out',
//         backgroundSize: 'cover'
//     };


//     return (

//         <header ref={navRef} style={headerStyle}>
//             <div className='wrapper'>
//                 <div className='container'>
//                     <div className='logo'>
//                         <div className="brand-logo ">
//                             <Link to="/">
//                                 <img src={IMAGES.bithub} alt="EcombitHub" exact to="/" onClick={handleOtherLinkClick}  itemprop="logo"/>
//                             </Link>
//                         </div>

//                         {/* <input type="checkbox" id="toggle-btn" />
//                         <label htmlFor="toggle-btn" className="show-menu-btn"><TfiAlignJustify /></label>
//                         */}

//                         <input type="checkbox" id="toggle-btn" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
//                         <label htmlFor="toggle-btn" className="show-menu-btn" ><TfiAlignJustify style={{ color: navbarColor ? 'white' : 'white', }} /></label>

//                         <nav>
//                             <ul className="navigation" >
//                                 <div className="brand-logo1">
//                                     <Link to="/"> <img src={IMAGES.bithub} alt="EcombitHub" itemprop="logo" onClick={handleOtherLinkClick} /></Link>
//                                 </div>
//                                 <li style={{ color: navbarColor ? 'white' : 'white' }}>
//                                     <div className='home-image-nav'>
//                                         <div className='home-image-face'>
//                                             <img src={IMAGES.home} alt="logo" />
//                                         </div>
//                                         <div className="home-image-content">
//                                             <NavLink activeClassName="active" style={{ color: "white" }} className="nav-link" aria-current="page" exact to="/" onClick={handleOtherLinkClick} >Home</NavLink>
//                                         </div>
//                                     </div>
//                                 </li> 
//                                     <li className='product-shopify-show-after'>
//                                     <NavLink
//                                         onClick={handleMegaLinkClick}
//                                         style={{ color: activeLink === 'services' ? "#fe3e5e" : navbarColor ? 'white' : 'white' }}
//                                         className="drop_blog"
//                                         aria-current="page"
//                                     >
//                                         Service
//                                     </NavLink>
//                                     {megaVisible && (
//                                         <ul ref={megaMenuRef} className="product-shopify show">
//                                             <Mega onLinkClick={() => handleOtherLinkClick('services')} />
//                                         </ul>
//                                     )}
//                                 </li>

//                                 <li className='product-shopify-show-before' onClick={handleServicesClick} style={{ backgroundColor: servicesClicked ? 'rgb(90, 133, 61)' : 'transparent' }}>
//                                     <div className='servies-content'>
//                                         <div className='serveries-flex'>
//                                             <img src={IMAGES.Service} alt="logo" />
//                                         </div>
//                                         <div className='servies-elements'>
//                                             <NavLink activeClassName="active" style={{ color: servicesClicked ? "#fe3e5e" : "black" }} className={`drop_blog ${servicesClicked ? "services-active" : ""}`} aria-current="page" onClick={handleServicesClick} >
//                                                 Service {servicesClicked ? <FaChevronUp className='right-show' /> : <FaChevronDown className='right-show' />}

//                                             </NavLink>

//                                         </div>
//                                     </div>
//                                     {servicesClicked && (
//                                         <div ref={dropServiceRef} className='drop-servie'>
//                                             <ul>
//                                           <Link to="/app" onClick={handleOtherLinkClick} >  <li>
//                                                     <div className="servics-page-flex-nav">
//                                                         <div className="servics-images-start">
//                                                             <img src={IMAGES.Build1} alt="logo" />
//                                                         </div>
//                                                         <div className="servics-elements-start">
//                                                             <NavLink activeClassName="active" style={{ color: "black" }} className="nav-link" aria-current="page" exact to="/app">App <span className='life-shopify'>Integration</span></NavLink>
//                                                         </div>
//                                                     </div>
//                                                 </li>
//                                                 </Link>
                                                
                                               
//                                             </ul>
//                                         </div>
//                                     )}
//                                 </li>
//                                 <li className='first-blog-section'>
//                                     <NavLink activeClassName="active" style={{ color: navbarColor ? 'white' : 'white' }} className="nav-link" aria-current="page" exact to="/blog" onClick={handleOtherLinkClick} >Blog</NavLink>
//                                 </li>

//                                 <li className='second-blog-section' onClick={handleBlogClick} style={{ backgroundColor: blogClicked ? 'rgb(90, 133, 61)' : 'transparent' }}>
//                                     <div className='blog-section-navabr' >
//                                         <div className="blog-flex" >
//                                             <div className="blog-image-flex">
//                                                 <img src={IMAGES.about} alt="logo" />
//                                             </div>
//                                             <div className="blog-elements-flex"  >
//                                                 <NavLink activeClassName="active" style={{ color: "black" }} className="nav-link" aria-current="page" exact to="/blog" onClick={handleOtherLinkClick} >Blog</NavLink>
//                                             </div>
//                                         </div>

                                        
//                                     </div>
//                                 </li>

//                                 <li>
//                                     <div className="about-flex-nav">
//                                         <div className="about-image-flex">
//                                             <img src={IMAGES.blog} alt="logo" />
//                                         </div>
//                                         <div className='about-element-flex'>
//                                             <NavLink activeClassName="active" style={{ color: navbarColor ? 'white' : 'white' }} className="nav-link" aria-current="page" exact to="/about" onClick={handleOtherLinkClick} >About</NavLink>
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="about-flex-nav">
//                                         <div className="about-image-flex">
//                                             <img src={IMAGES.content0} alt="logo" />
//                                         </div>
//                                         <div className='about-element-flex'>
//                                             <NavLink activeClassName="active" style={{ color: navbarColor ? 'white' : 'white' }} className="nav-link" aria-current="page" exact to="/contact" onClick={handleOtherLinkClick} >Contact Us</NavLink>
//                                         </div>
//                                     </div>
//                                 </li>

                               
//                                 <Link to="https://calendly.com/ecom-support/shopify-expert"><button id='us' exact to="/" onClick={handleOtherLinkClick} ><span className="rotate-container">
//                                     <span className="rotate-text">B</span>
//                                     <span className="rotate-text">o</span>
//                                     <span className="rotate-text">o</span>
//                                     <span className="rotate-text">k</span>
//                                     <span className="rotate-text">&nbsp;</span>
//                                     <span className="rotate-text">a</span>
//                                     <span className="rotate-text">&nbsp;</span>
//                                     <span className="rotate-text">C</span>
//                                     <span className="rotate-text">a</span>
                                  
//                                     <span className="rotate-text">l</span>
//                                     <span className="rotate-text">l</span>
//                                 </span></button></Link>
//                                 <label htmlFor="toggle-btn" className="hide-menu-btn"><TfiAlignJustify /></label>
//                                 <label for="toggle-btn" class="show-menu">< BiSolidXCircle /></label>
                                
//                             </ul>
//                         </nav>

                         
//                     </div>
//                 </div>
//             </div>
//         </header>

//     );
// }

// export default Head;









