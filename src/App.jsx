import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoogleFormEmbed from "./components/GoogleFormEmbed";
import PricingComponent from "./components/PricingComponent";
import TeamList from "./components/TeamList";
import CountdownTimer from "./components/CountdownTimer";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
     
      <Features />
      <PricingComponent/>
      <CountdownTimer/>
      <TeamList/>
     
    
      <Story />
      <Contact />
      
{/*      
      <GoogleFormEmbed/> */}
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default App;
