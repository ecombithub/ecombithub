import shopi from '../images/sho-pi.webp';
import connection from '../images/connection.webp';
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { BiSolidXCircle } from "react-icons/bi";
import IMAGES from './image';

function Mega({ onLinkClick, onHideClick }) {

    const handleClick = () => {
        onLinkClick();
    };

    return (
        <>
            <div className='product-shopify-hide-btn'>
                <label onClick={onHideClick} htmlFor="toggle-btn-product-btn" className="product-btn"><BiSolidXCircle /></label>
            </div>
            <div className="product-shopify-mega">
                <div className='wrapper-mega'>
                    <div className="product-shopify-mega-page">
                        <div className="container">
                            <div className="product-shopify-mega-start">
                                <div className="product-shopify-mega-flex">
                                    <div className="product-shopify-project">
                                        <div className="project-shopfiy-one">
                                            <div className="product-shopify-first">
                                                <img src={shopi} alt="" />
                                            </div>
                                            <div className="product-shopify-second">
                                                <h3>Discover Our Awesome Shopify Expert Service </h3>
                                                <p>Transform your Shopify store with our customized solution that aligns with your business objectives. </p>
                                                {/* <button className='mega-project'>View Our Services <FontAwesomeIcon style={{ fontSize: "13px" }} icon={faChevronRight} /> <FontAwesomeIcon style={{ fontSize: "13px" }} icon={faChevronRight} /></button> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-shopify-project-group">
                                        {/* <div className='product-items'>
                                            <Link to='/build' onClick={handleClick} > <div className='product-shopify-start-flex-bg'>
                                                <div className="product-shopify-project-image">
                                                    <img src={trowel} alt="" />
                                                </div>
                                                <div className="product-shopify-project-elements">
                                                    <h5>Build from <span className='life-shopify'>Scratch</span></h5>
                                                    <p>Our dedicated Shopify designers bring your vision to life on Shopify.</p>
                                                </div>
                                            </div></Link>
                                        </div>
                                        <div className='product-items'>
                                            <Link to='/store' onClick={handleClick} > <div className='product-shopify-start-flex-bg'>
                                                <div className="product-shopify-project-image">
                                                    <img src={setting} alt="" />
                                                </div>
                                                <div className="product-shopify-project-elements">
                                                    <h5>Store <span className='life-shopify'>Customization</span></h5>
                                                    <p>Our dedicated Shopify designers bring your vision to life on Shopify.</p>
                                                </div>
                                            </div></Link>
                                        </div>
                                        <div className='product-items'>
                                            <Link to='/design' onClick={handleClick}>  <div className='product-shopify-start-flex-bg'>
                                                <div className="product-shopify-project-image">
                                                    <img src={store} alt="" />
                                                </div>
                                                <div className="product-shopify-project-elements">
                                                    <h5>Desgin <span className='life-shopify'>Store</span></h5>
                                                    <p>Our dedicated Shopify designers bring your vision to life on Shopify.</p>
                                                </div>
                                            </div></Link>
                                        </div>
                                        <div className='product-items'>
                                            <Link to='/migration' onClick={handleClick}> <div className='product-shopify-start-flex-bg'>
                                                <div className="product-shopify-project-image">
                                                    <img src={shopify21} alt="" />
                                                </div>
                                                <div className="product-shopify-project-elements">
                                                    <h5>Migration to <span className='life-shopify'>Shopify</span></h5>
                                                    <p>Our dedicated Shopify designers bring your vision to life on Shopify.</p>
                                                </div>
                                            </div></Link>
                                        </div> */}
                                        <div className='product-items'>
                                            <Link to='/app' onClick={handleClick}>   <div className='product-shopify-start-flex-bg'>
                                                <div className="product-shopify-project-image">
                                                    <img src={connection} alt="" />
                                                </div>
                                                <div className="product-shopify-project-elements">
                                                    <h5>Custom <span className='life-shopify'>App</span></h5>
                                                    <p>Unlock new possibilities with a custom app. Explore and innovate.</p>
                                                </div>
                                            </div></Link></div>

                                        {/* <div className='product-items'>
                                            <Link to='/store' onClick={handleClick} > <div className='product-shopify-start-flex-bg'>
                                                <div className="product-shopify-project-image">
                                                    <img src={IMAGES.settings} alt="" />
                                                </div>
                                                <div className="product-shopify-project-elements">
                                                    <h5>Store <span className='life-shopify'>Customization</span></h5>
                                                    <p>Our dedicated Shopify designers bring your vision to life on Shopify.</p>
                                                </div>
                                            </div></Link>
                                        </div> */}

                                        {/* <div className='product-items'>
                                            <Link to='/speed' onClick={handleClick}>      <div className='product-shopify-start-flex-bg'>
                                                <div className="product-shopify-project-image">
                                                    <img src={optimization} alt="" />
                                                </div>
                                                <div className="product-shopify-project-elements">
                                                    <h5>Speed <span className='life-shopify'>Optimization</span></h5>
                                                    <p>Our dedicated Shopify designers bring your vision to life on Shopify.</p>
                                                </div>
                                            </div></Link>
                                        </div>
                                        <div className='product-items'>
                                            <Link to='/seo' onClick={handleClick}>   <div className='product-shopify-start-flex-bg'>
                                                <div className="product-shopify-project-image">
                                                    <img src={seo} alt="" />
                                                </div>
                                                <div className="product-shopify-project-elements">
                                                    <h5>SEO/ CRO/ AOV</h5>
                                                    <p>Our dedicated Shopify designers bring your vision to life on Shopify.</p>
                                                </div>
                                            </div></Link>
                                        </div> */}
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

export default Mega;










// import he from './images/node1.png'
// import he1 from './images/p6.png'
// import he2 from './images/p2.png'
// import he3 from './images/p4.png'
// import he4 from './images/p8.png'
// import he5 from './images/p5.png'
// import he6 from './images/p3.png'
// import he7 from './images/p9.png'
// import he8 from './images/p10.png'
// import { Link } from "react-router-dom";

// function Mega({ onLinkClick }) {

//     const handleClick = () => {
//         onLinkClick();
//     };

//     return (
//         <>

//             <div className="feature--sections">
//                 <div className="feature--sections-megapage">
//                     <div className="features_all">
//                         <div className="feature--sections-megapage-first">
//                             <div className="feature--sections-megapage-first-element">
//                                 <h4>All features  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></h4>
//                             </div>
//                             <div className="feature--sections-megapage-first-image">
//                                 <img src={he} alt="" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="features_all">
//                         <Link to='/build' onClick={handleClick} > <div className="feature_flex">
//                             <div className="ceo">
//                                 <div className="ceo1">
//                                     <img src={he1} alt="" />
//                                 </div>
//                                 <div className="ceo2">
//                                     <h4>Build from</h4>
//                                     <h3>Scratch</h3>
//                                 </div>
//                             </div>

//                             <div className="car">
//                                 <img src={he2} alt="" />
//                             </div>
//                         </div></Link>
//                         <Link to='/store' onClick={handleClick} > <div className="feature_flex">
//                             <div className="ceo">
//                                 <div className="ceo1">
//                                     <img src={he3} alt="" />
//                                 </div>
//                                 <div className="ceo2">
//                                     <h4>Store</h4>
//                                     <h3>Customization</h3>
//                                 </div>
//                             </div>
//                             <div className="car">
//                                 <img src={he2} alt="" />
//                             </div>
//                         </div></Link>
//                         <Link to='/design' onClick={handleClick}> <div className="feature_flex">
//                             <div className="ceo">
//                                 <div className="ceo1">
//                                     <img src={he4} alt="" />
//                                 </div>
//                                 <div className="ceo2">
//                                     <h4>Design</h4>
//                                     <h3>Store</h3>
//                                 </div>
//                             </div>
//                             <div className="car">
//                                 <img src={he2} alt="" />
//                             </div>
//                         </div></Link>

//                     </div>
//                     <div className="features_all">
//                         <Link to='/migration' onClick={handleClick}>   <div className="feature_flex">
//                             <div className="ceo">
//                                 <div className="ceo1">
//                                     <img src={he5} alt="" />
//                                 </div>
//                                 <div className="ceo2">
//                                     <h4>Migration</h4>
//                                     <h3>to Shopify</h3>
//                                 </div>
//                             </div>

//                             <div className="car">
//                                 <img src={he2} alt="" />
//                             </div>
//                         </div></Link>
//                         <Link to='/app' onClick={handleClick}> <div className="feature_flex">
//                             <div className="ceo">
//                                 <div className="ceo1">
//                                     <img src={he6} alt="" />
//                                 </div>
//                                 <div className="ceo2">
//                                     <h4>App</h4>
//                                     <h3>Integration</h3>
//                                 </div>
//                             </div>
//                             <div className="car">
//                                 <img src={he2} alt="" />
//                             </div>
//                         </div></Link>
//                         <Link to='/speed' onClick={handleClick}> <div className="feature_flex">
//                             <div className="ceo">
//                                 <div className="ceo1">
//                                     <img src={he7} alt="" />
//                                 </div>
//                                 <div className="ceo2">
//                                     <h4>Speed</h4>
//                                     <h3>Optimization</h3>
//                                 </div>
//                             </div>
//                             <div className="car">
//                                 <img src={he2} alt="" />
//                             </div>
//                         </div></Link>

//                     </div>
//                     <div className="features_all">
//                         <Link to='/seo' onClick={handleClick}><div className="feature_flex">
//                             <div className="ceo">
//                                 <div className="ceo1">
//                                     <img src={he8} alt="" />
//                                 </div>
//                                 <div className="ceo2">
//                                     <h4>SEO/ CRO/ AOV</h4>

//                                 </div>
//                             </div>
//                             <div className="car">
//                                 <img src={he2} alt="" />
//                             </div>
//                         </div></Link>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )

// }
// export default Mega;


