import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Services from '../components/landing/Services';
import About from '../components/landing/About';
import Features from '../components/landing/Features';
import Testimonials from '../components/landing/Testimonials';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
