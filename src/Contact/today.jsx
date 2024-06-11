import can from '../images/can1.png'
function Today() {
    return (
        <>
            <div className="today-section-contact">
                <div className = "wrapper">
                <div className="today-section-contact-track">
                    <div className="container">
                        <div className="today-section-contact-track-flex">
                            <div className="today-section-contact-track-first">
                                <h2>Contact HubSyntax Today!</h2>
                                <p>Let's talk and team up to get your shop on track; let us know what you need so we can make it happen!</p>
                                <div className="today-section-contact-track-first-side">
                                    <div className="today-section-contact-track-know">
                                        <div className="today-section-contact-track-need">
                                            <label for="name">First Name</label><br />
                                            <input type="text"></input><br />
                                            <label for="name">Email</label><br />
                                            <input type="text"></input><br />
                                            <label for="name">Company Name</label><br />
                                            <input type="text"></input><br />
                                        </div>

                                        <div className="today-section-contact-track-down">
                                            <label for="name">Last Name</label><br />
                                            <input type="text"></input><br />
                                            <label for="name">Phone Number</label><br />
                                            <input type="text"></input><br />
                                            <label for="name">Website url</label><br />
                                            <input type="text"></input><br />
                                        </div>
                                    </div>
                                    <div className='today-section-contact-message'>
                                        <label for="name">Message</label><br />
                                        <input type="text"></input><br />
                                        <button className='sub-bg'>
                                        <span className="rotate-container">
                                        <span className="rotate-text">S</span>
                                        <span className="rotate-text">u</span>
                                        <span className="rotate-text">b</span>
                                        <span className="rotate-text">m</span>
                                        <span className="rotate-text">i</span>
                                        <span className="rotate-text">t</span>
                              
                                      </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='today-section-contact-right-side'>
                                <img src={can} />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Today;