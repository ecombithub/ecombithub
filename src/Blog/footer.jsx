import logo from '../images/Layer 29.png';
import fb from '../images/fb.png'
import ins from '../images/insta.png'
import ins1 from '../images/twit.png'
import ins2 from '../images/link.png'
import ins3 from '../images/you.png'
import ins4 from '../images/what.png'
import ins5 from '../images/po.png'
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="foot">
                        <div className="all">
                            <img src={logo} />
                            <p>@ 2023 HubSyntax. All rights reserved.</p>
                        </div>
                        <div className='right'>
                            <ul>
                                <li>Sponsors</li>
                                <li>Presenters</li>
                                <li>Schedule</li>
                                <li>Pricing List</li>
                                <li>Login</li>
                            </ul>
                            <div className='pro'>
                                <a href='#'><img src={fb} /></a>
                                <a href='#'><img src={ins} /></a>
                                <a href='#'><img src={ins1} /></a>
                                <a href='#'><img src={ins2} /></a>
                                <a href='#'><img src={ins3} /></a>
                                <a href='#'><img src={ins4} /></a>
                                <a href='#'><img src={ins5} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;