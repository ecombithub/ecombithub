// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
// import Home from './Allfiles/home';
// import Blog from './Allfiles/Blog';
// import About from './Allfiles/About';
// import Contact from './Allfiles/contact';
// import Design from './Allfiles/design';
// import Migration from './Allfiles/Migration';
// import Apppage from './Allfiles/Pageapp';
// import Store from './Allfiles/Store';
// import Speed from './Allfiles/Speed';
// import Seo from './Allfiles/seo';
// import Mega from './Allfiles/Megamenu';
// import Build from './Allfiles/Build';
// import Header from './Header';
// import Footer from './Footer';
// import ScrollTo from './Allfiles/scroll-to-top';
// import Shopifyapp from './shopify-blogs/shopify-app';
// import Termservices from './Allfiles/termservices';
// import Privacy from './Allfiles/privacy';
// import Login from './Allfiles/login';
// import Admin from './Allfiles/admin';
// import { AuthProvider } from './Allfiles/AuthContext';

// import '../src/assest/homes.css';
// import '../src/assest/Blog.css';
// import '../src/assest/About.css';
// import '../src/assest/contact.css';
// import '../src/assest/Design.css';
// import '../src/assest/Migrate.css';
// import '../src/assest/Pageapp.css';
// import '../src/assest/Store.css';
// import '../src/assest/message.css';
// import '../src/assest/Speed.css';
// import '../src/assest/seo.css';
// import '../src/assest/Build.css';

// function App() {
//     return (
//         <AuthProvider>
//             <Router>
//                 <AppContent />
//             </Router>
//         </AuthProvider>
//     );
// }

// function AppContent() {
//     const location = useLocation();
//     const navigate = useNavigate();
    
//     const hideHeaderOnPaths = ['/blog', '/shopify/app/', '/shopify/', '/shopify/app/cancel-subscription', '/shopify/subscription-cancel', '/shopify/app/choose-right', '/shopify/store-convert-to-mobile-app', '/shopify/app/promote', '/shopify/app/hire-developer', '/shopify/app/install', '/shopify/app/marketing-plan', '/shopify-store-affiliate-program', '/terms-and-conditions', '/privacy-policy', '/shopify/app/publish','/login','/admin'];
//     const hideFooterOnPaths = ['/login','/admin'];

//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const loginTime = localStorage.getItem('loginTime');
//         if (loginTime) {
//             const timeElapsed = Date.now() - parseInt(loginTime, 10);
//             const oneHour = 60 * 60 * 1000;

//             if (timeElapsed > oneHour) {
//                 logout();
//                 navigate('/login');
//             }
//         }
//     }, [navigate]);

//     // useEffect(() => {
//     //     if (!isLoading) {
//     //         window.scrollTo(0, 0);
//     //     }
//     // }, [location.pathname, isLoading]);

//     useEffect(() => {
//         setIsLoading(true); 
//         window.scrollTo(0, 0);
//         setTimeout(() => {
//             setIsLoading(false);  
//         }, 100); 
//     }, [location.pathname]);


//     const logout = () => {
//         localStorage.removeItem('isAuthenticated');
//         localStorage.removeItem('loginTime');
//         localStorage.removeItem('email');
//         localStorage.removeItem('password');
//     };

//     const shouldHideHeader = hideHeaderOnPaths.some(path => location.pathname.startsWith(path));
//     const shouldHideFooter = hideFooterOnPaths.some(path => location.pathname.startsWith(path));
//     const shouldShowScrollTo = !shouldHideHeader;

//     const PrivateRoute = ({ element }) => {
//         const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
//         return isAuthenticated ? element : <Navigate to="/login" />;
//     };

//     return (
//         <div className="main_root">
//             {!shouldHideHeader && <Header />}
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/blog" element={<Blog />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/build" element={<Build />} />
//                 <Route path="/design" element={<Design />} />
//                 <Route path="/migration" element={<Migration />} />
//                 <Route path="/app" element={<Apppage />} />
//                 <Route path="/store" element={<Store />} />
//                 <Route path="/speed" element={<Speed />} />
//                 <Route path="/seo" element={<Seo />} />
//                 <Route path="/meg" element={<Mega />} />
//                 <Route path="/shopify/app/:handle" element={<Shopifyapp />} />
//                 <Route path="/terms-and-conditions" element={<Termservices />} />
//                 <Route path="/privacy-policy" element={<Privacy />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
//             </Routes>
//             {shouldShowScrollTo && <ScrollTo />}
//             {!shouldHideFooter && <Footer />}
//         </div>
//     );
// }

// export default App;






import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollTo from './Allfiles/scroll-to-top';
import { AuthProvider } from './Allfiles/AuthContext';
import Animation from './Allfiles/Animation';

import '../src/assest/homes.css';
import '../src/assest/Blog.css';
import '../src/assest/About.css';
import '../src/assest/contact.css';
import '../src/assest/Design.css';
import '../src/assest/Migrate.css';
import '../src/assest/Pageapp.css';
import '../src/assest/Store.css';
import '../src/assest/message.css';
import '../src/assest/Speed.css';
import '../src/assest/seo.css';
import '../src/assest/Build.css';

