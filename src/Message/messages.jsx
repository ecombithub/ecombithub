

// // // require('dotenv').config();
// // // const express = require('express');
// // // const nodemailer = require('nodemailer');
// // // const cors = require('cors');

// // // const app = express();
// // // const port = 8006;


// // // app.use(cors());

// // // app.use(express.json());
// // // const path = require('path');



// // // const sendEmail = async (first, last, email, number, company, web, sendmessage) => {
// // //   try {
// // //     const transporter = nodemailer.createTransport({
// // //       service: 'gmail',
// // //       auth: {
// // //         user: 'info@hubsyntax.com',
// // //         pass: 'pfmq xgrn kxey ymbu',
// // //       },
// // //     });

// // //     const adminHtmlContent = `
// // // <html>
// // // <head>
// // //   <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
// // //     rel="stylesheet">
// // //   <style>
// // //       @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  
// // //     .container {
// // //       font-family: "Roboto", sans-serif!important;
// // //       border: 1px solid #e3e3e3;
// // //       height: 600px;
// // //       width: 100%;
// // //       max-width: 600px;
// // //       margin: 50px auto; 
// // //       padding: 20px;
// // //       background-color: #f6f8fc;
// // //       border-radius: 10px;
// // //       font-weight: 600;
// // //     }
  
// // //     p {
// // //       font-size: 18px;
// // //       text-align: left;

// // //     }

// // //   </style>
// // // </head>
// // // <body>
// // //   <div class="container">
// // //     <p> First Name: ${first}</p>
// // //      <p>last Name: ${last}</p>
// // //      <p>email: ${email}</p>
// // //      <p>Company Name: ${company}</p>
// // //      <p>Number Name: ${number}</p>
// // //       <p>Website Name: ${web}</p>
// // //      <p> Message: ${sendmessage}</p>
    
// // //   </div>
// // // </body>
// // // </html>
// // // `;

// // //     const userHtmlContent = `
// // // <html>
// // // <head>
// // //  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
// // //     rel="stylesheet">
// // //   <style>
// // //     @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

// // //     * {
// // //       margin: 0;
// // //       padding: 0;
// // //       box-sizing: border-box;
// // //       line-height: 28px;
// // //       color: black!important;
// // //       text-decoration: none !important;
// // //       background-color: white;
// // //       font-family: "Roboto", sans-serif!important;
// // //     }
// // //     .container {
// // //     text-align: center;
// // //     border: 1px solid #e3e3e3;
// // //     height: auto;
// // //     width: 100%;
// // //     max-width: 800px;
// // //     margin: 50px auto;
// // //     box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
// // //     }

// // //     h1 {
// // //       margin: 0;
// // //     }
// // //     p {
// // //      font-size: 18px;
// // //     text-align: left;
// // //     font-weight: 600;
// // //     }
    
// // //     .need {
// // //       margin-top: 30px;
// // //       margin-bottom: 30px;
// // //     }
// // //     .way {
// // //       margin-top: 30px;
// // //       margin-bottom: 30px;
// // //     }
// // //     .footer {
// // //       text-align: center;
// // //     }
// // //     .footer-image img {
// // //       width: 100%;
// // //     }
// // //     .footer-images-all {
// // //       display: inline-flex;
// // //       gap: 40px;
// // //     }
// // //     .footer-image {
// // //       margin-right: 15px;
// // //     }
// // //     .best {
// // //       margin-bottom: 40px;
// // //     }
// // //     .email-cneter {
// // //       text-align: center;
// // //       margin: 0 auto;
// // //       margin-top: 23px;
// // //     }
// // //     .email {
// // //       display: flex;
// // //       line-height: 29px;
// // //     }
// // //     .email-test {
// // //       color: black !important;
// // //       text-decoration: none !important;
// // //     }  
// // //     .text-color {
// // //        color: #f16273 !important;
// // //     }
// // //     .elements {
// // //       padding: 20px 50px 50px 50px;

