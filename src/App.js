import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollTo from './Allfiles/scroll-to-top';
import { AuthProvider } from './Allfiles/AuthContext';
import { HelmetProvider } from 'react-helmet-async';

import Home from './Allfiles/home';
import Blog from './Allfiles/Blog';
import About from './Allfiles/About';
import Contact from './Allfiles/contact';
import Design from './Allfiles/design';
import Migration from './Allfiles/Migration';
import Apppage from './Allfiles/Pageapp';
import Store from './Allfiles/Store';
import Build from './Allfiles/Build';
import Shopifyapp from './shopify-blogs/shopify-app';
import Termservices from './Allfiles/termservices';
import Privacy from './Allfiles/privacy';
import Login from './Allfiles/login';
import Admin from './Allfiles/admin';
import Shopifyapi from './shopify-blogs/shopify-apikey';

import './assest/combined.css';

function App() {
    return (
        <AuthProvider>
            <HelmetProvider>
                <Router>
                    <AppContent />
                </Router>
            </HelmetProvider>
        </AuthProvider>
    );
}

function AppContent() {
    const location = useLocation();
    const navigate = useNavigate();
    
    const hideHeaderOnPaths = ['/store','/blog', '/shopify/app/', '/shopify/','/terms-and-conditions', '/privacy-policy','/login','/admin'];
    const hideFooterOnPaths = ['/login','/admin','/blog','/shopify/app/','/shopify/'];

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

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);
    
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







// import React, { useEffect, useState, Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
// import ScrollTo from './Allfiles/scroll-to-top';
// import { AuthProvider } from './Allfiles/AuthContext';
// import Animation from './Allfiles/Animation';
// import { HelmetProvider } from 'react-helmet-async';

// import './assest/combined.css';

// import Home from './Allfiles/home';
// const Blog = lazy(() => import('./Allfiles/Blog'));
// const About = lazy(() => import('./Allfiles/About'));
// const Contact = lazy(() => import('./Allfiles/contact'));
// const Design = lazy(() => import('./Allfiles/design'));
// const Migration = lazy(() => import('./Allfiles/Migration'));
// const Apppage = lazy(() => import('./Allfiles/Pageapp'));
// const Store = lazy(() => import('./Allfiles/Store'));
// const Build = lazy(() => import('./Allfiles/Build'));
// const Shopifyapp = lazy(() => import('./shopify-blogs/shopify-app'));
// const Termservices = lazy(() => import('./Allfiles/termservices'));
// const Privacy = lazy(() => import('./Allfiles/privacy'));
// const Login = lazy(() => import('./Allfiles/login'));
// const Admin = lazy(() => import('./Allfiles/admin'));
// const Shopifyapi = lazy(() => import('./shopify-blogs/shopify-apikey'));

// function App() {

//     const [showAnimation, setShowAnimation] = useState(true);
//     useEffect(() => {
        
//         const timer = setTimeout(() => {
//             setShowAnimation(false);
//         }, 500); 

//         return () => clearTimeout(timer); 
//     }, []);

//     return (
//         <AuthProvider>
//                  <HelmetProvider>
//             <Router>
//             {showAnimation && <Animation />}
//             <Suspense fallback={<div className="loading"><div className="spinner"></div></div>}>
//                     <AppContent />
//                 </Suspense>
//             </Router>
//             </HelmetProvider>
//         </AuthProvider>
//     );
// }

// function AppContent() {
//     const location = useLocation();
//     const navigate = useNavigate();
    
//     const hideHeaderOnPaths = ['/store','/blog', '/shopify/app/', '/shopify/', '/shopify/app/cancel-subscription', '/shopify/subscription-cancel', '/shopify/app/choose-right', '/shopify/store-convert-to-mobile-app', '/shopify/app/promote', '/shopify/app/hire-developer', '/shopify/app/install', '/shopify/app/marketing-plan', '/shopify-store-affiliate-program', '/terms-and-conditions', '/privacy-policy', '/shopify/app/publish','/login','/admin'];
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

//     useEffect(() => {
//         setIsLoading(true); 
//         window.scrollTo(0, 0);
//         setTimeout(() => {
//             setIsLoading(false);  
//         }, 50);
//     }, [location.pathname]);

//     useEffect(() => {
//         if ('scrollRestoration' in window.history) {
//             window.history.scrollRestoration = 'manual';
//         }
//         window.scrollTo(0, 0);
//     }, []);
    

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
//                 <Route path="/shopify/app/:handle" element={<Shopifyapp />} />
//                 <Route path="/shopify/:handle" element={<Shopifyapi />} />
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






