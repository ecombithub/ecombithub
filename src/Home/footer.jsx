import shop from '../images/Layer 29.png';
import fb from '../images/fb.png'
import ins from '../images/insta.png'
import twi from '../images/twit.png'
import ink from '../images/link.png'
import you from '../images/you.png'
import what from '../images/what.png'
import pl from '../images/po.png'
function Footer() {
    return (
        <>
            <div className="footer">
                <div className='rever'>
                    <img src={shop} />
                    <p>@ 2023 HubSyntax, All rights reserved.</p>
                </div>
                <div className='right'>
                    <ul>
                        <li>Sponsors</li>
                        <li>Presenters</li>
                        <li>Schedule</li>
                        <li>Pricing list</li>
                        <li>Login</li>
                    </ul>
                    <div className='face'>
                        <a href='#'><img src={fb} /></a>
                        <a href='#'><img src={ins} /></a>
                        <a href='#'><img src={twi} /></a>
                        <a href='#'><img src={ink} /></a>
                        <a href='#'><img src={you} /></a>
                        <a href='#'><img src={what} /></a>
                        <a href='#'><img src={pl} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;