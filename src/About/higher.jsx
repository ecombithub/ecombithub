import IMAGES from "../Allfiles/image";
function Higher() {
    return (
        <>
            <div className="higher--section">
                <div className="higher-section-rank">
                <div className="wrapper">
                    <div className="container">
                        <div className="higher-section-flex">
                            <div className="higher-section-flex-element">
                                <h1>EcombitHub - Where Shopify Success Stories Begin </h1>
                                <p>EcombitHub believes that every Shopify store success starts with the right platform. We provide everything you need to build, manage, and grow your online store. Whether you're just starting out or looking to scale, EcombitHub is your Shopify partner from the first sale to long-term growth. </p>
                                {/* <button className='button'>
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
                            </button> */}
                            </div>
                            <div className="higher-section-flex-image">
                                <img src={IMAGES.aboutfirst} alt="" />
                                <div className="higher-section-silde">
                                    <img src={IMAGES.n2} alt="" />
                                </div>
                                <div className="higher-section-node">
                                    <img src={IMAGES.n1} alt="" />
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
export default Higher;
