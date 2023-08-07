import React, { Suspense, lazy, useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorBoundary";
import Navbar from "./sections/navbar/Navbar";
import Technology from "./sections/techologies/Technology";
import DevImg from "./assets/Logo/logoG.png";
import SyncLoader from "react-spinners/SyncLoader";

//import Testimonials from './sections/testimonials/Testimonials';
//import FAQs from './sections/faqs/FAQs';
//import FloatingNav from './sections/floating-nav/FloatingNav';
const Header = lazy(() => import("./sections/header/Header"));
const About = lazy(() => import("./sections/about/About"));
const Services = lazy(() => import("./sections/services/Services"));
const Portfolio = lazy(() => import("./sections/portfolio/Portfolio"));
const Contact = lazy(() => import("./sections/contact/Contact"));
const Footer = lazy(() => import("./sections/footer/Footer"));
const Process = lazy(() => import("./sections/process/Process"));

const App = () => {
  let [loading, setLoading] = useState(true);

  // eslint-disable-next-line
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  return (
    <main>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense
          fallback={
            <div className='screenLoader'>
              <div className='image-container'>
                <img src={DevImg} alt='Logo Developer' className='logoDev' />
                <SyncLoader
                  color={"#5F9EA0"}
                  loading={loading}
                  size={50}
                  aria-label='Loading Spinner'
                  data-testid='loader'
                />
              </div>
            </div>
          }
        >
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
