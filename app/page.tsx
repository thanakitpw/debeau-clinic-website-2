import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Promotion from "@/components/Promotion";
import BlogPreview from "@/components/BlogPreview";
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
        <Promotion />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
      <FloatingLine />
    </>
  );
}
