import IMAGES from "../Allfiles/image";
import { IoMdCheckmark } from "react-icons/io";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function Product() {

    // const [ref, inView] = useInView({
    //     threshold: 0.2,
    // });

    // const technologyElement = useRef(null);
    // const elementor = useRef(null);
    // const [hasAnimated, setHasAnimated] = useState(false);

    // useEffect(() => {
    //     if (inView && !hasAnimated) {
    //         gsap.fromTo(
    //             technologyElement.current,
    //             { opacity: 0, y: -250 },
    //             { opacity: 1, y: 0, duration: 1, delay: 0.3 }
    //         );

    //         gsap.fromTo(
    //             elementor.current,
    //             { opacity: 0, y: 250 },
    //             { opacity: 1, y: 0, duration: 1, delay: 0.3 }
    //         );

    //         setHasAnimated(true);
    //     }
    // }, [inView, hasAnimated]);

    // useEffect(() => {
    //     if (inView) {
    //         document.querySelector('.display--section-product').classList.add('in-view');
    //     }
    // }, [inView]);

    return (
        <>
            <div className='display--section-product'>
                <div className='wrapper'>
                   
                </div>
            </div>
        </>
    )
}
export default Product;