const Home = lazy(() => import('./Allfiles/home'));
const Blog = lazy(() => import('./Allfiles/Blog'));
const About = lazy(() => import('./Allfiles/About'));
const Contact = lazy(() => import('./Allfiles/contact'));
const Design = lazy(() => import('./Allfiles/design'));
const Migration = lazy(() => import('./Allfiles/Migration'));
const Apppage = lazy(() => import('./Allfiles/Pageapp'));
const Store = lazy(() => import('./Allfiles/Store'));
const Speed = lazy(() => import('./Allfiles/Speed'));
const Seo = lazy(() => import('./Allfiles/seo'));
const Mega = lazy(() => import('./Allfiles/Megamenu'));
const Build = lazy(() => import('./Allfiles/Build'));
const Shopifyapp = lazy(() => import('./shopify-blogs/shopify-app'));
const Termservices = lazy(() => import('./Allfiles/termservices'));
const Privacy = lazy(() => import('./Allfiles/privacy'));
const Login = lazy(() => import('./Allfiles/login'));
const Admin = lazy(() => import('./Allfiles/admin'));
const Shopifyapi = lazy(() => import('./shopify-blogs/shopify-apikey'));

function App() {

    const [showAnimation, setShowAnimation] = useState(true);
    useEffect(() => {
        
        const timer = setTimeout(() => {
            setShowAnimation(false);
        }, 500); 

        return () => clearTimeout(timer); 
    }, []);

    return (
        <AuthProvider>
            <Router>
            {showAnimation && <Animation />}
            <Suspense fallback={<div className="loading"><div className="spinner"></div></div>}>
                    <AppContent />
                </Suspense>
            </Router>
        </AuthProvider>
    );
}

