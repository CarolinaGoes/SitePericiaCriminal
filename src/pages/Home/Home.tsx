import Hero from "../Hero";   
import Services from "../Services";
import About from "../About";
import Contact from "../Contact";
import ScrollToTopButton from "../../components/ScrollToTopButton"; // Importe o componente

const Home = () => {
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

      {/* Adicione o botão de scroll to top */}
      <ScrollToTopButton />
    </div>
  );
}

export default Home;