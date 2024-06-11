import IMAGES from "../Allfiles/image";
function Bar() {
    return (
        <>
            <bar>
                <div className="wrapper">
                    <div className="container">
                        <div className='bar--section'>
                            <div className="about">

                            </div>
                            <div className="bar--section-images">
                                <a href='#'><img src={IMAGES.insta} /></a>
                                <a href='#'><img src={IMAGES.pin} /></a>
                                <a href='#'><img src={IMAGES.you} /></a>
                                <a href='#'><img src={IMAGES.lock} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </bar>
        </>
    )
}
export default Bar;