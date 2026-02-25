import HeroSection from './components/HeroSection';
import MissionVisionSection from './components/MissionVisionSection';
import HowItWorksSection from './components/HowItWorksSection';
import WhoWeServeSection from './components/WhoWeServeSection';
import ContactForm from './components/ContactForm';

export default function ScalpelRunnersLanding() {
  return (
    <div className="min-h-screen bg-[#f9f6f2] font-crimson text-[#1a1a1a]">
      <HeroSection />
      <MissionVisionSection />
      <HowItWorksSection />
      <WhoWeServeSection />
      <ContactForm />
    </div>
  );
}
