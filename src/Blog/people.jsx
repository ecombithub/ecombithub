import IMAGES from "../Allfiles/image";
function People() {
    return (
        <>
            <div className="people--section--search">
                <div className="wrapper">
                    <div className="container">
                        <div className="people--section--search-seo">
                            <div className="people--section--search-explore">
                                <h2>How Do People  <span style={{ color: "#FC5569" }}> Search for SEO</span></h2>
                                <p>Semrush crunched thousands of searches to explore the most interesting results and they are hilarious! Discover what is really meant when people are looking for 'end of the world movie where corn does'.Check out who is the most searched for actor, the films people don't remember and the famous main  char cters people forget.</p>
                                <button id='more'>
                                    <span className="rotate-container">
                                        <span className="rotate-text">L</span>
                                        <span className="rotate-text">e</span>
                                        <span className="rotate-text">a</span>
                                        <span className="rotate-text">n</span>
                                        <span className="rotate-text">&nbsp;</span>
                                        <span className="rotate-text">M</span>
                                        <span className="rotate-text">o</span>
                                        <span className="rotate-text">r</span>
                                        <span className="rotate-text">e</span>
                                    </span>
                                </button>
                            </div>
                            <div className="people--section--search-image">
                                <img src={IMAGES.port} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default People;