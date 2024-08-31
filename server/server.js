const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const app = express();
const port = 5000;

const mongoUri = 'mongodb+srv://info:Ok0y2QmkyIHhWNLG@cluster0.nx8ob.mongodb.net/blog_data?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model('logins', userSchema);

const blogs = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    author: { type: String },
    date: { type: Date, default: Date.now },
    handle: { type: String, required: true },
    category: { type: String },
    content: { type: String },
    status: { type: String, enum: ['published'] }
});

const Blogs = mongoose.model('blogs', blogs);

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  author: { type: String },
  date: { type: Date, default: Date.now },
  handle: { type: String, required: true },
  category: { type: String },
  content: { type: String },
  status: { type: String, enum: ['published'] }
});

const BlogPost = mongoose.model('BlogPosts', blogPostSchema);

const contentForm = new mongoose.Schema({
  first:String,
  last:String,
  email:String,
  number:String,
  company:String,
  web:String,
  sendmessage:String
})

const Content = mongoose.model('contentForms',contentForm)

app.use(express.json());
app.use(cors());

app.use('/image', express.static(path.join(__dirname, 'public', 'image')));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const destPath = path.join(__dirname, 'public', 'image');
        console.log('Destination path:', destPath);
        cb(null, destPath);
    },
    filename: function (req, file, cb) {
        console.log('Filename:', file.originalname);
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage });

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    if (password !== user.password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/blog/posts', async (req, res) => {
  const { status, handle } = req.query;

  let query = {};
  if (status) query.status = status;
  if (handle) query.handle = handle;

  try {
      const results = await Blogs.find(query);
      if (results.length === 0) {
          console.log("No posts found");
          return res.status(404).json({ error: "No posts found" });
      }
      res.status(200).json(results);
  } catch (err) {
      console.error("Error fetching posts:", err);
      res.status(500).json({ error: "Internal server error" });
  }
});

app.post('/blog/admin', upload.single('image'), async (req, res) => {
  const { title, description, author, date, handle, category, content, status } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
      const newPost = new Blogs({
          title, description, image, author, date, handle, category, content, status
      });
      await newPost.save();
      res.status(200).json({ message: "Article submitted successfully" });
  } catch (err) {
      console.error("Error inserting into database:", err);
      res.status(500).json({ error: "Internal server error" });
  }
});

