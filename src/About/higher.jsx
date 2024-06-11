import IMAGES from "../Allfiles/image";
function Higher() {
    return (
        <>
            <div className="higher--section">
                <div className="wrapper">
                    <div className="container">
                        <div className="higher--section--ranking">
                            <div className="higher--section--Backlink">
                                <div className="higher--section--seo">
                                    <div className="left-logo">
                                        <h1 className='want_ani'>Want <span style={{ color: "#3A8634" }}> higher</span> rankings and more <span style={{ color: "#FC5569" }}> Traffics?</span></h1>
                                        <p>You've come to the right place. Backlink the place for next-level SEO training and link building strategies. </p>
                                        <button className="btn">
                                        <span className="rotate-container">
                                         <span className="rotate-text">G</span>
                                         <span className="rotate-text">e</span>
                                         <span className="rotate-text">t</span>
                                         <span className="rotate-text">&nbsp;</span>
                                         <span className="rotate-text">i</span>
                                         <span className="rotate-text">n</span>
                                         <span className="rotate-text">&nbsp;</span>
                                         <span className="rotate-text">T</span>
                                         <span className="rotate-text">o</span>
                                         <span className="rotate-text">u</span>
                                         <span className="rotate-text">c</span>
                                         <span className="rotate-text">h</span>
                                        
                                          </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="higher--section--seo-right">
                                    {/* <div className='right1'>
                                    <img src={girl} />
                                </div>
                                <div className="shop">
                                    <img src={group} />
                                </div>
                                <div className="shop1">
                                    <div className="shop3">
                                        <img src={group2} /></div>
                                    <img src={group1} />
                                </div>
                                <div className='maroon'>
                                    <p>Black <br/> Leather Shopes</p>
                                    <h4>$190.00</h4>
                                </div>
                                <div className='maroon1'>
                                    <p>Maroon  <br/> Leather Jacket</p>
                                    <h4>$150.00</h4>
                                </div>
                                <div className='maroon2'>
                                    <p>Round  <br/>  Cap </p>
                                    <h4>$100.00</h4>
                                </div> */}

                                    <img src={IMAGES.o1} />
                                </div>
                            </div>
                        </div>
                        <div className="php_higher">
                            <div className="php_first">
                                <img src={IMAGES.n1} />
                            </div>
                            <div className="php_second">
                                <img src={IMAGES.n2} />
                            </div>
                            <div className="php_third">
                                <img src={IMAGES.n3} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Higher;
