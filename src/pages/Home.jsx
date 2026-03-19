import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Products from "../components/Products";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyChoose />
      <Products />
      <Experience />
      <Testimonials />
      <Footer />
    </div>
  );
}