app.get('/posts', async (req, res) => {
    const { status, handle } = req.query;

    let query = {};
    if (status) query.status = status;
    if (handle) query.handle = handle;

    try {
        const results = await BlogPost.find(query);
        if (results.length === 0) {
            console.log("No posts found");
            return res.status(404).json({ error: "No posts found" });
        }
        res.status(200).json(results);
    } catch (err) {
        console.error("Error fetching posts:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post('/admin', upload.single('image'), async (req, res) => {
    const { title, description, author, date, handle, category, content, status } = req.body;
    const image = req.file ? req.file.filename : null;

    try {
        const newPost = new BlogPost({
            title, description, image, author, date, handle, category, content, status
        });
        await newPost.save();
        res.status(200).json({ message: "Article submitted successfully" });
    } catch (err) {
        console.error("Error inserting into database:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.put('/admin/:id', upload.single('image'), async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
  }

  try {
      const existingPost = await BlogPost.findById(id);
      if (!existingPost) {
          return res.status(404).json({ error: 'Post not found' });
      }

      const updatedPostData = {
          title: req.body.title || existingPost.title,
          description: req.body.description || existingPost.description,
          content: req.body.content || existingPost.content,
          author: req.body.author || existingPost.author,
          date: req.body.date || existingPost.date,
          handle: req.body.handle || existingPost.handle,
          category: req.body.category || existingPost.category,
          status: req.body.status || existingPost.status,
          image: req.file ? req.file.filename : existingPost.image
      };

      const updatedPost = await BlogPost.findByIdAndUpdate(id, updatedPostData, { new: true });

      res.status(200).json({ message: 'Post updated successfully', updatedPost });
  } catch (err) {
      console.error('Error updating post:', err);
      res.status(500).json({ error: 'Internal server error' });
  }
});

const sendEmail = async (first, last, email, number, company, web, sendmessage) => {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'info@hubsyntax.com',
          pass: 'pfmq xgrn kxey ymbu',
        },
      });
  
      const adminHtmlContent = `
  <html>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
    
      .container {
        font-family: "Roboto", sans-serif!important;
        border: 1px solid #e3e3e3;
        height: 600px;
        width: 100%;
        max-width: 600px;
        margin: 50px auto; 
        padding: 20px;
        background-color: #f6f8fc;
        border-radius: 10px;
        font-weight: 600;
      }
    
      p {
        font-size: 18px;
        text-align: left;
  
      }
  
    </style>
  </head>
  <body>
    <div class="container">
      <p> First Name: ${first}</p>
       <p>last Name: ${last}</p>
       <p>email: ${email}</p>
       <p>Company Name: ${company}</p>
       <p>Number Name: ${number}</p>
        <p>Website Name: ${web}</p>
       <p> Message: ${sendmessage}</p>
      
    </div>
  </body>
  </html>
  `;
  
      const userHtmlContent = `
  <html>
  <head>
   <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 28px;
        color: black!important;
        text-decoration: none !important;
        background-color: white;
        font-family: "Roboto", sans-serif!important;
      }
      .container {
      text-align: center;
      border: 1px solid #e3e3e3;
      height: auto;
      width: 100%;
      max-width: 800px;
      margin: 50px auto;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
  
      h1 {
        margin: 0;
      }
      p {
       font-size: 18px;
      text-align: left;
      font-weight: 600;
      }
      
      .need {
        margin-top: 30px;
        margin-bottom: 30px;
      }
      .way {
        margin-top: 30px;
        margin-bottom: 30px;
      }
      .footer {
        text-align: center;
      }
      .footer-image img {
        width: 100%;
      }
      .footer-images-all {
        display: inline-flex;
        gap: 40px;
      }
      .footer-image {
        margin-right: 15px;
      }
      .best {
        margin-bottom: 40px;
      }
      .email-cneter {
        text-align: center;
        margin: 0 auto;
        margin-top: 23px;
      }
      .email {
        display: flex;
        line-height: 29px;
      }
      .email-test {
        color: black !important;
        text-decoration: none !important;
      }  
      .text-color {
         color: #f16273 !important;
      }
      .elements {
        padding: 20px 50px 50px 50px;
  
      }
    </style>
  </head>
  <body>
    <div class="container">
      <img src="cid:user-image" style="width: 100%;" alt="Service Image" />
      <div class="elements">
        <div class="need">
        <p>Hello ${first}</p>
          <p>At <span class="text-color">EcombitHub,</span> we’re passionate about empowering e-commerce entrepreneurs like you to achieve success. Whether
            you’re just starting out or looking to scale your online store, we’ve got you covered with a range of services
            designed to meet your unique needs.</p>
        </div>
        <div class="way">
          <p>We’re here to support you every step of the way. Whether you need technical assistance or business advice, our
            team is just an email away.</p>
        </div>
        <div class="need">
          <p>Stay tuned for our upcoming tips, exclusive offers, and the latest industry insights to help you thrive in the
            competitive world of e-commerce.</p>
        </div>
        <div class="need">
          <p>Thank you for choosing <span class="text-color">EcombitHub,</span> as your trusted partner in your e-commerce journey. Let’s create something
            amazing together!</p>
        </div>
        <div class="best">
          <p>Best regards,</p>
          <p>The <span class="text-color">EcombitHub,</span> Team</p>
        </div>
        <div class="footer">
          <div class="footer-images-all">
            <div class="footer-image">
            <a href="https://www.facebook.com/HubSyntax/"> <img src="cid:facbook" style="width: 100%;" alt="Service Image" /></a>
            </div>
            <div class="footer-image">
             <a href="https://www.instagram.com/hubsyntax/"><img src="cid:insta" style="width: 100%;" alt="Service Image" /></a>
            </div>
            <div class="footer-image">
             <a href="https://x.com/Hubsyntaxdev"> <img src="cid:x" style="width: 100%;" alt="Service Image" /></a>
            </div>
            <div class="footer-image">
              <a href="https://in.linkedin.com/company/hubsyntax"> <img src="cid:linkdin" style="width: 100%;" alt="Service Image" /></a>
            </div>
          </div>
        </div>
        <div class="email">
          <div class="email-cneter">
            <p class="email-test">Email: info@hubsyntax.com</p>
            <p>Phone: +91-8679227771</p>
          </div>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
  
      const adminMailOptions = {
        from: email,
        to: 'info@hubsyntax.com',
        subject: 'New Customer Query EcombitHub',
        html: adminHtmlContent,
  
      };
  
      const userMailOptions = {
        from: '"EcombitHub Support" <info@hubsyntax.com>',
        to: email,
        subject: 'Welcome to EcombitHub',
        html: userHtmlContent,
        attachments: [
          {
            filename: 'gmail.png',
            path: path.resolve(__dirname, 'gmail.png'),
            cid: 'user-image',
          },
          {
            filename: 'insta.png',
            path: path.resolve(__dirname, 'insta.png'),
            cid: 'insta',
          },
          {
            filename: 'facbook.png',
            path: path.resolve(__dirname, 'facbook.png'),
            cid: 'facbook',
          },
          {
            filename: 'x.png',
            path: path.resolve(__dirname, 'x.png'),
            cid: 'x',
          },
          {
            filename: 'linkdin.png',
            path: path.resolve(__dirname, 'linkdin.png'),
            cid: 'linkdin',
          },
        ],
      };
  
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(userMailOptions);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  app.post('/register', async (req, res) => {
    const { first, last, email, number, company, web, sendmessage } = req.body;
    try {
        const newData = new Content({ first, last, email, number, company, web, sendmessage });
        await newData.save();
        await sendEmail(first, last, email, number, company, web, sendmessage);

        res.status(200).json({ message: 'Email sent and data saved successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Error occurred during registration' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});














// // const express = require("express");
// // const mysql = require("mysql");
// // const cors = require("cors");
// // const path = require("path");
// // const multer = require("multer");
// // require('dotenv').config();
// // const nodemailer = require('nodemailer');
// // const app = express();
// // const port = 5000;

// // app.use(express.json());
// // app.use(cors());

// // app.use('/image', express.static(path.join(__dirname, 'public', 'image')));

// // const pool = mysql.createPool({
// //     user: "u880655869_ecombit_cms",
// //     host: "srv691.hstgr.io",
// //     password: "Ecombit@12!DB",
// //     database: "u880655869_ecombithub_cms"
// // });

// // pool.getConnection((err, connection) => {
// //     if (err) {
// //         console.error("Error in connection:", err);
// //     } else {
// //         console.log("Connected to the database!");
// //         connection.release();
// //     }
// // });

// // const storage = multer.diskStorage({
// //     destination: function (req, file, cb) {
// //         const destPath = path.join(__dirname, 'public', 'image');
// //         console.log('Destination path:', destPath);
// //         cb(null, destPath);
// //     },
// //     filename: function (req, file, cb) {
// //         console.log('Filename:', file.originalname);
// //         cb(null, `${Date.now()}_${file.originalname}`);
// //     }
// // });

// // const upload = multer({ storage });

// // app.post('/login', (req, res) => {
// //     const { email, password } = req.body;

// //     if (!email || !password) {
// //         return res.status(400).json({ error: "Email and password are required" });
// //     }

// //     pool.query(
// //         'SELECT * FROM login WHERE email = ? AND password = ?',
// //         [email, password],
// //         (err, results) => {
// //             if (err) {
// //                 console.error("Error executing query:", err);
// //                 return res.status(500).json({ error: "Internal server error" });
// //             }

// //             if (results.length > 0) {
// //                 res.status(200).json({ message: "Login successful", user: results[0] });
// //             } else {
// //                 res.status(401).json({ error: "Invalid email or password" });
// //             }
// //         }
// //     );
// // });

// // // app.get('/posts', (req, res) => {
// // //     const { status } = req.query;

// // //     pool.query(
// // //         'SELECT * FROM ecombit_blog WHERE status = ?',
// // //         [status],
// // //         (err, results) => {
// // //             if (err) {
// // //                 console.error("Error fetching posts:", err);
// // //                 return res.status(500).json({ error: "Internal server error" });
                
// // //             }

// // //             if (results.length === 0) {
// // //                 return res.status(404).json({ error: "No posts found" });
                
// // //             }

// // //             res.status(200).json(results);
// // //             console.log(results);
// // //         }
        
// // //     );
// // // });

// // // app.get('/posts', (req, res) => {
// // //   const { status, handle } = req.query;

// // //   let query = 'SELECT * FROM ecombit_blog WHERE status = ?';
// // //   const queryParams = [status];

// // //   if (handle) {
// // //       query += ' AND handle = ?';
// // //       queryParams.push(handle);
// // //   }

// // //   console.log('Executing query:', query);
// // //   console.log('With parameters:', queryParams);

// // //   pool.query(query, queryParams, (err, results) => {
// // //       if (err) {
// // //           console.error("Error fetching posts:", err);
// // //           return res.status(500).json({ error: "Internal server error" });
// // //       }

// // //       if (results.length === 0) {
// // //           console.log("No posts found");
// // //           return res.status(404).json({ error: "No posts found" });
// // //       }

// // //       res.status(200).json(results);
// // //   });
// // // });

// // app.get('/posts', (req, res) => {
// //   const { status, handle } = req.query;

// //   let query = 'SELECT * FROM ecombit_blog WHERE 1=1';
// //   const queryParams = [];

// //   if (status) {
// //       query += ' AND status = ?';
// //       queryParams.push(status);
// //   }

// //   if (handle) {
// //       query += ' AND handle = ?';
// //       queryParams.push(handle);
// //   }

// //   console.log('Executing query:', query);
// //   console.log('With parameters:', queryParams);

// //   pool.query(query, queryParams, (err, results) => {
// //       if (err) {
// //           console.error("Error fetching posts:", err);
// //           return res.status(500).json({ error: "Internal server error" });
// //       }

// //       if (results.length === 0) {
// //           console.log("No posts found");
// //           return res.status(404).json({ error: "No posts found" });
// //       }

// //       res.status(200).json(results);
// //   });
// // });



// // app.post('/admin', upload.single('image'), (req, res) => {
// //     const { title, description, author, date, handle, category, content, status } = req.body;
// //     const image = req.file ? req.file.filename : null;

// //     pool.query(
// //         'INSERT INTO ecombit_blog (title, description, image, author, date, handle, category, content, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
// //         [title, description, image, author, date, handle, category, content, status],
// //         (err, results) => {
// //             if (err) {
// //                 console.error("Error inserting into database:", err);
// //                 return res.status(500).json({ error: "Internal server error" });
// //             }
// //             res.status(200).json({ message: "Article submitted successfully" });
// //         }
// //     );
// // });

// // const sendEmail = async (first, last, email, number, company, web, sendmessage) => {
// //     try {
// //       const transporter = nodemailer.createTransport({
// //         service: 'gmail',
// //         auth: {
// //           user: 'info@hubsyntax.com',
// //           pass: 'pfmq xgrn kxey ymbu',
// //         },
// //       });
  
// //       const adminHtmlContent = `
// //   <html>
// //   <head>
// //     <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
// //       rel="stylesheet">
// //     <style>
// //         @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
    
// //       .container {
// //         font-family: "Roboto", sans-serif!important;
// //         border: 1px solid #e3e3e3;
// //         height: 600px;
// //         width: 100%;
// //         max-width: 600px;
// //         margin: 50px auto; 
// //         padding: 20px;
// //         background-color: #f6f8fc;
// //         border-radius: 10px;
// //         font-weight: 600;
// //       }
    
// //       p {
// //         font-size: 18px;
// //         text-align: left;
  
// //       }
  
// //     </style>
// //   </head>
// //   <body>
// //     <div class="container">
// //       <p> First Name: ${first}</p>
// //        <p>last Name: ${last}</p>
// //        <p>email: ${email}</p>
// //        <p>Company Name: ${company}</p>
// //        <p>Number Name: ${number}</p>
// //         <p>Website Name: ${web}</p>
// //        <p> Message: ${sendmessage}</p>
      
// //     </div>
// //   </body>
// //   </html>
// //   `;
  
// //       const userHtmlContent = `
// //   <html>
// //   <head>
// //    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
// //       rel="stylesheet">
// //     <style>
// //       @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
// //       * {
// //         margin: 0;
// //         padding: 0;
// //         box-sizing: border-box;
// //         line-height: 28px;
// //         color: black!important;
// //         text-decoration: none !important;
// //         background-color: white;
// //         font-family: "Roboto", sans-serif!important;
// //       }
// //       .container {
// //       text-align: center;
// //       border: 1px solid #e3e3e3;
// //       height: auto;
// //       width: 100%;
// //       max-width: 800px;
// //       margin: 50px auto;
// //       box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
// //       }
  
// //       h1 {
// //         margin: 0;
// //       }
// //       p {
// //        font-size: 18px;
// //       text-align: left;
// //       font-weight: 600;
// //       }
      
// //       .need {
// //         margin-top: 30px;
// //         margin-bottom: 30px;
// //       }
// //       .way {
// //         margin-top: 30px;
// //         margin-bottom: 30px;
// //       }
// //       .footer {
// //         text-align: center;
// //       }
// //       .footer-image img {
// //         width: 100%;
// //       }
// //       .footer-images-all {
// //         display: inline-flex;
// //         gap: 40px;
// //       }
// //       .footer-image {
// //         margin-right: 15px;
// //       }
// //       .best {
// //         margin-bottom: 40px;
// //       }
// //       .email-cneter {
// //         text-align: center;
// //         margin: 0 auto;
// //         margin-top: 23px;
// //       }
// //       .email {
// //         display: flex;
// //         line-height: 29px;
// //       }
// //       .email-test {
// //         color: black !important;
// //         text-decoration: none !important;
// //       }  
// //       .text-color {
// //          color: #f16273 !important;
// //       }
// //       .elements {
// //         padding: 20px 50px 50px 50px;
  
// //       }
// //     </style>
// //   </head>
// //   <body>
// //     <div class="container">
// //       <img src="cid:user-image" style="width: 100%;" alt="Service Image" />
// //       <div class="elements">
// //         <div class="need">
// //         <p>Hello ${first}</p>
// //           <p>At <span class="text-color">EcombitHub,</span> we’re passionate about empowering e-commerce entrepreneurs like you to achieve success. Whether
// //             you’re just starting out or looking to scale your online store, we’ve got you covered with a range of services
// //             designed to meet your unique needs.</p>
// //         </div>
// //         <div class="way">
// //           <p>We’re here to support you every step of the way. Whether you need technical assistance or business advice, our
// //             team is just an email away.</p>
// //         </div>
// //         <div class="need">
// //           <p>Stay tuned for our upcoming tips, exclusive offers, and the latest industry insights to help you thrive in the
// //             competitive world of e-commerce.</p>
// //         </div>
// //         <div class="need">
// //           <p>Thank you for choosing <span class="text-color">EcombitHub,</span> as your trusted partner in your e-commerce journey. Let’s create something
// //             amazing together!</p>
// //         </div>
// //         <div class="best">
// //           <p>Best regards,</p>
// //           <p>The <span class="text-color">EcombitHub,</span> Team</p>
// //         </div>
// //         <div class="footer">
// //           <div class="footer-images-all">
// //             <div class="footer-image">
// //             <a href="https://www.facebook.com/HubSyntax/"> <img src="cid:facbook" style="width: 100%;" alt="Service Image" /></a>
// //             </div>
// //             <div class="footer-image">
// //              <a href="https://www.instagram.com/hubsyntax/"><img src="cid:insta" style="width: 100%;" alt="Service Image" /></a>
// //             </div>
// //             <div class="footer-image">
// //              <a href="https://x.com/Hubsyntaxdev"> <img src="cid:x" style="width: 100%;" alt="Service Image" /></a>
// //             </div>
// //             <div class="footer-image">
// //               <a href="https://in.linkedin.com/company/hubsyntax"> <img src="cid:linkdin" style="width: 100%;" alt="Service Image" /></a>
// //             </div>
// //           </div>
// //         </div>
// //         <div class="email">
// //           <div class="email-cneter">
// //             <p class="email-test">Email: info@hubsyntax.com</p>
// //             <p>Phone: +91-8679227771</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </body>
// //   </html>
// //   `;
  
// //       const adminMailOptions = {
// //         from: email,
// //         to: 'info@hubsyntax.com',
// //         subject: 'New Customer Query EcombitHub',
// //         html: adminHtmlContent,
  
// //       };
  
// //       const userMailOptions = {
// //         from: '"EcombitHub Support" <info@hubsyntax.com>',
// //         to: email,
// //         subject: 'Welcome to EcombitHub',
// //         html: userHtmlContent,
// //         attachments: [
// //           {
// //             filename: 'gmail.png',
// //             path: path.resolve(__dirname, 'gmail.png'),
// //             cid: 'user-image',
// //           },
// //           {
// //             filename: 'insta.png',
// //             path: path.resolve(__dirname, 'insta.png'),
// //             cid: 'insta',
// //           },
// //           {
// //             filename: 'facbook.png',
// //             path: path.resolve(__dirname, 'facbook.png'),
// //             cid: 'facbook',
// //           },
// //           {
// //             filename: 'x.png',
// //             path: path.resolve(__dirname, 'x.png'),
// //             cid: 'x',
// //           },
// //           {
// //             filename: 'linkdin.png',
// //             path: path.resolve(__dirname, 'linkdin.png'),
// //             cid: 'linkdin',
// //           },
// //         ],
// //       };
  
// //       await transporter.sendMail(adminMailOptions);
// //       await transporter.sendMail(userMailOptions);
// //     } catch (error) {
// //       console.error('Error sending email:', error);
// //     }
// //   };
  
  
// // //   app.post('/register', async (req, res) => {
// // //     const { first, last, email, number, company, web, sendmessage } = req.body;
// // //     await sendEmail(first, last, email, number, company, web, sendmessage);
// // //     res.status(200).json({ message: 'Email sent successfully' });
// // //   });

// // app.post('/register', async (req, res) => {
// //     const { first, last, email, number, company, web, sendmessage } = req.body;
// //     try {
// //         const insertQuery = `
// //             INSERT INTO customer_detail (first, last, email, number, company, web, sendmessage)
// //             VALUES (?, ?, ?, ?, ?, ?, ?)
// //         `;
        
// //         pool.query(insertQuery, [first, last, email, number, company, web, sendmessage], async (err, results) => {
// //             if (err) {
// //                 console.error("Error inserting into database:", err);
// //                 return res.status(500).json({ error: "Internal server error" });
// //             }
// //             await sendEmail(first, last, email, number, company, web, sendmessage);
// //             res.status(200).json({ message: 'Email sent and data saved successfully' });
// //         });

// //     } catch (error) {
// //         console.error('Error during registration:', error);
// //         res.status(500).json({ message: 'Error occurred during registration' });
// //     }
// // });

// // app.listen(port, () => {
// //     console.log(`Server is running on port ${port}`);
// // });



















