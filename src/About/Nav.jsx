import logo from '../images/Layer 29.png'
import lik from '../images/Line 7 copy.png'
import { BiSolidXCircle } from "react-icons/bi";
import { TfiAlignJustify } from "react-icons/tfi";
function Nav() {
    return (
        <>
           <div className = "header">
           <div className='wrapper'>
           <div className='logo-to'>
                <div className="container">
                    <div className='logo'>
                        <div class="brand-logo">
                            <img src={logo} />
                        </div>
                        <input type="checkbox" id="toggle-btn" />
                        <label for="toggle-btn" class="show-menu-btn">< TfiAlignJustify /></label>
                        <nav>
                          
                            <ul class="navigation">
                            <div className='brand-logo1 '>
                            <img src={logo} />
                            </div>
                                <a href='#'> <li>Sponsors  <img src={lik} /> </li></a>
                                <a href='#'> <li>Presenters <img src={lik} /> </li></a>
                                <a href='#'> <li>Schedule  <img src={lik} /></li></a>
                                <a href='#'><li>Pricing List </li></a>
                                <a href='#'> <li>Login</li></a>
                                <button id='using'>Contact Us</button>
                                <label for="toggle-btn" class="hide-menu-btn">< BiSolidXCircle /></label>
                            </ul>

                        </nav>
                        </div>
                    </div>
                </div>
                </div>
                </div>

        </>
    )
}
export default Nav;

