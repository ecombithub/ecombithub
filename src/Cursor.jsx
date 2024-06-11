import React, { useState, useEffect } from 'react';

function Cursor() {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isOverButton, setIsOverButton] = useState(false);
    const [isOverInput, setIsOverInput] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isOverImage, setIsOverImage] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseLeaveDocument = () => {
            setIsVisible(false);
        };

        const handleMouseEnterDocument = () => {
            setIsVisible(true);
        };

        const handleMouseClick = () => {
            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 500);
        };

        document.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseleave', handleMouseLeaveDocument);
        document.addEventListener('mouseenter', handleMouseEnterDocument);
        document.addEventListener('click', handleMouseClick);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseleave', handleMouseLeaveDocument);
            document.removeEventListener('mouseenter', handleMouseEnterDocument);
            document.removeEventListener('click', handleMouseClick);
        };
    }, []);

    useEffect(() => {
        setIsVisible(!isOverButton && !isOverInput && !isOverImage);
    }, [isOverButton, isOverInput, isOverImage]);

    const handleMouseEnterButton = () => {
        setIsOverButton(true);
    };

    const handleMouseLeaveButton = () => {
        setIsOverButton(false);
    };

    const handleMouseEnterInput = () => {
        setIsOverInput(true);
    };

    const handleMouseLeaveInput = () => {
        setIsOverInput(false);
    };

    const handleMouseEnterImage = () => {
        setIsOverImage(true);
    };

    const handleMouseLeaveImage = () => {
        setIsOverImage(false);
    };

    useEffect(() => {

        const buttons = document.querySelectorAll('button');
        const inputs = document.querySelectorAll('input');
        const images = document.querySelectorAll('.footer--section-face img');
        const imag = document.querySelectorAll('.brand-logo img');
        const ima = document.querySelectorAll('.footer--section-rever');
        const header = document.querySelectorAll('.header--section-left');
        const product = document.querySelectorAll('.product-items');


        buttons.forEach((btn) => {
            btn.addEventListener('mouseenter', handleMouseEnterButton);
            btn.addEventListener('mouseleave', handleMouseLeaveButton);
        });

        inputs.forEach((input) => {
            input.addEventListener('mouseenter', handleMouseEnterInput);
            input.addEventListener('mouseleave', handleMouseLeaveInput);
        });

        images.forEach((img) => {
            img.addEventListener('mouseenter', handleMouseEnterImage);
            img.addEventListener('mouseleave', handleMouseLeaveImage);
        });
        imag.forEach((img) => {
            img.addEventListener('mouseenter', handleMouseEnterImage);
            img.addEventListener('mouseleave', handleMouseLeaveImage);
        });
        ima.forEach((img) => {
            img.addEventListener('mouseenter', handleMouseEnterImage);
            img.addEventListener('mouseleave', handleMouseLeaveImage);
        });
        header.forEach((img) => {
            img.addEventListener('mouseenter', handleMouseEnterImage);
            img.addEventListener('mouseleave', handleMouseLeaveImage);
        });
        product.forEach((img) => {
            img.addEventListener('mouseenter', handleMouseEnterImage);
            img.addEventListener('mouseleave', handleMouseLeaveImage);
        });

        return () => {
            buttons.forEach((btn) => {
                btn.removeEventListener('mouseenter', handleMouseEnterButton);
                btn.removeEventListener('mouseleave', handleMouseLeaveButton);
            });
            inputs.forEach((input) => {
                input.removeEventListener('mouseenter', handleMouseEnterInput);
                input.removeEventListener('mouseleave', handleMouseLeaveInput);
            });
            images.forEach((img) => {
                img.removeEventListener('mouseenter', handleMouseEnterImage);
                img.removeEventListener('mouseleave', handleMouseLeaveImage);
            });
            imag.forEach((img) => {
                img.removeEventListener('mouseenter', handleMouseEnterImage);
                img.removeEventListener('mouseleave', handleMouseLeaveImage);
            });
            ima.forEach((img) => {
                img.removeEventListener('mouseenter', handleMouseEnterImage);
                img.removeEventListener('mouseleave', handleMouseLeaveImage);
            });
            header.forEach((img) => {
                img.removeEventListener('mouseenter', handleMouseEnterImage);
                img.removeEventListener('mouseleave', handleMouseLeaveImage);
            });
            product.forEach((img) => {
                img.removeEventListener('mouseenter', handleMouseEnterImage);
                img.removeEventListener('mouseleave', handleMouseLeaveImage);
            });
        };

    }, []);

    return (
        <div className='cursor-section'>
            <div
                className={`cursor ${isVisible ? '' : 'hidden'} ${isClicked ? 'clicked' : ''}`}
                style={{
                    left: position.x - 8,
                    top: position.y - 8,
                    animation: isOverButton || isOverInput || isOverImage ? '' : 'cursorhandle 0.5s infinite alternate'
                }}

            />
        </div>
    );
}

export default Cursor;











// import React, { useState, useEffect } from 'react';

// function Cursor() {
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const [isVisible, setIsVisible] = useState(true);
//     const [isOverButton, setIsOverButton] = useState(false);
//     const [isOverInput, setIsOverInput] = useState(false);

//     useEffect(() => {
//         const moveCursor = (e) => {
//             setPosition({ x: e.clientX, y: e.clientY });
//         };

//         document.addEventListener('mousemove', moveCursor);

//         return () => {
//             document.removeEventListener('mousemove', moveCursor);
//         };
//     }, []);

//     useEffect(() => {
//         const handleMouseEnterButton = () => {
//             setIsVisible(false);
//             setIsOverButton(true);
//             setIsOverInput(false);
//         };

//         const handleMouseLeaveButton = () => {
//             setIsVisible(true);
//             setIsOverButton(false);
//         };

//         const handleMouseEnterInput = () => {
//             setIsVisible(false);
//             setIsOverInput(true);
//             setIsOverButton(false);
//         };

//         const handleMouseLeaveInput = () => {
//             setIsVisible(true);
//             setIsOverInput(false);
//         };

//         document.querySelectorAll('button').forEach((btn) => {
//             btn.addEventListener('mouseenter', handleMouseEnterButton);
//             btn.addEventListener('mouseleave', handleMouseLeaveButton);
//         });

//         document.querySelectorAll('input').forEach((input) => {
//             input.addEventListener('mouseenter', handleMouseEnterInput);
//             input.addEventListener('mouseleave', handleMouseLeaveInput);
//         });

//         return () => {
//             document.querySelectorAll('button').forEach((btn) => {
//                 btn.removeEventListener('mouseenter', handleMouseEnterButton);
//                 btn.removeEventListener('mouseleave', handleMouseLeaveButton);
//             });
//             document.querySelectorAll('input').forEach((input) => {
//                 input.removeEventListener('mouseenter', handleMouseEnterInput);
//                 input.removeEventListener('mouseleave', handleMouseLeaveInput);
//             });
//         };
//     }, []);

//     return (
//         <div
//             className={`cursor ${isVisible ? '' : 'hidden'}`}
//             style={{
//                 left: position.x - 8,
//                 top: position.y - 8,
//                 animation: isOverButton || isOverInput ? '' : 'cursorhandle 0.5s infinite alternate'
//             }}
//         />
//     );
// }

// export default Cursor;