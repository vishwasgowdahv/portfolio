import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import TechStack from '../components/sections/TechStack';
import Projects from '../components/sections/Projects';
import Timeline from '../components/sections/Timeline';
import CodingProfiles from '../components/sections/CodingProfiles';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Sections stack full-bleed — the color change between tiles IS the divider */}
      <main>
        <Hero />         {/* tile-light   — white   */}
        <About />        {/* tile-parch   — #f5f5f7 */}
        <TechStack />    {/* tile-dark-1  — #272729 */}
        <Projects />     {/* tile-light   — white   */}
        <CodingProfiles />{/* tile-dark-2 — #2a2a2c */}
        <Timeline />     {/* tile-parch   — #f5f5f7 */}
        <Contact />      {/* tile-dark-3  — #252527 */}
      </main>
      <Footer />
    </>
  );
}
