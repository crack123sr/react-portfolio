import Navbar from "./components/navbar/Navbar";
import Banner from './components/banner/Banner';
import Highlights from './components/highlights/highlights';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import FooterBottom from './components/footer/FooterBottom';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="mx-auto">
        <Banner />
        <Highlights/>
        <Projects />
        <Resume />
        <Contact />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
