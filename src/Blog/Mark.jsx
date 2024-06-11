import { Link } from 'react-router-dom';
import logo from '../images/Layer 29.png';
import search from '../images/search.png';
import { BiSolidXCircle } from "react-icons/bi";
import { TfiAlignJustify } from "react-icons/tfi";

function Mark() {

    return (
        <>
            <div className="header--section">
                <div className="header--section-main">
                    <div className='wrapper'>
                        <div className="container">
                            <div className="header--section-flex">
                                <div className="header--section-left">
                                <Link to="/"> <img src={logo}/></Link>
                                </div>
                                <input type="checkbox" id="togle-btn" />
                                <label for="togle-btn" class="show-btn">< TfiAlignJustify /></label>
                                <mrk>
                                    <div className="header--section-right">
                                        <div className="header--section-logo">
                                            <Link to="/"><img src={logo} /></Link>
                                        </div>
                                        <ul>
                                            <Link to="/" style={{ textDecoration: "none" }}><li>Home</li></Link>
                                            <a href='#' style={{ textDecoration: "none" }}><li>Advanced SEO</li></a>
                                            <a href='#' style={{ textDecoration: "none" }}><li>Channels</li></a>
                                            <a href='#' style={{ textDecoration: "none" }}><li>Content</li></a>
                                            <a href='#' style={{ textDecoration: "none" }}><li>Marketing</li></a>
                                            <div className="header--section-search-bar">
                                            <input className='header--section-search' type='text' placeholder='Search' />
                                            <img className='sol_br' src={search} />
                                            </div>
                                            <label for="togle-btn" class="hide-bt">< BiSolidXCircle /></label>
                                        </ul>
                                    </div>
                                </mrk>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mark;



