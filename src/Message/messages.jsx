// import { useState } from "react";
// function Message() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState(null);
  
//   const sendEmail = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("/register", {
//         method: "POST",
//         body: JSON.stringify({
//           email,
//           message
//         }),
//         headers: {
//           "Content-Type": "application/json"
//         }
//       });

//       if (res.ok) {
//         console.log("Email sent successfully");
//         setStatus("success");
//         setEmail("");
//         setMessage("");
//       } else {
//         console.error("Error sending email");
//         setStatus("error");
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       setStatus("error");
//     }
//   };

//   return (
//     <div className="App">
//       <div className="app_count">
//         <form>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter email"
//           /><br />
//           <textarea
//             name="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Enter message"
//           ></textarea><br />
//           <button type="submit" className="sub_to" onClick={sendEmail}>
//             Submit
//           </button>
//           {status === "success" && <p style={{ color: "red" }}>Email sent successfully!</p>}
//           {status === "error" && <p style={{ color: "red" }}>Error sending email. Please try again later.</p>}
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Message;
























// const express = require("express");
// const router = express.Router();
// const nodemailer = require("nodemailer");
// const mysql = require("mysql2/promise");
// const dotenv = require("dotenv");

// dotenv.config();

// const pool = mysql.createPool({
//   user: "root",
//   host: "localhost",
//   password: "",
//   database: "shopify",
// });

// const sendEmail = async (email, message) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD,
//       },
//     });
//     const adminHtmlContent = `
// <html>
// <head>
//   <style>
//     .container {
//       text-align: center; 
//       border: 1px solid black;
//       height: 400px;
//       width: 100%;
//       max-width: 500px;
//       margin: 50px auto; 
//       padding: 20px;
//       color: white;
//       background-color: grey;
//       border-radius: 10px;
//       font-family: Josefin Sans SemiBold;
//     }
//     h1 {
//       margin: 0;
//       font-family: Josefin Sans SemiBold;
//     }
//     p {
//       font-size: 20px;
//       text-align: left;
//       font-family: Josefin Sans SemiBold;
//     }
//     .footer p {
//       text-align: center;
//       font-size: 13px;
//       font-family: Josefin Sans SemiBold;
//     }
//   </style>
// </head>
// <body>
//   <div class="container">
//     <h1>Your Email Content</h1>
//     <p>${message}</p>
//     <img src="cid:unique-image-id" style="width: 300px; height: 200px;" />
//     <div class="footer">
//       <h3>Follow Us</h3>
//       <p>In Vision App, 41 Madison Ave, New York, NY</p>
//       <span style="color: #63e6be;"><i class="fas fa-envelope"></i></span>
//     </div>
//   </div>
// </body>
// </html>
// `;

//     const userHtmlContent = `
//     <html>
//     <head>
//     <link rel="stylesheet" href="path/to/your/local/fontawesome/css/all.min.css">
    
//       <style>
//       .container {
//         text-align: center;
//         border: 1px solid black;
//         height: 300px;
//         width: 100%;
//         max-width: 400px;
//         margin: 50px auto;
//         padding: 20px;
//         color: white;
//         background-color:grey;
//         border-radius: 10px;
//         font-family: Josefin Sans SemiBold;
//       }
//       h1 {
//         margin: 0;
//         font-family: Josefin Sans SemiBold;
//       }

//       p {
//         font-size: 20px;
//         text-align: left;
//         font-family: Josefin Sans SemiBold;
//       }

//       .footer p {
//         text-align: center;
//         font-size: 13px;
//         font-family: Josefin Sans SemiBold;
//       }

//     </style>
//     </head>
//         <body>
//           <div class="container">
//             <p>Email sent successfully</p>
//           </div>
//         </body>
//       </html>
//     `;

//     const adminMailOptions = {
//       from: process.env.EMAIL,
//       to: "ranasahil78922@gmail.com",
//       subject: "Email Send",
//       html: adminHtmlContent,
//       attachments: [
//         {
//           filename: 'imh.jpg', path: "./imh.jpg",
//           cid: 'unique-image-id',
//         },
//       ],
//     };

//     const userMailOptions = {
//       from: process.env.EMAIL,
//       to: email,
//       subject: "Email Send User",
//       html: userHtmlContent,
//     };

//     await Promise.all([
//       transporter.sendMail(adminMailOptions),
//       transporter.sendMail(userMailOptions),
//     ]);

//     console.log("Emails sent successfully.");
//   } catch (error) {
//     console.error("Error sending emails:", error);
//     throw error;
//   }
// };

// router.post("/register", async (req, res) => {
//   const { email, message } = req.body;

//   try {
//     await sendEmail(email, message);
//     const [insertResult] = await pool.query(
//       "INSERT INTO shopify_login (email, message) VALUES (?, ?)",
//       [email, message]
//     );
//     res.status(201).json({ status: 201, result: insertResult });
//   } catch (error) {
//     console.error("Error in /register route:", error);
//     res.status(500).json({ status: 500, error: "Internal Server Error" });
//   }
// });

// module.exports = router;
