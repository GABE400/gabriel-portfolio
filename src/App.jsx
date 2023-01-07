import React, { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorBoundary';
import Navbar from './sections/navbar/Navbar';
import Technology from './sections/techologies/Technology';
//import Testimonials from './sections/testimonials/Testimonials';
//import FAQs from './sections/faqs/FAQs';
//import FloatingNav from './sections/floating-nav/FloatingNav';
const Header = lazy(() => import('./sections/header/Header'));
const About = lazy(() => import('./sections/about/About'));
const Services = lazy(() => import('./sections/services/Services'));
const Portfolio = lazy(() => import('./sections/portfolio/Portfolio'));
const Contact = lazy(() => import('./sections/contact/Contact'));
const Footer = lazy(() => import('./sections/footer/Footer'));
const Process = lazy(() => import('./sections/process/Process'));

const App = () => {
  return (
    <main>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Header />
          <About />
          <Services />
          <Technology />
          <Process />
          <Portfolio />
          {/*
      <Testimonials />
      <FAQs />*/}
          <Contact />
          <Footer />
          {/*<FloatingNav />*/}
        </Suspense>
      </ErrorBoundary>
    </main>
  );
};

export default App;
