import IMAGES from '../Allfiles/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

function Optim() {

    const [ref, inView] = useInView({
        threshold: 0.2,
    });
    const metImg = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView && !hasAnimated) {

            gsap.fromTo(
                metImg.current,
                { opacity: 0 },
                { opacity: 1, duration: 1, delay: 0.5 }
            );

            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    useEffect(() => {
        if (inView) {
            document.querySelector('.optimaztion--section-perfrom').classList.add('in-view');
        }
    }, [inView]);

    return (
        <>
            <div className="optimaztion--section-perfrom" ref={ref} >
                <div className="wrapper">
                    <div className='container'>
                    <div className="optimaztion--section-perfrom-first">
                        <div className='laye-first'>
                            <div className='laye1-left'>
                                <img src={IMAGES.ss} /></div>
                            <div className='laye2-right' >
                                <h4>Assemble your new team</h4></div>
                        </div>
                        <h2>UI/UX Optimaztion</h2>
                    </div>
                    <div className='optimaztion--section-perfrom-image' ref={metImg} style={{ opacity: 0 }}>
                     <img src={IMAGES.supe}/>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Optim;