import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
// import Hackathons from './Components/Hackathons/Services';
import Contact from './Components/Contanct/Contact';
import Footer from './Components/Footer/Footer';
import ScrollUp from './Components/ScrollUp/ScrollUp';
import Work from './Components/Work/Work';
function App() {
  return (
    <>
    <Header></Header>
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Work />
      {/* <Hackathons /> */}
      <Contact />
    </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
