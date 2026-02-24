import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import MissionVisionSection from './components/MissionVisionSection';
import HowItWorksSection from './components/HowItWorksSection';
import WhoWeServeSection from './components/WhoWeServeSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function ScalpelRunnersLanding() {
  return (
    <div className="min-h-screen bg-[#f9f6f2] font-crimson text-[#1a1a1a]">
      <NavBar />
      <HeroSection />
      <MissionVisionSection />
      <HowItWorksSection />
      <WhoWeServeSection />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
