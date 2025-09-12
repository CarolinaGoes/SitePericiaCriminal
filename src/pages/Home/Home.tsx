import { useEffect } from 'react';
import Hero from "../Hero";   
import Services from "../Services";
import About from "../About";
import Contact from "../Contact";
import ScrollToTopButton from "../../components/ScrollToTopButton";

const Home = () => {
  // Garante que a página inicia no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      
      <div id="sobre">
        <About />
      </div>
      
      <div id="servicos">
        <Services />
      </div>
      
      <div id="contato">
        <Contact />
      </div>

      <ScrollToTopButton />
    </div>
  );
}

export default Home;