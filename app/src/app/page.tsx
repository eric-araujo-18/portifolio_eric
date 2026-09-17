import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PortfolioClient } from "../components/PortfolioClient";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { ContactSection } from "../components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <PortfolioClient />
      <Header />
      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
