import shop from '../images/Layer 29.png';
import line from '../images/Line 7 copy.png';
import { BiSolidXCircle } from "react-icons/bi";
import { TfiAlignJustify } from "react-icons/tfi";
function Navbar() {
    return (
        <>
                <header>
                   <div className='wrapper'>
                    <div className='logo-to'>
                <div className='logo'>
                    <div class="brand-logo">
                        <img src={shop} />
                    </div>

                    <input type="checkbox" id="toggle-btn" />
                    <label for="toggle-btn" class="show-menu-btn">< TfiAlignJustify /></label>

                    <nav>
                        <ul class="navigation">
                        <div class="brand-logo1">
                        <img src={shop} />
                    </div>
                            <a href='#'> <li>Sponsors <img src={line} /></li></a>
                            <a href='#'> <li>Presenters <img src={line} /></li></a>
                            <a href='#'> <li>Schedule <img src={line} /></li></a>
                            <a href='#'><li>Pricing List</li></a>
                            <a href='#'> <li>Login</li></a>
                            <button id='us'>Contact Us</button>

                            <label for="toggle-btn" class="hide-menu-btn"><BiSolidXCircle /></label>
                        </ul>

                    </nav>
                    </div>
                    </div>
                    </div> 
                </header>
        
        </>
    )
}
export default Navbar;
