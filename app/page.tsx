import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import ReviewsShowcase from "@/components/ReviewsShowcase";
import BlogPreview from "@/components/BlogPreview";
import Videos from "@/components/Videos";
import ClinicMap from "@/components/ClinicMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <ReviewsShowcase />
        <BlogPreview />
        <Videos />
        <ClinicMap />
        <Contact />
      </main>
      <Footer />
      <FloatingLine />
    </>
  );
}
