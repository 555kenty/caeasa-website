import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Expertise from "@/components/sections/Expertise";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import News from "@/components/sections/News";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Gallery />
        <About />
        <Projects />
        <News />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
