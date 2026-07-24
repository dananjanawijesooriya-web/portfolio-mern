import { About as AboutSection } from '../components/About';
import { Education } from '../components/Education';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
import { useFadeIn } from '../hooks/useFadeIn';

const About = () =>{ 
  useFadeIn();
  return (
  <>
    <AboutSection />
    <Education />
    <Skills />
    <Contact />
  </>
);
};

export default About;