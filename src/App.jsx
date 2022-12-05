import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
//import Testimonials from './sections/testimonials/Testimonials';
//import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Process from './sections/process/Process';

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Process />
      <Portfolio />
      {/*
      <Testimonials />
      <FAQs />*/}
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  );
};

export default App;
