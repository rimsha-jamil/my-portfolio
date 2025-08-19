import Hero from '../app/components/hero'
import About from "../app/components/about";
import Projects from "../app/components/projects";
import Contact from "../app/components/contact";
import Skills from '../app/components/skills';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills/>
      <Contact />
    </>
  );
}
