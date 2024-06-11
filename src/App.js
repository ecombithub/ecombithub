import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './Allfiles/home';
import Blog from './Allfiles/Blog';
 import About from './Allfiles/About';
import Contact from './Allfiles/contact';
import Design from './Allfiles/design';
import Migration from './Allfiles/Migration';
import Apppage from './Allfiles/Pageapp';
import Store from './Allfiles/Store';
import Message from './Allfiles/Message';
import Speed from './Allfiles/Speed';
import Seo from './Allfiles/seo';
import Mega from './Allfiles/Megamenu';
import Build from './Allfiles/Build';
import Blogdata from '../src/Allfiles/blogpage';
import Animation  from '../src/Allfiles/Animation';
import Header from './Header';
import Footer from './Footer';

import '../src/assest/homes.css';
import '../src/assest/Blog.css';
import '../src/assest/About.css'
import '../src/assest/contact.css';
import '../src/assest/Design.css';
import '../src/assest/Migrate.css';
import '../src/assest/Pageapp.css';
import '../src/assest/Store.css';
import '../src/assest/message.css';
import '../src/assest/Speed.css';
import '../src/assest/seo.css';
import '../src/assest/Build.css';

function App() {
  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const hideHeaderOnPages = ['/blog'];
  const shouldHideHeader = hideHeaderOnPages.includes(location.pathname);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="main_root">
      {isLoading && <Animation />}
      {!shouldHideHeader && <Header />}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/build" element={<Build />} />
        <Route exact path="/design" element={<Design />} />
        <Route exact path="/migration" element={<Migration />} />
        <Route exact path="/app" element={<Apppage />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/message" element={<Message />} />
        <Route exact path="/speed" element={<Speed />} />
        <Route exact path="/seo" element={<Seo />} />
        <Route exact path="/meg" element={<Mega />} />
        <Route path="/blogpage/:url" element={<Blogdata />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;










// // import React, { useState, useEffect } from 'react';
// // import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// // import Home from './home';
// // import Blog from './Blog';
// // import About from './About';
// // import Contact from './contact';
// // import Build from './Build';
// // import Migrate from './Migrate';
// // import Connect from './connect';
// // import Theme from './Theme';
// // import Message from './Message';
// // import Speed from './Speed';
// // import Dominate from './Dominate';
// // import Mega from './Megamenu';
// // import Buildfrom from './BuildFrom';
// // import Header from './Header';
// // import Footer from './Footer';
// // import Blogdata from './blogpage';

// // import './homes.css';
// // import './Blog.css';
// // import './About.css';
// // import './contact.css';
// // import './Build.css';
// // import './Migrate.css';
// // import './connect.css';
// // import './Theme.css';
// // import './message.css';
// // import './Speed.css';
// // import './Dominate.css';
// // import './Buildfrom.css';

// // function App() {
// //   return (
// //     <>
// //       <Router>
// //         <AppContent />
// //       </Router>
// //     </>
// //   );
// // }

// // function AppContent() {
// //   const location = useLocation();
// //   const hideHeaderOnPages = ['/blog'];
// //   const shouldHideHeader = hideHeaderOnPages.includes(location.pathname);

// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, [location.pathname]);

// //   return (
// //     <div className="main_root">
// //       {!shouldHideHeader && <Header />}
     
// //       <Routes>
// //         <Route exact path="/" element={<Home />} />
// //         <Route exact path="/blog" element={<Blog />} />
// //         <Route exact path="/about" element={<About />} />
// //         <Route exact path="/contact" element={<Contact />} />
// //         <Route exact path="/build" element={<Buildfrom />} />
// //         <Route exact path="/design" element={<Build />} />
// //         <Route exact path="/migration" element={<Migrate />} />
// //         <Route exact path="/app" element={<Connect />} />
// //         <Route exact path="/store" element={<Theme />} />
// //         <Route exact path="/message" element={<Message />} />
// //         <Route exact path="/speed" element={<Speed />} />
// //         <Route exact path="/seo" element={<Dominate />} />
// //         <Route exact path="/meg" element={<Mega />} />
// //         <Route path="/blogpage/:url" element={<Blogdata />} />

// //       </Routes>
      
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default App;