// // //     }
// // //   </style>
// // // </head>
// // // <body>
// // //   <div class="container">
// // //     <img src="cid:user-image" style="width: 100%;" alt="Service Image" />
// // //     <div class="elements">
// // //       <div class="need">
// // //       <p>Hello ${first}</p>
// // //         <p>At <span class="text-color">EcombitHub,</span> we’re passionate about empowering e-commerce entrepreneurs like you to achieve success. Whether
// // //           you’re just starting out or looking to scale your online store, we’ve got you covered with a range of services
// // //           designed to meet your unique needs.</p>
// // //       </div>
// // //       <div class="way">
// // //         <p>We’re here to support you every step of the way. Whether you need technical assistance or business advice, our
// // //           team is just an email away.</p>
// // //       </div>
// // //       <div class="need">
// // //         <p>Stay tuned for our upcoming tips, exclusive offers, and the latest industry insights to help you thrive in the
// // //           competitive world of e-commerce.</p>
// // //       </div>
// // //       <div class="need">
// // //         <p>Thank you for choosing <span class="text-color">EcombitHub,</span> as your trusted partner in your e-commerce journey. Let’s create something
// // //           amazing together!</p>
// // //       </div>
// // //       <div class="best">
// // //         <p>Best regards,</p>
// // //         <p>The <span class="text-color">EcombitHub,</span> Team</p>
// // //       </div>
// // //       <div class="footer">
// // //         <div class="footer-images-all">
// // //           <div class="footer-image">
// // //           <a href="https://www.facebook.com/HubSyntax/"> <img src="cid:facbook" style="width: 100%;" alt="Service Image" /></a>
// // //           </div>
// // //           <div class="footer-image">
// // //            <a href="https://www.instagram.com/hubsyntax/"><img src="cid:insta" style="width: 100%;" alt="Service Image" /></a>
// // //           </div>
// // //           <div class="footer-image">
// // //            <a href="https://x.com/Hubsyntaxdev"> <img src="cid:x" style="width: 100%;" alt="Service Image" /></a>
// // //           </div>
// // //           <div class="footer-image">
// // //             <a href="https://in.linkedin.com/company/hubsyntax"> <img src="cid:linkdin" style="width: 100%;" alt="Service Image" /></a>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <div class="email">
// // //         <div class="email-cneter">
// // //           <p class="email-test">Email: info@hubsyntax.com</p>
// // //           <p>Phone: +91-8679227771</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   </div>
// // // </body>
// // // </html>
// // // `;

// // //     const adminMailOptions = {
// // //       from: email,
// // //       to: 'info@hubsyntax.com',
// // //       subject: 'New Customer Query EcombitHub',
// // //       html: adminHtmlContent,

// // //     };

// // //     const userMailOptions = {
// // //       from: '"EcombitHub Support" <info@hubsyntax.com>',
// // //       to: email,
// // //       subject: 'Welcome to EcombitHub',
// // //       html: userHtmlContent,
// // //       attachments: [
// // //         {
// // //           filename: 'gmail.png',
// // //           path: path.resolve(__dirname, 'gmail.png'),
// // //           cid: 'user-image',
// // //         },
// // //         {
// // //           filename: 'insta.png',
// // //           path: path.resolve(__dirname, 'insta.png'),
// // //           cid: 'insta',
// // //         },
// // //         {
// // //           filename: 'facbook.png',
// // //           path: path.resolve(__dirname, 'facbook.png'),
// // //           cid: 'facbook',
// // //         },
// // //         {
// // //           filename: 'x.png',
// // //           path: path.resolve(__dirname, 'x.png'),
// // //           cid: 'x',
// // //         },
// // //         {
// // //           filename: 'linkdin.png',
// // //           path: path.resolve(__dirname, 'linkdin.png'),
// // //           cid: 'linkdin',
// // //         },
// // //       ],
// // //     };

// // //     await transporter.sendMail(adminMailOptions);
// // //     await transporter.sendMail(userMailOptions);
// // //   } catch (error) {
// // //     console.error('Error sending email:', error);
// // //   }
// // // };


// // // app.post('/register', async (req, res) => {
// // //   const { first, last, email, number, company, web, sendmessage } = req.body;
// // //   await sendEmail(first, last, email, number, company, web, sendmessage);
// // //   res.status(200).json({ message: 'Email sent successfully' });
// // // });


// // // app.listen(port, () => {
// // //   console.log(`Server started at port ${port}`);
// // // });












