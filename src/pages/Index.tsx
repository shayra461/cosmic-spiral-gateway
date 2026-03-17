import ParticleField from "@/components/ParticleField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CharactersBanner from "@/components/CharactersBanner";
import AuthorSection from "@/components/AuthorSection";
import StoryWorldSection from "@/components/StoryWorldSection";
import BuySection from "@/components/BuySection";
import ReviewsSection from "@/components/ReviewsSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleField />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CharactersBanner />
      <AuthorSection />
      <StoryWorldSection />
      <BuySection />
      <ReviewsSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default Index;
