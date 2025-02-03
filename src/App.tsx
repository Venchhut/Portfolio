import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import HeroSection from "./components/home/HeroSection";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Skills />
      <Projects />
      {/* <Experience /> */}

      <Contact />
    </div>
  );
};

export default App;
