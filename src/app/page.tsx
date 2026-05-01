import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import DesignGallery from "@/components/DesignGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <main className="min-h-screen">
      <RevealObserver />
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <DesignGallery />
      <Contact />
      <Footer />
    </main>
  );
}
