import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Products } from './components/Products';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Why } from './components/Why';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="bg-page w-full overflow-hidden">
      <Header />
      <Hero />
      <TrustStrip />
      <Products />
      <Gallery />
      <About />
      <Why />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