function AppContent() {
    const location = useLocation();
    const navigate = useNavigate();
    
    const hideHeaderOnPaths = ['/blog', '/shopify/app/', '/shopify/', '/shopify/app/cancel-subscription', '/shopify/subscription-cancel', '/shopify/app/choose-right', '/shopify/store-convert-to-mobile-app', '/shopify/app/promote', '/shopify/app/hire-developer', '/shopify/app/install', '/shopify/app/marketing-plan', '/shopify-store-affiliate-program', '/terms-and-conditions', '/privacy-policy', '/shopify/app/publish','/login','/admin'];
    const hideFooterOnPaths = ['/login','/admin'];

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loginTime = localStorage.getItem('loginTime');
        if (loginTime) {
            const timeElapsed = Date.now() - parseInt(loginTime, 10);
            const oneHour = 60 * 60 * 1000;

            if (timeElapsed > oneHour) {
                logout();
                navigate('/login');
            }
        }

    }, [navigate]);

    useEffect(() => {
        setIsLoading(true); 
        window.scrollTo(0, 0);  
        setTimeout(() => {
            setIsLoading(false);  
        }, 50);
    }, [location.pathname]);

    const logout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('loginTime');
        localStorage.removeItem('email');
        localStorage.removeItem('password');
    };

    const shouldHideHeader = hideHeaderOnPaths.some(path => location.pathname.startsWith(path));
    const shouldHideFooter = hideFooterOnPaths.some(path => location.pathname.startsWith(path));
    const shouldShowScrollTo = !shouldHideHeader;

    const PrivateRoute = ({ element }) => {
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        return isAuthenticated ? element : <Navigate to="/login" />;
    };

    return (
        <div className="main_root">
            {!shouldHideHeader && <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/build" element={<Build />} />
                <Route path="/design" element={<Design />} />
                <Route path="/migration" element={<Migration />} />
                <Route path="/app" element={<Apppage />} />
                <Route path="/store" element={<Store />} />
                <Route path="/speed" element={<Speed />} />
                <Route path="/seo" element={<Seo />} />
                <Route path="/meg" element={<Mega />} />
                <Route path="/shopify/app/:handle" element={<Shopifyapp />} />
                <Route path="/shopify/:handle" element={<Shopifyapi />} />
                <Route path="/terms-and-conditions" element={<Termservices />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
            </Routes>
            {shouldShowScrollTo && <ScrollTo />}
            {!shouldHideFooter && <Footer />}
        </div>
    );
}

export default App;









// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
// import Home from './Allfiles/home';
// import Blog from './Allfiles/Blog';
// import About from './Allfiles/About';
// import Contact from './Allfiles/contact';
// import Design from './Allfiles/design';
// import Migration from './Allfiles/Migration';
// import Apppage from './Allfiles/Pageapp';
// import Store from './Allfiles/Store';
// import Speed from './Allfiles/Speed';
// import Seo from './Allfiles/seo';
// import Mega from './Allfiles/Megamenu';
// import Build from './Allfiles/Build';
// import Header from './Header';
// import Footer from './Footer';
// import ScrollTo from './Allfiles/scroll-to-top';
// import Shopifyapp from './shopify-blogs/shopify-app';
// import Shopifyapi from './shopify-blogs/shopify-apikey';
// import Cancelsubapp from './shopify-blogs/cancel-subscription-app';
// import Cancelsubshopify from './shopify-blogs/cancel-sub-shopify';
// import Publishapp from './shopify-blogs/publish-app-shopify';
// import Chooseapp from './shopify-blogs/choose-right-app';
// import Convertstore from './shopify-blogs/convert-shopify-store';
// import Promoteapp from './shopify-blogs/promote-shopify';
// import Hireshopify from './shopify-blogs/hire-shopify';
// import Installapp from './shopify-blogs/install-shopify-app';
// import Affiliateprogram from './shopify-blogs/affiliate-program';
// import Createplan from './shopify-blogs/create-market';
// import Getreview from './shopify-blogs/get-review';
// import Termservices from './Allfiles/termservices';
// import Privacy from './Allfiles/privacy';
// import Login from './Allfiles/login';
// import Admin from './Allfiles/admin';

// import '../src/assest/homes.css';
// import '../src/assest/Blog.css';
// import '../src/assest/About.css';
// import '../src/assest/contact.css';
// import '../src/assest/Design.css';
// import '../src/assest/Migrate.css';
// import '../src/assest/Pageapp.css';
// import '../src/assest/Store.css';
// import '../src/assest/message.css';
// import '../src/assest/Speed.css';
// import '../src/assest/seo.css';
// import '../src/assest/Build.css';

// function App() {
//     return (
//         <Router>
//             <AppContent />
//         </Router>
//     );
// }

// function AppContent() {
//     const location = useLocation();
//     const hideHeaderOnPaths = ['/blog', '/shopify/app/', '/shopify/', '/shopify/app/cancel-subscription', '/shopify/subscription-cancel', '/shopify/app/choose-right', '/shopify/store-convert-to-mobile-app', '/shopify/app/promote', '/shopify/app/hire-developer', '/shopify/app/install', '/shopify/app/marketing-plan', '/shopify-store-affiliate-program', '/terms-and-conditions', '/privacy-policy', '/shopify/app/publish','/login','/admin'];
//     const hideFooterOnPaths = ['/login','/admin'];

//     const [isLoading, setIsLoading] = useState(true);
//     const shouldHideHeader = hideHeaderOnPaths.some(path => location.pathname.startsWith(path));
//     const shouldHideFooter = hideFooterOnPaths.some(path => location.pathname.startsWith(path));

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsLoading(false);
//         }, 500);

//         return () => clearTimeout(timer);
//     }, []);

//     useEffect(() => {
//         if (!isLoading) {
//             window.scrollTo(0, 0);
//         }
//     }, [location.pathname, isLoading]);

//     const shouldShowScrollTo = !hideHeaderOnPaths.some(path => location.pathname.startsWith(path));

//     return (
//         <div className="main_root">
//             {!shouldHideHeader && <Header />}
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/blog" element={<Blog />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/build" element={<Build />} />
//                 <Route path="/design" element={<Design />} />
//                 <Route path="/migration" element={<Migration />} />
//                 <Route path="/app" element={<Apppage />} />
//                 <Route path="/store" element={<Store />} />
//                 <Route path="/speed" element={<Speed />} />
//                 <Route path="/seo" element={<Seo />} />
//                 <Route path="/meg" element={<Mega />} />
//                 {/* <Route path="/shopify/:handle" element={<Shopifyapi />} />  */}
//                 <Route path="/shopify/app/:handle" element={<Shopifyapp />} />
//                 <Route path="/terms-and-conditions" element={<Termservices />} />
//                 <Route path="/privacy-policy" element={<Privacy />} />
//                 {/* <Route path="/shopify/app/build" element={<Shopifyapp />} /> */}
//                 {/* <Route path="/shopify/app/api-key" element={<Shopifyapi />} /> */}
//                 {/* <Route path="/shopify/app/cancel-subscription" element={<Cancelsubapp />} />
//                 <Route path="/shopify/subscription-cancel" element={<Cancelsubshopify />} />
//                 <Route path="/shopify/app/publish" element={<Publishapp />} />
//                 <Route path="/shopify/app/choose-right" element={<Chooseapp />} />
//                 <Route path="/shopify/store-convert-to-mobile-app" element={<Convertstore />} />
//                 <Route path="/shopify/app/promote" element={<Promoteapp />} />
//                 <Route path="/shopify/app/hire-developer" element={<Hireshopify />} />
//                 <Route path="/shopify/app/install" element={<Installapp />} />
//                 <Route path="/shopify/app/marketing-plan" element={<Createplan />} />
//                 <Route path="/shopify-store-affiliate-program" element={<Affiliateprogram />} />
//                 <Route path="/shopify/app/reviews" element={<Getreview />} /> */}
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/admin" element={<Admin />} />
     
//             </Routes>
//             {shouldShowScrollTo && <ScrollTo />}
//             {!shouldHideFooter && <Footer />}
//         </div>
//     );
// }

// export default App;
