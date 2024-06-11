import IMAGES from "../Allfiles/image";
function Work() {


    return (
        <>
            <div className="work--section-elementor">
                <div className = "wrapper">
                <div className='container'>
                    <div className="work--section-elementor-perfrom">
                        <div className='laye-first'>
                            <div className='laye1-left'>
                                <img src={IMAGES.a9} /></div>
                            <div className='laye2-right'>
                                <h4>Assemble your new team </h4></div>

                        </div>
                        <h2> How does it work?</h2>
                    </div>
                     <div className="work--section-perfrom-show">
                        <hr/>
                    <div className='work--section-perfrom-share-your'>
               
                        <div className='work--section-perfrom-share-first'>
                            <div className='first-bg'>
                                <img src={IMAGES.a0} />
                            </div>
                            <h3>Share your Idea</h3>
                            <p>Use Hubsyntax  to grow your shopify plus brand via checkout upsells, one-clcik upsells and thank you page customization.</p>
                        </div>
                        <div className='shre-to'>
                      
                        <div className='work--section-perfrom-share-second'>
                            <div className='first-bgg'>
                                <img src={IMAGES.a1} />
                            </div>
                            <h3>Get a free mockup</h3>
                            <p>Use Hubsyntax  to grow your shopify plus brand via checkout upsells, one-click plus account manager.</p>
                        </div>
                     
                        <div className='work--section-perfrom-share-third'>
                            <div className='first-bggg'>
                                <img src={IMAGES.a2} />
                            </div>
                            <h3>Get pixel perfect shopify</h3>
                            <p>Use Hubsyntax  to grow your shopify plus brand via checkout upsells, one-click plus account manager.</p>
                        </div>
                  
                        </div>
                        <div className='work--section-perfrom-fast'>
                            <div className='work--section-perfrom-fast-bg'>
                                <h3>Be Fast or Be Last-Take Action Now!</h3>
                                <button className='talk-to'>Talk to expert</button>
                           
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
export default Work;