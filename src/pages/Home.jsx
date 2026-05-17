import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import TechStack from '../components/sections/TechStack';
import Projects from '../components/sections/Projects';
import Timeline from '../components/sections/Timeline';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
