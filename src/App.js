import FAQ from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Navbar from "./components/Navbar";
import PricingPanel from "./components/PricingPanel";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="bg-[#FDF2EC] h-full">
      <Navbar />
      <Header/>
      <FAQ/>
      <PricingPanel/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
