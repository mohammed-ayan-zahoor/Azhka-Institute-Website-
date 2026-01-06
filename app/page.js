import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import LearningPath from './components/LearningPath';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Instructors from './components/Instructors';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <LearningPath />
        <Courses />
        <WhyChooseUs />
        <Instructors />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
