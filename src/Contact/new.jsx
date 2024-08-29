
import IMAGES from '../Allfiles/image'
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.5439289834334!2d-117.8660211256392!3d33.66486023269411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdf63c6cba6a7%3A0x266cecb03e3cd4cc!2sHubSyntax!5e0!3m2!1sen!2sin!4v1723680010586!5m2!1sen!2sin"
    width="500"
    height="450"
    style={{ border: "0" }}
    allowfullscreen=""
    loading="lazy"
     referrerpolicy="no-referrer-when-downgrade"
>
</iframe>

function New() {
    return (
        <>
            <div className="today-section-map">
                <div className="wrapper">
                    <div className="container">
                        <div className='today-section-map-create'>
                            <div className="today-section-map-create-flex">
                                <div className="today-section-map-create-address-all">
                                    <div className='today-section-map-create-first-section'>
                                        <div className="today-section-map-image">
                                            <img src={IMAGES.map2} alt="location" />
                                        </div>
                                        <div className="today-section-map-elements">
                                            <h3>Headquater USA</h3>
                                            <p>1600D Dove St, Newport Beach, CA 92660, United States</p>
                                        </div>
                                    </div>
                                    <div className='today-section-map-create-first-section'>
                                        <div className="today-section-map-image">
                                        <img src={IMAGES.map2} alt="location" />
                                        </div>
                                        <div className="today-section-map-elements">
                                            <h3>Headquater India</h3>
                                            <p> MANCHANDA TOWER, PLOT NO D133C, Phase 7, Industrial Area, Punjab, 160062</p>
                                        </div>
                                    </div>
                                    <div className='today-section-map-create-first-section'>
                                        <div className="today-section-map-image">
                                            <img src={IMAGES.cal} alt="call" />
                                        </div>
                                        <div className="today-section-map-elements">
                                            <h3>Phone Number</h3>
                                            <p>+91-8679227771</p>
                                        </div>
                                    </div>
                                    <div className='today-section-map-create-first-section'>
                                        <div className="today-section-map-image">
                                            <img src={IMAGES.mail} alt="email" />
                                        </div>
                                        <div className="today-section-map-elements">
                                            <h3>Email</h3>
                                            <p>info@hubsyntax.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="today-section-map-create-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11538.157555630338!2d76.70239091589345!3d30.709550364689292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef2405c1b6e9%3A0x1b443db51832ce92!2sHubSyntax!5e0!3m2!1sen!2sin!4v1705021605372!5m2!1sen!2sin"

                                        width="100%"
                                        height="550"
                                        style={{ border: "0" }}
                                        allowfullscreen=""
                                        loading="lazy"
                                    >
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default New;