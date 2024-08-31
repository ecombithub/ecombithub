import IMAGES from "../Allfiles/image";

import React, { useState } from 'react';

function Today() {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [company, setCompany] = useState('');
    const [web, setWeb] = useState('');
    const [sendmessage, setSendmessage] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const upload = async (e) => {
        e.preventDefault();

        if (!first || !last || !email) {
            setMessage('Kindly complete all required fields before proceeding.');
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setMessage("Thank you for your submission! We'll get back to you shortly.");
            setFirst('');
            setLast('');
            setEmail('');
            setNumber('');
            setCompany('');
            setWeb('');
            setSendmessage('');
        }, 2000);

        try {
            const response = await fetch('https://ecombithub-database.onrender.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first,
                    last,
                    email,
                    number,
                    company,
                    web,
                    sendmessage,
                    
                }),
            });

            if (response.status === 200) {

                console.log("Thank you for your submission! We'll get back to you shortly.");
            } else {
                throw new Error('Error sending email');
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
            setMessage('Error sending email');
            setLoading(false);
        }
    };
    
    return (
        <>
            <div className="contact-section-page">
                <div className="today-section-contact">
                    <div className="wrapper">
                        <div className="container">
                            <div className="today-section-eco">
                                <div className="today-section-eco-elements">
                                    <h2>Contact <span style={{ color: '#fc5569' }}>EcombitHub Today!</span></h2>
                                    <p>or Just reach out manually to <span className="today-email-info" style={{ color: "#b3414e" }}>hello@hubsyntax.com</span></p>
                                    <div className="today-section-inputs">
                                        <div className="today-section-inputs-all">
                                            <label htmlFor="first">First Name</label><br />
                                            <div className="today-section-inputs flexx">
                                                <div className="today-section-input-images">
                                                    <img src={IMAGES.men} alt="First Name Icon" />
                                                </div>
                                                <div className="today-section-input-elements">
                                                    <input type="text" placeholder="Enter your first name" value={first}
                                                        onChange={(e) => setFirst(e.target.value.replace(/[^a-z]/gi, ''))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="today-section-inputs-all">
                                            <label htmlFor="last">Last Name</label><br />
                                            <div className="today-section-inputs flexx">
                                                <div className="today-section-input-images">
                                                    <img src={IMAGES.men} alt="Last Name Icon" />
                                                </div>
                                                <div className="today-section-input-elements">
                                                    <input type="text" placeholder="Enter your last name" value={last}
                                                        onChange={(e) => setLast(e.target.value.replace(/[^a-z]/gi, ''))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="today-section-inputs-all">
                                            <label htmlFor="email">Email</label><br />
                                            <div className="today-section-inputs flexx">
                                                <div className="today-section-input-images">
                                                    <img src={IMAGES.email} alt="Email Icon" />
                                                </div>
                                                <div className="today-section-input-elements">
                                                    <input type="text" placeholder="Enter your email address" value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="today-section-inputs-all">
                                            <label htmlFor="number">Phone Number - (Optional)</label><br />
                                            <div className="today-section-inputs flexx">
                                                <div className="today-section-input-images">
                                                    <img src={IMAGES.calling} alt="Phone Icon" />
                                                </div>
                                                <div className="today-section-input-elements">
                                                    <input type="text" placeholder="Enter your phone number" value={number}
                                                        onChange={(e) => setNumber(e.target.value.replace(/[^0-9]/g, ''))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="today-section-inputs-all">
                                            <label htmlFor="company">Company Name - (Optional)</label><br />
                                            <div className="today-section-inputs flexx">
                                                <div className="today-section-input-images">
                                                    <img src={IMAGES.url} alt="Company Icon" />
                                                </div>
                                                <div className="today-section-input-elements">
                                                    <input type="text" placeholder="Enter your company name" value={company}
                                                        onChange={(e) => setCompany(e.target.value.replace(/[^a-z]/gi, ''))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="today-section-inputs-all">
                                            <label htmlFor="web">Website URL - (Optional)</label><br />
                                            <div className="today-section-inputs flexx">
                                                <div className="today-section-input-images">
                                                    <img src={IMAGES.name} alt="Website Icon" />
                                                </div>
                                                <div className="today-section-input-elements">
                                                    <input type="text" placeholder="Enter your website URL" value={web}
                                                        onChange={(e) => setWeb(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="today-section-input-message">
                                        <label htmlFor="message">Message</label><br />
                                        <textarea
                                            id="w3review"
                                            name="w3review"
                                            placeholder="Enter your message here..."
                                            rows="5"
                                            cols="70"
                                            value={sendmessage}
                                            onChange={(e) => setSendmessage(e.target.value)}

                                        />
                                    </div>
                                    <button onClick={upload} className='button'>
                                        <span className="rotate-container">
                                            <span className="rotate-text">S</span>
                                            <span className="rotate-text">u</span>
                                            <span className="rotate-text">b</span>
                                            <span className="rotate-text">m</span>
                                            <span className="rotate-text">i</span>
                                            <span className="rotate-text">t</span>
                                        </span>
                                    </button>
                                    {message && !loading && (
                                        <p className={
                                            message === "Thank you for your submission! We'll get back to you shortly."
                                                ? 'success-message'
                                                : 'error-message'
                                        }>
                                            {message}
                                        </p>
                                    )}
                                </div>
                                <div className="today-section-eco-image">
                                    <img src={IMAGES.content} alt="Content" />
                                    <div className="today-section-absute-image">
                                        <img src={IMAGES.secondcontact} alt="Second Contact" />
                                    </div>
                                    <div className="today-section-absute-content1">
                                        <img src={IMAGES.content1} alt="Content 1" />
                                    </div>
                                    <div className="today-section-absute-content2">
                                        <img src={IMAGES.content2} alt="Content 2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Today;










// import IMAGES from "../Allfiles/image";
// import emailjs from '@emailjs/browser';
// import React, { useState } from 'react';

// function Today() {
//     const [first, setFirst] = useState('');
//     const [last, setLast] = useState('');
//     const [email, setEmail] = useState('');
//     const [number, setNumber] = useState('');
//     const [company, setCompany] = useState('');
//     const [web, setWeb] = useState('');
//     const [sendmessage, setSendmessage] = useState('');
//     const [message, setMessage] = useState('');
//     const [loading, setLoading] = useState(false);

//     const upload = async (e) => {
//         e.preventDefault();

//         if (!first || !last || !email) {
//             setMessage('Kindly complete all required fields before proceeding.');
//             return;
//         }

//         setLoading(true);

//         setTimeout(() => {
//             setLoading(false);
//             setMessage("Thank you for your submission! We'll get back to you shortly.");
//             setFirst('');
//             setLast('');
//             setEmail('');
//             setNumber('');
//             setCompany('');
//             setWeb('');
//             setSendmessage('');
//         }, 2000);

//         const service_Id = 'service_h8ihnp9';
//         const templateId = 'template_3y9enbb';
//         const publicKey = 'S_m4d5jaDBKylQRwP';


//         const templateParms = {
//             from_first: first,
//             from_last: last,
//             from_email: email,
//             from_number: number,
//             from_company: company,
//             from_web: web,
//             from_message: sendmessage
//         };

//         try {
//             await emailjs.send(service_Id, templateId, templateParms, publicKey);
//             setMessage("Thank you for your submission! We'll get back to you shortly.");
//             console.log('templateParms', templateParms)
//         } catch (error) {
//             setMessage('Failed to send your message. Please try again later.');
//         } finally {
//             setLoading(false);
//             setFirst('');
//             setLast('');
//             setEmail('');
//             setNumber('');
//             setCompany('');
//             setWeb('');
//             setSendmessage('');
//         }
//     };

//     return (
//         <>
//             <div className="contact-section-page">
//                 <div className="today-section-contact">
//                     <div className="wrapper">
//                         <div className="container">
//                             <div className="today-section-eco">

//                                 <div className="today-section-eco-elements">
//                                     <h2>Contact <span style={{ color: '#fc5569' }}>EcombitHub Today!</span></h2>
//                                     <p>or Just reach out manually to <span className="today-email-info" style={{ color: "#b3414e" }}>hello@hubsyntax.com</span></p>
//                                     <div className="today-section-inputs">
//                                         <div className="today-section-inputs-all">
//                                             <label htmlFor="first">First Name</label><br />
//                                             <div className="today-section-inputs flexx">
//                                                 <div className="today-section-input-images">
//                                                     <img src={IMAGES.men} alt="First Name Icon" />
//                                                 </div>
//                                                 <div className="today-section-input-elements">
//                                                     <input type="text" placeholder="Enter your first name" value={first}
//                                                         onChange={(e) => setFirst(e.target.value.replace(/[^a-z]/gi, ''))}
//                                                     />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="today-section-inputs-all">
//                                             <label htmlFor="last">Last Name</label><br />
//                                             <div className="today-section-inputs flexx">
//                                                 <div className="today-section-input-images">
//                                                     <img src={IMAGES.men} alt="Last Name Icon" />
//                                                 </div>
//                                                 <div className="today-section-input-elements">
//                                                     <input type="text" placeholder="Enter your last name" value={last}
//                                                         onChange={(e) => setLast(e.target.value.replace(/[^a-z]/gi, ''))}
//                                                     />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="today-section-inputs-all">
//                                             <label htmlFor="email">Email</label><br />
//                                             <div className="today-section-inputs flexx">
//                                                 <div className="today-section-input-images">
//                                                     <img src={IMAGES.email} alt="Email Icon" />
//                                                 </div>
//                                                 <div className="today-section-input-elements">
//                                                     <input type="text" placeholder="Enter your email address" value={email}
//                                                         onChange={(e) => setEmail(e.target.value)}
//                                                     />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="today-section-inputs-all">
//                                             <label htmlFor="number">Phone Number - (Optional)</label><br />
//                                             <div className="today-section-inputs flexx">
//                                                 <div className="today-section-input-images">
//                                                     <img src={IMAGES.calling} alt="Phone Icon" />
//                                                 </div>
//                                                 <div className="today-section-input-elements">
//                                                     <input type="text" placeholder="Enter your phone number" value={number}
//                                                         onChange={(e) => setNumber(e.target.value.replace(/[^0-9]/g, ''))}
//                                                     />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="today-section-inputs-all">
//                                             <label htmlFor="company">Company Name - (Optional)</label><br />
//                                             <div className="today-section-inputs flexx">
//                                                 <div className="today-section-input-images">
//                                                     <img src={IMAGES.url} alt="Company Icon" />
//                                                 </div>
//                                                 <div className="today-section-input-elements">
//                                                     <input type="text" placeholder="Enter your company name" value={company}
//                                                         onChange={(e) => setCompany(e.target.value.replace(/[^a-z]/gi, ''))}
//                                                     />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="today-section-inputs-all">
//                                             <label htmlFor="web">Website URL - (Optional)</label><br />
//                                             <div className="today-section-inputs flexx">
//                                                 <div className="today-section-input-images">
//                                                     <img src={IMAGES.name} alt="Website Icon" />
//                                                 </div>
//                                                 <div className="today-section-input-elements">
//                                                     <input type="text" placeholder="Enter your website URL" value={web}
//                                                         onChange={(e) => setWeb(e.target.value)}
//                                                     />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="today-section-input-message">
//                                         <label htmlFor="message">Message</label><br />
//                                         <textarea
//                                             id="w3review"
//                                             name="w3review"
//                                             placeholder="Enter your message here..."
//                                             rows="5"
//                                             cols="70"
//                                             value={sendmessage}
//                                             onChange={(e) => setSendmessage(e.target.value)}

//                                         />
//                                     </div>
//                                     <button onClick={upload} className='button'>
//                                         <span className="rotate-container">
//                                             <span className="rotate-text">S</span>
//                                             <span className="rotate-text">u</span>
//                                             <span className="rotate-text">b</span>
//                                             <span className="rotate-text">m</span>
//                                             <span className="rotate-text">i</span>
//                                             <span className="rotate-text">t</span>
//                                         </span>
//                                     </button>
//                                     {message && !loading && (
//                                         <p className={
//                                             message === "Thank you for your submission! We'll get back to you shortly."
//                                                 ? 'success-message'
//                                                 : 'error-message'
//                                         }>
//                                             {message}
//                                         </p>
//                                     )}
//                                 </div>
//                                 <div className="today-section-eco-image">
//                                     <img src={IMAGES.content} alt="Content" />
//                                     <div className="today-section-absute-image">
//                                         <img src={IMAGES.secondcontact} alt="Second Contact" />
//                                     </div>
//                                     <div className="today-section-absute-content1">
//                                         <img src={IMAGES.content1} alt="Content 1" />
//                                     </div>
//                                     <div className="today-section-absute-content2">
//                                         <img src={IMAGES.content2} alt="Content 2" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div >
//         </>
//     );
// }

// export default Today;
