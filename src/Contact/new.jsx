import address from '../images/location.png'
import mess from '../images/message.png'
import call from '../images/call.png'
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11538.157555630338!2d76.70239091589345!3d30.709550364689292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef2405c1b6e9%3A0x1b443db51832ce92!2sHubSyntax!5e0!3m2!1sen!2sin!4v1705021605372!5m2!1sen!2sin"
    width="500"
    height="450"
    style={{ border: "0"}}
    allowfullscreen=""
    loading="lazy"
>
</iframe>
function New() {
    return (
        <>
            <div className="today-section-map">
                <div className = "wrapper">
                <div className="container">
                    <div className='today-section-map-create'>
                    <div className="today-section-map-create-flex">
                        <div className="today-section-map-create-flex-start">
                            <div className="today-section-map-create-loaction">
                                <div className="location-first">
                                   <img src={address}/>
                                </div>
                                <div className="location-second">
                                    <p>1600D Dove St, Newport Beach, CA 92660, United States</p>
                                </div>         
                            </div>
                            <div className="today-section-map-create-address">
                                <div className="address-first">
                                   <img src={address}/>
                                </div>
                                <div className="address-second">
                                    <p>E-203, NH 5, Phase 8B, Industrial Area, Secter74, Sahibzada Ajit Singh Nagar.</p>
                                </div>
                            </div>
                            <div className="today-section-map-create-message">
                                <div className="message-first">
                                   <img src={mess}/>
                                </div>
                                <div className="message-second">
                                    <p>info@hubsyntax.com</p>
                                </div>
                            </div>
                            <div className="today-section-map-create-call">
                                <div className="call-first">
                                   <img src={call}/>
                                </div>
                                <div className="call-second">
                                    <p>+91-8679227771</p>
                                </div>
                            </div>
                        </div>
                        <div className="today-section-map-create-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11538.157555630338!2d76.70239091589345!3d30.709550364689292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef2405c1b6e9%3A0x1b443db51832ce92!2sHubSyntax!5e0!3m2!1sen!2sin!4v1705021605372!5m2!1sen!2sin"
                        
                                width="100%"
                                height="400"
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