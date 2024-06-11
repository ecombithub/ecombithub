import IMAGES from '../Allfiles/image';

function Store() {
    return (
        <>
            <div className="store--section--shopify">
                <div className="wrapper">
                    <div className="container">
                        <div className='store--section--shopify-sell'>
                            <div className='store--section--left-side'>
                                <div className="store--section--left-brand">
                                    <div className='store--section--more'>

                                        <h4>Accomplish more than <span style={{ color: "#FC5569" }}> just selling.</span></h4>
                                    </div>
                                    <h2>Shopify Store  <span style={{ color: "#FC5569" }}> Setup</span></h2>
                                    <p>Use HubSyntax to grow your Shopify plus brand via chcout upsells, one-click upsells and thank you page cutomization.</p>
                                    <button id='now'>
                                        <span className="rotate-container">
                                            <span className="rotate-text">D</span>
                                            <span className="rotate-text">i</span>
                                            <span className="rotate-text">s</span>
                                            <span className="rotate-text">c</span>
                                            <span className="rotate-text">o</span>
                                            <span className="rotate-text">v</span>
                                            <span className="rotate-text">e</span>
                                            <span className="rotate-text">r</span>
                                            <span className="rotate-text">&nbsp;</span>
                                            <span className="rotate-text">N</span>
                                            <span className="rotate-text">o</span>
                                            <span className="rotate-text">w</span>

                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className='store--section--right'>
                                <div className='store--section--right-store'>
                                    <div className='store--section--right-setup'>
                                        <img src={IMAGES.p1} /> </div>
                                    <div className='store--section--right-shipping'>
                                        <button id='you'><span style={{ color: "#FC5569" }}> Google Ads</span></button>
                                        <h4>Shopify Store Setup</h4>
                                    </div>
                                </div>
                                <div className='store--section--right-store'>
                                    <div className='store--section--right-setup'>
                                        <img src={IMAGES.p3} /> </div>
                                    <div className='store--section--right-shipp'>
                                        <button id='you'><span style={{ color: "#FC5569" }}> Google Ads</span></button>
                                        <h4>Shopify Apps integration & Configuration</h4>
                                    </div>
                                </div>
                                <div className='store--section--right-store'>
                                    <div className='store--section--right-setup'>
                                        <img src={IMAGES.p2} /> </div>
                                    <div className='store--section--right-shipping'>
                                        <button id='you'><span style={{ color: "#FC5569" }}> Google Ads</span></button>
                                        <h4>Payment & Shipping Zones Set-Up</h4>
                                    </div>
                                </div>
                                <div className='store--section--right-store'>
                                    <div className='store--section--right-setup'>
                                        <img src={IMAGES.p4} /> </div>
                                    <div className='store--section--right-shipp'>
                                        <button id='you'><span style={{ color: "#FC5569" }}> Google Ads</span></button>
                                        <h4>Theme Development</h4>
                                    </div>
                                </div>
                                <div className='store--section--right-store'>
                                    <div className='store--section--right-setup'>
                                        <img src={IMAGES.p5} /> </div>
                                    <div className='store--section--right-shipping'>
                                        <button id='you'><span style={{ color: "#FC5569" }}> Google Ads</span></button>
                                        <h4>Supports& Maintance</h4>
                                    </div>
                                </div>
                                <div className='store--section--right-store'>
                                    <div className='store--section--right-setup'>
                                        <img src={IMAGES.p6} /> </div>
                                    <div className='store--section--right-shipp'>
                                        <button id='you'><span style={{ color: "#FC5569" }}> Google Ads</span></button>
                                        <h4>App Development</h4>
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
export default Store;