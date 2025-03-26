import Navbar from "@/components/universal/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div >
     <Navbar/>

     <Hero/>
     <About/>
     <Testimonials/>

     <Footer/>

    </div>
  );
}
